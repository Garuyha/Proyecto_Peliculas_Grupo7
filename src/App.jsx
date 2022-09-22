import React from 'react';
import { MoviesGrid } from './Componentes/MoviesGrid';
import styles from "./Modulos/App.module.css";

export function App() {
    return (    
    <div>
        <header>
          <h1 className={styles.title}>Movies</h1>
        </header>
        <main>
          <MoviesGrid />
        </main>
      </div>
    );
}
