import getKeyboard from '../controllers/keyboard';
import { pressKey, releaseKey } from '../controllers/keys';

function renderKeyboard(container) {
  const keyboard = getKeyboard();
  const keyboardDiv = document.createElement('div');
  keyboardDiv.classList.add('keyboard');

  const keyboardRows = new Array(5).fill().map(() => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');

    return row;
  });

  keyboardRows.forEach((row, index) => {
    const currentRowKeysObj = keyboard.getRow(index + 1);
    const currentRowKeysSortedArr = Object.values(currentRowKeysObj).sort(
      (a, b) => a.position - b.position,
    );

    currentRowKeysSortedArr.forEach((key) => {
      key.DOMElement.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        pressKey(key.code);
      });
      key.DOMElement.addEventListener('mouseup', (e) => {
        e.preventDefault();
        e.stopPropagation();
        releaseKey(key.code);
      });
      row.append(key.DOMElement);
    });

    keyboardDiv.append(row);
  });

  container.append(keyboardDiv);
}

export default renderKeyboard;
