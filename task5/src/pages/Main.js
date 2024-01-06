import React from 'react';
import Header from "../components/Header";
import "../styles/Main.css"

const Main = () => {
    return (
        <div>
            <Header/>
            <div className={"main"}>
                <img src={"/stethem.jpg"}/>
            </div>
        </div>
    );
};

export default Main;