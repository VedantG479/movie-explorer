import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchedMovies: [],
    searching: false
}

export const searchedMovieSlice = createSlice({
    name: 'searchedMovies', 
    initialState, 
    reducers: {
        setSearchedMovies: (state, action) => {
            state.searchedMovies = action.payload
            state.searching = true
        },
        clearSearchedMovies: (state, action) => {
            state.searchedMovies = []
            state.searching = false
        }
    }
})

export const {setSearchedMovies, clearSearchedMovies} = searchedMovieSlice.actions
export default searchedMovieSlice.reducer