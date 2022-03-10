import React, {useContext, useState} from 'react';
import logo from '../img/twitter-logo.svg';
import Spinner from "../img/Spinner.svg";
import {NameContext} from "../providers/NameProvider";
import {WelcomeContext} from "../providers/WelcomeProvider";
import {useLang} from "../providers/LangProvider";



const SingUp = () => {
    const {setWelcome} = useContext(WelcomeContext)
    const [lang, setLang] = useLang()
    const [isLoading, setLoading] = useState(false);
    const {name, setName} = useContext(NameContext)
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('eve.holt@reqres.in');


    const handleNext = async () => {
        if (email && password) {
            setLoading(true);
            const response = await fetch("https://reqres.in/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });
            const responseData = await response.json();

            setLoading(false);
            if (responseData.token) {
                localStorage.setItem('token', responseData.token)
                setWelcome(true)
            }
        }
    }


    return (
        <>
            <div className="SingUp-form">
                <form action="">
                        <img className="d-flex justify-content-center m-auto" src={logo} alt=""/>
                    <h1 className="singUp-title">Create an account</h1>
                    {isLoading && <img className='Spinner' src={Spinner} alt='spinner'/>}
                    <div className="form-group">
                        <input className="form-control"
                               type="name"
                               value={name}
                               placeholder={lang.name}
                               autoComplete="off"
                               onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                               type="email"
                               value={email}
                               placeholder={lang.email}
                               autoComplete="off"
                               onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                               type="password"
                               placeholder={lang.password}
                               onChange={e => setPassword(e.target.value)}
                               autoComplete="off"/>
                    </div>
                    <a href="/" className="change-btn">Use email</a>
                    <h3 className="date-info">Date of birth</h3>
                    <p className="date-text">Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus
                        metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper
                        blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
                    <div className="select-block d-flex">
                        <select className="form-select form-select-lg mb-3" aria-label="Default select example" defaultValue="">
                            <option value="" disabled>Month</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="form-select form-mid form-select-lg mb-3" aria-label="Default select example" defaultValue="">
                            <option value="" disabled>Day</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="form-select form-last form-select-lg mb-3" aria-label="Default select example" defaultValue="">
                            <option value="" disabled>Year</option>
                            <option value="1">2019</option>
                            <option value="2">2021</option>
                            <option value="3">2022</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <button type="button" onClick={handleNext} className="btn btn-primary btn-block">Next</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SingUp;