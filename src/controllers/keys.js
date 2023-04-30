import getKeyboard from './keyboard';

const keyboard = getKeyboard();

function pressKey(key) {
  keyboard.pressKey(key);
}

function releaseKey(key) {
  keyboard.releaseKey(key);
}

export { pressKey, releaseKey };
