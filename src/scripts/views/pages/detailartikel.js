/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import ArtikelSource from '../../data/artikel-source';
import KomentarSource from '../../data/komentar-source';
import {
  createArtikelDetailTemplate,
  createArtikelTemplate,
  renderNotFound,
  createSkeletonArtikelDetail,
  formatTanggal,
} from '../templates/template-creator';

const DetailArtikel = {
  async render() {
    return `
      <div id="ArtikelDetail" class="restaurant"></div>
      <div class="container mt-4">
        <div class="row" id="artikel"></div>
        <div id="pagination" class="d-flex justify-content-center mt-4"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailartikelContainer = document.querySelector('#ArtikelDetail');
    detailartikelContainer.innerHTML = createSkeletonArtikelDetail();
    const artikel = await ArtikelSource.detailArtikel(url.id);
    const artikelContainer = document.querySelector('#artikel');
    const paginationContainer = document.querySelector('#pagination');

    const loadArtikel = async (query = '', category = 'semua', page = 1) => {
      try {
        let artikel;
        if (query || category !== 'semua') {
          if (query) {
            artikel = await ArtikelSource.searchArtikel(query);
          } else {
            artikel = await ArtikelSource.kategoriArtikel(category);
          }
        } else {
          artikel = await ArtikelSource.getDetailArtikelByPage(page);
        }

        const { data } = artikel;
        const { pages } = artikel;

        if (!data || data.length === 0) {
          artikelContainer.innerHTML = renderNotFound();
        } else {
          artikelContainer.innerHTML = data.map(createArtikelTemplate).join('');
        }

        if (pages > 1) {
          renderPagination(pages);
          addPaginationEventListeners(loadArtikel, query, category);
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

    detailartikelContainer.innerHTML = createArtikelDetailTemplate(artikel);

    const commentForm = document.querySelector('#commentForm');
    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nama = document.querySelector('#nama').value;
      const komentar = document.querySelector('#komentar').value;
      const artikelId = document.querySelector('#artikelId').value;

      const komentarData = { nama, komentar, artikelId };

      try {
        await KomentarSource.createKomentar(komentarData);
        import('sweetalert2').then((Swal) => {
          Swal.default.fire({
            icon: 'success',
            title: 'Komentar berhasil ditambahkan!',
            showConfirmButton: false,
            timer: 1500,
          });
        });
        displayComments(artikelId);
      } catch (error) {
        import('sweetalert2').then((Swal) => {
          Swal.default.fire({
            icon: 'error',
            title: 'Error menambahkan komentar. Silakan coba lagi.',
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
    });

    // Display comments
    displayComments(artikel.id);
  },
};

const displayComments = async (artikelId) => {
  const commentList = document.querySelector('#commentList');
  const comments = await KomentarSource.getKomentarByArtikelId(artikelId);
  commentList.innerHTML = '';

  const commentsHtml = comments
    .map(
      (comment) => `
    <style>
    .comment-card {
    border: 1px solid #ddd; 
    transition: none;
    }

    .comment-card .card-body {
      padding: 1rem;
    }</style>
    <div class="col-md-4">
      <div class="comment-card mb-3" style="display: flex; flex-direction: column; height: 100%;">
        <div tabindex="0" class="card-body">
          <h5 class="card-title">${comment.nama}</h5>
          <p class="card-text">${comment.komentar}</p>
          <p class="card-text"><small class="text-muted">${formatTanggal(comment.createdAt)}</small></p>
        </div>
      </div>
    </div>
  `,
    )
    .join('');

  commentList.innerHTML = `
    <div class="container">
      <h4 tabindex="0" class="mb-3 pb-2 border-bottom fw-bold">Komentar</h4>
      <div class="row">
        ${commentsHtml}
      </div>
    </div>
  `;
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
      paginationHtml += `<button tabindex="0" aria-label="tombol pagenation" class="btn btn-custom mx-1 mb-2" data-page="${i}">${i}</button>`;
    }
    paginationContainer.innerHTML = paginationHtml;
  }
};

export default DetailArtikel;
