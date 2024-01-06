import Header from "../components/Header";
import CardsFilmsList from "../components/CardsFilmsList";
import {useEffect, useState} from "react";
import {FilmsService} from "../API/FilmsService";

function Films() {
    const [searchFilms, setSearchFilms] = useState([])
    const [films, setFilms] = useState([])

    async function fetchFilms() {
        const films = await FilmsService.getAll();
        setSearchFilms(films)
        setFilms(films)
    }

    useEffect(() => {
        fetchFilms()
    }, []);

    function search(searchQuery) {
        setSearchFilms(films.filter(film => film.title && film.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => a.title.localeCompare(b.title)));
    }

    return (
        <div>
            <Header search={search}/>
            <CardsFilmsList films={searchFilms} />
        </div>
    );
}

export default Films;
