const reloj = document.getElementById("reloj");
const fecha = document.getElementById("fecha");
function actualizarReloj() {
    const ahora = new Date();
    reloj.innerHTML = String(ahora.getHours()).padStart(2, '0')+":"+ String(ahora.getMinutes()).padStart(2, '0')+":"+ String(ahora.getSeconds()).padStart(2, '0');
    fecha.innerHTML = String(ahora.getDate()).padStart(2, '0') + "/" + String(ahora.getMonth() + 1).padStart(2, '0') + "/" + ahora.getFullYear();
}
setInterval(actualizarReloj);
setInterval(actualizarReloj, 1000);