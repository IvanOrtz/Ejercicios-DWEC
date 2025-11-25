window.onload = () => {
    let titulo = "";
    let tipo = "";
    let anio = "";
    let contadorPaginas = 1;
    const contenedor = document.getElementById("peliculas");

    function maquetarPelis(listaPelis) {
        listaPelis.forEach(pelicula => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${pelicula.Poster}" alt="${pelicula.Title}">
                <h2>${pelicula.Title}</h2>
                <p>${pelicula.Year}</p>`;
            contenedor.appendChild(card);
        });
    }

    function cargarPeliculas() {
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
    document.getElementById("busquedaForm").addEventListener("submit", (e) => {
        e.preventDefault();
        contenedor.innerHTML = "";
        contadorPaginas = 1;
        titulo = document.getElementById("titulo").value;
        tipo = document.getElementById("tipo").value;
        anio = document.getElementById("anio").value;

        cargarPeliculas();
    });

    // Botón para cargar más páginas
    document.getElementById("btnCargar").addEventListener("click", () => {
        contadorPaginas++;
        cargarPeliculas();
    });
};
