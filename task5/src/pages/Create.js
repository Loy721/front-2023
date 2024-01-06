import React from 'react';
import Header from "../components/Header";
import EditForm from "../components/EditForm";
import {FilmsService} from "../API/FilmsService";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();

    function createFilm(film) {
        FilmsService.createFilm(film).then(() => navigate("/films"));
    }

    return (
        <div>
            <Header/>
            <EditForm editFilm={createFilm} defaultFieldsOfFilm={{}} buttonName="Создать"/>
        </div>
    );
};

export default Create;