import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../../components/MovieDetails";
import '../sharedComponents.css'

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

function Movie(){
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data)
    }

    useEffect(()=>{
        const movieUrl = `${moviesURL}${id}?${apikey}`
        getMovie(movieUrl)
    },[])

    return (
        <div>
            {movie && <>
                <MovieDetails movie={movie}/>
            </>}
        </div>
    )
}
export default Movie