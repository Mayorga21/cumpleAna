// Pantalla 5: cupones que se voltean y se pueden reclamar. Lo reclamado se guarda en el celular.
(function () {
  const CLAVE = 'cumple-ana-cupones';
  const contenedor = document.getElementById('cupones');
  const carta = document.getElementById('carta');
  const T = CONFIG.textos;

  let reclamados = [];
  try { reclamados = JSON.parse(localStorage.getItem(CLAVE)) || []; } catch (e) { reclamados = []; }

  function guardar() {
    try { localStorage.setItem(CLAVE, JSON.stringify(reclamados)); } catch (e) { /* sin almacenamiento */ }
  }
  const modal = document.getElementById('modal-terminos');
  const abrir = document.getElementById('abrir-terminos');
  const cerrar = document.getElementById('cerrar-terminos');

  function abrirModal() { modal.hidden = false; }
  function cerrarModal() { modal.hidden = true; }

  abrir.addEventListener('click', abrirModal);
  cerrar.addEventListener('click', cerrarModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) cerrarModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrarModal(); });

  
  CONFIG.cupones.forEach(function (c, i) {
    const el = document.createElement('div');
    el.className = 'cupon';
    el.innerHTML =
      '<div class="cupon-int">' +
        '<div class="cara frente"><span class="num"></span><span class="icono">♥</span><span class="toca"></span></div>' +
        '<div class="cara dorso"><h3></h3><p></p><button class="boton boton-chico"></button></div>' +
      '</div>';

    el.querySelector('.num').textContent = 'Cupón ' + (i + 1);
    el.querySelector('.toca').textContent = T.cuponToca;
    el.querySelector('h3').textContent = c.titulo + (c.asterisco ? '*' : '');
    el.querySelector('p').textContent = c.detalle;

    const boton = el.querySelector('button');

    function marcar() {
      el.classList.add('reclamado');
      boton.textContent = T.cuponReclamado;
      boton.disabled = true;
    }

    if (reclamados.indexOf(i) !== -1) marcar();
    else boton.textContent = T.cuponReclamar;

    el.addEventListener('click', function () { el.classList.toggle('volteado'); });
    boton.addEventListener('click', function (e) {
      e.stopPropagation();
      if (reclamados.indexOf(i) === -1) {
        reclamados.push(i);
        guardar();
        Efectos.confeti();
      }
      marcar();
    });

    contenedor.appendChild(el);
  });

  CONFIG.carta.forEach(function (linea) {
    const p = document.createElement('p');
    p.textContent = linea;
    carta.appendChild(p);
  });
})();
