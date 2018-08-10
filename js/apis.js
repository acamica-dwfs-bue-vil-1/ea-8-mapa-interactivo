var mapa, // Mapa que vamos a modificar
    nombreUbicacion;
/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
const posicionCentral = {lat: 24.6961343, lng: 84.98695470000007}; 
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
