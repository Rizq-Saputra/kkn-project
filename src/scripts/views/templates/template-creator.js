/* eslint-disable max-len */
/* eslint-disable indent */
const formatTanggal = (tanggal) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const tanggalObj = new Date(tanggal);
  return tanggalObj.toLocaleDateString('id-ID', options);
};

const renderNotFound = () => `
    <div style="text-align: center;">
      <img class="lazyload" data-src="/images/empty.webp" alt="Page not found image" style="display: block; max-width: 100%; margin-inline: auto;">
    </div>
  `;

const createSkeletonMpasiItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4 mpasi-pages">
      <a>
        <div class="card">
          <img class="header__img skeleton">
          <div class="card-body">
            <h5 class="card-title">
              <div class="skeleton skeleton-text" style="width:50%; display: block; margin-inline: auto;"></div>
            </h5>
          </div>
        </div>  
      </a>
    </div>
    `;
  }

  return template;
};

export const createQuizItemTemplate = (category) => `
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4 mpasi-pages">
    <a href="#/quiz/${category.id}" class="category-link" data-id="${category.id}">
      <div class="card">
        <img src="${category.gambar}" class="header__img skeleton" alt="${category.name}">
        <div class="card-body">
          <h5 class="card-title text-center">${category.name}</h5>
        </div>
      </div>
    </a>
  </div>
`;

export const createQuizDetailTemplate = (quiz, currentQuestion, totalQuestions) => `
  <div class="d-flex justify-content-center align-items-center mb-4" style="width: 100vw;">
    <div class="quiz-item card p-3 shadow" style="max-width: 1000px; width: 100%;">
      ${quiz.gambar ? `<img src="${quiz.gambar}" alt="Quiz Image" class="img-fluid mb-3" style="max-height: 300px; object-fit: cover;">` : ''}
      <h3 class="quiz-question card-title" style="font-size: 1.25rem;">${quiz.soal}</h3>
      <p class="text-muted">Pertanyaan ${currentQuestion} of ${totalQuestions}</p>
      <div class="quiz-answers row" style="display: flex; flex-wrap: wrap;">
        ${quiz.jawaban.map((answer, index) => `
          <div class="col-6 my-2 d-flex align-items-stretch">
            <div class="form-check w-100" style="position: relative;">
              <input class="form-check-input" type="radio" id="${quiz.id}-${answer}" name="quiz-${quiz.id}" value="${answer}" data-point="${quiz.point}" style="position: absolute; opacity: 0;">
              <label class="form-check-label d-block shape-${index}" for="${quiz.id}-${answer}" style="padding: 10px 15px; border-radius: 10px; border: 2px solid; cursor: pointer; display: flex; align-items: center; justify-content: flex-start; transition: background-color 0.3s, color 0.3s, border-color 0.3s;">
                <span class="answer-label shape-${index}">${String.fromCharCode(65 + index)}</span>
                <span class="answer-text">${answer}</span>
              </label>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="d-flex justify-content-between mt-3">
        <button class="btn btn-custom prev-question" ${currentQuestion === 1 ? 'disabled' : ''}>Sebelumnya</button>
        <button class="btn btn-custom next-question">Selanjutnya</button>
      </div>
    </div>
  </div>

  <style>
    .quiz-answers {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }
    .quiz-answers .col-6 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 50%; /* Ensure two columns */
      flex: 0 0 50%; /* Ensure two columns */
    }
    .quiz-answers .form-check-label {
      flex-grow: 1;
      display: flex;
      align-items: center;
    }

    /* Hover and checked styles */
    .form-check-input:checked + .form-check-label,
    .form-check-input:checked + .form-check-label:hover,
    .form-check-label:hover {
      color: white;
    }

    /* Specific styles for each answer */
    .shape-0 .answer-label {
      background-color: red;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .shape-0.form-check-label:hover,
    .form-check-input:checked + .shape-0.form-check-label {
      background-color: #FF6666;
      border-color: red;
    }
    .shape-1 .answer-label {
      background-color: green;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .shape-1.form-check-label:hover,
    .form-check-input:checked + .shape-1.form-check-label {
      background-color: #66FF66;
      border-color: green;
    }
    .shape-2 .answer-label {
      background-color: blue;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .shape-2 .answer-label:before {
      content: '';
      display: block;
      padding-top: 100%; /* ratio 1:1 */
    }
    .shape-2.form-check-label:hover,
    .form-check-input:checked + .shape-2.form-check-label {
      background-color: #6666FF;
      border-color: blue;
    }
    .shape-3 .answer-label {
      background-color: yellow;
      border-radius: 10px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .shape-3.form-check-label:hover,
    .form-check-input:checked + .shape-3.form-check-label {
      background-color: #FFFF66;
      border-color: yellow;
    }

    @media (max-width: 576px) {
      .quiz-answers .col-6 {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  </style>
`;

const createSkeletonArtikelItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="col-md-4 col-sm-6 mb-4 arikel-pages">
      <a>
        <div class="card">
          <img class="header__img skeleton">
          <div class="card-body">
            <h5 class="card-title">
              <div class="skeleton skeleton-text" style="width:50%; display: block; margin-inline: auto;"></div>
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text"></div>
            </h5>
          </div>
        </div>  
      </a>
    </div>
    `;
  }

  return template;
};

const createSkeletonMpasiDetail = () => `;
  <div class="container mt-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <img class="header__img skeleton">
      </div>
      <div class="col-md-6">
        <div class="mt-4">
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>

    <div class="container mt-4 p-4 rounded shadow-sm">
      <div class="row">
        <div class="col-md-4">
          <ul>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>

          </ul>
        </div>
        <div class="col-md-8">

          <ol class="pl-3">
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
          </ol>
        </div>
      </div>
    </div>
  </div>
`;

const createSkeletonArtikelDetail = () => `;
  <style>
    .text-artikel{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 20px;
      font-weight: 700;
      text-shadow: -1px -1px 0 #000,  
                1px -1px 0 #000,  
                -1px 1px 0 #000,  
                1px 1px 0 #000;
    }

    .img-artikel-detail{
      width: 100%;
      height: 700px;
      object-fit: cover;
      object-position: center;
    }

    .detail-artikel{
      padding-inline: 4rem;
    }

    .desc-detail-artikel {
      text-align: justify;
      padding: 4rem;
    }
  </style>

  <section class="container-fluid">
    <div class="row">
      <div class="detail-artikel">
        <img class="header__img img-artikel-detail skeleton">
      </div>
    </div>
      <div class="desc-detail-artikel px-20">
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text skeleton-text__body"></div>
        <br/>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text skeleton-text__body"></div>
      </div>
    </div>
      

`;

const createMpasiTemplate = (mpasi) => `
<style>
.card {
  transition: transform 0.5s;
  }
  
  .card:hover {
    transform: scale(1.05);
    }
</style>
<div class="col-lg-3 col-md-4 col-sm-6 mb-4 mpasi-pages d-flex">
  <a tabindex="0" href="#/mpasi/${mpasi.id}" class="w-100">
    <div class="card" style="transition: transform 0.5s; display: flex; flex-direction: column; height: 100%;">
      <img data-src="${mpasi.gambar}" class="card-img-top mpasi-img lazyload" alt="${mpasi.makanan}">
      <div class="card-body d-flex flex-column justify-content-between">
        <div class="card-title" style="margin-bottom: auto;">
          <h2 tabindex="-1" class="list_item_title arikel-pages-name" style="color: black; text-transform: capitalize; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;" tabindex="0">${mpasi.makanan}</h2>
        </div>
        <p tabindex="0" class="card-text arikel-pages-desc">${mpasi.kategori}</p>
      </div>
    </div>
  </a>
</div>

`;

// const createArtikelTemplate = (artikel) => `
// <style>
// .card {
//   transition: transform 0.5s;
//   }

//   .card:hover {
//     transform: scale(1.05);
//     }
// </style>

// <div class="col-lg-4 col-md-6 col-sm-12 mb-4 arikel-pages">
//   <a tabindex="0" href="#/artikel/${artikel.id}" style="text-decoration: none;">
//     <div class="card h-100">
//       <img data-src="${artikel.gambar}" class="card-img-top artikel-img lazyload" alt="${artikel.judul}">
//       <div class="card-body d-flex flex-column">
//         <h4 tabindex="-1" class="card-title list_item_title artikel-pages-name text-dark text-capitalize text-center mb-4 fw-bold" style="margin-bottom: auto; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin-bottom: 0;" tabindex="0">${artikel.judul}</h4>
//         <p class="artikel-deskripsi" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; margin-bottom: 0;">${artikel.deskripsi}</p>
//         <p tabindex="0" class="card-text arikel-pages-desc text-muted text-center mt-auto">${formatTanggal(artikel.tanggal)}</p>
//       </div>
//     </div>
//   </a>
// </div>
// `;
const createArtikelTemplate = (artikel) => `
<style>
.card {
  transition: transform 0.5s;
  }
  
  .card:hover {
    transform: scale(1.05);
    }
</style>

<div class="col-lg-4 col-md-6 col-sm-12 mb-4 arikel-pages">
  <a tabindex="0" href="${artikel.sumber}" style="text-decoration: none;">
    <div class="card h-100">
      <img data-src="${artikel.gambar}" class="card-img-top artikel-img lazyload" alt="${artikel.judul}">
      <div class="card-body d-flex flex-column">
        <h4 tabindex="-1" class="card-title list_item_title artikel-pages-name text-dark text-capitalize text-center mb-4 fw-bold" style="margin-bottom: auto; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin-bottom: 0;" tabindex="0">${artikel.judul}</h4>
        <p class="artikel-deskripsi" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; margin-bottom: 0;">${artikel.deskripsi}</p>
        <p tabindex="0" class="card-text arikel-pages-desc text-muted text-center mt-auto">${formatTanggal(artikel.tanggal)}</p>
      </div>
    </div>  
  </a>
</div>
`;

const createMPASIDetailTemplate = (mpasi) => `
  <div class="container mt-5 position-relative">
    <a tabindex="0" href="javascript:history.back()" class="position-absolute text-dark" style="top: -25px; left: 5px; text-decoration: none;">
      <i class="bi bi-arrow-left"></i> Kembali
    </a>
    <div class="row align-items-center">
      <div class="col-md-6">
        <img tabindex="0" data-src="${mpasi.gambar}" alt="${mpasi.makanan}" class="img-fluid mb-4 rounded lazyload" style="width: 100%; height: auto;">
      </div>
      <div class="col-md-6">
        <div class="text-center">
          <h2 tabindex="0" class="mb-3 fw-bold">${mpasi.makanan}</h2>
          <p tabindex="0" class="text-muted">${mpasi.porsi} porsi &bullet; Kategori: ${mpasi.kategori}</p>
        </div>
        <div class="mt-4">
          <h4 tabindex="0" class="mb-3 fw-bold text-center">Kandungan Gizi</h4>
          <table class="table table-striped text-center">
            <tbody>
              <tr tabindex="0">
                <td>Kalori</td>
                <td>${mpasi.kalori} kkal</td>
              </tr>
              <tr tabindex="0">
                <td>Protein</td>
                <td>${mpasi.protein} gram</td>
              </tr>
              <tr tabindex="0">
                <td>Lemak</td>
                <td>${mpasi.lemak} gram</td>
              </tr>
              <tr tabindex="0">
                <td>Karbohidrat</td>
                <td>${mpasi.karbohidrat} gram</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="container mt-4 p-4 rounded shadow-sm">
      <div class="row">
        <div class="col-md-4">
          <h4 tabindex="0" class="mb-3 pb-2 border-bottom fw-bold">Bahan-bahan</h4>
          <ul tabindex="0">
            ${Object.keys(mpasi.bahan)
              .map(
                (key) => `
              <li class="mb-2"><strong>${key}</strong>: ${mpasi.bahan[key]}</li>
              `,
              )
              .join('')}
          </ul>
        </div>
        <div class="col-md-8">
          <h4 tabindex="0" class="mb-3 pb-2 border-bottom fw-bold">Cara Membuat</h4>
          <ol tabindex="0" class="pl-3">
            ${mpasi.cara_masak
              .map(
                (step) => `
              <li class="mb-2">${step}</li>
              `,
              )
              .join('')}
          </ol>
        </div>
      </div>
    </div>

    <!-- Comment Form -->
    <div class="container mt-4 p-4 rounded shadow-sm">
      <h4 tabindex="0" class="mb-3 pb-2 border-bottom fw-bold">Tambahkan Komentar</h4>
      <form id="commentForm">
        <div class="mb-3">
          <label tabindex="0" for="nama" class="form-label">Nama</label>
          <input tabindex="0" type="text" class="form-control" id="nama" name="nama" required>
        </div>
        <div class="mb-3">
          <label tabindex="0" for="komentar" class="form-label">Komentar</label>
          <textarea tabindex="0" class="form-control" id="komentar" name="komentar" rows="3" required></textarea>
        </div>
        <input tabindex="0" type="hidden" id="mpasiId" name="mpasiId" value="${mpasi.id}">
        <button tabindex="0" aria-label="tombol kirim Komentar" type="submit" class="btn btn-custom">Kirim Komentar</button>
      </form>
      <div id="commentList" class="mt-4">
        <h4 tabindex="0" class="mb-3 pb-2 border-bottom fw-bold">Komentar</h4>
      </div>
    </div>
  </div>
`;

const createArtikelDetailTemplate = (artikel) => {
  const deskripsiFormatted = artikel.deskripsi.replace(/\n/g, '<br>');

  return `
  <style>
    .text-artikel {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 20px;
      font-weight: 700;
      text-shadow: -1px -1px 0 #000,
                  1px -1px 0 #000,
                  -1px 1px 0 #000,
                  1px 1px 0 #000;
    }

    .img-artikel-detail {
      width: 100%;
      height: 400px;
      object-fit: cover;
      object-position: center;
    }

    .detail-artikel {
      position: relative;
      padding: 4rem;
      max-width: 800px;
      margin: auto;
    }

    .desc-detail-artikel {
      text-align: justify;
      margin-top: 20px;
      padding: 2rem 4rem;
      max-width: 800px;
      margin: auto;
    }

    .news-info {
      max-width: 800px;
      margin: auto;
      padding: 1rem;
    }

    .col-author, .col-date {
      margin: 0.5rem 0;
    }

    @media (max-width: 768px) {
      .detail-artikel, .desc-detail-artikel {
        padding: 2rem;
      }
    }
  </style>
  <section class="container-fluid">
    <div class="row">
      <div class="detail-artikel">
        <a tabindex="0" href="javascript:history.back()" class="position-absolute text-dark" style="top: 25px; left: 10px; text-decoration: none;">
          <i class="bi bi-arrow-left"></i> Kembali
        </a>
        <img tabindex="0" data-src="${artikel.gambar}" alt="${
    artikel.judul
  }" class="img-artikel-detail lazyload" />
        <div class="text-artikel text-center">
          <span>${formatTanggal(artikel.tanggal)}</span>
          <h2>${artikel.judul}</h2>
        </div>
      </div>

      <div class="container-fluid px-3 container-lg">
        <div class="row news-info justify-content-center">
          <div class="col-md-auto col-author text-center text-md-end">
            <a tabindex="0" href="${artikel.sumber}">Sumber Artikel</a>
          </div>

          <div tabindex="0" class="col-md-auto col-date text-center text-md-center">
            Date: ${formatTanggal(artikel.tanggal)}.
          </div>
        </div>
      </div>
      
      <p tabindex="0" class="desc-detail-artikel">
        ${deskripsiFormatted}
      </p>
    </div>
    
    <!-- Comment Form -->
    <div class="container mt-4 p-4 rounded shadow-sm">
      <h4 class="mb-3 pb-2 border-bottom fw-bold" tabindex="0">Tambahkan Komentar</h4>
      <form id="commentForm">
        <div class="mb-3">
          <label for="nama" tabindex="0" class="form-label">Nama</label>
          <input tabindex="0" type="text" class="form-control" id="nama" name="nama" required>
        </div>
        <div class="mb-3">
          <label for="komentar" tabindex="0" class="form-label">Komentar</label>
          <textarea tabindex="0" class="form-control" id="komentar" name="komentar" rows="3" required></textarea>
        </div>
        <input tabindex="0" type="hidden" id="artikelId" name="artikelId" value="${artikel.id}">
        <button tabindex="0" aria-label="Tombol kirim komentar" type="submit" class="btn btn-custom">Kirim Komentar</button>
      </form>
      <div id="commentList" class="mt-4">
        <h4 tabindex="0" class="mb-3 pb-2 border-bottom fw-bold">Komentar</h4>
      </div>
    </div>
  </section>
  `;
};

// * TOMBOL LIKE
const createLikeButtonTemplate = () => `;
  <button tabindex="0" aria-label="tambahkan mpasi ke favorit" id="likeButton" class="like">
    <i class="bi bi-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="hapus mpasi dari favorit" id="likeButton" class="like">
    <i class="bi bi-heart-fill" aria-hidden="true"></i>
  </button>
`;

const OntopButton = () => `
  <button tabindex="0" aria-label="Kembali ke atas" id="ontopButton" class="ontop">
    <i class="bi bi-arrow-up"></i>
  </button>
`;

export {
  formatTanggal,
  renderNotFound,
  createMpasiTemplate,
  createMPASIDetailTemplate,
  createArtikelTemplate,
  createArtikelDetailTemplate,
  createSkeletonMpasiItemTemplate,
  createSkeletonArtikelItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonMpasiDetail,
  createSkeletonArtikelDetail,
  OntopButton,
};
