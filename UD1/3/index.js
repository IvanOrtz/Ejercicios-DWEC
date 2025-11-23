//1
{
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
//2
{
  let suma = 0;
  for (let i = 1; i <= 5; i++) {
    suma += i;
  }
console.log("Suma del 1 al 5: "+ suma);
}
//3
{
  const numero = 7;
  for (let i = 1; i <= 10; i++) {
    console.log(numero+" x "+i+" = "+numero*i);
  }
}
//4
{
  let contador = 10;
  while (contador >= 1) {
    console.log(contador);
    contador--;
  }
}
//5
{
  let suma = 0;
  let n = 1;
  while (suma < 20) {
    suma += n;
    n++;
  }
  console.log("Suma final: "+ suma);
}
//6
{
  let contraseña;
  contraseña = Number(prompt("Introduce la contraseña: "));
  if (contraseña!=1234){
    do {
      contraseña = Number(prompt("Incorrecto.Introduce la contraseña: "));
    } while (contraseña !== 1234);
    console.log("Contraseña correcta");
  }
}
//7
{
let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
}