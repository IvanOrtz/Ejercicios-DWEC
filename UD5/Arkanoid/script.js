window.onload = () => {
    // CREACIÓN DE LADRILLOS
    const contenedorLadrillos = document.getElementById("ladrillos");
    const filas = 5;
    const columnas = 6;

    for (let f = 1; f <= filas; f++) {
        for (let c = 0; c < columnas; c++) {
            const ladrillo = document.createElement("div");
            ladrillo.classList.add("ladrillo", `tipo${f}`);
            contenedorLadrillos.appendChild(ladrillo);
        }
    }
    let velocidadX = 3;
    let velocidadY = -3;
    let x = 450;
    let y = 550;
    let posicionBarra = 400;

    let puntos = 0;
    let vidas = 3;

    const bola = document.getElementById("bola");
    const barra = document.getElementById("barra");
    const campo = document.querySelector(".campo_juego");
    const ladrillos = Array.from(document.querySelectorAll(".ladrillo"));

    const txtPuntos = document.getElementById("puntos");
    const txtVidas = document.getElementById("vidas");

    function reiniciarBola() {
        x = campo.clientWidth / 2 - bola.offsetWidth / 2;
        y = campo.clientHeight - 80;
        velocidadX = 3;
        velocidadY = -3;
        posicionBarra = campo.clientWidth / 2 - barra.offsetWidth / 2;

        barra.style.left = posicionBarra + "px";
        bola.style.left = x + "px";
        bola.style.top = y + "px";
    }

    reiniciarBola();


    // BBUCLE PRINCIPAL DEL JUEGO
    setInterval(() => {
        x += velocidadX;
        y += velocidadY;

        bola.style.left = x + "px";
        bola.style.top = y + "px";

        const maxX = campo.clientWidth - bola.offsetWidth;
        const maxY = campo.clientHeight - bola.offsetHeight;

        // Rebote lateral
        if (x >= maxX || x <= 0) velocidadX *= -1;

        // Rebote techo
        if (y <= 0) velocidadY *= -1;

        
        //COLISIÓN CON LA BARRA
        
        const topBarra = barra.offsetTop;
        const anchoBarra = barra.offsetWidth;

        if (
            y + bola.offsetHeight >= topBarra &&
            x + bola.offsetWidth >= posicionBarra &&
            x <= posicionBarra + anchoBarra &&
            velocidadY > 0
        ) {
            velocidadY *= -1;
        }

        // COLISIÓN CON LOS LADRILLOS

        ladrillos.forEach(ladrillo => {
            if (ladrillo.removido) return;

            const bx = x;
            const by = y;
            const bw = bola.offsetWidth;
            const bh = bola.offsetHeight;
            const lx = ladrillo.offsetLeft;
            const ly = ladrillo.offsetTop;
            const lw = ladrillo.offsetWidth;
            const lh = ladrillo.offsetHeight;
            const colision =
                bx < lx + lw &&
                bx + bw > lx &&
                by < ly + lh &&
                by + bh > ly;

            if (colision) {
                velocidadY *= -1;          // rebote
                ladrillo.removido = true;  // marcar como eliminado
                ladrillo.style.visibility = "hidden";

                puntos += 10;
                txtPuntos.textContent = puntos;
            }
        });


        
        // BOLA CAE -1 UNA VIDA
        
        if (y >= maxY && vidas>=1) {
            vidas--;
            txtVidas.textContent = vidas;

            if (vidas <= 0) {
                campo.removeChild(bola)
                alert("GAME OVER");
            } else {
                reiniciarBola();
            }
        }

    }, 16);
    
    // MOVER LA BARRA
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft" && posicionBarra > 0) {
            posicionBarra -= 20;
        }
        if (e.key === "ArrowRight" &&
            posicionBarra < campo.clientWidth - barra.offsetWidth
        ) {
            posicionBarra += 20;
        }

        barra.style.left = posicionBarra + "px";
    });
};
