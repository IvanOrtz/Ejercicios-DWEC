import "./Ejercicio6.css"
function Ejercicio6(){
    let listaCompra=["dog","cat","chicken","cow","sheep","horse"];
    const elementosLista = listaCompra.map((elemento, index) => 
        <li key={index}id={elemento}>{elemento}</li>
    );
    return(
        <>
            <div>
                <ul id="personalizado">
                    {elementosLista}
                </ul>
            </div>
        </>
    );
}
export default Ejercicio6;