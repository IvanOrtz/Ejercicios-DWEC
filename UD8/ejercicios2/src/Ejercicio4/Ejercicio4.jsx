import { useState } from "react";

function Ejercicio4() {
  const [color, setColor] = useState("grey");

  const manejarInput = (e) => {
    setColor(e.target.value);
  };
  const cambiarColorPredefinido = (nuevoColor) => {
    setColor(nuevoColor);
  };

  return (
    <div>
      <div
        style={{ backgroundColor: color, width: "200px", height: "200px" }}
      ></div>
      <input
        type="text"
        value={color}
        onChange={manejarInput}
        placeholder="Escribe un color"
      />
      <div>
        <button onClick={() => cambiarColorPredefinido("red")}>Rojo</button>
        <button onClick={() => cambiarColorPredefinido("green")}>Verde</button>
        <button onClick={() => cambiarColorPredefinido("blue")}>Azul</button>
      </div>
    </div>
  );
}

export default Ejercicio4;
