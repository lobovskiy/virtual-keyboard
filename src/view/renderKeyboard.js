import getKeyboard from '../controllers/keyboard';
import { getLangDiv } from '../controllers/language';

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
      row.append(key.DOMElement);
    });

    if (index === 3) {
      row.append(getLangDiv());
    }

    keyboardDiv.append(row);
  });

  container.append(keyboardDiv);
}

export default renderKeyboard;
