class content3 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section id="content3" class="content3 mt-4">
      <div class="container">
        <h1 tabindex="0" class="text-center fw-bold">
          Kenapa Pilih <span class="text-warning">StuntCare?</span>
        </h1>
        <div class="row justify-content-center" >
          <div class="content3-card m-2 mx-4 highlight-hover text-center">
            <img
              tabindex="0"
              src="../images/undraw_family_vg76 2.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="Family svg"
            />
            <div class="card-body" tabindex="0">
              <h2 class="card-title">Informasi Gizi yang Terpercaya</h2>
              <p class="card-text">
                StuntCare menyediakan informasi gizi balita yang didukung oleh
                penelitian ilmiah dan bukti yang kuat, sehingga Anda dapat
                mempercayai saran dan rekomendasi yang diberikan
              </p>
            </div>
          </div>

          <div class="content3-card m-2 highlight-hover text-center">
            <img
              tabindex="0"
              src="../images/Group 3473678.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="Family svg"
            />
            <div class="card-body" tabindex="0">
              <h2 class="card-title">Kemudahan Akses dan Pengguna</h2>
              <p class="card-text">
                Dengan antarmuka yang ramah pengguna dan dapat diakses melalui
                berbagai perangkat, StuntCare memastikan Anda dapat dengan mudah
                mengakses informasi gizi yang diperlukan kapan saja dan di mana
                saja.
              </p>
            </div>
          </div>

          <div class="content3-card m-2 highlight-hover text-center">
            <img
              tabindex="0"
              src="../images/undraw_fatherhood_-7-i19 2.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="Family svg"
            />
            <div class="card-body" tabindex="0">
              <h2 class="card-title">Interaktif dan Edukatif</h2>
              <p class="card-text">
                StuntCare tidak hanya memberikan informasi, tetapi juga
                menyajikannya dengan cara yang interaktif dan edukatif, membantu
                Anda memahami pentingnya gizi seimbang dalam menjaga kesehatan
                anak Anda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('content3-nih', content3);
