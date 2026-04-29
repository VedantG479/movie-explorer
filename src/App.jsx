import './App.css'
import Header from './components/Header'
import MovieGrid from './components/MovieGrid'
import MoviePage from './pages/MoviePage'
import { config } from './config'
import { fetchGenres, fetchMovies, fetchPopularMovies } from './api/movies'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPopularMovies } from './store/popoularMoviesSlice'
import { setGenres } from './store/genreSlice'
import { Route, Routes } from 'react-router'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    fetchPopularMovies().then((data) => dispatch(setPopularMovies(data)))
    fetchGenres().then((data) => dispatch(setGenres(data))) 
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<MovieGrid/>}/>
        <Route path='/movie/:movieId' element={<MoviePage/>}/>
      </Routes>
    </>
  )
}

export default App
