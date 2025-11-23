window.onload = () => {
    const lista = document.getElementById("lista");
    const nuevoInput = document.getElementById("nuevoInput");
    const agregar = document.getElementById("agregar");
    const borrarTodos = document.getElementById("borrar");

    agregar.addEventListener("click", () => {
        let contenido = nuevoInput.value.trim();
        if (contenido){
        const li = document.createElement("li");
        li.innerHTML=contenido;
        const span = document.createElement("span");
        span.id = "iconos";
        const editar = document.createElement("i");
        editar.id = "editar";
        editar.innerText = "✏️";
        const eliminar = document.createElement("i");
        eliminar.id = "eliminar";
        eliminar.innerText = "🗑️";
        span.appendChild(editar);
        span.appendChild(eliminar);
        li.appendChild(span);
        lista.appendChild(li);
        nuevoInput.value = "";
        editar.addEventListener("click", () => editarContenido(li, span));
        eliminar.addEventListener("click", () => eliminarLi(li));
        }
    });
    nuevoInput.addEventListener("keydown", (e) => {
        if(e.key=="Enter"){
            let contenido = nuevoInput.value.trim();
            if (contenido){
            const li = document.createElement("li");
            li.innerHTML=contenido;
            const span = document.createElement("span");
            span.id = "iconos";
            const editar = document.createElement("i");
            editar.id = "editar";
            editar.innerText = "✏️";
            const eliminar = document.createElement("i");
            eliminar.id = "eliminar";
            eliminar.innerText = "🗑️";
            span.appendChild(editar);
            span.appendChild(eliminar);
            li.appendChild(span);
            lista.appendChild(li);
            nuevoInput.value = "";
            editar.addEventListener("click", () => editarContenido(li, span));
            eliminar.addEventListener("click", () => eliminarLi(li));
            }
        }
    });
    borrarTodos.addEventListener("click", ()=>{
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    });
    function editarContenido(li,span){
        const nuevoTexto = prompt("Editar elemento:");
        if (nuevoTexto) {
            li.innerHTML = nuevoTexto; 
            li.appendChild(span);
        }
    }
    function eliminarLi(li){
        lista.removeChild(li);
    }
}