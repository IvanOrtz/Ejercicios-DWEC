import { useState } from "react";

function Ejercicio2() {
let contenido = "";
let contenidoBtn = "";
  // Estado de visibilidad, inicia visible
  const [isVisible, setIsVisible] = useState(true);

  // Función para alternar visibilidad
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  if (isVisible) {
    contenido = <p>El texto está visible</p>
    contenidoBtn="Ocultar";
  }
  else{
    contenido= <p>El texto está oculto</p>
     contenidoBtn="Mostrar";
  }
  return (
    <div>
        {contenido}
        <button onClick={toggleVisibility}>
        {contenidoBtn}
      </button>
    </div>
  );
}

export default Ejercicio2;
