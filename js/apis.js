var mapa, nombreUbicacion; // Mapa que vamos a modificar
var centroDeCirculo;
    
/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
const posicionCentral = {lat: -34.6140108, lng: -58.459012400000006};
// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
    /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */
  mapa = new google.maps.Map(document.getElementById('map'), {
    center: posicionCentral,
    zoom: 18
  });

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
