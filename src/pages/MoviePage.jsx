import { useParams } from "react-router";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { fetchMovie } from "../api/movies";

export default function MoviePage() {
    const {movieId} = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetchMovie(movieId).then((data) => {
            setMovie(data)
        })
    }, [movieId, setMovie])

    return (
        movie ? 
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <div className="flex-1 flex justify-center p-6">

                <div className="w-full max-w-5xl bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 bg-gray-200">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 p-6 flex flex-col gap-4">
                        <h1 className="text-2xl font-bold text-gray-800">
                            {movie.title}
                        </h1>
                        <p className="text-sm text-gray-500">
                            {movie.release_date.slice(0,4)} • {movie.runtime} Minutes
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            {movie.overview}
                        </p>
                        <div className="flex flex-col gap-1 text-sm text-gray-600">
                            <span><span className="font-medium text-gray-800">Vote Average:</span>{movie.vote_average}</span>
                            <span><span className="font-medium text-gray-800">Vote Count:</span>{movie.vote_count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        : 
        <div>Loading..</div>
    )
}