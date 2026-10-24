// Pantalla 3: carrusel de polaroids colgadas de una cuerda con luces.
(function () {
  const pista = document.getElementById('pista');
  const luces = document.getElementById('luces');
  const escenario = document.getElementById('escenario');
  const contador = document.getElementById('contador');
  const btnAnt = document.getElementById('foto-ant');
  const btnSig = document.getElementById('foto-sig');
  const btnRegalo = document.getElementById('btn-regalo');

  const EXTENSIONES = ['jpg', 'jpeg', 'png', 'webp'];
  const GIROS = [-4, 3, -3, 4, -2, 3, -4, 2];

  // Luces sobre la cuerda
  const CANTIDAD_LUCES = 10;
  for (let i = 0; i < CANTIDAD_LUCES; i++) {
    const b = document.createElement('span');
    b.className = 'bombilla';
    b.style.left = ((i + 0.5) / CANTIDAD_LUCES) * 100 + '%';
    b.style.animationDelay = -Math.random() * 2.4 + 's';
    luces.appendChild(b);
  }

  // Carga la foto probando varias extensiones y, si no hay ninguna, usa la imagen de ejemplo
  function cargarFoto(img, base) {
    let i = 0;
    img.onerror = function () {
      i++;
      if (i < EXTENSIONES.length) {
        img.src = base + '.' + EXTENSIONES[i];
      } else {
        img.onerror = null;
        img.src = CONFIG.respaldoFoto;
      }
    };
    img.src = base + '.' + EXTENSIONES[0];
  }

  const fotos = CONFIG.fotos;
  const tarjetas = fotos.map(function (f, i) {
    const fig = document.createElement('figure');
    fig.className = 'polaroid';
    fig.innerHTML =
      '<span class="pinza"></span>' +
      '<div class="polaroid-int"><img alt=""><figcaption></figcaption></div>';
    fig.querySelector('figcaption').textContent = f.frase;
    cargarFoto(fig.querySelector('img'), f.archivo);
    fig.addEventListener('click', function () { ir(i); });
    pista.appendChild(fig);
    return fig;
  });

  let actual = 0;
  const vistas = new Set([0]);

  function pintar() {
    const ancho = tarjetas[0].offsetWidth || 240;
    tarjetas.forEach(function (t, i) {
      const d = i - actual;
      const ad = Math.abs(d);
      const x = d * ancho * 0.74;
      const giro = d === 0 ? 0 : GIROS[i % GIROS.length];
      const escala = d === 0 ? 1 : Math.max(0.7, 0.84 - 0.06 * (ad - 1));
      t.style.transform = 'translateX(calc(-50% + ' + x + 'px)) rotate(' + giro + 'deg) scale(' + escala + ')';
      t.style.opacity = ad > 2 ? 0 : (d === 0 ? 1 : 0.8);
      t.style.zIndex = 10 - ad;
      t.style.pointerEvents = ad > 2 ? 'none' : 'auto';
      t.classList.toggle('activa', d === 0);
    });
    contador.textContent = (actual + 1) + ' / ' + tarjetas.length;
    vistas.add(actual);
    if (vistas.size === tarjetas.length) btnRegalo.hidden = false;
  }

  function ir(n) {
    actual = Math.max(0, Math.min(tarjetas.length - 1, n));
    pintar();
  }

  btnAnt.addEventListener('click', function () { ir(actual - 1); });
  btnSig.addEventListener('click', function () { ir(actual + 1); });

  // Deslizar con el dedo
  let inicioX = null;
  escenario.addEventListener('pointerdown', function (e) { inicioX = e.clientX; });
  escenario.addEventListener('pointerup', function (e) {
    if (inicioX === null) return;
    const dx = e.clientX - inicioX;
    inicioX = null;
    if (dx < -40) ir(actual + 1);
    else if (dx > 40) ir(actual - 1);
  });
  escenario.addEventListener('pointercancel', function () { inicioX = null; });

  window.addEventListener('resize', pintar);
  document.addEventListener('pantalla', function (e) { if (e.detail === 'fotos') pintar(); });
  pintar();
})();
