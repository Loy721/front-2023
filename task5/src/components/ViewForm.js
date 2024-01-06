import React from 'react';
import {useNavigate} from "react-router-dom";
import "../styles/ViewForm.css"

const ViewForm = ({film}) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className={"view-form"}>
                <img src={film.posterUrl}  onError={(e) => {
                    e.target.src = '/img.png';
                }}/>
                <div className="view-form__info">
                    <div className={"view-form__title"}>{film.title}</div>
                    <div className={"view-form__genres"}>{film.genres}</div>
                    <div className={"view-form__year"}>{film.year}</div>
                </div>
            </div>
        </div>
    );
};

export default ViewForm;