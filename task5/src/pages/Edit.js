import React, {useEffect, useState} from 'react';
import {FilmsService} from "../API/FilmsService";
import {useNavigate, useParams} from "react-router-dom";
import EditForm from "../components/EditForm";
import Header from "../components/Header";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [film, setFilm] = useState({});

    useEffect(() => {
        fetchFilm();
    }, []);

    function fetchFilm() {
        FilmsService.getFilm(id).then((result) =>  setFilm(result))
    }

    function editFilm(editedFilm) {
        FilmsService.editFilm(id, editedFilm).then(() => navigate("/films/" + film.id));
    }

    return (
        <div>
            <Header/>
            <EditForm editFilm={editFilm} defaultFieldsOfFilm={film} buttonName={"Редактировать"}/>
        </div>
    );
};

export default Edit;