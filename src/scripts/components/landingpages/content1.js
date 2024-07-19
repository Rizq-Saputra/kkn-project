class content1 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <section id="content1" class="content1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 col-lg-5">
              <h1 tabindex="0" class="heading-title mochi fw-bold">
                Aplikasi Edukasi<br> <span class="purple">Gizi Balita</span> untuk Pencegahan <span class="purple">Stunting</span>
              </h1>
              <p tabindex="0" class="lead my-2 deskripsi salsa-font">
                Temukan solusi terbaik untuk <span class="purple">mencegah stunting</span> pada balita
                dengan <span class="purple">StuntCare</span>. Dapatkan informasi gizi yang tepat dan
                rekomendasi yang terpercaya untuk kesehatan optimal anak Anda.
              </p>
              <p class="mt-4 button-content1">
                <button id="scrollToContent2" aria-label="tombol Mari mulai" class="btn bg-purple py-3 px-2 text-white">Mari Mulai! ></button>
              </p>
            </div>
            <div class="col-12 col-md-6 ms-md-auto mt-4 mt-md-0">
              <img
                tabindex="0"
                alt="Family with baby image"
                class="img-fluid image__1"
                src="../images/Group 3473674.png"
              />
            </div>
          </div>
        </div>
      </section>
    `;
  }

  connectedCallback() {
    this.querySelector('#scrollToContent2').addEventListener('click', () => {
      const content2 = document.querySelector('#content2');
      content2.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

customElements.define('content1-nih', content1);
