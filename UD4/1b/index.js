window.onload = function(){iniciar();};
function iniciar(){
    cazaColor();
    elBotonCambiante();
    sigueInstruccion();
    pruebaReflejos();
    atrapaElNumero();
    simonDice();
    carreraBotones();
}
function cazaColor() {
let divColores = document.getElementById("colores");
const colorSeleccion = document.getElementById("colorSeleccion");
let acertado = document.getElementById("acertado");
const colores = ["rojo", "amarillo", "azul", "verde"];
let color = colores[Math.floor(Math.random() * colores.length)];
colorSeleccion.innerHTML = `Selecciona el color ${color}`;
  divColores.addEventListener("click",(e)=>{
        if (e.target.id!="colores"){
        if (e.target.id==color){
            acertado.innerHTML="Has acertado";
            color = colores[Math.floor(Math.random() * colores.length)];
            colorSeleccion.innerHTML = `Selecciona el color ${color}`;
        }
        else{
            acertado.innerHTML="Has fallado";
        }
        }
    removeEventListener("click",(e));
  })
}
function elBotonCambiante(){
    const boton= document.getElementById("botonCambiante");
    boton.addEventListener("mouseover",(e)=>{
        e.target.style.backgroundColor="#3853caff"
        removeEventListener("mouseover",(e));
    });
    boton.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = "#46c3e5ff"; // Color original cuando se quita el mouse
        removeEventListener("mouseout",(e));
    });
    boton.addEventListener("click",(e)=>{
        e.target.textContent="¡Me hiciste click!"
        removeEventListener("click",(e));
    })
}
function sigueInstruccion(){
    const posibilidades=[
  "0","1","2","3","4","5","6","7","8","9",
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];
let random = Math.floor(Math.random() * posibilidades.length);
let instruccion=document.getElementById("instruccion");
instruccion.innerHTML=("Presiona la tecla "+posibilidades[random]);
document.onkeydown = null;
let anterior;
document.addEventListener("keydown",(event)=>{
    if (event.repeat) return; // ignora si mantiene pulsada la tecla
    if (event.key === posibilidades[random]&&event.key!=anterior) {
    anterior=event.key;
      random = Math.floor(Math.random() * posibilidades.length);
      instruccion.innerHTML = "Presiona la tecla " + posibilidades[random];
      removeEventListener("keydown",(event));
    }
});
}
function pruebaReflejos(){
const circle = document.getElementById("circle");
const mensaje = document.getElementById("mensaje");

let puedeClic = false;
let timer;
let tiempoInicio;
mensaje.innerHTML = "Espera a que se ponga verde...";
circle.style.backgroundColor = "gray";
const tiempo = Math.random() * 5000; // 2–5 segundos
timer = setTimeout(() => {
circle.style.backgroundColor = "green";
mensaje.innerHTML = "¡Haz clic ahora!";
puedeClic = true;
tiempoInicio = Date.now(); // para medir tiempo de reacción 
}, tiempo);

// Evento de clic en el círculo
 circle.onclick = function () {
    if (!puedeClic) {
      // Clic demasiado pronto
      mensaje.innerHTML = "¡Demasiado pronto!";
      clearTimeout(timer);
      circle.style.backgroundColor = "red";
      setTimeout(pruebaReflejos, 2000);
    } else {
      // Medir tiempo de reacción
      const reaccion = Date.now() - tiempoInicio;
      if (reaccion < 400) {
        mensaje.innerHTML = `¡Reflejos rápidos! (${reaccion} ms)`;
        circle.style.backgroundColor = "lime";
      } else {
        mensaje.innerHTML = `¡Reflejos lentos! (${reaccion} ms)`;
        circle.style.backgroundColor = "red";
      }
      puedeClic = false;
      setTimeout(pruebaReflejos, 2000);
    }
  };
}
function atrapaElNumero(){
  const numeros=document.getElementById("numeros");
  const botones = [];
  // Obtener todos los botones del 1 al 9
  for (let i = 1; i <= 9; i++) {
    botones[i] = document.getElementById(i.toString());
  }
  let numero=(Math.floor(Math.random() * 9+1)).toString();
  botones[numero].style.background = "lightcyan";
  botones[numero].style.borderColor = "blue";
  numeros.addEventListener("click",(e)=>{
      if (e.target.id!="numeros"){
        if (e.target.id==numero){
            e.target.style.background="white";
            e.target.style.borderColor="#d0d0d0"
            numero = (Math.floor(Math.random() * 9 + 1)).toString();
          botones[numero].style.background = "lightcyan";
          botones[numero].style.borderColor = "blue";
          removeEventListener("click",(e));

        }
      }
    });
}
function simonDice() {
  const colores = ["red","blue","yellow","green"];
  const mensajeS = document.getElementById("mensajeS");
  const ronda=document.getElementById("ronda");
  const btnRed = document.getElementById("red");
  const btnBlue = document.getElementById("blue");
  const btnYellow = document.getElementById("yellow");
  const btnGreen = document.getElementById("green");

  let secuencia = [];
  let posicionUsuario = 0;
  let rondas=1;
  ronda.innerHTML="Ronda: "+rondas;
  // Función interna para manejar clics (asignada solo una vez)
  function manejarClick(color){
    if(color === secuencia[posicionUsuario]){
      posicionUsuario++;
      if(posicionUsuario === secuencia.length){
        mensajeS.innerHTML = "✅ ¡Correcto! Nueva ronda...";
        rondas++;
        ronda.innerHTML="Ronda: "+rondas;
        setTimeout(iniciarRonda, 500);
      }
    } else {
      mensajeS.innerHTML = "❌ ¡Fallaste! Reiniciando...";
      secuencia = [];
      rondas=1;
      ronda.innerHTML="Ronda: "+rondas;
      setTimeout(iniciarRonda, 500);
    }
  }

  btnRed.onclick = () => manejarClick("red");
  btnBlue.onclick = () => manejarClick("blue");
  btnYellow.onclick = () => manejarClick("yellow");
  btnGreen.onclick = () => manejarClick("green");

  // Función para iniciar una ronda
  function iniciarRonda(){
    secuencia.push(colores[Math.floor(Math.random()*colores.length)]);
    mensajeS.innerHTML = "Observa la secuencia";

    let i = 0;

    (function mostrar(){
      if(i >= secuencia.length){
        mensajeS.innerHTML = "Tu turno";
        posicionUsuario = 0;
        return;
      }

      let btn;
      if(secuencia[i] === "red") btn = btnRed;
      if(secuencia[i] === "blue") btn = btnBlue;
      if(secuencia[i] === "yellow") btn = btnYellow;
      if(secuencia[i] === "green") btn = btnGreen;

      const original = btn.style.backgroundColor;
      btn.style.backgroundColor = "white"; // parpadeo
      setTimeout(()=>{
        btn.style.backgroundColor = original;
        i++;
        setTimeout(mostrar, 400);
      }, 400);
    })();
  }

  // Iniciar primera ronda
  iniciarRonda();
}
function carreraBotones(){
const boton = document.getElementById("botonCorrer");
const barra = document.getElementById("barra");
let progreso = 0;

boton.onclick = function() {
  progreso += 1;
  if(progreso > 100) progreso = 100;
  barra.style.width = progreso + "%";
};
}