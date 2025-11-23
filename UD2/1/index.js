//Nivel 1 – Conversión y propiedades básicas
//1
// Cadena 1
const c1 = "123";
console.log("Cadena:", c1);
console.log("  Number():     ", Number(c1));
console.log("  parseInt():   ", parseInt(c1));
console.log("  parseFloat(): ", parseFloat(c1));

// Cadena 2
const c2 = "3.14";
console.log("Cadena:", c2);
console.log("  Number():     ", Number(c2));
console.log("  parseInt():   ", parseInt(c2));
console.log("  parseFloat(): ", parseFloat(c2));

// Cadena 3
const c3 = "abc";
console.log("Cadena:", c3);
console.log("  Number():     ", Number(c3));
console.log("  parseInt():   ", parseInt(c3));
console.log("  parseFloat(): ", parseFloat(c3));

//2
function esEntero(valor) {
  return Number.isInteger(valor);
}
// Ejemplos:
console.log(esEntero(5));
console.log(esEntero(3.14));

//3
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hello"));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(0/0));
console.log(Number.isNaN(parseInt("abc")));
//4
const resultado = 1 / 0;
console.log("1 / 0 =", resultado);
console.log("Number.isFinite(1/0):", Number.isFinite(resultado));

//Nivel 2 – Métodos de instancia
//5
const num = 3.141592;
const con2 = num.toFixed(2);
const con4 = num.toFixed(4);
const con6 = num.toFixed(6);
console.log("2 decimales:", con2);
console.log("4 decimales:", con4);
console.log("6 decimales:", con6);
//6
const n = 123456;
const exp2 = n.toExponential(2);
console.log("Notación exponencial (2 decimales):", exp2);

//7
const val = 255;

const bin = val.toString(2);
const oct = val.toString(8);
const hex = val.toString(16);

console.log("Binario:", bin);
console.log("Octal:", oct);
console.log("Hexadecimal:", hex);
//8
const x = 123.456789;

const p4 = x.toPrecision(4); 
const p7 = x.toPrecision(7); 

console.log("4 cifras significativas:", p4);
console.log("7 cifras significativas:", p7);

//Nivel 3 – Retos aplicados
//12
function validarNum(cadena){
    let num = Number(cadena);
  if(!isNaN(num)){
    console.log("El valor es un número válido.");
    if(Number.isInteger(Number(num))){
      console.log("El número es entero.");
    }else{
      console.log("El número es decimal.");
    }
  }
  else{
    console.log("El valor no es un número válido.");
  }
}
// Ejemplos
validarNum("42");
validarNum("3.14");
validarNum("abc");