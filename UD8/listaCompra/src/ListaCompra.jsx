import { useState } from "react";
import Item from "./Item.jsx";
import Pie from "./Pie.jsx";

function ListaCompra() {

    let datos = {
        "Items": [
            { "Nombre": "Azucar", "Cantidad": 2 },
            { "Nombre": "Leche", "Cantidad": 1 },
            { "Nombre": "Pan", "Cantidad": 3 }
        ]
    };

    const [listaCompra, setListaCompra] = useState(datos.Items);
    const [contenidoInput, setContenidoInput] = useState("");

    function pulsoBoton() {
        if (!contenidoInput.trim()) return;

        setListaCompra([
            ...listaCompra,
            { Nombre: contenidoInput.trim(), Cantidad: 1 }
        ]);

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
        let copia =[...listaCompra]
        copia[index].Nombre = nuevoTexto.trim();
        setListaCompra(copia);
    }
}

    const secuenciaItems = listaCompra.map((elemento, index) => (
        <Item
            key={index}
            nombre={elemento.Nombre}
            cantidad={elemento.Cantidad}
            onEditar={(nuevoTexto) => editarItem(index, nuevoTexto)}
            onBorrar={() => borrarItem(index)}
        />
    ));

    return (
        <>
            <div className="agregarTexto">
                <input
                    id="nuevoInput"
                    type="text"
                    placeholder="e.g. eggs"
                    value={contenidoInput}
                    onChange={(e) => setContenidoInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && pulsoBoton()}
                />
                <button id="agregar" type="button" onClick={pulsoBoton}>
                    Submit
                </button>
            </div>

            <ul id="lista">
                {secuenciaItems}
            </ul>

            <Pie onBotonBorrarTodo={pulsoBotonBorrarTodo} />
        </>
    );
}

export default ListaCompra;