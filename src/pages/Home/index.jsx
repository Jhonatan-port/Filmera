const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

import { useEffect, useState } from 'react';
import Loading from '../../components/Loading'
import MovieCard from '../../components/MovieCard';
import './Home.css'
import '../sharedComponents.css'

function Home() {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedURL = `${moviesURL}top_rated?${apikey}`
        getTopRatedMovies(topRatedURL)
    }, [])

    return (
        <div className='container'>
            <h2 className='titulo__principal'>
                MELHORES FILMES:
            </h2>
            <div>
                {topMovies.length === 0 && <Loading />}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/> ) }
            </div>
        </div>
    )
}
export default Home