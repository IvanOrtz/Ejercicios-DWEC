//1
let numero = 10;
if (numero > 5) {
  numero == 20;
}
console.log(numero);
//El problema es que se usa == en vez de = y numero nunca cambia


//2
let ciudad = "Madrid";
console.log(Ciudad);
//El problema es que Ciudad no existe porque las mayusculas importan


//3
function sumar(a, b) {
  let resultado = a + b;
}
console.log(sumar(2, 3));
//El problema es que la funcion no devuelve nada y da undefined


//4
let i = 1;
while (i > 5) {
  console.log(i);
  i++;
}
//El problema es que la condicion i > 5 nunca se cumple y no entra al bucle


//5
let saludo = "Hola";
let nombre = "Luis";
console.log(saludo + , nombre);
//El problema es que hay una coma que no debe de estar


//6
let dias = ["Lunes", "Martes", "Miercoles"];
console.log(dias[3]);
//El problema es que dias[3] no existe porque solo hay indices 0,1,2


//7
let usuario = { nombre: "Ana", edad: 25 };
console.log(usuario.nombre.toLowerCasee());
//El problema es que toLowerCasee no existe porque esta mal escrito


//8
let edad = 18;
if (edad = 18) {
  console.log("Tienes 18 anos");
}
//El problema es que se usa = en vez de === y la condicion siempre es true


//9
let numeros = [1, 2, 3, 4, 5];
for (let j = 0; j < numeros.length; j++); {
  console.log(numeros[j]);
}
//El problema es que el for tiene un ; que rompe el bucle


//10
let palabra = "javascript";
for (let k = 0; k <= palabra.length; k++) {
  console.log(palabra[k]);
}
//El problema es que se usa <= y accede a palabra[length] que no existe, se debe de usar <, para q llegue a la ultima letra
