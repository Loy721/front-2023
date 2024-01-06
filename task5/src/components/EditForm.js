import React, {useEffect, useState} from 'react';
import {Button, FormControl} from 'react-bootstrap';
import "../styles/EditForm.css"

const EditForm = ({editFilm, defaultFieldsOfFilm, buttonName}) => {
    const [film, setFilm] = useState({
        title: '',
        year: '',
        genres: '',
        posterUrl: '',
        plot: '',
        ...defaultFieldsOfFilm, // Добавляем дефолтные значения
    });

    useEffect(() => {
        setFilm((prevFilm) => ({
            ...prevFilm,
            ...defaultFieldsOfFilm,
        }));
    }, [defaultFieldsOfFilm]);

    const setFieldsOfFilm = (e) => {
        let {name, value} = e.target;
        setFilm((prevFilm) => ({
            ...prevFilm,
            [name]: value,
        }));
    };

    function transformationToArrayAndCallEdit() {
        if (!Array.isArray(film.genres)) {
            const hlp = film.genres;
            film.genres = [];
            hlp.split(',').forEach((el) => film.genres.push(el));
        }
        editFilm(film)
    }

    return (
        <div className={"edit-form pt-4"}>
            <FormControl className={"edit-form__input"} placeholder="Введите название фильма" type="text" name="title"
                         value={film.title} onChange={setFieldsOfFilm} required/>
            <FormControl className={"edit-form__input"} placeholder="Введите год выпуска" type="number" name="year"
                         min="1875" max="2024" value={film.year} onChange={setFieldsOfFilm} required/>
            <FormControl className={"edit-form__input"} placeholder="Введите описание" type="text" name="plot"
                         value={film.plot} onChange={setFieldsOfFilm} required/>
            <FormControl className={"edit-form__input"} placeholder="Введите жанр(ы) через запятую" type="text"
                         name="genres" value={film.genres}
                         onChange={setFieldsOfFilm} required/>
            <FormControl className={"edit-form__input"} placeholder="Введите ссылку на обложку" type="url"
                         name="posterUrl" value={film.posterUrl}
                         onChange={setFieldsOfFilm} required/>
            <Button variant="outline-info" onClick={() => transformationToArrayAndCallEdit()}>
                {buttonName}
            </Button>
        </div>
    );
};

export default EditForm;
