//Informacion del navegador
let navegador = document.getElementById("navegador");
navegador.innerHTML = "Navegador: " + navigator.userAgent;
let plataforma = document.getElementById("plataforma");
plataforma.innerHTML = "Plataforma: " + navigator.platform;
let idioma = document.getElementById("idioma");
idioma.innerHTML = "Idioma: " + navigator.language;
let resolucion = document.getElementById("resolucion");
resolucion.innerHTML = "Resolución: " + screen.width + "x" + screen.height;
//Navegacion
let urlactual = document.getElementById("urlactual");
urlactual.innerHTML = "URL actual: " + window.location.href;
//Redirección
let mdm = document.getElementById("mdm");
mdm.window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank");
//Informacion de la pantalla
let resolucionTotaal = document.getElementById("resolucionTotal");
resolucionTotal.innerHTML = "Resolución total: " + screen.width + "x" + screen.height;
let colorProfundidad = document.getElementById("colorProfundidad");
colorProfundidad.innerHTML = "Profundidad de color: " + screen.colorDepth + " bits";
let pixelProfundidad = document.getElementById("pixelProfundidad");
pixelProfundidad.innerHTML = "Profundidad de pixel: " + screen.pixelDepth + " bits";
let orientacion = document.getElementById("orientacion");
orientacion.innerHTML = "Orientación: " + screen.orientation.type;
let areaDisponible = document.getElementById("areaDisponible");
areaDisponible.innerHTML = "Área disponible: " + screen.availWidth + "x" + screen.availHeight;

