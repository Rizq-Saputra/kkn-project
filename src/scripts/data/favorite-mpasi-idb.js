/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteMpasiIdb = {
  async getMpasi(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllMpasi() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putMpasi(mpasi) {
    if (!mpasi.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, mpasi);
  },
  async deleteMpasi(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  async searchMpasi(query) {
    return (await this.getAllMpasi()).filter((mpasi) => {
      const loweredCaseRestoName = (mpasi.makanan || '-').toLowerCase();
      const jammedRestoName = loweredCaseRestoName.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoName.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavoriteMpasiIdb;
