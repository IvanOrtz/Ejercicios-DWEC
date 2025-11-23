window.onload = () => {
    iniciar();
};
function iniciar(){
    let provinciasAndalucia = ["almeria","cadiz","cordoba","granada","huelva","jaen","malaga","sevilla"];
    let paises = ["españa","argentina","mexico","francia","italia","japon","portugal","grecia"];
    let animales = ["perro","gato","elefante","leon","tiburon","jirafa","caballo","aguila"];
    let frutas = ["manzana","pera","naranja","platano","fresa","sandia","melon","kiwi"];
    let colores = ["rojo","verde","azul","amarillo","negro","blanco","morado","rosa"];
    let categorias = [provinciasAndalucia,paises,animales,frutas,colores];
    let vidas = 5;
    let letrasAdivinadas = [];
    let categoriaIndex=0;
    let categoria;
    let palabraSecreta;
    let palabraSinAdivinar = document.getElementById("adivina");
    const alfabeto = document.getElementById("alfabeto");
    let pVidas = document.getElementById("vidas");
    pVidas.innerHTML = "Vidas restantes: " + vidas;
    nuevaCategoriaYPalabra();
    mostrarPalabra();
    alfabeto.addEventListener("click", (e) => {
        if (e.target.tagName == "BUTTON"){
            if (palabraSecreta.includes(e.target.id)) {
                e.target.style.backgroundColor = "green";
                letrasAdivinadas.push(e.target.id);
            } else {
                e.target.style.backgroundColor = "red";
                vidas--;
                pVidas.innerHTML = "Vidas restantes: " + vidas;
            }
            e.target.disabled = true;
            mostrarPalabra();
            if (vidas <= 0) {
                pVidas.innerHTML = "Vidas restantes: "+vidas+"<br><b>Has perdido</b>";
                desactivarAlfabeto();
                reiniciar();
            }
        }
    });
    function mostrarPalabra() {
        let palabraOculta = "";
        palabraSecreta.split("").forEach(letra => {
            if (letrasAdivinadas.includes(letra)) {
                palabraOculta += letra + "";
            } else {
                palabraOculta += "_";
            }
        });
        palabraSinAdivinar.innerHTML = palabraOculta.split("").join(" ");
        if (palabraOculta == palabraSecreta) {
            pVidas.innerHTML = "Vidas restantes: " + vidas + "<br><b>Has ganado</b>";
            desactivarAlfabeto();
            reiniciar();
        }
    }
    function reiniciar(){
        let btn = document.createElement("button");
        let espacioReiniciar = document.getElementById("espacioReiniciar");
        btn.innerHTML = "Reiniciar";
        btn.id = "reiniciar";
        espacioReiniciar.appendChild(btn);
        btn.addEventListener("click", ()=>{
            espacioReiniciar.removeChild(btn);
            vidas = 5;
            pVidas.innerHTML = "Vidas restantes: " + vidas;
            letrasAdivinadas = [];
            reiniciarAlfabeto();
            nuevaCategoriaYPalabra();
            mostrarPalabra();
        });
    }
    function nuevaCategoriaYPalabra(){
        categoriaIndex = Math.floor(Math.random() * categorias.length);
        categoria = categorias[categoriaIndex];
        cambiarCategoria(categoriaIndex);
        palabraSecreta = categoria[Math.floor(Math.random() * categoria.length)];
    }
    function desactivarAlfabeto() {
        alfabeto.querySelectorAll("button").forEach(btn => {
            btn.disabled = true;
        });
    }
    function reiniciarAlfabeto(){
        alfabeto.querySelectorAll("button").forEach(btn => {
            btn.disabled = false;
            btn.style.backgroundColor = "white";
        });
    }
    function cambiarCategoria(categoriaIndex){
        let categoriaActual = "";
        switch(categoriaIndex) {
            case 0:
                categoriaActual = "Provincias de Andalucía";
                break;
            case 1:
                categoriaActual = "Países";
                break;
            case 2:
                categoriaActual = "Animales";
                break;
            case 3:
                categoriaActual = "Frutas";
                break;
            case 4:
                categoriaActual = "Colores";
                break;
            default:
                categoriaActual = "Sin categoría seleccionada";
        }
        let cat=document.getElementById("categoria");
        cat.innerText ="The Chosen Category Is "+ categoriaActual;
    }
}
