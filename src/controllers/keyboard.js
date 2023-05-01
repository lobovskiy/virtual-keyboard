import keys from '../data/keys';
import { getLanguage } from './language';
import renderKey from '../view/renderKey';
import soundPressButton from '../assets/sound/press-button.mp3';
import soundReleaseButton from '../assets/sound/release-button.mp3';

class Keyboard {
  constructor(keysArray = []) {
    keysArray.forEach((key) => {
      this[key.code] = key;

      this[key.code].label = Keyboard.getKeyLabel(key);

      this[key.code].soundPressButton = new Audio(soundPressButton);
      this[key.code].soundReleaseButton = new Audio(soundReleaseButton);

      const keyElement = renderKey(key);
      keyElement.addEventListener('mousedown', (e) =>
        this.pressMouseOnKey(e, key),
      );
      keyElement.addEventListener('mouseup', (e) =>
        this.releaseMouseFromKey(e, key),
      );
      this[key.code].DOMElement = keyElement;
    });
  }

  static getKeyLabel(key) {
    const { value } = key;
    const language = getLanguage();
    let label = '';

    if (typeof value === 'string') {
      label = value;
    } else if (
      typeof value === 'object' &&
      Object.prototype.hasOwnProperty.call(value, 'default')
    ) {
      label = value.default;
    } else if (
      typeof value === 'object' &&
      Object.prototype.hasOwnProperty.call(value, language)
    ) {
      label = value[language].default;
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

  pressKey(key) {
    this[key].soundPressButton.pause();
    this[key].soundPressButton.play();
    this[key].DOMElement.setAttribute('data-pressed', '');
  }

  releaseKey(key) {
    this[key].soundReleaseButton.pause();
    this[key].soundReleaseButton.play();
    this[key].DOMElement.removeAttribute('data-pressed');
  }
}

const keyboard = new Keyboard(keys);

function getKeyboard() {
  return keyboard;
}

export default getKeyboard;
