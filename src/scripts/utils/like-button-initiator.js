/* eslint-disable no-undef */
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteMpasi, mpasi }) {
    this._likeButtonContainer = likeButtonContainer;
    this._mpasi = mpasi;
    this._favoriteMpasi = favoriteMpasi;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._mpasi;

    if (await this._isMpasiExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMpasiExist(id) {
    const mpasi = await this._favoriteMpasi.getMpasi(id);
    return !!mpasi;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteMpasi.putMpasi(this._mpasi);
      this._renderButton();
      // import('sweetalert2').then((Swal) => {
      //   Swal.default.fire({
      //     icon: 'success',
      //     title: 'Berhasil Menambahkan Like',
      //   });
      // });
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteMpasi.deleteMpasi(this._mpasi.id);
      this._renderButton();
      // import('sweetalert2').then((Swal) => {
      //   Swal.default.fire({
      //     icon: 'success',
      //     title: 'Berhasil menghapus Like',
      //   });
      // });
    });
  },
};

export default LikeButtonInitiator;
