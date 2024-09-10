/* eslint-disable eqeqeq */
/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import '../../components/loader';

const Imtik = {
  async render() {
    return `
      <div class="container mt-5 d-flex justify-content-center align-items-center kalkulator">
        <form class="needs-validation" action="">
        <h1 tabindex="0" class="text-center purple fw-bold" style="
    margin-top: 1rem;">
          Kalkulator IMT (Indeks Massa Tubuh)
        </h1>
        <p class="imtikdesc" style="padding-inline: 53px; text-align: justify;">
          Indeks Massa Tubuh (IMT) adalah ukuran yang digunakan untuk mengetahui status gizi seseorang dan kategori berat badan yang didapatkan dari bandingan berat dan tinggi badan. \n
          Cara termudah untuk mengetahui apakah seseorang berisiko mengalami suatu penyakit kronis atau tidak.
        </p>
          <div class="radio-tile-group d-flex justify-content-center flex-nowrap">
            <div class="input-container">
              <input tabindex="0" id="gender1" type="radio" value="laki" name="radio" required/>
              <div tabindex="0" class="radio-tile">
                <img class="bw radio-image" src="../images/laki.png" alt="Logo KKN" class="mb-4" style="width: 170px;" />
                <label for="gender1" class="mt-4">Laki-Laki</label>
              </div>
            </div>
            <div class="input-container">
              <input tabindex="0" id="gender2" type="radio" value="perempuan" name="radio" required/>
              <div tabindex="0" class="radio-tile">
                <img class="bw radio-image" src="../images/perempuan.png" alt="Logo KKN" class="mb-4" style="width: 170px;" />
                <label for="gender2" class="mt-4">Perempuan</label>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label tabindex="0" for="usia" class="form-label">Usia (tahun)</label>
            <input tabindex="0" type="number" class="form-control" id="usia" placeholder="Masukkan usia Anda" min="0" required>
            <div tabindex="0" class="invalid-feedback">
              Tolong isi kolom ini terlebih dahulu
            </div>
          </div>
          <div class="mb-3">
            <label tabindex="0" for="beratBadan" class="form-label">Berat Badan (kg)</label>
            <input tabindex="0" type="number" class="form-control" id="beratBadan" placeholder="Masukkan berat badan Anda" min="0" required>
            <div tabindex="0" class="invalid-feedback">
              Tolong isi kolom ini terlebih dahulu
            </div>
          </div>
          <div class="mb-3">
            <label tabindex="0" for="tinggiBadan" class="form-label">Tinggi Badan (cm)</label>
            <input tabindex="0" type="number" class="form-control" id="tinggiBadan" placeholder="Masukkan tinggi badan Anda" min="0" required>
            <div tabindex="0" class="invalid-feedback">
              Tolong isi kolom ini terlebih dahulu
            </div>
          </div>
          <div class="d-grid">
            <button tabindex="0" aria-label="tombol hitung" type="submit" class="btn btn-custom" style="
    margin-bottom: 2rem;
">Hitung</button>
          </div>
        </form>
      </div>
      <custom-loader></custom-loader>
      <div id="result" class="mt-4 mb-4 d-flex justify-content-center align-items-center"></div>
  
      <!-- Bootstrap Modal -->
      <div class="modal fade" id="info-modal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="infoModalLabel">Informasi IMT</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Keluar"></button>
            </div>
            <div class="modal-body">
              Indeks Massa Tubuh (IMT) adalah ukuran yang digunakan untuk mengetahui status gizi seseorang dan kategori berat badan yang didapatkan dari bandingan berat dan tinggi badan.

              Cara termudah untuk mengetahui apakah seseorang berisiko mengalami suatu penyakit kronis atau tidak
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Keluar</button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const forms = document.querySelectorAll('.needs-validation');
    const loader = document.querySelector('custom-loader');
    const radioButtons = document.querySelectorAll('input[name="radio"]');
    const infoIcon = document.getElementById('info-icon');
    const modal = new bootstrap.Modal(document.getElementById('info-modal'));

    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', (event) => handleFormSubmit(event, form), false);
    });

    radioButtons.forEach((radio) => {
      radio.addEventListener('change', handleRadioChange);
    });

    infoIcon.addEventListener('click', () => {
      modal.show();
    });

    function handleFormSubmit(event, form) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        loader.show();
        setTimeout(() => {
          loader.hide();
          processForm();
          scrollToResult();
        }, 500);
      }
      form.classList.add('was-validated');
    }

    function handleRadioChange(event) {
      document.querySelectorAll('.radio-image').forEach((img) => {
        img.classList.remove('colored', 'enlarged');
      });

      const selectedRadio = event.target;
      const img = selectedRadio.closest('.input-container').querySelector('.radio-image');
      if (img) {
        img.classList.add('colored', 'enlarged');
      }
    }

    function scrollToResult() {
      const resultDiv = document.getElementById('result');
      resultDiv.scrollIntoView({ behavior: 'smooth' });
    }

    function processForm() {
      const weightKg = parseFloat(document.getElementById('beratBadan').value);
      const heightCm = parseFloat(document.getElementById('tinggiBadan').value);
      const ageYears = parseInt(document.getElementById('usia').value);
      const gender = document.querySelector('input[name="radio"]:checked').value;

      const bmi = calculateBMI(weightKg, heightCm);
      const bmiCategory = determineBMICategory(bmi);

      displayResult(bmi, bmiCategory, ageYears, gender);
    }

    function calculateBMI(weightKg, heightCm) {
      const heightM = heightCm / 100;
      return weightKg / (heightM * heightM);
    }

    function determineBMICategory(bmi) {
      if (bmi < 17) return 'Sangat Kurus';
      if (bmi >= 17 && bmi < 18.5) return 'Kurus';
      if (bmi >= 18.5 && bmi < 25) return 'Normal';
      if (bmi >= 25 && bmi < 30) return 'Gemuk';
      return 'Obesitas';
    }

    function displayResult(bmi, category, age, gender) {
      const resultDiv = document.getElementById('result');

      let bmiClass = '';
      if (bmi < 17) {
        bmiClass = 'sangatkurus';
      } else if (bmi >= 17 && bmi < 18.5) {
        bmiClass = 'kurus';
      } else if (bmi >= 18.5 && bmi < 25) {
        bmiClass = 'normal';
      } else if (bmi >= 25 && bmi < 30) {
        bmiClass = 'gemuk';
      } else {
        bmiClass = 'obesitas';
      }

      resultDiv.innerHTML = `
        <div class="flex">
          <section class="output">
            <p>Usia: ${age} tahun</p>
            <p>Jenis Kelamin: ${gender === 'laki' ? 'Laki Laki' : 'Perempuan'}</p>
            <h3>Pengukuran IMT Kamu Adalah</h3>
            <p id="bmi" class="bmi-score ${bmiClass}">${bmi.toFixed(2)}</p>
            <p id="desc" class="${bmiClass}"><strong>${category}</strong></p>
          </section>
          
          <section class="bmi-scale mt-4">
            <div class="sangatkurus">
              <h4>Sangat Kurus</h4>
              <p>&lt; 17</p>
            </div>
            <div class="kurus">
              <h4>Kurus</h4>
              <p style="text-wrap: nowrap;">17 - 18.5</p>
            </div>
            <div class="normal">
              <h4>Normal</h4>
              <p style="text-wrap: nowrap;">18.5 – 25</p>
            </div>
            <div class="gemuk">
              <h4>Gemuk</h4>
              <p style="text-wrap: nowrap;">25 – 30</p>
            </div>
            <div class="obesitas">
              <h4>Obesitas</h4>
              <p>≥ 30</p>
            </div>
          </section>
        </div>
      `;
    }
  }
  ,
};

export default Imtik;
