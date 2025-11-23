//Ejercicios con Math en JavaScript
//1
function valorAbsoluto(n) {
    return Math.abs(n);
}
// Ejemplos
console.log(valorAbsoluto(5));
console.log(valorAbsoluto(-7.2));

//2
function mostrarRedondeos(n) {
    console.log("Número original:", n);
    console.log("Math.round:", Math.round(n));
    console.log("Math.ceil: ", Math.ceil(n));
    console.log("Math.floor:", Math.floor(n));
}
// Ejemplo
mostrarRedondeos(4.3);

//3
function potenciasYRaices(base, exponente) {
    const potencia = Math.pow(base, exponente);
    const raizCuadrada = Math.sqrt(base);
    console.log("Potencia: ", potencia);
    console.log("Raíz cuadrada: ", raizCuadrada);
}
// Ejemplo
potenciasYRaices(3, 4);

//4
function valorMaximoYMinimo(array) {
    console.log("Minimo Array:", Math.min(...array));
    console.log("Maximo Array:", Math.max(...array));
}
// Ejemplo
valorMaximoYMinimo([10, -5, 3, 99, 42]);

//Nivel 2 – Aleatoriedad
//5
function numeroAleatorio() {
    console.log(Math.random());
}
// Ejemplo
numeroAleatorio();

//6
function dadoVirtual() {
    const dado = Math.floor(Math.random() * 6) + 1;
    console.log("Número del dado:", dado);
}
// Ejemplo
dadoVirtual();

//7
function numeroAleatorioEnRango(min, max) {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Número aleatorio entre " + min + " y " + max +": "+numero);
}
// Ejemplo
numeroAleatorioEnRango(1, 100);

//Nivel 3 – Trigonometría y logaritmos
//8
function calcularSenoCoseno(grados) {
    const radianes = grados * (Math.PI / 180);
    console.log("Seno de " + grados + "°: " + Math.sin(radianes));
    console.log("Coseno de " + grados + "°: " + Math.cos(radianes));
}
// Ejemplo
calcularSenoCoseno(45);

//9
function calcularTangenteYArcoTangente(grados) {
    const radianes = grados * (Math.PI / 180);
    console.log("Tangente de " + grados + "°: " + Math.tan(radianes));
    console.log("Arco tangente de " + grados + "°: " + Math.atan(radianes) * (180 / Math.PI) + "°");
}
// Ejemplo
calcularTangenteYArcoTangente(60);

//10
function calcularLogaritmoNatural(n) {
    console.log("Logaritmo natural de " + n + ": " + Math.log(n));
}
// Ejemplo
calcularLogaritmoNatural(10);

//Nivel 4 – Retos aplicados
//11
numAleat=Math.floor(Math.random() * 100) + 1;;
numJug=0;
while (numAleat !== numJug ){
    if (numJug==0) {
        numJug=Number(prompt("Adivina el número entre 1 y 100:"));
    }
    if (numJug < numAleat) {
        numJug=Number(prompt("Demasiado Bajo. Adivina el número entre 1 y 100:"));
    } else {
        numJug=Number(prompt("Demasiado Alto. Adivina el número entre 1 y 100:"));
    }
    if (numJug === numAleat) {
        console.log("¡Felicidades! Has adivinado el número.");
    }
}

//12
function distanciaEntrePuntos(x1, y1, x2, y2) {
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    console.log("La distancia entre los puntos es: " + distancia);
}
// Ejemplo
distanciaEntrePuntos(3, 4, 7, 1);
//13
function girarRuleta() {
    const numeroGanador = Math.floor(Math.random() * 36)+1;
    console.log("El número ganador es: " + numeroGanador);
}

// Ejemplo
girarRuleta();

//14
//14
function generarContraseña(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let contraseña = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(indiceAleatorio);
    }
    console.log("Contraseña generada: " + contraseña);
}
// Ejemplo
generarContraseña(8);