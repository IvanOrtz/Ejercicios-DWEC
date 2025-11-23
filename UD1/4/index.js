//4.10

document.write(`<h1>PRÁCTICA DE BUCLE FOR </h1>`)

for(let i=1; i<=6; i++) 
{
    document.write(`<h${i}>Cabecera h${i}</h${i}>`);
}

//4.11
let ncolumnas = parseInt(prompt("Introduce el número de columnas"));
let alto = parseInt(prompt("Introduce el alto de las celdas"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas"));

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="50">');

for(let i=1; i <= ncolumnas; i++)
{
    document.write('<td width="' + ancho + '">&nbsp;</td>');
} 

document.write('</tr>');
document.write('</table>');

//4.12
let ncolumnas2 = parseInt(prompt("Introduce el número de columnas"));
let alto2 = parseInt(prompt("Introduce el alto de las celdas"));
let ancho2 = parseInt(prompt("Introduce el ancho de las celdas"));

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="50">');

for(let i=1; i< 5; i++)
{
    if(i%2==0)
    {
        document.write('<td width = "50" bgcolor = "white"> &nbsp;</td>');
    }
    else
    {
        document.write('<td width = "50" bgcolor = "black"> &nbsp;</td>');
    }  
} 

document.write('</tr>');
document.write('</table>');

//4.13
let columnas = parseInt(prompt("Introduce el número de columnas"));
let alto3 = parseInt(prompt("Introduce el alto de las celdas"));
let ancho3 = parseInt(prompt("Introduce el ancho de las celdas"));

let i = 0;

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="50">');

while(i < columnas)
{
    document.write('<td width" ' + ancho3 + '"> &nbsp;</td>');
    i++;
}

document.write('</tr>');
document.write('</table>');

//4.14
let columnas4 = parseInt(prompt("Introduce el número de columnas"));
let alto4 = parseInt(prompt("Introduce el alto de las celdas"));
let ancho4 = parseInt(prompt("Introduce el ancho de las celdas"));

let j = 0;

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="50">');

while(j < columnas4)
{
    if(j%2==0)
    {
        document.write('<td width = "50" bgcolor = "white"> &nbsp;</td>');
    }
    else
    {
        document.write('<td width = "50" bgcolor = "black"> &nbsp;</td>');
    }  
    j++;
}

document.write('</tr>');
document.write('</table>');


//4.15
let num_adivinar = 10;
let num = parseInt(prompt("Adivina el número"));

while(num != num_adivinar)
{
    if(num < num_adivinar)
        {
            alert("El número es mayor");
            num = parseInt(prompt("Adivina el número"));
        }
    else
        {
            alert("El número es menor");
            num = parseInt(prompt("Adivina el número"));
        }
}

alert("¡Has acertado!");

//4.16
let num_adivinar1 = 10;
let num1;

do
{
    num1 = parseInt(prompt("Adivina el número"));

    if(num < num_adivinar1)
    {
            alert("El número es mayor");
    }
    else
    {
            alert("El número es menor");
    }
}while(num1 != num_adivinar1)

//4.17

for(let i = 1; i <= 10; i++)
{
    for(let j = 1; j <= 10; j++)
    {
        document.write(i + " x " + j + " = " + (i*j) + "<br>");
    }
}

//4.18
let columnas2 = parseInt(prompt("Número de columnas"));
let filas = parseInt(prompt("Número de filas"));
let ancho5 = parseInt(prompt("Ancho de las celdas"));
let alto5 = parseInt(prompt("Alto de las celdas"));

// 1ª sentencia antes del bucle externo
document.write('<table border="0" cellspacing="2" bgcolor="black">');

for(let i = 1; i <= filas; i++) {          // bucle externo (filas)
    document.write('<tr bgcolor="white" height="' + alto + '">'); // fila

    for(let j = 1; j <= columnas; j++) {   // bucle interno (columnas)
        document.write('<td width="' + ancho + '">&nbsp;</td>');
    }

    document.write('</tr>');  // cerrar fila después del bucle interno
}

// sentencia después de los dos bucles
document.write('</table>');   // cerrar tabla

//4.19
let tamaño = parseInt(prompt("Introduce el tamaño de la celda (px):"));

document.write('<table border="0" cellspacing="0">');

for(let fila = 1; fila <= 8; fila++) {
    document.write('<tr>');

    for(let col = 1; col <= 8; col++) {
        let color = (fila + col) % 2 === 0 ? "black" : "white";
        document.write('<td width="' + tamaño + '" height="' + tamaño + '" bgcolor="' + color + '"></td>');
    }

    document.write('</tr>');
}

document.write('</table>');
