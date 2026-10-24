// Efectos visuales reutilizables: confeti y corazones flotantes.
const Efectos = (function () {
  const COLORES = ['#f7b6cf', '#ffd9e8', '#bcd7f5', '#fff7f2', '#ffc857'];

  function confeti() {
    if (typeof confetti !== 'function') return;
    const base = { colors: COLORES, spread: 70, startVelocity: 45, ticks: 220, zIndex: 20 };
    confetti(Object.assign({ particleCount: 90, angle: 60, origin: { x: 0, y: 0.8 } }, base));
    confetti(Object.assign({ particleCount: 90, angle: 120, origin: { x: 1, y: 0.8 } }, base));
    setTimeout(function () {
      confetti(Object.assign({ particleCount: 120, spread: 110, origin: { x: 0.5, y: 0.5 } }, base));
    }, 350);
  }

  function flotantes() {
    const fondo = document.getElementById('fondo');
    if (!fondo) return;
    const simbolos = ['♥', '✦', '♥', '✧'];
    for (let i = 0; i < 16; i++) {
      const s = document.createElement('span');
      s.className = 'flotante';
      s.textContent = simbolos[i % simbolos.length];
      s.style.left = Math.random() * 100 + '%';
      s.style.fontSize = 12 + Math.random() * 20 + 'px';
      s.style.animationDuration = 9 + Math.random() * 10 + 's';
      s.style.animationDelay = -Math.random() * 14 + 's';
      if (i % 3 === 0) s.style.color = '#bcd7f5';
      fondo.appendChild(s);
    }
  }

  return { confeti: confeti, flotantes: flotantes };
})();
