import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieInfo.module.css';

export const MovieInfo = () => {

const {id} = useParams()

const [currentMovie, setCurrentMovie] = useState({})

    const getMovieInfo = (id) => {
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${'b4e7239ec05624f521d3bafb199d0a05'}&language=en-US`
        )
          .then((response) => response.json())
          .then((data) => {
            setCurrentMovie(data)
          });
      };

      useEffect(() => {
            getMovieInfo(id)
           return setCurrentMovie({})
      }, [id])
    return (
        <>
        
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            
                <img src={`http://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`} alt="" />
            </div>

            <div className={styles.infoContainer}>
                <h1>{currentMovie.title}</h1>
                <h5>Release date: {currentMovie.release_date}</h5>
                <p>{currentMovie.overview}</p>
                <p className={styles.rating}>{currentMovie.vote_average}/10</p>
            </div>

        </div>
        </>
    )
}
