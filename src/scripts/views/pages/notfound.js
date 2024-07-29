const NotFound = {
  async render() {
    return `
        <div class="text-center mt-4" style="text-align: center;">
            <img class="mx-auto" src="/images/not_found.png" alt="Page not found image" style="display: block; max-width: 100%;">
            <a class="mb-4 btn-custom" href="/" style="display: inline-block; padding: 10px 20px; font-size: 1em; color: #fff; text-decoration: none; align-content: center; font-weight: bold; border-radius: 5px; transition: background-color 0.3s ease;">Kembali</a>
        </div>
      `;
  },

  afterRender() {},
};

export default NotFound;
