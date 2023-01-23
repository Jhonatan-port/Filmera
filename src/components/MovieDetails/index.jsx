import './MovieDetails.css'
const imageURL = import.meta.env.VITE_IMG

import { FaStar } from 'react-icons/fa'
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
    BsFillPlayFill,
} from "react-icons/bs";

function MovieDetails({ movie }) {
    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };
    return (
        <div className='details'>
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p className='categories'>
                <FaStar className="text-yellow-500" /> {movie.vote_average}
            </p>
            <div >
                <h3 className='categories'>
                    <BsWallet2 /> Orçamento:
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div >
                <h3 className='categories'>
                    <BsGraphUp /> Receita:
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div >
                <h3 className='categories'>
                    <BsHourglassSplit /> Duração:
                </h3>
                <p>{movie.runtime} minutos</p>
            </div>
            <div>

                <h1 className='categories'>
                    <BsFillPlayFill />
                    categoria:
                </h1>
                <p>{movie.genres[0].name}</p>
            </div>
            <div className='movie__desc'>
                <h3 className='categories'>
                    <BsFillFileEarmarkTextFill /> Descrição:
                </h3>
                <p>{movie.overview}</p>
            </div>
            
        </div>
    )
}

export default MovieDetails