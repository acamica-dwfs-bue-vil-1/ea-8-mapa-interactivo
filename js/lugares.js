lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
    
    let centro = mapa.getCenter();
    console.log(centro);
    let circulo = new google.maps.Circle({
      center: centro,
      radius: 20000
      });
  //CHEQUEAR CÓMO HACER PARA METER EL CIRCULO ACÁ
    let input = document.getElementById('direccion');
    let options = {
      bounds: circulo.getBounds(),
    }
    let autocompletar = new google.maps.places.Autocomplete(input, options);
    // autocompletar.setBounds(circulo.getBounds());
    autocompletar.setOptions({strictBounds: true})
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */
    let tipoDeLugar = document.getElementById('tipoDeLugar').value;
    let radio = document.getElementById('radio').value;

    var request = {
      location: posicion,
      radius: radio,
      type: [tipoDeLugar]
    };
    console.log(request);
    servicioLugares.nearbySearch(request, marcadorModulo.marcarLugares);
  }
  return {
    inicializar,
    buscarCerca
  }
})()
