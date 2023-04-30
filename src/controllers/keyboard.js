import keys from '../data/keys';
import { getLanguage } from './language';
import renderKey from '../view/renderKey';

class Keyboard {
  constructor(keysArray = []) {
    keysArray.forEach((key) => {
      this[key.code] = key;

      this[key.code].label = Keyboard.getKeyLabel(key);

      const keyElement = renderKey(key);
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
    this[key].DOMElement.setAttribute('data-pressed', '');
  }

  releaseKey(key) {
    this[key].DOMElement.removeAttribute('data-pressed');
  }
}

const keyboard = new Keyboard(keys);

function getKeyboard() {
  return keyboard;
}

export default getKeyboard;
