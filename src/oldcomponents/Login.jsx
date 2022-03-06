import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/twitter-logo.svg' ;
import Spinner from '../img/Spinner.svg';
import ThemeProvider from "./ThemeProvider";

export default function Login() {

    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [error, setError] = useState({show: false, message: ''});

    const handleClick = async () => {

        if (email && password) {
            setLoading(true);
            const response = await fetch("https://reqres.in/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,password})
            });
            const responseData = await response.json();
            setLoading(false);
            if(responseData.token){
                localStorage.setItem('token', responseData.token)
            }
        }

    }



    return (
        <>
            <div className="onboarding boundless">
                <div className="onboarding__background">
                </div>
                <div className="onboarding__modal">
                    <div className="logo-w">
                        <a href="https://1solution.ru" target="_blank">
                            <img alt="Twiter"
                                 src={logo}/>
                        </a>
                    </div>
                    <div className="log-popup-wrap " id="login-popup-wrap">
                        <div className="log-popup" id="login-popup">
                            <h4 className="auth-header">Log in to Twitter</h4>

                            <form name="form_auth" method="post" action="">
                                {isLoading && <img className='Spinner' src={Spinner} alt='spinner' />}
                               {/* {error.show &&
                                <div className="error animate__animated animate__shakeX">{error.message}</div>}*/}
                                <div className="form-group">
                                    <input className="form-control"
                                           type="name"
                                           value={name}
                                           placeholder="Name"
                                           autoComplete="off"
                                           onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input className="form-control"
                                           type="email"
                                           value={email}
                                           placeholder="Phone number, email address"
                                           autoComplete="off"
                                           onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input className="form-control"
                                           type="password"
                                           placeholder="Password"
                                           onChange={e => setPassword(e.target.value)}
                                           autoComplete="off"/>
                                </div>
                                    <button className="btn btn-primary" onClick={handleClick} type="button">
                                        Войти
                                    </button>
                                <div className="link-item">
                                    <a href="#">Forgot password?</a>
                                    <a href="#">Sign up to Twitter</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}