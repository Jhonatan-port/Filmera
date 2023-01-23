import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Loading from "../../components/Loading"
import MovieCard from "../../components/MovieCard"

import '../sharedComponents.css'

const searchURL = import.meta.env.VITE_SEARCH
const apikey = import.meta.env.VITE_API_KEY

function Search(){
    const [searchParams] = useSearchParams()

    const [searchedMovies, setSearchedMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setSearchedMovies(data.results)
    }

    useEffect(() => {
        const SearchedURL = `${searchURL}?${apikey}&query=${query}`
        getSearchedMovies(SearchedURL)
    }, [query])

    return (
        <div className="container">
            <h2 className="titulo__principal">Resultados para: {query}</h2>
            <div>
                {searchedMovies.length == 0 && <Loading/>}
                {searchedMovies.length > 0 && searchedMovies.map((movie) => <MovieCard key={movie.id} movie= {movie}/>)}
            </div>
        </div>
    )

}
export default Search