function Ejercicio5(){
    let lista=["dog","cat","chicken","cow","sheep","horse"];
    const elementosLista = lista.map((elemento, index) => 
        <li key={index}>{elemento}</li>
    );
    return(
        <>
            <div>
                <ul>
                    {elementosLista}
                </ul>
            </div>
        </>
    );
}
export default Ejercicio5;