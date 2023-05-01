import keys from '../data/keys';
import { getLanguage } from './language';
import renderKey from '../view/renderKey';
import soundPressButton from '../assets/sound/press-button.mp3';
import soundReleaseButton from '../assets/sound/release-button.mp3';

class Keyboard {
  constructor(keysArray = []) {
    this.upperCase = false;
    this.pressedControls = {
      shift: false,
      alt: false,
    };

    keysArray.forEach((key) => {
      this[key.code] = key;

      this[key.code].soundPressButton = new Audio(soundPressButton);
      this[key.code].soundReleaseButton = new Audio(soundReleaseButton);

      const keyElement = renderKey(key, this.getKeyLabel(key));
      keyElement.addEventListener('mousedown', (e) =>
        this.pressMouseOnKey(e, key),
      );
      keyElement.addEventListener('mouseup', (e) =>
        this.releaseMouseFromKey(e, key),
      );
      this[key.code].DOMElement = keyElement;
    });
  }

  getKeyLabel(key) {
    const { value } = key;
    const language = getLanguage();
    let label = '';

    if (typeof value === 'string') {
      label = value;
    } else if (
      typeof value === 'object' &&
      Object.prototype.hasOwnProperty.call(value, 'default')
    ) {
      label =
        (this.pressedControls.shift && !this.upperCase) ||
        (!this.pressedControls.shift && this.upperCase)
          ? value.shift || value.default
          : value.default;
    } else if (
      typeof value === 'object' &&
      Object.prototype.hasOwnProperty.call(value, language)
    ) {
      label =
        (this.pressedControls.shift && !this.upperCase) ||
        (!this.pressedControls.shift && this.upperCase)
          ? value[language].shift || value[language].default
          : value[language].default;
    }

    return label;
  }

  pressMouseOnKey(event, key) {
    event.preventDefault();
    event.stopPropagation();
    this.pressKey(key.code);
  }

  releaseMouseFromKey(event, key) {
    event.preventDefault();
    event.stopPropagation();
    this.releaseKey(key.code);
  }

  pressKey(key) {
    this[key].soundPressButton.pause();
    this[key].soundPressButton.play();
    this[key].DOMElement.setAttribute('data-pressed', '');

    if (!this[key].isSymbol) {
      this.updatePressedControls(this[key], true);
    }
  }

  releaseKey(key) {
    this[key].soundReleaseButton.pause();
    this[key].soundReleaseButton.play();
    this[key].DOMElement.removeAttribute('data-pressed');

    if (!this[key].isSymbol) {
      this.updatePressedControls(this[key]);
    }
  }

  updateSymbols() {
    const symbolKeys = this.symbols;

    symbolKeys.forEach((key) => {
      const label = this.getKeyLabel(key);

      // eslint-disable-next-line no-param-reassign
      key.DOMElement.innerHTML = label;
    });
  }

  setShiftPressed(value) {
    this.pressedControls = {
      ...this.pressedControls,
      shift: value,
    };
  }

  updatePressedControls(key, value = false) {
    const { code } = key;

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      this.setShiftPressed(value);
      this.updateSymbols();
    }
  }

  getRow(number) {
    if (number < 1 || number > 5) {
      return {};
    }

    const rowKeys = Object.keys(this)
      .filter((key) => this[key].row === number)
      .reduce(
        (obj, key) => ({
          ...obj,
          [key]: this[key],
        }),
        {},
      );

    return rowKeys;
  }

  get symbols() {
    const symbolKeysArr = Object.keys(this)
      .filter((key) => this[key].isSymbol)
      .map((key) => this[key]);

    return symbolKeysArr;
  }
}

const keyboard = new Keyboard(keys);

function getKeyboard() {
  return keyboard;
}

export default getKeyboard;
