window.onload = () => {
    const contenedor = document.getElementById("peliculas");
    let contadorPaginas = 1;
    let ultimaBusqueda = {}; // Guardar los últimos filtros

    function maquetarPelis(listaPelis) {
        listaPelis.forEach(pelicula => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${pelicula.Poster !== "N/A" ? pelicula.Poster : "https://via.placeholder.com/150"}" alt="${pelicula.Title}">
                <h2>${pelicula.Title}</h2>
                <p>${pelicula.Year}</p>`;
            contenedor.appendChild(card);
        });
    }

    function cargarPeliculas() {
        const { titulo, tipo, anio } = ultimaBusqueda;

        fetch(`https://www.omdbapi.com/?apikey=e8d14891&s=${titulo}&type=${tipo}&y=${anio}&page=${contadorPaginas}`)
            .then(response => response.json())
            .then(data => {
                if (data.Search) {
                    maquetarPelis(data.Search);
                } else {
                    alert("No se han encontrado resultados!");
                }
            })
            .catch(err => console.error(err));
    }

    // Evento para el formulario
    document.getElementById("busquedaForm").addEventListener("submit", e => {
        e.preventDefault();
        contenedor.innerHTML = ""; // Limpiar resultados anteriores
        contadorPaginas = 1;

        ultimaBusqueda = {
            titulo: document.getElementById("titulo").value.trim(),
            tipo: document.getElementById("tipo").value,
            anio: document.getElementById("anio").value
        };

        cargarPeliculas();
    });

    // Botón para cargar más páginas
    document.getElementById("btnCargar").addEventListener("click", () => {
        contadorPaginas++;
        cargarPeliculas();
    });
};