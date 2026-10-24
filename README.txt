Feliz cumpleaños, Ana: página interactiva

Estructura
  index.html              Pantallas de la página
  css/                    Estilos, un archivo por pantalla (base, pastel, carrusel, regalo, cupones)
  js/config.js            Textos, frases de las fotos y cupones. Aquí se personaliza todo
  js/                     Lógica, un archivo por pantalla (pastel, carrusel, regalo, cupones), más app.js y efectos.js
  assets/fotos/           Las 5 fotos de las polaroids
  assets/audio/           La canción (opcional)
  assets/placeholders/    Imagen de ejemplo que se muestra si falta una foto

Cómo poner las fotos
  Copia 5 fotos dentro de assets/fotos/ con estos nombres exactos: foto1.jpg, foto2.jpg, foto3.jpg, foto4.jpg, foto5.jpg
  También se aceptan .jpeg, .png y .webp. Mientras falte alguna, se ve la imagen de ejemplo.
  Fotos cuadradas se ven mejor. Conviene que cada una pese menos de 500 KB para que cargue rápido en el celular.

Cómo cambiar frases, cupones y carta
  Abre js/config.js y edita los textos. No hay que tocar nada más.

Música (opcional)
  Copia la canción en assets/audio/ con el nombre cancion.mp3. Si no existe, el botón de música no aparece.
  La música arranca con el primer toque, porque los celulares bloquean el audio automático.

Cómo probarla
  Se puede abrir index.html con doble clic. Las fuentes y el confeti se cargan desde internet.
  El micrófono para soplar las velas solo funciona desde un link https. Si no, se apagan tocando las velas.

Cómo enviársela
  Subir la carpeta completa a Netlify Drop (app.netlify.com/drop) o a GitHub Pages. Da un link https listo para mandar.
