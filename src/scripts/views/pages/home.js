/* eslint-disable func-names */
import '../../components/main';
import '../../components/loader';
import { OntopButton } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="ontop" id="onTop"></div>
      <content1-nih></content1-nih>
      <content2-nih></content2-nih>
      <content3-nih></content3-nih>
      <content4-mungkin></content4-mungkin>
      <content5-nih></content5-nih>
      <content6-nih></content6-nih>
    `;
  },

  afterRender() {
    const ontopButton = document.getElementById('onTop');
    ontopButton.innerHTML = OntopButton();
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        ontopButton.style.display = 'block';
      } else {
        ontopButton.style.display = 'none';
      }
    };

    ontopButton.addEventListener('click', () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  },
};

export default Home;
