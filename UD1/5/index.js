//1. Error de sintaxis
let nombre = "Ana
console.log(nombre);

//Faltan comillas al final de la cadena 
"Ana";

//2. Uso incorrecto de variables
console.log(edad);
let edad = 20;

//La variable edad se usa antes de ser declarada

let edad2 = 20;
console.log(edad2);

//3. Operador incorrecto
let a = 5;
let b = 10;
if (a = b) {
  console.log("a es igual a b");
}

//Se usa el operador de asignación (=) en lugar del operador de comparación (== o ===)  

if (a == b) 
{}


//4. Bucle infinito
let i = 0;
while (i < 5) {
  console.log(i);
}

//Falta incrementar el valor de i dentro del bucle
i++;

//5. Error en funciones
function saludar() {
  console.log("Hola " + nombre);
}
saludar();

//La variable nombre no está definida dentro del alcance de la función

let nombre = "";

//6. Error en arrays
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[3]);

//El índice 3 está fuera del rango del array (0-2)
console.log(frutas[2]);

//7. Error con objetos
let persona = { nombre: "Ana", edad: 25 };
console.log(persona.apellido.toUpperCase());

//La propiedad apellido no existe en el objeto persona
persona.apellido = "Gomez";
console.log(persona.apellido.toUpperCase());

//8. Error en concatenación
let a = 5;
let b = "10";
console.log(a + b);

//El operador + concatena una cadena y un número, resultando en "510"
console.log(a + Number(b)); 
//O convertir b a número
let b = 10;

//9. Error con if-else
let nota = 8;
if (nota > 5);
{
  console.log("Aprobado");
} 
else 
{
  console.log("Reprobado");
}

//El punto y coma después de la condición if termina la instrucción if prematuramente
if (nota > 5)

//10. Mini-reto 🎯
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i <= numeros.length; i++) {
  console.log(numeros[i]);
}
//El bucle intenta acceder a un índice fuera del rango del array (0-4)
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}