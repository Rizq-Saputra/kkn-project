class content5 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <section id="content5" class="content5 bg-gray mt-5 mb-4">
        <h1 tabindex="0" class="text-center fw-bold" >
          <span class="text-utama">Booklet</span>
        </h1>
         <div class="flipbook-container mt-4">
          <iframe src="https://flipbooks.fleepit.com/f-62783-booklet" width="100%" height="600px" style="border:none;" allowfullscreen></iframe>
        </div>
      </section>
    `;
  }
}

customElements.define('content5-nih', content5);
