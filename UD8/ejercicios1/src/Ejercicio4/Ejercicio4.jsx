import { useState } from "react";

function Ejercicio4(){
    const [numPulsaciones,setNumPulsaciones]=useState(0);
    function pulsado(){
        setNumPulsaciones(numPulsaciones+1);
    }
    return(
        <>
            <div>
                <p>Button has been clicked: {numPulsaciones} times</p>
                <button onClick={pulsado}>Click Me</button>
            </div>
        </>
    );
}
export default Ejercicio4;