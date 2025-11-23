/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */
function isOdd(x){
    let resultado=false;
    if (x%2!=0){
        resultado=true;
    }
    return resultado;
}
console.log(isOdd(3));
/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */
function inRange(x,min,max){
    let resultado=false;
    if (x>min&&x<max){
        resultado = true;
    }
    return resultado;
}
console.log(inRange(2,-4,10));
/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */
function getBiggestNumber(numbers){
    let resultado=numbers[0];
    for (let i=0;i<numbers.length;i++){
        if (numbers[i]>resultado){
            resultado=numbers[i];
        }
    }
    return resultado;
}
console.log(getBiggestNumber([3,8,2,1,10]));
/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */
function getPercentage(number,percentage){
    let resultado=(number*percentage)/100;
    return resultado;
}
console.log(getPercentage(200,10));
/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */
function getRandomColorSequence(colors,length){
    let resultado=[];
    for (let i=0;i<length;i++){
        let colorAleatorio = colors[Math.floor(Math.random() * colors.length)];
        resultado.push(colorAleatorio);
    }
    return resultado;
}
console.log(getRandomColorSequence(["red","blue","green"],4));
/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */
function getRockPaperScissor(){
    let jugadas=["rock","paper","scissor"];
    let resultado=jugadas[Math.floor(Math.random() * jugadas.length)];
    return resultado;
}
console.log(getRockPaperScissor());
/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */
function getRockPaperScissorRandomSequence(length){
    let jugadas=["rock","paper","scissor"];
    let resultado=[];
    for (let i=0;i<length;i++){
        let jugadaAleatoria = jugadas[Math.floor(Math.random() * jugadas.length)];
        resultado.push(jugadaAleatoria);
    }
    return resultado;
}
console.log(getRockPaperScissorRandomSequence(4));
/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */
function filterNumbersGreaterThan(numbers,number){
    let resultado=[];
    for (let i=0;i<numbers.length;i++){
        if (numbers[i]<number){
            resultado.push(numbers[i]);
        }
    }
    return resultado;
}
console.log(filterNumbersGreaterThan([3,8,12,1,7,4],7));
/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */
function getFactorial(x){
    let resultado=1;
    for (let i=1;i<=x;i++){
        resultado=resultado*i;
    }
    return resultado;
}
console.log(getFactorial(4));
/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */
function areArraysEqual(a,b){
    let resultado=true;
    if (a.length!=b.length){
        resultado=false;
    }else{
        for (let i=0;i<a.length;i++){
            if (a[i]!=b[i]){
                resultado=false;
            }
        }
    }
    return resultado;
}
console.log(areArraysEqual([1,4],[1,4]));
/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */
function toHackerSpeak(text){
    let resultado="";
    for (let i=0;i<text.length;i++){
        if (text[i].toUpperCase()=="A"){
            resultado=resultado+"4";
        }else if (text[i].toUpperCase()=="E"){
            resultado=resultado+"3";
        }
        else if (text[i].toUpperCase()=="I"){
            resultado=resultado+"1";
        }else if (text[i].toUpperCase()=="O"){
            resultado=resultado+"0";
        }else if (text[i].toUpperCase()=="S"){
            resultado=resultado+"5";
        }else{
            resultado=resultado+text[i];
        }
    }
    return resultado;
}
console.log(toHackerSpeak("I'm a hacker now"));
/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */
function getFileExtension(file){
    let resultado="";
    let punto=file.lastIndexOf(".");
    if (punto!=-1){
        resultado=file.substring(punto+1);
    }
    return resultado;
}
console.log(getFileExtension("imagen.jpg"));
/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {[][]} arr - Array 2D a "aplanar" 
 * @returns {[]} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
 */
function flatArray(arr){
    let resultado=[];
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<arr[i].length;j++){
            resultado.push(arr[i][j]);
        }
    }
    return resultado;
}
console.log(flatArray([[1,5,4],[3,10],[2,5]]));
/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */
function removeDuplicates(arr){
    let resultado=[];
    for (let i=0;i<arr.length;i++){
        if (!resultado.includes(arr[i])){
            resultado.push(arr[i]);
        }
    }
    return resultado;
}
console.log(removeDuplicates([4,5,10,4,10,2]));
/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string 
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 * 
 * @example
 *  countLetter("a", "javascript") // returns 2
 */
function countLetter(letter,text){
    let resultado=0;
    for (let i=0;i<text.length;i++){
        if (text[i].toUpperCase()==letter.toUpperCase()){
            resultado=resultado+1;
        }
    }
    return resultado;
}
console.log(countLetter("a","javascript"));
/**
 * @name canPlay
 * @description Devuelve si dada una mano de Uno y una carta en la mesa, puede jugar o tiene que retirar del mazo. Las cartas
 * tienen uno de 4 colores posibles (red, blue, green or yellow) y un número del 1 al 9. Una carta se escribe como un string
 * con color y número. Por ejemplo: "yellow 3", "red 6". Se puede jugar si la carta en la mano coincide en color o en número
 * con la carta en la mesa
 *
 * @param {string[]} hand - Array de cartas que tiene en la mano 
 * @param {string} face - Carta que está en la mesa
 * @returns {Boolean} - Devuelve true si puede jugar alguna carta, o false si tiene que retirar del mazo
 * 
 * @example
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "red 2") // returns true
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5") // returns true
 *   canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4") // returns false
 *   canPlay(["yellow 3", "red 8"], "green 2") // returns false
 */
function canPlay(hand,face){
    let resultado=false;
    let partesCartaMesa=face.split(" ");
    let colorMesa=partesCartaMesa[0];
    let numeroMesa=partesCartaMesa[1];
    for (let i=0;i<hand.length;i++){
        let partesCartaMano=hand[i].split(" ");
        let colorMano=partesCartaMano[0];
        let numeroMano=partesCartaMano[1];
        if (colorMano==colorMesa||numeroMano==numeroMesa){
            resultado=true;
        }
    }
    return resultado;
}
console.log(canPlay(["yellow 3","yellow 5","red 8"],"red 2"));
console.log(canPlay(["yellow 3","yellow 5","red 8"],"blue 5"));
console.log(canPlay(["yellow 3","blue 5","red 8","red 9"],"green 4"));
console.log(canPlay(["yellow 3","red 8"],"green 2"));
/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar 
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 * 
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */
function removeWords(str,words){
    let resultado="";
    let arr=str.split(" ");
    for (let i=0;i<arr.length;i++){
        if (!words.includes(arr[i])){
            if (resultado==""){
                resultado=arr[i];
            }else{
                resultado+=" "+arr[i];
            }
        }
    }
    return resultado;
}
console.log(removeWords("This is a really bad test",["really","bad"]));
/**
 * @name getRange
 * @description Dado dos números, devuelve un array con los números enteros sucesivos entre ellos, puede incluir los números 
 * iniciales o no
 *
 * @param {number} a 
 * @param {number} b
 * @param {boolean} [inclusive=true] inclusive // Parámetro opcional, valor por defecto true
 * @returns {number[]} - Array de números entre a y b, incluyendo a y b
 * 
 * @example
 *   getRange(5, 10) // returns [5, 6, 7, 8, 9 ,10]
 *   getRange(3, -2) // returns [3, 2, 1, 0, -1, -2]
 *   getRange(-5, -10, false) // returns [-6, -7, -8, -9]
 */
function getRange(a,b,inclusive=true){
    let resultado=[];
    if (inclusive){
        if (a<b){
            for (let i=a;i<=b;i++){
                resultado.push(i);
            }
        }else{
            for (let i=a;i>=b;i--){
                resultado.push(i);
            }
        }
    }else{
        if (a<b){
            for (let i=a+1;i<b;i++){
                resultado.push(i);
            }
        }else{
            for (let i=a-1;i>b;i--){
                resultado.push(i);
            }
        }
    }
    return resultado;
}
console.log(getRange(5,10));
console.log(getRange(3,-2));
console.log(getRange(-5,-10,false));