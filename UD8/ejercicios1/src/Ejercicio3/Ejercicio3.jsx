function Ejercicio3() {
    function pulsado(e) {
        alert("You clicked on Button " + e.target.id);
    }
    return (
        <>
            <div>
                <button onClick={pulsado} id="1">Button 1</button>
                <button onClick={pulsado} id="2">Button 2</button>
                <button onClick={pulsado} id="3">Button 3</button>
            </div>
        </>
    );
}
export default Ejercicio3;
