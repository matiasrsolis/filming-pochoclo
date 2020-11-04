// hacer la request a la API y traer todas las peliculas
export function getMovies(titulo) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}


// traer los detalles de la pelicula especifica
export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
}


// agregar película como Favoritas
export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}


// eliminar película de Favoritas
export function removeMovieFavorite(payload) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
}