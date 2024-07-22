// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://api.siemahat.com';
// const BASE_URL = 'https://api.stuntcare.my.id';
// const BASE_URL = "https://stuntcare.cleverapps.io";

const API_ENDPOINT = {
  MPASI: `${BASE_URL}/api/mpasi`,
  MPASIPAGE: (page) => `${BASE_URL}/api/mpasi?page=${page}`,
  DETAILMPASI: (id) => `${BASE_URL}/api/mpasi/${id}`,
  SEARCHMPASI: (query) => `${BASE_URL}/api/mpasi?q=${query}`,
  KATEGORIMPASI: (query) => `${BASE_URL}/api/mpasi?kategori=${query}`,
  ARTIKEL: `${BASE_URL}/api/artikel?limit=6`,
  DETAILARTIKEL: (id) => `${BASE_URL}/api/artikel/${id}`,
  SEARCHARTIKEL: (query) => `${BASE_URL}/api/artikel?q=${query}`,
  KATEGORIARTIKEL: (query) => `${BASE_URL}/api/artikel?kategori=${query}`,
  ORDERARTIKEL: (order, page) => `${BASE_URL}/api/artikel?page=${page}&limit=6&order=${order}`,
  ARTIKELPAGE: (page) => `${BASE_URL}/api/artikel?page=${page}&limit=6`,
  ARTIKELPAGEDETAIL: (page) => `${BASE_URL}/api/artikel?page=${page}&limit=3`,
  KOMENTAR: `${BASE_URL}/api/komentar`,
  KOMENTAR_MPASI: `${BASE_URL}/api/komentar/mpasi`,
  KOMENTAR_ARTIKEL: `${BASE_URL}/api/komentar/artikel`,
  QUIZ_BY_CATEGORY: (categoryId) => `${BASE_URL}/api/quiz/category/${categoryId}`,
  QUIZ: `${BASE_URL}/api/quiz`,
  CATEGORIES: `${BASE_URL}/api/category`,
  DETAILCATEGORIES: (id) => `${BASE_URL}/api/category/${id}`,
};

export default API_ENDPOINT;
