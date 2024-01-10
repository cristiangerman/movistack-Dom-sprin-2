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

generosPeliculas.addEventListener('change', () => {
    const generosLista = generosPeliculas.value;
    const filtrar = [];
    for (let movie of Movies) {
        if (movie.genres.includes(generosLista)) {
            filtrar.push(movie);
            $peliculas.innerHTML = llenar(filtrar)
        } else if (generosLista == "All") {
            $peliculas.innerHTML = llenar(Movies);
        }
    }
}
)








// // console.log(filterName(Movies,"The Nun II"));




// function filterName(nombrePelicula, nombreMovies) {
//     return nombrePelicula.filter(movie => movie.title.toLowerCase().includes(nombreMovies.toLowerCase()))
// }




















// crear una funcion que sume 2 numeros 
// recibidos por parametros y retorne el resultado

// usando la funcion creada anteriormente sumar primero 30 + 15
// y luego al resultado sumarle 100

// crear un bucle que muestre por consola los numeros del 1 al 5

// dado el array 
// let numeros = [1,5,10,15]

// crear un nuevo array -> [10,50,100,150] con un metodo de array


const numero1 = 30
const numero2 = 15
function suma(a, b) {
    return a + b
}
(suma(numero1, numero2));

const nuevoValor = suma(numero1, numero2)

