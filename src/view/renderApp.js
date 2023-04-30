import { pressKey, releaseKey } from '../controllers/keys';
import renderInputField from './renderInputField';
import renderKeyboard from './renderKeyboard';

function renderApp() {
  const body = document.querySelector('body');
  body.addEventListener('keydown', (e) => pressKey(e.code));
  body.addEventListener('keyup', (e) => releaseKey(e.code));

  renderInputField(body);
  renderKeyboard(body);
}

export default renderApp;
