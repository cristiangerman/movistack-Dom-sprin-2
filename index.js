const $peliculas = document.getElementById("peliculas")
function cards(pelicula) {
    return `
        <div class=" overflow-hidden border border-white rounded-lg  flex flex-col items-center w-80 h-50 ">
        <img class=" " src="${pelicula.image}" alt="banner pelicula">
        <h2>${pelicula.title}</h2>
        <p> ${pelicula.overview}</p>
        </div>
    `
}
function llenar(peliculas) {
    let contenido = ""
    for (const pelicula of peliculas) {
        contenido += cards(pelicula)
    }
    return contenido
}

const peliculas = document.getElementById('peliculas');
peliculas.innerHTML = llenar(Movies);

const $inputBusqueda = document.getElementById('inputBusqueda');

function filterName(nombrePelicula, nombreMovies) {
    return nombrePelicula.filter(movie => movie.title.toLowerCase().includes(nombreMovies.toLowerCase()))
}

$inputBusqueda.addEventListener("input", (evento) => {
    let peliculaParaBuscar = filterName(Movies, $inputBusqueda.value);
    $peliculas.innerHTML = llenar(peliculaParaBuscar);
});

const generosPeliculas = document.getElementById('generos')

g

generosPeliculas.addEventListener('change', () => {
    const generosLista = generosPeliculas.value;
    const textoBusqueda = $inputBusqueda.value.toLowerCase();
    const filtrar = [];

    for (let movie of Movies) {
        if ((generosLista === "All" || movie.genres.includes(generosLista)) && movie.title.toLowerCase().includes(textoBusqueda)) {
            filtrar.push(movie);
        }
    }

    $peliculas.innerHTML = llenar(filtrar);
});


let mostrarPeli = Movies;

function actualizarPeliculas() {
    const nombreABuscar = $inputBusqueda.value.toLowerCase();
    const seleccionarGenero = generosPeliculas.value;

    let peliculasFiltradas = mostrarPeli.filter(movie => {
        const cumpleNombre = movie.title.toLowerCase().includes(nombreABuscar);
        const cumpleGenero = seleccionarGenero === 'All' || movie.genres.includes(generoSeleccionado);
        return cumpleNombre && cumpleGenero;
    });

    $peliculas.innerHTML = llenar(peliculasFiltradas);
}

$inputBusqueda.addEventListener("input", actualizarPeliculas);
generosPeliculas.addEventListener('change', actualizarPeliculas);


actualizarPeliculas();