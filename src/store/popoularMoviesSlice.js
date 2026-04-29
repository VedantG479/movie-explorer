import { createSlice } from "@reduxjs/toolkit"

const initialState = {popularMovies: []}

export const popularMoviesSlice = createSlice({
    name: 'popularMovies', 
    initialState, 
    reducers: {
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        }
    }
})

export const {setPopularMovies} = popularMoviesSlice.actions
export default popularMoviesSlice.reducer