import React, {useContext} from 'react';
import person from "../img/photo_2022-02-08_23-53-19.jpg";
import {NameContext} from "../providers/NameProvider";
import {WelcomeContext} from "../providers/WelcomeProvider";


export default function Welcome() {
    const {name} = useContext(NameContext)
    const {setWelcome} = useContext(WelcomeContext)
    const handleOutClick = () => {
        setWelcome(false)
    }

    return (
        <div className="welcome">
            <button className='btn-logout' onClick={handleOutClick}>Logout</button>
            <div className="container">
                <h1>Welcome</h1>
                <img src={person} alt="123"/>
                <h1>{name}</h1>
            </div>

        </div>
    );
}