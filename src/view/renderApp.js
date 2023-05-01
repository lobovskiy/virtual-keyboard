import getKeyboard from '../controllers/keyboard';
import renderInputField from './renderInputField';
import renderKeyboard from './renderKeyboard';

function renderApp() {
  const body = document.querySelector('body');

  renderInputField(body);
  renderKeyboard(body);

  const keyboard = getKeyboard();
  body.addEventListener('keydown', (e) => {
    if (e.code === 'Tab') {
      e.preventDefault();
    }
    keyboard.pressKey(e.code, e);
  });
  body.addEventListener('keyup', (e) => keyboard.releaseKey(e.code));
}

export default renderApp;
