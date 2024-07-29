import Home from '../views/pages/home';
import Artikel from '../views/pages/artikel';
import Kalkulator from '../views/pages/kalkulator';
import AboutUs from '../views/pages/tentangkami';
import Kemas from '../views/pages/kemas';
import DetailQuiz from '../views/pages/detailquiz';
import StartQuiz from '../views/pages/start-quiz';
import imtik from '../views/pages/imtik';
import infopenting from '../views/pages/infopenting';
import gemasi from '../views/pages/gemasi';

const routes = {
  '/': Home,
  '/artikel': Artikel,
  '/kalkulator': Kalkulator,
  '/gemasi': gemasi,
  '/imtik': imtik,
  '/tentangkami': AboutUs,
  '/kemas': Kemas,
  '/infopenting': infopenting,
  '/start-quiz': StartQuiz,
  '/quiz/:id': DetailQuiz,
};

export default routes;
