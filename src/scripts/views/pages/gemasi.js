const gemasi = {
  async render() {
    return `
          <div class="container mt-4">
              <h1 class="text-center purple">GEMASI (Generasi Remaja Emas Berprestasi)</h1>
              <div class="row mt-4">
                  <div class="col-12 col-md-6 mb-4">
                      <div class="card">
                          <img src="https://via.placeholder.com/400x200.png?text=PDF+Preview+1" class="card-img-top" alt="PDF Preview 1">
                          <div class="card-body text-center">
                              <h5 class="card-title">Dokumen PDF 1</h5>
                              <button type="button" class="btn btn-custom" data-bs-toggle="modal" data-bs-target="#pdfModal" data-pdf-src="../files/tes.pdf">
                                  Lihat PDF
                              </button>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-6 mb-4">
                      <div class="card">
                          <img src="https://via.placeholder.com/400x200.png?text=PDF+Preview+2" class="card-img-top" alt="PDF Preview 2">
                          <div class="card-body text-center">
                              <h5 class="card-title">Dokumen PDF 2</h5>
                              <button type="button" class="btn btn-custom" data-bs-toggle="modal" data-bs-target="#pdfModal" data-pdf-src="../files/tes.pdf">
                                  Lihat PDF
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
          <!-- The Modal -->
          <div class="modal fade" id="pdfModal" tabindex="-1" aria-labelledby="pdfModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="pdfModalLabel">Dokumen PDF</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <iframe src="" id="pdfIframe" style="width: 100%; height: 500px;" frameborder="0"></iframe>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                  </div>
              </div>
          </div>
      `;
  },

  afterRender() {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfIframe');

    modal.addEventListener('show.bs.modal', (event) => {
      const button = event.relatedTarget;
      const pdfSrc = button.getAttribute('data-pdf-src');
      iframe.src = pdfSrc;
    });

    modal.addEventListener('hidden.bs.modal', () => {
      iframe.src = '';
    });
  },
};

export default gemasi;
