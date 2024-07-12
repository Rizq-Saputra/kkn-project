class content4 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <section id="content4" class="content4">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-6 col-lg-5">
                <h1 tabindex="0" class="fw-bold">
                  Makanan <span class="text-warning"> Bernutrisi </span><br> dan <span class="text-warning"> Bergizi </span> untuk<br> <span class="text-warning">Balita</span> Anda
                </h1>
                <p tabindex="0" class="lead">
                Dapatkan informasi lengkap mengenai gizi makanan yang diperlukan untuk pertumbuhan optimal balita Anda. 
                Temukan rekomendasi gizi yang dapat dipercaya untuk menjaga kesehatan anak Anda.
                </p>
                <a href="#/mpasi">
                  <p class="mt-4">
                    <button aria-label="Tombol Gizi Makanan" class="btn btn-warning text-white align-content-center" href="#/mpasi">Gizi Makanan ></button>
                  </p>
                </a>
              </div>
              <div class="col-12 col-md-6 ms-md-auto mt-4 mt-md-0">
                <img
                  tabindex="0"
                  alt="makanan image"
                  class="img-fluid p-5"
                  src="../images/fotomakanan.png"
                />
              </div>
            </div>
          </div>
        </section>
      `;
  }
}

customElements.define('content4-mungkin', content4);
