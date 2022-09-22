import React from 'react';
import movies from "./movies.json";
import { MoviesCards } from './MoviesCards.jsx';
import styles from "../Modulos/MoviesGrid.module.css";

export function MoviesGrid(){
    return(
        <ul className={styles.moviesGrid}>
            {movies.map((movie)=> ( //Arrow function
                <MoviesCards key={movie.id} movie={movie}/> //Siempre en todos los listados poner una clave UNICA para la optimización.
            ))}
        </ul>
    );
}