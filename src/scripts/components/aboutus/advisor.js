/* eslint-disable no-undef */
class Advisor extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
        <div class="card" style="width: 18rem; margin: 30px auto;">
          <img tabindex="0" data-src="../images/advisor.jpg" class="card-img-top lazyload" alt="Advisor" style="width: 150px height: 150px" crossorigin="anonymous" >
          <div class="card-body text-center">
              <h5 tabindex="0" class="card-title text-uppercase fw-bold">Agrey Tosira</h5>
              <p tabindex="0" class="card-text text-capitalize">Front-End Advisor</p>
              <div class="d-flex justify-content-center ">
                  <a tabindex="0" href="https://github.com/agreytosira" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-github"></i></a>
                  <a tabindex="0" href="https://www.linkedin.com/in/agreytosira/" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-linkedin"></i></a>
                  <a tabindex="0" href="https://www.instagram.com/agtsra/" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-instagram"></i></a>
              </div>
          </div>
        </div>
      `;
  }
}

customElements.define('team-advisor', Advisor);
