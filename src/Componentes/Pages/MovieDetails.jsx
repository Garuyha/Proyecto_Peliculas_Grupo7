import React from "react";

export function MovieDetails({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(
        <div>
            <img 
                    src ={imageUrl} 
                    alt = {movie.title}
            />
        </div>
    )
}