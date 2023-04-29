import getKeyboard from '../controllers/keyboard';

function renderKeyboard(container) {
  const keyboard = getKeyboard();
  Object.values(keyboard).forEach((key) => {
    container.append(key.DOMElement);
  });
}

export default renderKeyboard;
