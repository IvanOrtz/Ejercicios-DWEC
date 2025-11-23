// Tres en raya
class Jugador {
  static numJugadores = 0;

  constructor(nombre) {
    if (Jugador.numJugadores < 2) {
      Jugador.numJugadores++;
      this.nombre = nombre;
      this.numMarcas = 5;
      this.numJugador = Jugador.numJugadores;
    } else {
      console.log("Ya hay dos jugadores, no pueden haber más");
    }
  }
}

class TresEnRaya {
  resetear() {
    Jugador.numJugadores = 0;
  }

  generarTablero() {
    let tablero = [];
    for (let i = 0; i < 3; i++) {
      tablero[i] = [];
      for (let j = 0; j < 3; j++) {
        tablero[i][j] = " ";
      }
    }
    return tablero;
  }

  jugarTurno(tablero, jugador, posicioni, posicionj) {
    let turnoJugado = false;
    if (jugador.numMarcas > 0) {
      if (tablero[posicioni - 1][posicionj - 1] === " ") {
        tablero[posicioni - 1][posicionj - 1] = jugador.numJugador === 1 ? "X" : "O";
        jugador.numMarcas--;
        turnoJugado = true;
      } else {
        console.log("La posición ya está ocupada. Elige otra.");
      }
    } else {
      console.log("No te quedan más marcas");
    }
    return turnoJugado;
  }

  mostrarTablero(tablero) {
    console.log("Tablero:");
    tablero.forEach((fila) => console.log("| " + fila.join(" | ") + " |"));
  }

  comprobarGanador(tablero) {
    // Filas y columnas
    let ganador=false;
    for (let i = 0; i < 3; i++) {
      if (tablero[i][0] !== " " &&tablero[i][0] === tablero[i][1] &&tablero[i][1] === tablero[i][2])
        ganador= true;

      if (tablero[0][i] !== " " &&tablero[0][i] === tablero[1][i] &&tablero[1][i] === tablero[2][i])
        ganador= true;
    }

    // Diagonales
    if (tablero[0][0] !== " " &&tablero[0][0] === tablero[1][1] &&tablero[1][1] === tablero[2][2])
      ganador= true;

    if (tablero[0][2] !== " " &&tablero[0][2] === tablero[1][1] &&tablero[1][1] === tablero[2][0])
      ganador= true;

    return ganador;
  }

  jugar() {
    let nombre1 = prompt("¡Hola Jugador 1, dime tu nombre!: ");
    let nombre2 = prompt("¡Hola Jugador 2, dime tu nombre!: ");

    const jugador1 = new Jugador(nombre1);
    const jugador2 = new Jugador(nombre2);
    let tablero = this.generarTablero();
    this.mostrarTablero(tablero);

    let turno = 0;
    let jugar = true;

    while (jugar && turno < 9) {
      let jugadorActual = turno % 2 === 0 ? jugador1 : jugador2;
      console.log("Turno de: " + jugadorActual.nombre);
      console.log("----------------------------------------------------------------------------");

      let posicioni = parseInt(prompt(jugadorActual.nombre+": Fila (1-3): "));
      let posicionj = parseInt(prompt(jugadorActual.nombre+": Columna (1-3): "));

      while (isNaN(posicioni) ||isNaN(posicionj) ||posicioni < 1 ||posicioni > 3 ||posicionj < 1 ||posicionj > 3) {
        console.log("Posición inválida. Intenta de nuevo.");
        posicioni = parseInt(prompt(jugadorActual.nombre+": Fila (1-3): "));
        posicionj = parseInt(prompt(jugadorActual.nombre+": Columna (1-3): "));
      }

      if (this.jugarTurno(tablero, jugadorActual, posicioni, posicionj)) {
        this.mostrarTablero(tablero);
        turno++;

        if (this.comprobarGanador(tablero)) {
          console.log("¡El ganador es " + jugadorActual.nombre + "!");
          jugar = false;
        }
      }
    }

    if (!this.comprobarGanador(tablero)) {
      console.log("¡Empate!");
    }

    this.resetear();
    this.reiniciar();
  }

  reiniciar() {
    let reiniciar = prompt("¿Quieres volver a jugar? (Si/No): ");
    if (reiniciar && reiniciar.toLowerCase() === "si") {
      this.jugar();
    } else {
      console.log("¡Gracias por jugar!");
    }
  }
}

const tresEnRaya = new TresEnRaya();
tresEnRaya.jugar();