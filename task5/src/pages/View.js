import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {FilmsService} from "../API/FilmsService";
import Header from "../components/Header";
import ViewForm from "../components/ViewForm";

const View = () => {
    const [film, setFilm] = useState({})
    const {id} = useParams();


    useEffect(() => {
        fetchFilm()
    }, []);

    function fetchFilm() {
        FilmsService.getFilm(id).then((result) =>  setFilm(result))
    }

    return (
        <div>
            <Header/>
            <ViewForm film={film}/>
        </div>
    );
};

export default View;