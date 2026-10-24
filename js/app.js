// Flujo general: cambio de pantallas, textos desde CONFIG y música.
const App = (function () {
  const pantallas = {
    pastel: document.getElementById('pantalla-pastel'),
    mensaje: document.getElementById('pantalla-mensaje'),
    fotos: document.getElementById('pantalla-fotos'),
    regalo: document.getElementById('pantalla-regalo'),
    cupones: document.getElementById('pantalla-cupones')
  };

  function ir(nombre) {
    Object.keys(pantallas).forEach(function (k) { pantallas[k].classList.remove('activa'); });
    pantallas[nombre].classList.add('activa');
    document.dispatchEvent(new CustomEvent('pantalla', { detail: nombre }));
  }

  // Textos
  document.querySelectorAll('[data-texto]').forEach(function (el) {
    const t = CONFIG.textos[el.dataset.texto];
    if (t !== undefined) el.textContent = t;
  });

  // Música (opcional)
  const btnMusica = document.getElementById('btn-musica');
  let audio = null;
  let disponible = false;
  if (CONFIG.musica) {
    audio = new Audio(CONFIG.musica);
    audio.loop = true;
    audio.preload = 'auto';
    audio.addEventListener('canplay', function () { disponible = true; btnMusica.hidden = false; });
    audio.addEventListener('error', function () { disponible = false; btnMusica.hidden = true; });
  }

  let iniciada = false;
  function iniciarMusica() {
    if (!audio || !disponible || iniciada) return;
    iniciada = true;
    audio.play().catch(function () { iniciada = false; });
  }

  btnMusica.addEventListener('click', function () {
    if (!audio) return;
    if (audio.paused) { audio.play().catch(function () {}); btnMusica.classList.remove('pausada'); }
    else { audio.pause(); btnMusica.classList.add('pausada'); }
  });

  // Primer toque en cualquier parte intenta arrancar la música
  document.addEventListener('pointerdown', iniciarMusica, { once: false });

  document.getElementById('btn-fotos').addEventListener('click', function () { ir('fotos'); });
  document.getElementById('btn-regalo').addEventListener('click', function () { ir('regalo'); });

  Efectos.flotantes();

  return { ir: ir, iniciarMusica: iniciarMusica };
})();
