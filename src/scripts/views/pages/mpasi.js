/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import {
  createMpasiTemplate,
  renderNotFound,
  createSkeletonMpasiItemTemplate,
} from '../templates/template-creator';
import MpasiSource from '../../data/mpasi-source';
import FavoriteMpasiIdb from '../../data/favorite-mpasi-idb';

const Mpasi = {
  async render() {
    return `
      <h1 tabindex="0" class="fw-bold mt-4" style="text-align: center;">Makanan Pendamping Air Susu Ibu</h1>
      <div class="container mt-4">
        <div class="row g-3">
          <div class="col-12 d-flex flex-wrap" style="justify-content: space-evenly;">
            <div class="flex-grow-1 me-2 mb-3">
              <div class="input-group">
                <form id="searchForm" class="w-100 d-flex flex-row">
                  <input tabindex="0" type="text" id="searchKeyword" class="form-control" placeholder="Cari...">
                </form>
              </div>
            </div>
            <div class="me-2 mb-3">
              <div class="input-group">
                <select tabindex="0" class="form-select" id="filterKategori" aria-label="Filter">
                  <option value="semua">Semua Kategori</option>
                  <option value="6-8 bulan">6-8 bulan</option>
                  <option value="9-12 bulan">9-12 bulan</option>
                  <option value="12-23 bulan">12-23 bulan</option>
                </select>
              </div>
            </div>
            <div class="mb-3 d-flex align-items-center">
              <button tabindex="0" id="favoritSayaBtn" class="btn btn-favorite d-flex align-items-center">
                <i id="favoriteIcon" class="bi bi-heart me-2 text-red" aria-label="ikon love" style="font-size: 1rem;"></i>
                Favorit Saya
              </button>
            </div>
          </div>
        </div>
        <div class="row" id="mpasi"></div>
        <div id="pagination" class="d-flex justify-content-center mt-4"></div>
      </div>
    `;
  },

  async afterRender() {
    const mpasiContainer = document.querySelector('#mpasi');
    const searchForm = document.querySelector('#searchForm');
    const searchKeywordInput = document.querySelector('#searchKeyword');
    const filterKategori = document.querySelector('#filterKategori');
    const favoritSayaBtn = document.querySelector('#favoritSayaBtn');
    const favoriteIcon = document.querySelector('#favoriteIcon');
    const paginationContainer = document.querySelector('#pagination');

    const loadMpasi = async (
      query = '',
      category = 'semua',
      page = 1,
      isFavorite = false,
    ) => {
      try {
        mpasiContainer.innerHTML = createSkeletonMpasiItemTemplate(12);

        let mpasi;

        if (isFavorite) {
          const favoriteMpasi = await FavoriteMpasiIdb.getAllMpasi();
          if (favoriteMpasi.length > 0) {
            mpasiContainer.innerHTML = favoriteMpasi
              .map(createMpasiTemplate)
              .join('');
          } else {
            mpasiContainer.innerHTML = renderNotFound();
          }
          paginationContainer.innerHTML = '';
          return;
        }

        if (query || category !== 'semua') {
          if (query) {
            mpasi = await MpasiSource.searchMpasi(query);
          } else {
            mpasi = await MpasiSource.kategoriMpasi(category);
          }
        } else {
          mpasi = await MpasiSource.getMpasiByPage(page);
        }

        const { data, pages } = mpasi;

        if (!data || data.length === 0) {
          mpasiContainer.innerHTML = renderNotFound();
        } else {
          mpasiContainer.innerHTML = data.map(createMpasiTemplate).join('');
        }

        if (pages > 1) {
          renderPagination(pages);
          addPaginationEventListeners(loadMpasi, query, category);
        } else {
          paginationContainer.innerHTML = '';
        }
      } catch (error) {
        console.error('Error fetching mpasi:', error);
        import('sweetalert2').then((Swal) => {
          Swal.default.fire({
            icon: 'error',
            title: 'Error memuat data MPASI. Silakan coba lagi nanti!!!',
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
    };

    loadMpasi();

    if (searchForm && filterKategori && favoritSayaBtn) {
      searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const keyword = searchKeywordInput.value;
        const category = filterKategori.value;
        loadMpasi(keyword, category);
        favoritSayaBtn.classList.remove('btn-favorite-active');
        favoriteIcon.classList.remove('bi-heart-fill');
        favoriteIcon.classList.add('bi-heart', 'text-red');
      });

      filterKategori.addEventListener('change', (event) => {
        const category = event.target.value;
        const keyword = searchKeywordInput.value;
        loadMpasi(keyword, category);
        favoritSayaBtn.classList.remove('btn-favorite-active');
        favoriteIcon.classList.remove('bi-heart-fill');
        favoriteIcon.classList.add('bi-heart', 'text-red');
      });

      favoritSayaBtn.addEventListener('click', () => {
        const isFavorite = favoritSayaBtn.classList.contains(
          'btn-favorite-active',
        );
        loadMpasi('', 'semua', 1, !isFavorite);
        favoritSayaBtn.classList.toggle('btn-favorite-active');
        if (isFavorite) {
          favoriteIcon.classList.remove('bi-heart-fill');
          favoriteIcon.classList.add('bi-heart', 'text-red');
        } else {
          favoriteIcon.classList.remove('bi-heart', 'text-red');
          favoriteIcon.classList.add('bi-heart-fill', 'text-white');
        }
      });
    }
  },
};

const addPaginationEventListeners = (loadMpasi, query, category) => {
  const paginationButtons = document.querySelectorAll('#pagination button');
  paginationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const { page } = button.dataset;
      loadMpasi(query, category, page);
    });
  });
};

const renderPagination = (pages) => {
  const paginationContainer = document.querySelector('#pagination');
  if (paginationContainer) {
    let paginationHtml = '';
    for (let i = 1; i <= pages; i++) {
      paginationHtml += `<button aria-label="tombol pagination" tabindex="0" class="btn btn-custom mx-1 mb-2" data-page="${i}">${i}</button>`;
    }
    paginationContainer.innerHTML = paginationHtml;
  }
};

export default Mpasi;
