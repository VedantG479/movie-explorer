import { configureStore } from "@reduxjs/toolkit";
import popularMoviesReducer from './popoularMoviesSlice'
import genreReducer from './genreSlice'
import searchedMovieReducer from './searchedMovieSlice'

const store = configureStore({
    reducer: {
        popularMovies: popularMoviesReducer,
        genres: genreReducer,
        searchedMovies: searchedMovieReducer
    }
})

export default store