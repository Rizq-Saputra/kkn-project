import Home from '../views/pages/home';
import Artikel from '../views/pages/artikel';
import Kalkulator from '../views/pages/kalkulator';
import Mpasi from '../views/pages/mpasi';
import konsultasi from '../views/pages/consultasi';
import AboutUs from '../views/pages/tentangkami';
import Quiz from '../views/pages/quiz';
import DetailArtikel from '../views/pages/detailartikel';
import DetailMpasi from '../views/pages/detailmpasi';
import DetailQuiz from '../views/pages/detailquiz';
import StartQuiz from '../views/pages/start-quiz';
import KalkulatorBMI from '../views/pages/bmi';
import penting from '../views/pages/penting';
import gemasi from '../views/pages/gemasi';

const routes = {
  '/': Home,
  '/artikel': Artikel,
  '/kalkulator': Kalkulator,
  '/gemasi': gemasi,
  '/bmi': KalkulatorBMI,
  '/mpasi': Mpasi,
  '/konsultasi': konsultasi,
  '/tentangkami': AboutUs,
  '/quiz': Quiz,
  '/penting': penting,
  '/start-quiz': StartQuiz,
  '/quiz/:id': DetailQuiz,
  '/artikel/:id': DetailArtikel,
  '/mpasi/:id': DetailMpasi,
};

export default routes;
