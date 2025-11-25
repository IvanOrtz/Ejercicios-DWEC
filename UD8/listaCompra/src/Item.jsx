import { useState } from "react";
function Item({ nombre,cantidad, onEditar, onBorrar }) {
    const [modoEdicion, setModoEdicion] = useState(false);
    const [valor, setValor] = useState(nombre);

    function guardar() {
        setModoEdicion(false);
        onEditar(valor);
    }

    let contenido;
    if (modoEdicion) {
        contenido = (
            <input
                type="text"
                value={valor}
                autoFocus
                onChange={(e) => setValor(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") guardar();
                }}
            />
        );
    } else {
        contenido = <span> {nombre} - {cantidad} </span>;
    }

    return (
        <li>
            {contenido}

            <span id="iconos">
                <i id="editar" onClick={() => setModoEdicion(true)}>✏️</i>
                <i id="borrar" onClick={onBorrar}>🗑️</i>
            </span>
        </li>
    );
}

export default Item;
