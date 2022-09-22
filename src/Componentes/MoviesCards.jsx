import React from 'react';
import styles from "../Modulos/MovieCard.module.css";

export function MoviesCards({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(        
        <li className={styles.cards}>
                <img 
                    width={230}
                    height={345}
                    className={styles.movieImage} 
                    src ={imageUrl} 
                    alt = {movie.title}
                />
                <div>{movie.title}</div>
        </li>        
    );
}