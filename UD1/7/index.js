//1
{
    let num1 = Number(prompt("Ingrese el primer número"));
    let num2 = Number(prompt("Ingrese el segundo número"));

    // Tu código aquí para mostrar suma, resta, multiplicación y división
    console.log("suma: "+(num1+num2)+ " resta: "+(num1-num2)+ " division: "+(num1/num2))
}
//2
{
    let numero = Number(prompt("Ingrese un número"));
    // Usa un condicional para determinar si es par o impar
    let resultado = (numero % 2 == 0) ? "par" : "impar";
    console.log("El número " + numero + " es " + resultado + ".");
}
//3
{
    let a = Number(prompt("Número 1"));
    let b = Number(prompt("Número 2"));
    let c = Number(prompt("Número 3"));
    // Escribe un condicional para encontrar el mayor
     let mayor;
    if (a >= b && a >= c) {
        mayor = a;
    } else if (b >= a && b >= c) {
        mayor = b;
    } else {
        mayor = c;
    }
    console.log("El mayor es: " + mayor);
}
//4
{
    let num = Number(prompt("Ingrese un número"));
    // Usa un bucle for para mostrar la tabla de multiplicar
    for (let i = 1; i <=10; i++) {
        console.log(num+"x"+i+"= "+num*i);
        
    }
}
//5
{
    let N = Number(prompt("Ingrese un número"));
    // Usa un bucle for y una variable acumuladora para sumar
     let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i;
    }
    console.log("La suma de los números del 1 al "+N+ " es " +suma);
}
//6
{
    let positivos = 0;
    let negativos = 0;

    for(let i = 0; i < 5; i++) {
        let num = Number(prompt(`Ingrese el número ${i+1}`));
        // Incrementa positivos o negativos según corresponda
        let parimpar = (num >=0) ? positivos++ : negativos++;
    }
    console.log("Positivos: "+ positivos+ " Negativos: "+negativos)
}
//7
{
    let num = Number(prompt("Ingrese un número"));
    // Usa un bucle para verificar si es divisible por algún número menor que él
    let esPrimo = true;
    for (let i = 2; i < num && esPrimo==true; i++) {
        if (num % i == 0) {
            esPrimo = false;
        }
    }
    if (num < 2) {
    console.log(num + " no es primo.");
    } else if (esPrimo) {
    console.log(num + " es primo.");
    } else {
    console.log(num + " no es primo");
    }
}
//8
{
    let numero = Number(prompt("Ingrese un número"));
    let factorial = 1;
    // Calcula el factorial con un bucle
    for (let i = 1; i <= numero; i++) {
    factorial *= i;
    }
    console.log("El factorial de " + numero + " es " + factorial);
}
//9
{
    let N = Number(prompt("Ingrese un número"));
    // Usa un bucle y el operador % para imprimir los pares
    for (let i = 1; i <= N; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
//10
{
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intento;

    while(intento !== numeroSecreto) {
        intento = Number(prompt("Adivina el número entre 1 y 10"));
        // Indica si el intento es mayor, menor o correcto
         if (intento > numeroSecreto) {
        console.log("El número es menor. Intenta de nuevo.");
        } else if (intento < numeroSecreto) {
            console.log("El número es mayor. Intenta de nuevo.");
        } else {
            console.log("¡Correcto! Has adivinado el número.");
        }
    }
}