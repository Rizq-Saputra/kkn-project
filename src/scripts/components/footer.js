/* eslint-disable no-undef */
class FooterElement extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
       <footer class="mt-5 bg-footer px-4 py-4">
    <div class="container text-center">
    <img src="../images/unmul.png" alt="Logo KKN" class="mb-4" style="width: 85px;" />
    <img src="../images/kkn.png" alt="Logo KKN" class="mb-4" style="width: 75px;" />
    <img src="../images/kknlogo.png" alt="Logo KKN Tematik Stunting 02" class="mb-4" style="width: 60px;" />
      <p class="font-weight-bold text-white" style="font-size: 1rem; white-space: nowrap;">
        KKN TEMATIK STUNTING 02
      </p>
      <p class="text-white hastag"># Generasi Muda Sehat, Tanpa Stunting</p>
      <ul class="list-unstyled d-flex justify-content-center text-white mt-4">
        <li class="mx-2">
          <a
            href="https://www.instagram.com/kkn50.benuapuhun/"
            target="_blank"
            aria-label="Instagram"
            class="icon-circle"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="mx-2">
          <a
            href="https://www.tiktok.com/@kkn50.benuapuhun"
            target="_blank"
            aria-label="Tiktok"
            class="icon-circle"
          >
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </li>
        <li class="mx-2">
          <a
            href="mailto:kkn50tematikstunting02@gmail.com"
            target="_blank"
            aria-label="Email"
            class="icon-circle"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
      `;
  }
}

customElements.define('footer-gaming', FooterElement);
