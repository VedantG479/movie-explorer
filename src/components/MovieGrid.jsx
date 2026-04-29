import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
    const popularMovies = useSelector(state => state.popularMovies.popularMovies)
    const searchedMovies = useSelector(state => state.searchedMovies)

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {   searchedMovies.searching ? 
                    searchedMovies.searchedMovies.map((searchedMovie) => (
                        <MovieCard key={searchedMovie.id} movie={searchedMovie}/>
                    )) : 
                    popularMovies.map((popularMovie) => (
                        <MovieCard key={popularMovie.id} movie={popularMovie}/>
                    ))
                }
            </div>
        </div>
    )
}