// Pantalla 4: regalo que se abre tras varios toques.
(function () {
  const regalo = document.getElementById('regalo');
  const progreso = document.getElementById('progreso-regalo');
  const TOTAL = CONFIG.toquesRegalo;

  const corazones = [];
  for (let i = 0; i < TOTAL; i++) {
    const c = document.createElement('span');
    c.textContent = '♥';
    progreso.appendChild(c);
    corazones.push(c);
  }

  let toques = 0;
  let abierto = false;

  regalo.addEventListener('click', function () {
    if (abierto) return;
    toques++;
    corazones[toques - 1].classList.add('lleno');

    regalo.style.setProperty('--fuerza', String(1 + toques / TOTAL * 1.6));
    regalo.classList.remove('sacudir');
    void regalo.offsetWidth; // reinicia la animación
    regalo.classList.add('sacudir');

    if (toques >= TOTAL) {
      abierto = true;
      setTimeout(function () {
        regalo.classList.remove('sacudir');
        regalo.classList.add('abierto');
        Efectos.confeti();
        setTimeout(function () { App.ir('cupones'); }, 1800);
      }, 450);
    }
  });
})();
