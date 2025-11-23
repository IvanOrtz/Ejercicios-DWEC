import { useState } from "react";
import Item from "./Item.jsx";
import Pie from "./Pie.jsx";

function ListaCompra() {
    const [listaCompra, setListaCompra] = useState([]);
    const [contenidoInput, setContenidoInput] = useState("");

    function pulsoBoton() {
        setListaCompra([...listaCompra, contenidoInput]);
        setContenidoInput("");
    }
    function pulsoBotonBorrarTodo() {
        setListaCompra([]);
    }
    function borrarItem(index) {
        setListaCompra(listaCompra.filter((_, i) => i !== index));
    }

    function editarItem(index, nuevoTexto) {
    if (nuevoTexto && nuevoTexto.trim() !== "") {
        const copia = [...listaCompra];
        copia[index] = nuevoTexto.trim();
        setListaCompra(copia);
    }
}


    const secuenciaItems = listaCompra.map((elemento, index) => (
    <Item
        key={index}
        nombre={elemento}
        onEditar={(nuevoTexto) => editarItem(index, nuevoTexto)}
        onBorrar={() => borrarItem(index)}
    />
));

    return (
        <>
            <div className="agregarTexto">
                <input id="nuevoInput" type="text" placeholder="e.g. eggs" value={contenidoInput} onChange={(e) => setContenidoInput(e.target.value)} onKeyDown={(e) => {
                if (e.key === "Enter") pulsoBoton();}}/>
                <button id="agregar" type="button" onClick={pulsoBoton}>Submit</button>
            </div>

            <ul id="lista">
                {secuenciaItems}
            </ul>
            <Pie onBotonBorrarTodo={()=>pulsoBotonBorrarTodo()}/>
        </>
    );
}

export default ListaCompra;