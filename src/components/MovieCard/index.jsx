
import { Link } from "react-router-dom"

import {FaStar} from 'react-icons/fa'

const imageURL = import.meta.env.VITE_IMG

import capaNaoDisponivel from '../../assets/naoDisponivel.png'

function MovieCard({movie, showLink = true}){
    let poster_path = imageURL + movie.poster_path

    return(
        <div className="movie__card">
            <img src={poster_path  === 'https://image.tmdb.org/t/p/w500null' ? capaNaoDisponivel : poster_path } alt={movie.title} />
            <h2>{movie.title}</h2>
            <p className="items-center">
                <FaStar className="text-yellow-500"/> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

export default MovieCard