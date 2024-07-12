import API_ENDPOINT from '../globals/api-endpoint';

class KomentarSource {
  static async createKomentar(komentarData) {
    const response = await fetch(API_ENDPOINT.KOMENTAR, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(komentarData),
    });

    return response.json();
  }

  static async getKomentarByMpasiId(mpasiId) {
    const response = await fetch(`${API_ENDPOINT.KOMENTAR_MPASI}/${mpasiId}`);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async getKomentarByArtikelId(artikelId) {
    const response = await fetch(`${API_ENDPOINT.KOMENTAR_ARTIKEL}/${artikelId}`);
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default KomentarSource;
