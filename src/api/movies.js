import axios from "axios";
import { config } from "../config";

const ACCESS_TOKEN = config.TMDB_ACCESS_TOKEN

export const fetchPopularMovies = async () => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/movie/popular",
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            }
        );

        return response.data.results;
    }
    catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
}

export const fetchMovies = async (query) => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/search/movie",
            {
                params: {
                    query: query,
                },
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            }
        );

        return response.data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};

export const fetchGenres = async () => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/genre/movie/list",
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            }
        )
        return response.data.genres
    }
    catch(error){
        console.log("Error fetching genres:", error)
        return []
    }
}

export const fetchMovie = async (id) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}`, 
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            }
        )

        return response.data
    }
    catch(error){
        console.log("Error finding movies:", error)
        return []
    }
}