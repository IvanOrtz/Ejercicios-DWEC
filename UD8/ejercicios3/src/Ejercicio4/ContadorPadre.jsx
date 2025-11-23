import { useState } from "react";
import BotonIncrementar from "./BotonIncrementar";
import BotonResetear from "./BotonResetear";

function ContadorPadre() {
  const [count, setCount] = useState(0);
  const incrementar = () => setCount(count + 1);
  const resetear = () => setCount(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <BotonIncrementar onClick={incrementar} />
      <BotonResetear onClick={resetear} />
    </div>
  );
}

export default ContadorPadre;
