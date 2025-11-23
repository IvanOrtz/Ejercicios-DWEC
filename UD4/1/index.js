window.onload = function(){iniciar();};
function iniciar(){
    //1
    //document.addEventListener("click",()=>{alert("Has clickado")});
    //2
    document.addEventListener("mousemove",(event)=>{console.log("Posicion del raton: x="+event.clientX+" y="+event.clientY)})
    //9
    let imagenActiva = null;
    let offsetX, offsetY;

    let imagenes= document.getElementById("imagenes");
    imagenes.addEventListener("mousedown", (e) => {
        imagenActiva = e.target;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        imagenActiva.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
      if (imagenActiva) {
        imagenActiva.style.left = `${e.pageX - offsetX}px`;
        imagenActiva.style.top = `${e.pageY - offsetY}px`;
      }
    });

    document.addEventListener("mouseup", () => {
      if (imagenActiva) {
      imagenActiva.style.cursor = "grab";
      imagenActiva = null;
      }
    });
}