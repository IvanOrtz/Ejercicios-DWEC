if(navigator.geolocation){
let longitude;
let latitude;
let ultimalatitud;
let ultimalongitud;


function success(pos) {
  //1
  longitude = pos.coords.longitude;
  latitude = pos.coords.latitude;

  console.log("Latitud: " + latitude);
  console.log("Longitud: " + longitude);
  //2
  let coordenadas = document.getElementById("coordenadas");
  coordenadas.innerHTML = `Tu posición actual es: <br>Latitud: ${latitude} <br> Longitud: ${longitude} <br>`;
  //6
  console.log("Precisión: "+pos.coords.accuracy + " metros.");
  //5
  let mapa = document.getElementById("mapa");
  mapa.innerHTML = `<iframe width="1500" height="550" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${latitude},${longitude}&z=18&output=embed"> </iframe>`;
  //8.
    // Actualizar iframe con la ruta desde la última posición hasta la actual
    if(ultimalatitud==undefined&&ultimalongitud==undefined){
      ultimalatitud=latitude;
      ultimalongitud=longitude;
    }
    let mapa2 = document.getElementById("mapa2");
      mapa2.innerHTML = `<iframe width="1500" height="550" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBSMxBYcfp2--eaHXF0e3ZxEDQt0D0i_lM&origin=${ultimalatitud},${ultimalongitud}&destination=${latitude},${longitude}&mode=walking"> </iframe>`;
}
//3
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

//navigator.geolocation.getCurrentPosition(success, error);
//4.Actualizar ubicación en tiempo real
  navigator.geolocation.watchPosition(success,error);
//7.Calcular la distancia entre dos ubicaciones (la actual y una fija)
function calcularDistancia(lat2, lon2) { 
  // Fórmula de Haversine
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - latitude) * Math.PI / 180; 
  const dLon = (lon2 - longitude) * Math.PI / 180; 
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(latitude * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const distancia = R * c; // Distancia en km
  console.log(`La distancia es ${distancia} km`);
}
if(!longitude==undefined && !latitude==undefined){
calcularDistancia(48.8584, 2.2945); // Coordenadas de la Torre Eiffel
}
}
