// Todo lo que se personaliza vive aquí: textos, frases de las fotos y cupones.
// No hace falta tocar ningún otro archivo para cambiar el contenido.

const CONFIG = {
  // Opcional: pon tu canción en assets/audio/ con este nombre. Si no existe, el botón de música no aparece.
  musica: 'assets/audio/cancion.mp3',

  // Imagen que se muestra mientras no haya una foto real en assets/fotos/
  respaldoFoto: 'assets/placeholders/foto-ejemplo.svg',

  // Pon tus fotos en assets/fotos/ con estos nombres (foto1.jpg, foto2.jpg, ...).
  // Se aceptan jpg, jpeg, png y webp. Solo cambia la frase de abajo.
 fotos: [
  { archivo: 'assets/fotos/foto1', frase: 'Ganando siempre' },
  { archivo: 'assets/fotos/foto2', frase: 'Con esa sonrisa unica' },
  { archivo: 'assets/fotos/foto3', frase: 'Mis ojos favoritos' },
  { archivo: 'assets/fotos/foto4', frase: 'Contigo todo es mejor' },
  { archivo: 'assets/fotos/foto5', frase: 'Y lo que falta por vivir' },
  { archivo: 'assets/fotos/foto6', frase: 'Tú hombre sin camisa 😍' }
],

  // Cuántos toques necesita el regalo para abrirse
  toquesRegalo: 7,

  textos: {
    pastelTitulo: 'Pide un deseo, Mi niña',
    btnSoplar: 'Soplar con el micrófono',
    pastelAyuda: 'O toca las velas para apagarlas',

    saludo: 'Feliz cumpleaños, Ana',
    mensaje: 'Mi vida, hoy cumples 18 y quiero que este día se sienta tan especial como tú. Hice algo para ti.',
    btnFotos: 'Ver nuestros momentos',

    fotosTitulo: 'Nuestros momentos',
    fotosAyuda: 'Desliza o usa las flechas',
    btnRegalo: 'Ir a mi regalo',

    regaloTitulo: 'Tengo un regalo para ti, Mi amor',
    regaloAyuda: 'Tócalo varias veces para abrirlo',

    cuponesTitulo: 'Tus cupones, Mi vida',
    cuponesSub: 'Toca cada cupón para descubrirlo y reclámalo cuando quieras.',
    cuponToca: 'Toca para descubrir',
    cuponReclamar: 'Reclamar',
    cuponReclamado: 'Reclamado ♥',

    terminosLink: 'Términos y condiciones**',
    terminosTitulo: 'Términos y condiciones',
    terminosTexto: 'Los cupones marcados con asterisco (*) se pueden reclamar a partir de que yo tenga plata otra vez. No tienen fecha de vencimiento.',
    terminosCerrar: 'Entendido'
  },

  // Cupones de ejemplo: cámbialos por cosas que de verdad puedas cumplir.
  cupones: [
    { titulo: 'Cena a tu elección', detalle: 'Tú eliges el lugar y el plato. Yo invito.', asterisco: true },
    { titulo: 'Tarde de películas', detalle: 'Tu película favorita, snacks y cero celular.'},
    { titulo: 'Salida sorpresa', detalle: 'Un plan que yo organizo solo para ti.', asterisco: true },
    { titulo: 'Mi silecio 10 minutos', detalle: 'Cuando lo necesites, sin preguntas.' },
    { titulo: 'Postre favorito', detalle: 'El que quieras, cuando quieras.', asterisco: true },
    { titulo: 'Carta escrita a mano', detalle: 'Una carta mía, solo para ti, con calma.' }
  ],

  // Borrador de la carta final. Cada línea es un párrafo.
  carta: [
    'Ana, mi niña,',
    'Hoy cumples 18 y lo único que quiero es que lo disfrutes tanto como yo disfruto tenerte en mi vida.',
    'Gracias por ser mi vida, mi amor, mi lugar favorito.',
    'Esto es solo un pedacito de lo que quiero darte. Lo demás lo vamos a vivir juntos.',
    'Te amo. Feliz cumpleaños.'
  ]
};
