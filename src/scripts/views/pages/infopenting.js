/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import ArtikelSource from '../../data/artikel-source';
import {
  createArtikelTemplate,
  renderNotFound,
  createSkeletonArtikelItemTemplate,
} from '../templates/template-creator';

const infopenting = {
  async render() {
    return `
      <h1 tabindex="0" class="fw-bold purple mt-4" style="text-align: center;">INFO PENTING ! (Informasi Pencegahan Stunting)</h1>
      <div class="container mt-4">
        <div class="row g-3">
          <div class="col-12 d-flex flex-nowrap">
            <div class="flex-grow-1 me-2 mb-3">
              <div class="input-group">
                <form id="searchForm" class="w-100 d-flex flex-row">
                  <input tabindex="0" type="text" id="searchKeyword" class="form-control" placeholder="Cari...">
                </form>
              </div>
            </div>
            <div class="mb-3">
              <div class="input-group">
                <select tabindex="0" class="form-select" id="filterOrder" aria-label="Filter">
                  <option value="desc">Terbaru</option>
                  <option value="asc">Terlama</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row" id="artikel"></div>
        <div id="pagination" class="d-flex justify-content-center mt-4"></div>
      </div>
    `;
  },

  async afterRender() {
    const artikelContainer = document.querySelector('#artikel');
    const searchForm = document.querySelector('#searchForm');
    const searchKeywordInput = document.querySelector('#searchKeyword');
    const filterOrder = document.querySelector('#filterOrder');
    const paginationContainer = document.querySelector('#pagination');

    const loadArtikel = async (query = '', order = 'desc', page = 1) => {
      try {
        artikelContainer.innerHTML = createSkeletonArtikelItemTemplate(6);
        let artikel;
        if (query) {
          artikel = await ArtikelSource.searchArtikel(query);
        } else {
          artikel = await ArtikelSource.getArtikelByPageAndOrder(order, page);
        }

        const { data, pages } = artikel;

        if (!data || data.length === 0) {
          artikelContainer.innerHTML = renderNotFound();
        } else {
          artikelContainer.innerHTML = data.map(createArtikelTemplate).join('');
        }

        if (pages > 1) {
          renderPagination(pages);
          addPaginationEventListeners(loadArtikel, query, order);
        } else {
          paginationContainer.innerHTML = '';
        }
      } catch (error) {
        console.error('Error fetching artikel:', error);
        import('sweetalert2').then((Swal) => {
          Swal.default.fire({
            icon: 'error',
            title: 'Error memuat data Artikel. Silakan coba lagi nanti!!!',
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
    };

    loadArtikel();

    if (searchForm && filterOrder) {
      searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const keyword = searchKeywordInput.value;
        const order = filterOrder.value;
        loadArtikel(keyword, order);
      });

      filterOrder.addEventListener('change', (event) => {
        const order = event.target.value;
        const keyword = searchKeywordInput.value;
        loadArtikel(keyword, order);
      });
    }
  },
};

const addPaginationEventListeners = (loadArtikel, query, order) => {
  const paginationButtons = document.querySelectorAll('#pagination button');
  paginationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const { page } = button.dataset;
      loadArtikel(query, order, page);
    });
  });
};

const renderPagination = (pages) => {
  const paginationContainer = document.querySelector('#pagination');
  if (paginationContainer) {
    let paginationHtml = '';
    for (let i = 1; i <= pages; i++) {
      paginationHtml += `<button class="btn btn-custom mx-1 mb-2" tabindex="0" aria-label="Tombol pagenation" data-page="${i}">${i}</button>`;
    }
    paginationContainer.innerHTML = paginationHtml;
  }
};

export default infopenting;
