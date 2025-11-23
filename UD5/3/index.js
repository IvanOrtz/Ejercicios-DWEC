const cartas = document.querySelectorAll(".tablero-cartas .carta");
const imagenes = [
  "./imgs/foto1.png",
  "./imgs/foto2.png",
  "./imgs/foto3.png",
  "./imgs/foto4.jpg",
  "./imgs/foto5.png",
  "./imgs/foto1.png",
  "./imgs/foto2.png",
  "./imgs/foto3.png",
  "./imgs/foto4.jpg",
  "./imgs/foto5.png"
];

let primeraCarta = null;
let segundaCarta = null;
let bloqueado = false;

// Mezcla de cartas
imagenes.sort(() => Math.random() - 0.5);

// Asignar imagen a cada carta
for (let i = 0; i < cartas.length; i++) {
    cartas[i].dataset.cara = imagenes[i];
}

cartas.forEach(carta => {
    carta.addEventListener("click", () => {

        // Si el juego está procesando dos cartas, no permitir clics
        if (bloqueado) return;

        // Evitar seleccionar la misma carta dos veces
        if (carta === primeraCarta) return;

        // Mostrar la imagen real de la carta
        carta.style.backgroundImage = `url('${carta.dataset.cara}')`;

        if (!primeraCarta) {
            // Primera carta seleccionada
            primeraCarta = carta;
        } else {
            // Segunda carta seleccionada
            segundaCarta = carta;
            bloqueado = true;

            // Comparación de imágenes
            if (primeraCarta.dataset.cara === segundaCarta.dataset.cara) {

                // Pareja encontrada: desactivar clics en esas cartas
                primeraCarta.style.pointerEvents = "none";
                segundaCarta.style.pointerEvents = "none";

                primeraCarta = null;
                segundaCarta = null;
                bloqueado = false;

            } else {
                // No coinciden: darlas vuelta después de un segundo
                setTimeout(() => {
                    primeraCarta.style.backgroundImage = "url('./imgs/carta-alreves.png')";
                    segundaCarta.style.backgroundImage = "url('./imgs/carta-alreves.png')";

                    primeraCarta = null;
                    segundaCarta = null;
                    bloqueado = false;
                }, 1000);
            }
        }
    });
});
