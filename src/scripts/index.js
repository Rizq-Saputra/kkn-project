/* eslint-disable no-undef */
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
import './components/main';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
