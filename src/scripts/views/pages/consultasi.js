/* eslint-disable no-empty-function */
import '../../components/main';

const konsultasi = {
  async render() {
    return `
    <style>
      .btn-pink {
        color: white;
        align-items: center;
      }
    </style>
      <section class="konsultasi py-3 mt-3">
        <div class="container">
          <h1 class="text-center fw-bold mb-4" tabindex="0">Konsultasi ke Dokter</h1>
          
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="../images/doc1-large.jpg"
                    class="card-img"
                    alt="Dr. Gione Giandito"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Dr. Gione Giandito Sp.A</h5>
                    <p class="card-text">Sp. Anak</p>                    
                    <p class="card-text">
                      Rp 55.000
                      <small class="text-muted"><s>Rp 56.000</s></small>
                    </p>
                    <a href="#" class="btn btn-pink btn-custom bi-whatsapp"> Chat</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="../images/doc2-large.jpg"
                    class="card-img"
                    alt="Dr. Daniel Simangunsong"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Dr. Daniel Simangunsong Sp.A</h5>
                    <p class="card-text">Sp. Anak</p>                    
                    <p class="card-text">
                      Rp 55.000
                      <small class="text-muted"><s>Rp 56.000</s></small>
                    </p>
                    <a href="#" class="btn btn-pink btn-custom bi-whatsapp"> Chat</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="../images/doc3-large.jpg"
                    class="card-img"
                    alt="Dr. Lisa Marlina"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Dr. Lisa Marlina Sp.A</h5>
                    <p class="card-text">Sp. Anak</p>
                    <p class="card-text">
                      Rp 55.000
                      <small class="text-muted"><s>Rp 56.000</s></small>
                    </p>
                    <a href="#" class="btn btn-pink btn-custom bi-whatsapp"> Chat</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="../images/doc1-large.jpg"
                    class="card-img"
                    alt="Dr. Andi Wijaya"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Dr. Andi Wijaya Sp.A</h5>
                    <p class="card-text">Sp. Anak</p>
                    <p class="card-text">
                      Rp 55.000
                      <small class="text-muted"><s>Rp 56.000</s></small>
                    </p>
                    <a href="#" class="btn btn-pink btn-custom bi-whatsapp"> Chat</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
      </section>
    `;
  },

  async afterRender() {},
};

export default konsultasi;
