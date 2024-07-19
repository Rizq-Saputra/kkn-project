/* eslint-disable no-undef */
class FooterElement extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
       <footer class="mt-5 bg-custom px-4 py-5">
    <div class="container text-center">
      <p class="font-weight-bold text-secondary_purple" style="font-size: 1.25rem; white-space: nowrap;">
        Created By Rizq Saputra
      </p>
      <ul class="list-unstyled d-flex justify-content-center text-white mt-3">
        <li class="mx-2">
          <a href="#" class="text-decoration-none text-white">Home</a>
        </li>
        <li class="mx-2">
          <a href="#" class="text-decoration-none text-white">About</a>
        </li>
        <li class="mx-2">
          <a href="#" class="text-decoration-none text-white">Project</a>
        </li>
        <li class="mx-2">
          <a href="#" class="text-decoration-none text-white">Blog</a>
        </li>
      </ul>
      <ul class="list-unstyled d-flex justify-content-center text-white mt-4">
        <li class="mx-2">
          <a
            href="https://www.instagram.com/rizqsptr/"
            target="_blank"
            aria-label="Instagram"
            class="icon-circle"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="mx-2">
          <a
            href="https://www.linkedin.com/in/muhammad-rizq-saputra-378088281/"
            target="_blank"
            aria-label="LinkedIn"
            class="icon-circle"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li class="mx-2">
          <a
            href="https://github.com/Rizq-Saputra"
            target="_blank"
            aria-label="GitHub"
            class="icon-circle"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li class="mx-2">
          <a
            href="mailto:rizky002211@gmail.com"
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
