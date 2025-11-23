//1.Generador de matrículas aleatorias
function generarMatricula() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    let matricula = '';

    for (let i = 0; i < 3; i++) {
        matricula += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    for (let i = 0; i < 4; i++) {
        matricula += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }

    return matricula;
}
console.log(generarMatricula()); //Ejemplo de uso del generador de matrículas


//2.Simulador de dados múltiples
function lanzarDados(numDados, numCaras) {
    const resultados = [];
    for (let i = 0; i < numDados; i++) {
        resultados.push(Math.floor(Math.random() * numCaras) + 1);
    }
    return resultados;
}
console.log(lanzarDados(2, 6)); //Ejemplo de uso del simulador de dados (2 dados de 6 caras)



//3.Generador de identificadores únicos
function generarIDUnico(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';

    for (let i = 0; i < longitud; i++) {
        id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return id;
}
console.log(generarIDUnico(10)); //Ejemplo de uso del generador de ID único


//4.Validador de contraseñas
function validarContrasena(contrasena) {
    let esValida = true;
    const longitudMinima = 8;
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneMinuscula = /[a-z]/.test(contrasena);
    const tieneNumero = /[0-9]/.test(contrasena);
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena);    
    if (contrasena.length < longitudMinima){
        esValida = false;
        console.log(`La contraseña debe tener al menos ${longitudMinima} caracteres.`);
    }
    if (!tieneMayuscula) {
        esValida = false;
        console.log('La contraseña debe contener al menos una letra mayúscula.');
    }
    if (!tieneMinuscula) {
        esValida = false;
        console.log('La contraseña debe contener al menos una letra minúscula.');
    }
    if (!tieneNumero) {
        esValida = false;
        console.log('La contraseña debe contener al menos un número.');
    }
    if (!tieneCaracterEspecial) {
        esValida = false;
        console.log('La contraseña debe contener al menos un carácter especial.');
    }
    if (esValida) {
        console.log('La contraseña es válida.');
    }
    else {
        console.log('La contraseña no es válida.');
    }
}
//Ejemplo de uso del validador de contraseñas
console.log(validarContrasena('Password123!')); //true
console.log(validarContrasena('passWord123:')); //false


//5.Compresor de texto (RLE) con Run-Length Encoding:
function comprimirTextoRLE(texto) {
    let comprimido = '';
    let contador = 1;
    for (let i = 1; i <= texto.length; i++) {
        if (texto[i] === texto[i - 1]) {
            contador++;
        } else {
            comprimido += texto[i - 1] + (contador > 1 ? contador : '');
            contador = 1;
        }
    }
    return comprimido;
}
//ejemplo de uso del compresor y RLE
console.log(`Texto comprimido: `+comprimirTextoRLE('aaabbbccdaa'));


//6.Descompresor de texto (RLE)
function descomprimirTextoRLE(textoComprimido) {
    let descomprimido = '';
    for (let i = 0; i < textoComprimido.length; i+=2) {
        const char = textoComprimido[i];
        const count = parseInt(textoComprimido[i + 1]) || 1;
        descomprimido += char.repeat(count);
    }
    return descomprimido;
}
//ejemplo de uso del descompresor y RLE
console.log(`Texto descomprimido: `+descomprimirTextoRLE('a3b3c2d1a2'));


//7.Generador tarjetas de crédito falsas (algoritmo de Luhn)
function calcularLuhnDigit(prefijo) {
  const longitudFinal = prefijo.length + 1;
  let suma = 0;
  for (let i = 0; i < prefijo.length; i++) {
    let dig = Number(prefijo[i]);
    const posDesdeDer = longitudFinal - i - 1;
    if (posDesdeDer % 2 === 1) {
      dig = dig * 2;
      if (dig > 9) dig -= 9;
    }
    suma += dig;
  }
  return (10 - (suma % 10)) % 10;
}

function generarTarjetaCreditoFalsa() {
  let prefijo = '';
  for (let i = 0; i < 15; i++) {
    prefijo += Math.floor(Math.random() * 10);
  }
  const check = calcularLuhnDigit(prefijo);
  const tarjeta = prefijo + check;
  console.log(tarjeta);
}
generarTarjetaCreditoFalsa(); //Ejemplo de uso del generador de tarjetas de crédito falsas
//8.Juego: adivina el número con intentos limitados
function adivinaElNumero(intentos) {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentosRestantes = intentos;
    while (intentosRestantes > 0) {
        const intento = parseInt(prompt(`Adivina el número (1-100). Te quedan ${intentosRestantes} intentos:`));
        if (intento === numeroSecreto) {
            console.log('¡Felicidades! Has adivinado el número.');
            return;
        } else if (intento < numeroSecreto) {
            console.log('El número es mayor.');
        }
        else {
            console.log('El número es menor.');
        }
        intentosRestantes--;
    }
    console.log(`Lo siento, has perdido. El número era ${numeroSecreto}.`);
}
adivinaElNumero(5);



//10.Juego de ahorcado simple
function juegoAhorcado(palabraSecreta, intentos) {
    let palabraAdivinada = '_'.repeat(palabraSecreta.length);
    let intentosRestantes = intentos;
    while (intentosRestantes > 0 && palabraAdivinada.includes('_')) {
        console.log('Palabra: '+palabraAdivinada.split('').join(' '));
        console.log( 'Intentos restantes: ' + intentosRestantes);
        const letra = prompt('Adivina una letra:').toLowerCase();
        if (palabraSecreta.includes(letra)) {
            let nuevaPalabraAdivinada = ''; 
            for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    nuevaPalabraAdivinada += letra;
                } else {
                    nuevaPalabraAdivinada += palabraAdivinada[i];
                }
            }
            palabraAdivinada = nuevaPalabraAdivinada;
        } else {
            intentosRestantes--;
            console.log('Letra incorrecta.');
        }
    }
    if (!palabraAdivinada.includes('_')) {
        console.log('¡Felicidades! Has adivinado la palabra: '+palabraSecreta);
    } else {
        console.log('Lo siento, has perdido. La palabra era: '+palabraSecreta);
    }
}
juegoAhorcado('javascript', 6);