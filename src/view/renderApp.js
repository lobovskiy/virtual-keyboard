import renderInputField from './renderInputField';
import renderKeyboard from './renderKeyboard';

function renderApp() {
  const body = document.querySelector('body');

  renderInputField(body);
  renderKeyboard(body);
}

export default renderApp;
