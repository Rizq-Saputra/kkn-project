/* eslint-disable no-undef */
import { handleKeydown, handleClick, addLayananTabListener } from '../utils/dropdown';

class navbarnih extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <header class="app-bar">
      <div class="app-bar__brand">
        <a tabindex="0" href="#/"><img src="../images/siemahat.png" height="30" alt="siemahat" style="
    height: 55px;
" />SIE Mahat</a>
      </div>
      <div class="app-bar__menu">
        <button tabindex="0" aria-label="Toggle Button" id="hamburgerButton">☰</button>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul class="gap-3">
          <li><a tabindex="0" href="#/">Beranda</a></li>
          <li class="nav-item dropdown">
            <a tabindex="0" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="submenu-layanan">Layanan <i class="bi bi-caret-down-fill"></i></a>
            <ul class="dropdown-content" id="submenu-layanan" role="menu" aria-labelledby="submenu-layanan">
              <li role="menuitem"><a tabindex="0" href="#/kemas">KEMAS</a></li>
              <li role="menuitem"><a tabindex="0" href="#/imtik">IMTIK</a></li>
              <li role="menuitem"><a tabindex="0" href="#/gemasi">GEMASI</a></li>
              <li role="menuitem"><a tabindex="0" href="#/infopenting">INFO PENTING</a></li>
            </ul>
          </li>
          <li><a tabindex="0" href="#/tentangkami">Tentang</a></li>
        </ul>
      </nav>
    </header>
    `;

    this.addEventListener('keydown', handleKeydown);
    this.addEventListener('click', handleClick);

    const layananButton = this.querySelector('.nav-item.dropdown > a');
    addLayananTabListener(layananButton);
  }
}

customElements.define('navbar-nih', navbarnih);
