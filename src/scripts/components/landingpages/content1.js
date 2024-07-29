class content1 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <section id="content1" class="content1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 col-lg-5">
            <h1 tabindex="0" style="font-size: 3rem;" class="heading-title mochi fw-bold">SIE MAHAT</h1>
              <h1 tabindex="0" style="font-size: 2.2rem;" class="heading-title mochi fw-bold">
                <span class="purple">Sistem Informasi & Edukasi</span> Remajaku Sehat</h1>
              <p tabindex="0" class="lead my-2 deskripsi salsa-font">
                <span class="purple">SIE MAHAT</span> (Sistem Informasi & Edukasi Remajaku Sehat) sebagai Media Digital dalam upaya menintegrasikan layanan melalui fitur untuk pencegahan stunting sejak remaja
              </p>
              <p class="mt-4 button-content1">
                <button id="scrollToContent6" aria-label="tombol Mari mulai" class="btn bg-custom text-white">Mari Mulai! ></button>
              </p>
            </div>
            <div class="col-12 col-md-6 ms-md-auto mt-md-0">
              <img
                tabindex="0"
                alt="Family with baby image"
                class="img-fluid image__1"
                src="../images/content1.png"
              />
            </div>  
          </div>
        </div>
      </section>
    `;
  }

  connectedCallback() {
    this.querySelector('#scrollToContent6').addEventListener('click', () => {
      const content2 = document.querySelector('#content6');
      content2.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

customElements.define('content1-nih', content1);
