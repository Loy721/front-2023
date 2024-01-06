import React from 'react';
import CardFilm from "./CardFilm";
import "../styles/CardsFilmsList.css";

const CardsFilmsList = ({films}) => {
    return (
        <div className={"cards-films-list pt-4"}>
            {films.map(film =>
                <CardFilm film={film} key={film.id}/>
            )}
        </div>
    );
};

export default CardsFilmsList;