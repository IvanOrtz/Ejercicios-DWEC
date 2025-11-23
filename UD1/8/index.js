// Ejercicio 1: Edad y permiso
let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");

if (edad > 18 && permiso.toLowerCase() == "sí") {
    console.log("Puede entrar");
} else {
    console.log("No puede entrar");
}


// Ejercicio 2: Aprobado en materias
let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");

if (matematicas == "sí" || fisica == "sí" || quimica == "sí") {
    console.log("Puede pasar al siguiente nivel");
} else {
    console.log("No puede pasar al siguiente nivel");
}


// Ejercicio 3: Contraseña correcta
let contraseña = prompt("Ingrese la contraseña");

if (!(contraseña == "1234")) {
    console.log("Contraseña incorrecta");
} else {
    console.log("Acceso concedido");
}


// Ejercicio 4: Número dentro de rango
let numero = Number(prompt("Ingrese un número"));

if (numero >= 10 && numero <= 50) {
    console.log("El número está dentro del rango");
} else {
    console.log("El número está fuera del rango");
}


// Ejercicio 5: Mayoría de edad o tutor presente
edad = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");

if (edad >= 18 || tutor == "sí") {
    console.log("Puede entrar");
} else {
    console.log("No puede entrar");
}


// Ejercicio 6: Verificación de acceso
let usuario = prompt("Ingrese su usuario");
contraseña = prompt("Ingrese su contraseña");

if ((usuario == "admin" && contraseña == "1234") || (usuario == "invitado")) {
    console.log("Acceso válido");
} else {
    console.log("Acceso denegado");
}


// Ejercicio 7: Números positivos y menores que 100
numero = Number(prompt("Ingrese un número"));

if (numero > 0 && numero < 100) {
    console.log("El número es positivo y menor que 100");
} else {
    console.log("El número no cumple las condiciones");
}


// Ejercicio 8: Día laborable
let dia = prompt("Ingrese un día de la semana").toLowerCase();

if (dia === "lunes" || dia == "martes" || dia == "miércoles" || dia == "miercoles" || dia == "jueves" || dia == "viernes") {
    console.log("Es un día laborable");
} else {
    console.log("Es fin de semana");
}


// Ejercicio 9: Votación válida
edad = Number(prompt("Ingrese su edad"));
let nacionalidad = prompt("Ingrese su nacionalidad");

if (edad >= 18 && nacionalidad == "ciudadano") {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}


// Ejercicio 10: Control de acceso con bucle
usuario = "";
contraseña = "";

while (!(usuario == "admin" && contraseña == "1234")) {
    usuario = prompt("Usuario:");
    contraseña = prompt("Contraseña:");

    if (!(usuario == "admin" && contraseña == "1234")) {
        console.log("Usuario o contraseña incorrectos. Intente de nuevo.");
    }
}
console.log("¡Acceso permitido!");