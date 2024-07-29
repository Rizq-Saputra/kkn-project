class content3 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <section id="content3" class="content3 mt-4" style="padding: 20px;">
        <h1 tabindex="0" class="text-center text-utama mb-4 fw-bold" >
          Video
        </h1>
        <div class="container" style="max-width: 100%; padding: 0;">
          <div class="row" style="margin: 0;">
            <div class="col-12 col-md-10 offset-md-1" style="padding: 0;">
              <div class="embed-responsive embed-responsive-16by9 mb-4" style="position: relative; display: block; width: 100%; padding: 0; overflow: hidden; padding-top: 56.25%;">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/FCUIoZbU4Tw?si=E1IBb7ZsEyyesyX9" allowfullscreen style="position: absolute; top: 0; left: 0; bottom: 0; height: 100%; width: 100%; border: 0;"></iframe>
              </div>
              <div class="embed-responsive embed-responsive-16by9" style="position: relative; display: block; width: 100%; padding: 0; overflow: hidden; padding-top: 56.25%;">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/jnIEslz2O9o?si=bLgrJrTzNqXzVaEz" allowfullscreen style="position: absolute; top: 0; left: 0; bottom: 0; height: 100%; width: 100%; border: 0;"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('content3-nih', content3);
