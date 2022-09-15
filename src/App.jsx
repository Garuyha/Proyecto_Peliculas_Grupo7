import React from 'react';
import movies from "./movies.json";
//import { MoviesGrid } from './Componentes/MoviesGrid';
import styles from "./Modulos/App.module.css";
import { MovieDetails } from './Componentes/Pages/MovieDetails';
import { LandingPage } from './Componentes/Pages/LandingPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export function App() {
    return (
        <Router>
            <header>
                <Link to='/'>
                    <h1 className={styles.title}>PELICULAS</h1>
                </Link>
            </header>
            <main>
                <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails ada={movies}/>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
                </Switch>
            </main>
        </Router>
    );
}
