class content2 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section id="content2" class="content2">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-7 ms-md-auto mt-4 mt-md-0">
              <img
                tabindex="0"
                alt="Family Image"
                class="img-fluid"
                src="../images/Group 33.png"
              />
            </div>
            <div class="col-12 col-md-6 col-lg-5 text-content2" >
              <h2 tabindex="0" class="subheading fw-bold" >Apa itu <span class="text-warning">Stunting?</span></h2>
              <p tabindex="0" class="lead">
                Stunting adalah kondisi terhambatnya pertumbuhan fisik dan
                perkembangan otak pada anak-anak, biasanya disebabkan oleh
                kurangnya asupan gizi yang memadai dan infeksi pada masa awal
                kehidupan. Untuk mengetahui mengenai stunting lebih lengkap,
                Anda bisa klik tombol yang di bawah ini
              </p>
              <a href="#/artikel">
                <p class="mt-4">
                  <button aria-label="tombol Baca Selengkapnya" class="btn btn-outline-warning fw-bold align-content-center" href="#/artikel">Baca Selengkapnya</button>
                </p>
              </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('content2-nih', content2);
