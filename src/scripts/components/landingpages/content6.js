class content6 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section id="content6" class="content6 mt-4">
      <div class="container">
        <h1 tabindex="0" class="text-center fw-bold" >
          Layanan <span class="text-utama">SIE Mahat</span>
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
              <h2 tabindex="0" class="card-title">INFO PENTING</h2>
              <a tabindex="0" class="btn btn-custom fw-bold mt-3 align-content-center" style="font-size: 14px" href="#/infopenting">Lihat Selengkapnya</a>
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
              <h2 tabindex="0" class="card-title">Kalkulator IMTIK</h2>
              <a tabindex="0" class="btn btn-custom fw-bold mt-3 align-content-center" style="font-size: 14px" href="#/imtik">Lihat Selengkapnya</a>
            </div>
          </div>

          <div
            class="shadow p-3 mb-5 content6-card m-2 mx-4 text-center"
            >
            <img
              tabindex="0"
              src="../images/kemas.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="makanan icon"
            />
            <div class="card-body">
              <h2 tabindex="0" class="card-title">KEMAS</h2>
              <a tabindex="0" class="btn btn-custom fw-bold mt-3 align-content-center" style="font-size: 14px" href="#/kemas">Lihat Selengkapnya</a>
            </div>
          </div>
          <div
            class="shadow p-3 mb-5 content6-card m-2 mx-4 text-center"
            >
            <img
              tabindex="0"
              src="../images/gemasi.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="makanan icon"
            />
            <div class="card-body">
              <h2 tabindex="0" class="card-title">GEMASI</h2>
              <a tabindex="0" class="btn btn-custom fw-bold mt-3 align-content-center" style="font-size: 14px" href="#/gemasi">Lihat Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('content6-nih', content6);
