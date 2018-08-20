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
    var circulo = new google.maps.Circle({
      center: centro,
      radius: 20000,
      visible: false
    });
    console.log(circulo)
  //CHEQUEAR CÓMO HACER PARA METER EL CIRCULO ACÁ
    let input = [document.getElementById('direccion'), document.getElementById('desde'), document.getElementById('hasta'), document.getElementById('agregar')];
    let options = {
      strictBounds: true
    }
    input.forEach((e) => {
      let autocompletar = new google.maps.places.Autocomplete(e, options);
      // autocompletar.setOptions({strictBounds: true})
      autocompletar.setBounds(circulo.getBounds());
    });
    
    // autocompletar.setBounds(circulo.getBounds());
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
    servicioLugares.nearbySearch(request, marcadorModulo.marcarLugares);
  }
  return {
    inicializar,
    buscarCerca
  }
})()
