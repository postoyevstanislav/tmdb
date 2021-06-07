import React from 'react';
import styles from './MovieInfo.module.css'

export const MovieInfo = ({currentMovie}) => {
    
    return (
        <>
        
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            
                <img src={`http://image.tmdb.org/t/p/original/${currentMovie.poster_path}`} alt="" />
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
