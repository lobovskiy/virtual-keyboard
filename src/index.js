import { initLanguage } from './controllers/language';
import renderApp from './view/renderApp';
import './styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  renderApp();
});
