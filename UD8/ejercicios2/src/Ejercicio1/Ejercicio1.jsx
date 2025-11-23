import { useState } from "react";

function Ejercicio1() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    // Evitar que baje de 0:
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetear = () => {
    setCount(0);
  };

  const duplicar = () => {
    setCount(count * 2);
  };

  return (
    <>
        <h1>Contador: {count}</h1>

        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={resetear}>Resetear</button>
        <button onClick={duplicar}>Duplicar</button>
    </>
  );
}
export default Ejercicio1;