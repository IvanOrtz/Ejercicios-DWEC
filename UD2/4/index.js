//Nivel 1 – Manipulación básica
//1. Longitud de un string
let string = "JavaScript";
console.log("La longitud de JavaScript es: " + string.length)

//2. Acceso a caracteres
let string2 = "Hola mundo";
console.log("El primer caracter es: " + string2.charAt(0) + " y la ultima es: " + string2.charAt(string2.length - 1));

//3. Mayúsculas y minúsculas
let frase = "Programar es divertido";
console.log("A mayusculas: " + frase.toUpperCase());
console.log("A minisculas: " + frase.toLowerCase());

//4. Concatenación
const frase1 = "Hola";
const frase2 = " mundo";
//+
console.log(frase1 + frase2);
//concat
console.log(frase1.concat(frase2));

//Nivel 2 – Búsqueda y extracción
//5. Índices de caracteres
let frase3 = "Hola mundo";
console.log("La primera o está: " + frase3.indexOf("o"));
console.log("La última o está: " + frase3.lastIndexOf("o"));

//6. Subcadenas
let subcadena = "JavaScript es genial";
console.log("Del 0 al 10: " + subcadena.substring(0,10));
console.log("Del 0 al 10: " + subcadena.substring(14,20));

//7. Reemplazo de texto
let texto = "El perro corre mas rápido";
let nuevoTexto = texto.replace("perro", "gato")
console.log(nuevoTexto);

//8. Incluye o empieza con
let textoo = "Frontend Developer";

console.log(textoo.includes("end"));      
console.log(textoo.startsWith("Front"));    
console.log(textoo.endsWith("per"));      

//9. Dividir un string
let cadena =  "rojo,verde,azul,amarillo";
let convertir = cadena.split(",");

console.log(convertir);

//10. Repetir texto
let repetir = "Hola";
let repetido = repetir.repeat(5);

console.log(repetido);

//11. Eliminar espacios
let espacios = "   Hola mundo   ";
let limpio = espacios.trim();

console.log(limpio);

//12. Padding
let numero = "7";
let resultado = numero.padStart(3, "0");

console.log(resultado);

//13. Contar vocales
function contarVocales(cadena) 
{
    let vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;
    cadena = cadena.toLowerCase(); 

    for (let i = 0; i < cadena.length; i++) 
    {
        if (vocales.includes(cadena[i])) 
        {
            contador++;
        }
    }

    return contador;
}

console.log(contarVocales("Hola yisas el crack")); 

//14. Palíndromo
function esPalindromo(palabra) 
{
    palabra = palabra.toLowerCase();
    let invertida = "";

    for (let i = palabra.length - 1; i >= 0; i--) 
    {
        invertida += palabra[i];
    }

    return palabra === invertida;
}

console.log(esPalindromo("radar")); 

//15. Invertir string
let aInvertir = "JavaScript";
let invertido = "";

for (let i = aInvertir.length - 1; i >= 0; i--) 
{
    invertido += aInvertir[i];
}

console.log(invertido); 

//16. Capitalizar frase
function capitalizar(frase) 
{
    let palabras = frase.split(" ");
    let resultado = [];

    for (let i = 0; i < palabras.length; i++)
    {
        let palabra = palabras[i];
        let primera = palabra.charAt(0).toUpperCase();
        let resto = palabra.slice(1);

        resultado.push(primera + resto);
    }

    return resultado.join(" ");
}


console.log(capitalizar("hola mundo desde javascript"));

//17. Ocultar parte de un string
let tarjeta = "1234567812345678";

let ultimos4 = tarjeta.slice(-4); 
let oculto = "*".repeat(tarjeta.length - 4) + ultimos4;

console.log(oculto);

//18. Contador de palabras
let fraseContar = "El lenguaje JavaScript es muy poderoso";

let palabras = fraseContar.split(" "); 
let cantidad = palabras.length;

console.log("Numero de palabras:", cantidad);
