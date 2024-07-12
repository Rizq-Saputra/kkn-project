class content6 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section id="content6" class="content6 mt-4">
      <div class="container">
        <h1 tabindex="0" class="text-center fw-bold" >
          Layanan <span class="text-warning">StuntCare</span>
        </h1>
        <div class="row justify-content-center">
          <div
            class="shadow p-3 mb-5 content6-card m-2 mx-4 text-center"
          >
            <img
              tabindex="0"
              src="../images/icon artikel.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="artikel icon"
            />
            <div class="card-body">
              <h2 tabindex="0" class="card-title">Artikel</h2>
              <a tabindex="0" class="btn btn-outline-warning fw-bold mt-3 align-content-center" style="font-size: 14px" href="#/Artikel">Lihat Selengkapnya</a>
            </div>
          </div>

          <div
            class="shadow p-3 mb-5 content6-card m-2 mx-4 text-center"
          >
            <img
              tabindex="0"
              src="../images/icon kalkulator.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="kalkulator icon"
            />
            <div class="card-body">
              <h2 tabindex="0" class="card-title">Kalkulator Gizi</h2>
              <a tabindex="0" class="btn btn-outline-warning fw-bold mt-3 align-content-center" style="font-size: 14px" href="#/kalkulator">Lihat Selengkapnya</a>
            </div>
          </div>

          <div
            class="shadow p-3 mb-5 content6-card m-2 mx-4 text-center"
            >
            <img
              tabindex="0"
              src="../images/icon makanan.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="makanan icon"
            />
            <div class="card-body">
              <h2 tabindex="0" class="card-title">MPASI</h2>
              <a tabindex="0" class="btn btn-outline-warning fw-bold mt-3 align-content-center" style="font-size: 14px" href="#/mpasi">Lihat Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('content6-nih', content6);
