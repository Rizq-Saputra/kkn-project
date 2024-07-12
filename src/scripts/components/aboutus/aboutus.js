/* eslint-disable no-undef */
class AboutUs extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
     <section class="AboutUs">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col col-md-8 text-center">
              <h2 class="h2 fw-bold text-warning">StuntCare</h2>
              <p class="lead">StuntCare adalah platform edukasi gizi balita yang memberikan 
              rekomendasi gizi personal dan strategi efektif untuk mencegah stunting,
              dirancang untuk membantu orang tua dan pengasuh
              memahami secara lebih mendalam masalah stunting pada balita di Indonesia. </p>
            </div>
          </div>
        </div>
      </section>    
    `;
  }
}

customElements.define('about-us', AboutUs);
