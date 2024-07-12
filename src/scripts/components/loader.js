class CustomLoader extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const template = `
          <style>
            #loader {
              top: 0;
              left: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              transition: opacity 0.75s, visibility 0.75s;
              position: fixed;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              backdrop-filter: blur(5px);
              z-index: 9999;
            }
    
            #loader p {
              margin-top: 20px;
              color: white;
              font-size: 25px;
              font-weight: 500;
            }
    
            .hidden {
              opacity: 0;
              visibility: hidden;
            }
    
            /* Loading Screen */
              .loader {
              width: 32px;
              height: 16px;
              display: flex;
              animation: l9-0 1s infinite;
              }
              .loader:before,
              .loader:after {
              content: "";
              flex: 1;
              background: #019973;
              transform-origin: top right;
              animation: l9-1 1s infinite;
              }
              .loader:after {
              background: yellow;
              transform-origin: top left;
              --s: -1;
              }
              @keyframes l9-0 {
              100% {
                  transform: translateY(100%);
              }
              }
              @keyframes l9-1 {
              100% {
                  transform: rotate(calc(var(--s, 1) 90deg));
              }
              }
  
          </style>
          <div id="loader" class="hidden">
            <div class="loader"></div>
            <p>Loading</p>
          </div>
        `;

    shadowRoot.innerHTML = template;
  }

  show() {
    const loader = this.shadowRoot.querySelector('#loader');
    loader.classList.remove('hidden');
  }

  hide() {
    const loader = this.shadowRoot.querySelector('#loader');
    loader.classList.add('hidden');
  }
}

customElements.define('custom-loader', CustomLoader);
