const AboutUs = {
  async render() {
    return `
          <section id="about-us" class="about-us bg-light py-5">
            <div class="container">
              <h2 class="text-center mb-5">Meet Our Team</h2>
              <div class="row" style="
    justify-content: center;">
                <div class="col-md-4 mb-4">
                  <div class="card h-100 hover-shake text-center">
                    <div class="card-body">
                      <img src="../images/melani.jpeg" class="rounded-circle mb-3" alt="Melani Putri Hapsari" style="width: 150px;">
                      <h5 class="card-title">Melani Putri Hapsari</h5>
                      <p class="card-text">Fakultas Kesehatan Masyarakat<br>Kesehatan Masyarakat<br><strong class="text-utama">Edukator & Project Manager</strong></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-4">
                  <div class="card h-100 hover-shake text-center">
                    <div class="card-body">
                      <img src="../images/nur.jpeg" class="rounded-circle mb-3" alt="Nur Hasanah" style="width: 150px;">
                      <h5 class="card-title">Nur Hasanah</h5>
                      <p class="card-text">Fakultas Ilmu Budaya<br>Sastra Inggris<br><strong class="text-utama">Edukator & Instructional Designer</strong></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-4">
                  <div class="card h-100 hover-shake text-center">
                    <div class="card-body">
                      <img src="../images/ayu.jpeg" class="rounded-circle mb-3" alt="Melani Putri Hapsari" style="width: 150px;">
                      <h5 class="card-title">Widya Ayu Pramesti</h5>
                      <p class="card-text">Fakultas Ilmu Sosial dan Ilmu Politik<br>Ilmu Pemerintahan<br><strong class="text-utama">Ilustrator Designer</strong></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-4">
                  <div class="card h-100 hover-shake text-center">
                    <div class="card-body">
                      <img src="../images/rizq.jpeg" class="rounded-circle mb-3" alt="Muhammad Rizq Saputra" style="width: 150px;">
                      <h5 class="card-title">Muhammad Rizq Saputra</h5>
                      <p class="card-text">Fakultas Teknik<br>Sistem Informasi<br><strong class="text-utama">Full Stack Developer</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;
  },

  afterRender() {},
};

export default AboutUs;
