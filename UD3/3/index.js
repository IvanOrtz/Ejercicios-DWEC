//Treasure hunt
//                  +-------------------------+
//                  ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
//                  +----+----+----+----+-----¦
//                  ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
//                  +----+----+----+----+-----¦
//                  ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
//                  +----+----+----+----+-----¦
//                  ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
//                  +----+----+----+----+-----¦
//                  ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
//                  +-------------------------+
//Do you like treasure hunts? In this problem you are to write a program to explore the above array for a treasure. The values in the array are clues. Each cell contains an integer between 11 and 55; for each value the ten's digit represents the row number and the unit's digit represents the column number of the cell containing the next clue. Starting in the upper left corner (at 1,1), use the clues to guide your search of the array. (The first three clues are 11, 34, 42). The treasure is a cell whose value is the same as its coordinates. Your program must first read in the treasure map data into a 5 by 5 array. Your program should output the cells it visits during its search, and a message indicating where you found the treasure.
function encontrarTesoro(mapa) {
  let fila = 1;
  let columna = 1;
  let tesoro = false;
  let recorrido = [];
    while (!tesoro) {
        let valor = mapa[fila - 1][columna - 1];
        recorrido.push(`(${fila},${columna}) -> ${valor}`);
        if (valor === fila * 10 + columna) {
            tesoro = true;
            recorrido.push(`Tesoro encontrado en (${fila},${columna}) con valor ${valor}`);
        } else {
            fila = Math.floor(valor / 10);
            columna = valor % 10;
        }
    }
    return recorrido;
}
let mapa = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
];
console.log(encontrarTesoro(mapa).join('\n'));

//Develop a function wich be able to create a random treasure hunt like the previous one. As arguments it will recibe the dimensions of the array (at least 5x5) and must return a valid treasure hunt array.
function crearMapaTesoro(filas, columnas, numSaltos) {
    for (let i = 0; i < filas; i++) {
        mapa[i] = [];
        for (let j = 0; j < columnas; j++) {
            mapa[i][j] = 0;
        }
    }
    let fila = 1;
    let columna = 1;
    for (let salto = 1; salto < numSaltos; salto++) {
        let nuevoFila, nuevoColumna;
        do {
            nuevoFila = Math.floor(Math.random() * filas) + 1;
            nuevoColumna = Math.floor(Math.random() * columnas) + 1;
        } while (nuevoFila === fila && nuevoColumna === columna);
        mapa[fila - 1][columna - 1] = nuevoFila * 10 + nuevoColumna;
        fila = nuevoFila;
        columna = nuevoColumna;
    }
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (mapa[i][j] === 0) {
                let nuevoFila, nuevoColumna;
                do {
                    nuevoFila = Math.floor(Math.random() * filas) + 1;
                    nuevoColumna = Math.floor(Math.random() * columnas) + 1;
                } while (nuevoFila === i + 1 && nuevoColumna === j + 1);
                mapa[i][j] = nuevoFila * 10 + nuevoColumna;
            }
        }
    }
    mapa[fila - 1][columna - 1] = fila * 10 + columna; // Tesoro
    return mapa;
}
mapaAleatorio = crearMapaTesoro(5, 5, 4);
console.log('Mapa aleatorio:');
mapaAleatorio.forEach(valor => console.log(valor.join(' ')));
console.log(encontrarTesoro(mapaAleatorio).join('\n'));
