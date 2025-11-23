//1
{
    let numero = Number(prompt("Dime un numero: "));
    if (numero > 0) {
    console.log("El número es positivo");
    } 
    else{
    console.log("El número es negativo");
    }
}
//2
{
    let edad = Number(prompt("Dime tu edad "));
    if (edad > 17) {
    console.log("Mayor de edad(18 o más)");
    } 
    else{
    console.log("Menor de edad");
    }
}
//3
{
    let numero = 6;
    if (numero % 2 == 0) {
    console.log("El número es par");
    } 
    else{
    console.log("El número es impar");
    }
}
//4
{
    let calificacion = 5;
    if (calificacion > 4) {
    console.log("Aprobado");
    } 
    else{
    console.log("Reprobado");
    }
}
//5
{
    let num1 = 12;
    let num2 = 8;
    if (num1 > num2) {
    console.log("El mayor es:", num1);
    } else if (num2 > num1) {
    console.log("El mayor es:", num2);
    } else {
    console.log("Son iguales");
    }
}
//6
{
    let numero = 3; 
    switch (numero) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    }
}
//7
{
    let numero = 1; 
    switch (numero) {
    case 1:
        console.log("Opción A seleccionada");
        break;
    case 2:
        console.log("Opción B seleccionada");
        break;
    case 3:
        console.log("Opción C seleccionada");
        break;
    default:
        console.log("Opción no válida");
        break;
    }
}
//8
{
    let color = "rojo"; 
    switch (color) {
    case "rojo":
        console.log("Alto");
        break;
    case "amarillo":
        console.log("Precaución");
        break;
    case "verde":
        console.log("Avanza");
        break;
    }
}
//9
{
    let fruta = "Manzana"; 
    switch (fruta) {
    case "Manzana":
        console.log("Es una manzana roja");
        break;
    case "Plátano":
        console.log("Es un plátano amarillo");
        break;
    case "Uva":
        console.log("Es una uva morada");
        break;
    default:
        console.log("Fruta no reconocida");
        break;
    }
}
//10
{
    let nota = "A"; 
    switch (nota) {
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Muy bien");
        break;
    case "C":
        console.log("Bien");
        break;
    case "D":
        console.log("Suficiente");
        break;
    case "F":
        console.log("Reprobado");
        break;
    }
}