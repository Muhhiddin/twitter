import React from 'react';
import person from "../img/photo_2022-02-08_23-53-19.jpg";

export default function Welcome() {
    return(
        <div className="welcome">

            <div className="container">
                <h1>Welcome</h1>
                <img src={person} alt="123"/>
                <h1>Muhiddin</h1>
            </div>

        </div>
    );
}