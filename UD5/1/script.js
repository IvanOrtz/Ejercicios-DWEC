window.onload = () => {
    let empezado=false;
    const startBtn = document.getElementById("startBtn");
    const stopBtn  = document.getElementById("stopBtn");
    const resetBtn = document.getElementById("resetBtn");
    const panelTiempo=document.getElementById("tiempo")
    let intervalo;
    let tiempo= new Date();
    tiempo.setHours(0,0,0);
    startBtn.addEventListener("click",()=>{
        if(!empezado){
            intervalo=setInterval(actualizar,1000);
            empezado=true;
        }
    })
    stopBtn.addEventListener("click",()=>{
        clearInterval(intervalo);
        empezado=false;
    });
    resetBtn.addEventListener("click",()=>{
        tiempo.setHours(0,0,0);
        panelTiempo.innerHTML= String(tiempo.getMinutes()).padStart(2,"0")+":"+String(tiempo.getSeconds()).padStart(2,"0");
        clearInterval(intervalo);
        empezado=false;
    })
    function actualizar(){
        tiempo.setSeconds(tiempo.getSeconds()+1);
        panelTiempo.innerHTML= String(tiempo.getMinutes()).padStart(2,"0")+":"+String(tiempo.getSeconds()).padStart(2,"0");
    }
};