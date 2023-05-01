import keys from '../data/keys';
import { getLanguage } from './language';
import renderKey from '../view/renderKey';
import soundPressButton from '../assets/sound/press-button.mp3';
import soundReleaseButton from '../assets/sound/release-button.mp3';
import {
  REMOVE_DIRECTIONS,
  removeSymbol,
  typeSymbol,
} from '../view/renderInputField';

class Keyboard {
  constructor(keysArray = []) {
    this.upperCase = false;
    this.pressedControls = {
      shift: false,
      ctrl: false,
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

    const isUppercase =
      (!key.isLetter && this.pressedControls.shift) ||
      (key.isLetter && (this.pressedControls.shift || this.upperCase));

    if (typeof value === 'string') {
      label = value;
    } else if (
      typeof value === 'object' &&
      Object.prototype.hasOwnProperty.call(value, 'default')
    ) {
      label = isUppercase ? value.shift || value.default : value.default;
    } else if (
      typeof value === 'object' &&
      Object.prototype.hasOwnProperty.call(value, language)
    ) {
      label = isUppercase
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

  pressKey(key, physicalKeyboardEvent) {
    this[key].soundPressButton.pause();
    this[key].soundPressButton.play();
    this[key].DOMElement.setAttribute('data-pressed', '');

    if (this[key].isSymbol && !this.pressedControls.ctrl) {
      if (physicalKeyboardEvent) {
        physicalKeyboardEvent.preventDefault();
      }

      const symbol = this.getKeyLabel(this[key]);

      typeSymbol(symbol);
    } else {
      this.checkControls(this[key], physicalKeyboardEvent, true);
    }
  }

  releaseKey(key) {
    this[key].soundReleaseButton.pause();
    this[key].soundReleaseButton.play();
    this[key].DOMElement.removeAttribute('data-pressed');

    if (!this[key].isSymbol) {
      this.checkControls(this[key]);
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

  updateLetters() {
    const letterKeys = this.letters;

    letterKeys.forEach((key) => {
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

  setCtrlPressed(value) {
    this.pressedControls = {
      ...this.pressedControls,
      ctrl: value,
    };
  }

  setUppercase() {
    this.upperCase = !this.upperCase;
  }

  checkControls(key, physicalKeyboardEvent, pressed = false) {
    const { code } = key;

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      this.setShiftPressed(pressed);
      this.updateSymbols();
    }

    if (code === 'ControlLeft' || code === 'ControlRight') {
      this.setCtrlPressed(pressed);
    }

    if (code === 'CapsLock' && pressed) {
      this.setUppercase();
      this.updateLetters();
    }

    if (code === 'Enter' && pressed) {
      if (!physicalKeyboardEvent) {
        typeSymbol('\r\n');
      }
    }

    if (code === 'Tab' && pressed) {
      typeSymbol('\t');
    }

    if (code === 'Backspace' && pressed) {
      if (!physicalKeyboardEvent) {
        removeSymbol(REMOVE_DIRECTIONS.LEFT);
      }
    }

    if (code === 'Delete' && pressed) {
      if (!physicalKeyboardEvent) {
        removeSymbol(REMOVE_DIRECTIONS.RIGHT);
      }
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

  get letters() {
    const letterKeysArr = Object.keys(this)
      .filter((key) => this[key].isLetter)
      .map((key) => this[key]);

    return letterKeysArr;
  }
}

const keyboard = new Keyboard(keys);

function getKeyboard() {
  return keyboard;
}

export default getKeyboard;
