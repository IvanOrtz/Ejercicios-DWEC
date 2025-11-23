
var map = L.map('map').setView([0,0], 19);
const puntitoRojo = L.circleMarker([0,0], { radius: 8, color: 'red', fillColor: 'red', fillOpacity: 0.9 }).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
{
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([0,0]).addTo(map);

function obtengoPosicion(posicion) 
{
    console.log(posicion.coords.latitude, posicion.coords.longitude);
    map.setView([posicion.coords.latitude, posicion.coords.longitude], 19);
    marker.setLatLng([posicion.coords.latitude, posicion.coords.longitude]);
    puntitoRojo.setLatLng([posicion.coords.latitude, posicion.coords.longitude]);
}

//3
function errorPosicion(err) 
{
    console.warn(`ERROR(${error.code}): ${error.message}`);
}      

if (navigator.geolocation) 
{
    navigator.geolocation.watchPosition(obtengoPosicion);
}
else 
{
    console.log("No se soporta la geolocalización");
}
//6. Mostrar en pantalla el valor de coords.accuracy.
console.log("Precisión: " + coords.accuracy + " metros.");

var listadoPuntos = [];
var map, polyline, marker;
function success(pos) 
{
  punto = [pos.coords.latitude, pos.coords.longitude];
  listadoPuntos.push(punto);

  if (listadoPuntos.length == 1) 
    {
        map = L.map("mapa").setView(punto, 20);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    marker = L.marker(punto).addTo(map);
    polyline = L.polyline(listadoPuntos).addTo(map);

    }
    else 
    {
        map.setView(punto, 20); 
        marker.setLatLng(punto);
        polyline.setLatLngs(listadoPuntos);
    }
}
