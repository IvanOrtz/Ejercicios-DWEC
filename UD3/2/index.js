//1- Nivel Básico
//1. Crear un array con los nombres de 5 frutas e imprimir la primera y última.
//Métodos: length, acceso por índice [ ].
let frutas = ['manzana', 'banana', 'cereza', 'naranja', 'uva'];
console.log('Primera fruta:', frutas[0]);
console.log('Última fruta:', frutas[frutas.length - 1]);
//2. Añadir y eliminar elementos al inicio y al final del array.
//Métodos: push(), pop(), unshift(), shift().
frutas.push('kiwi'); // Añadir al final
console.log('Después de push:', frutas);
frutas.pop(); // Eliminar del final
console.log('Después de pop:', frutas);
frutas.unshift('fresa'); // Añadir al inicio
console.log('Después de unshift:', frutas);
frutas.shift(); // Eliminar del inicio
console.log('Después de shift:', frutas);
//3. Recorrer un array e imprimir sus elementos.
//Métodos: for, for...of, forEach().
console.log('Recorrer con for:');
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
console.log('Recorrer con for...of:');
for (let fruta of frutas) {
    console.log(fruta);
}
console.log('Recorrer con forEach:');
frutas.forEach(fruta => console.log(fruta));
//4. Buscar un elemento en un array de números.
//Métodos: indexOf(), includes().
let numeros = [10, 20, 30, 40, 50];
let buscarNumero = 30;
console.log('Index of', buscarNumero, ':', numeros.indexOf(buscarNumero));
console.log('Includes', buscarNumero, ':', numeros.includes(buscarNumero));
//5. Concatenar arrays y mostrar el resultado.
//Métodos: concat(), spread operator ....
let masNumeros = [60, 70, 80];
let concatenado = numeros.concat(masNumeros);
console.log('Concatenado con concat():', concatenado);
let concatenadoSpread = [...numeros, ...masNumeros];
console.log('Concatenado con spread operator:', concatenadoSpread);
//2- Nivel Intermedio
//6. Duplicar los valores de un array numérico.
//Método: map().
let duplicados = numeros.map(num => num * 2);
console.log('Duplicados con map():', duplicados);
//7. Filtrar los números pares de un array.
//Método: filter().
let pares = numeros.filter(num => num % 2 === 0);
console.log('Números pares con filter():', pares);
//8. Sumar todos los valores de un array.
//Método: reduce().
let suma = numeros.reduce((acum, num) => acum + num, 0);
console.log('Suma con reduce():', suma);
//9. Ordenar un array de nombres alfabéticamente y en orden inverso.
//Métodos: sort(), reverse().
let nombres = ['Carlos', 'Ana', 'Luis', 'Beatriz', 'David'];
let ordenados = [...nombres].sort();
console.log('Nombres ordenados alfabéticamente:', ordenados);
let inverso = [...nombres].reverse();
console.log('Nombres en orden inverso:', inverso);
//10. Convertir un array en una cadena de texto separada por comas.
//Método: join().
let cadena = frutas.join(', ');
console.log('Array convertido a cadena con join():', cadena);
//11. Dividir una cadena de texto en un array.
//Método: split().
let texto = 'rojo,verde,azul,amarillo';
let colores = texto.split(',');
console.log('Cadena dividida en array con split():', colores);
//3- Nivel Avanzado 
//12. Eliminar duplicados de un array.
let numDuplicados = [1, 2, 3, 2, 4, 1, 5];
let numerosUnicos = [...new Set(numDuplicados)];
console.log(numerosUnicos);
//13. Encontrar el número mayor y menor en un array.
let numsLista = [34, 65, 7, 47, 20, 23];
let numeroMayor = Math.max(...numsLista);
let numeroMenor = Math.min(...numsLista);
console.log(numeroMayor);
console.log(numeroMenor);
//14. Aplanar un array de arrays.
let matrizNumeros = [[1, 2], [3, 4]];
let matrizAplanada = matrizNumeros.flat();
console.log(matrizAplanada);
//15. Contar cuántas veces aparece un elemento en un array.
let arrayNumeros = [2, 3, 2, 5, 2, 3, 7];
let numeroBuscado2 = 2;
let contadorForEach = 0;
arrayNumeros.forEach(valor => {
    if (valor === numeroBuscado2) contadorForEach++;
});
console.log(contadorForEach);
//16. Transformar un array de objetos en un array de una sola propiedad.
const personasLista = [
  { nombre: "Ana", edad: 23 },
  { nombre: "Luis", edad: 30 }
];
let soloNombres = personasLista.map(p => p.nombre);
console.log(soloNombres);
//17. Combinar dos arrays (por ejemplo, de nombres y edades) en uno de objetos.
let edades = [19, 22, 20, 19];
let arrayJunto = nombresLista.map((nombre, i) => {
    return { nombre: nombre, edad: edades[i] };
});
console.log(arrayJunto);
//18. Ordenar un array de objetos según una propiedad.
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 20 }
];
usuarios.sort((a, b) => a.edad - b.edad);
console.log(usuarios);
//19. Extraer elementos únicos y ordenarlos de menor a mayor.
let numerosRepetidos = [6, 4, 9, 4, 2, 9, 3];
let numerosUnicosOrdenados = [...new Set(numerosRepetidos)].sort((a, b) => a - b);
console.log(numerosUnicosOrdenados);
//20. Usar encadenado de métodos: Dado un array de números, debes calcular la suma de los cuadrados de los números pares.
let numerosOperacion = [1, 2, 3, 4, 5, 6];
let sumaCuadradosPares = numerosOperacion.map(n => n * n).filter(n => n % 2 === 0).reduce((a, b) => a + b);
console.log(sumaCuadradosPares);

