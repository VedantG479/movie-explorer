import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function MovieCard({movie}) {
    const genres = useSelector(state => state.genres.genres)
    let [genre, setGenre] = useState('') 

    useEffect(() => {
        genres.forEach((gen) => {
            if(gen.id === movie.genre_ids[0])   setGenre(gen.name)
        })
    }, [genres, movie.genre_ids])

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-200 overflow-hidden flex flex-col">
            <div className="w-full h-64 bg-gray-200 overflow-hidden">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie" className="w-full h-full object-cover" />
            </div>

            <div className="p-3 flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">{movie.title}</h3>
                <p className="text-xs text-gray-500">
                    {movie.release_date.slice(0,4)} • {genre}
                </p>
            </div>
        </div>
    )
}