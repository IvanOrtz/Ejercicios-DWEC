import { useState } from "react";

function Ejercicio3() {
  const [texto, setTexto] = useState("");
  const limpiarInput = () => {
    setTexto("");
  };

  return (
    <div>
      <input
        type="text"
        value={texto} 
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe"
      />
      <div>
        <p>{texto}</p> 
        <p>Caracteres: {texto.length}</p>
      </div>
      <button onClick={limpiarInput}>
        Limpiar
      </button>
    </div>
  );
}

export default Ejercicio3;
