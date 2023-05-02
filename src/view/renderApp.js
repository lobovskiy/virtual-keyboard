import getKeyboard from '../controllers/keyboard';
import renderTitle from './renderTitle';
import renderInputField from './renderInputField';
import renderKeyboard from './renderKeyboard';
import renderSubtitle from './renderSubtitle';

function renderApp() {
  const body = document.querySelector('body');

  renderTitle(body);
  renderInputField(body);
  renderSubtitle(body);
  renderKeyboard(body);

  const keyboard = getKeyboard();
  body.addEventListener('keydown', (e) => {
    if (e.code === 'Tab') {
      e.preventDefault();
    }
    keyboard.pressKey(e.code, e);
  });
  body.addEventListener('keyup', (e) => keyboard.releaseKey(e.code));
  body.addEventListener('mouseup', () => keyboard.releaseAllKeys());
}

export default renderApp;
