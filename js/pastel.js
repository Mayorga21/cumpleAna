// Pantalla 1: pastel con velas. Se apagan soplando al micrófono o tocándolas.
(function () {
  const pastel = document.getElementById('pastel');
  const velas = Array.prototype.slice.call(document.querySelectorAll('.vela'));
  const btnSoplar = document.getElementById('btn-soplar');
  const aviso = document.getElementById('aviso-pastel');

  let apagadas = 0;
  let terminado = false;
  let stream = null;
  let ctx = null;

  function apagar(v) {
    if (v.classList.contains('apagada')) return;
    v.classList.add('apagada');
    apagadas++;
    if (apagadas === velas.length) terminar();
  }

  function terminar() {
    if (terminado) return;
    terminado = true;
    detenerMic();
    Efectos.confeti();
    setTimeout(function () { App.ir('mensaje'); }, 2200);
  }

  function detenerMic() {
    if (stream) stream.getTracks().forEach(function (t) { t.stop(); });
    if (ctx && ctx.close) ctx.close();
    stream = null;
    ctx = null;
  }

  velas.forEach(function (v) {
    v.addEventListener('click', function () { apagar(v); });
  });

  async function escucharSoplido() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      aviso.textContent = 'Este navegador no permite usar el micrófono. Toca las velas para apagarlas.';
      return;
    }
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (e) {
      aviso.textContent = 'Sin problema, toca las velas para apagarlas.';
      return;
    }
    btnSoplar.hidden = true;
    aviso.textContent = 'Ahora sopla fuerte hacia el celular';

    ctx = new (window.AudioContext || window.webkitAudioContext)();
    const fuente = ctx.createMediaStreamSource(stream);
    const analizador = ctx.createAnalyser();
    analizador.fftSize = 512;
    fuente.connect(analizador);
    const datos = new Uint8Array(analizador.fftSize);
    let fuerte = 0;

    (function medir() {
      if (terminado) return;
      analizador.getByteTimeDomainData(datos);
      let suma = 0;
      for (let i = 0; i < datos.length; i++) {
        const x = (datos[i] - 128) / 128;
        suma += x * x;
      }
      const rms = Math.sqrt(suma / datos.length);

      if (rms > 0.18) fuerte++; else fuerte = Math.max(0, fuerte - 1);
      pastel.classList.toggle('soplando', fuerte > 2);

      if (fuerte > 7) {
        const siguiente = velas.find(function (v) { return !v.classList.contains('apagada'); });
        if (siguiente) apagar(siguiente);
        fuerte = 0;
      }
      requestAnimationFrame(medir);
    })();
  }

  btnSoplar.addEventListener('click', escucharSoplido);
})();
