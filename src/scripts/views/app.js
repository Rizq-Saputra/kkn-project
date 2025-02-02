/* eslint-disable no-undef */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import NotFound from './pages/notfound';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url] || NotFound;
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const mainContent = document.querySelector('#mainContent');
    const skipLink = document.querySelector('.skip2content');
    // const hero = document.querySelector('#hero');
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      skipLink.blur();
    });
  }
}

export default App;
