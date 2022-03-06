import React, {useContext, useState} from 'react';
import logo from '../img/twitter-logo.svg' ;
import Spinner from '../img/Spinner.svg';
import {NameContext} from "../providers/NameProvider";
import {WelcomeContext} from "../providers/WelcomeProvider";
import {useLang} from "../providers/LangProvider";

export default function Login() {

    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [error, setError] = useState({show: false, message: ''});

    const [lang, setLang] = useLang()
    const {name, setName} = useContext(NameContext)
    const {setWelcome} = useContext(WelcomeContext)


    const handleClick = async () => {
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

    const handleLangChange = (e) => {
        setLang(e.target.value)
    }

    return (
        <>
            <div className="onboarding boundless">
                <div className="onboarding__background">
                </div>
                <div className="onboarding__modal">
                    <div className="logo-w">
                        <img alt="Twiter" src={logo}/>
                            <select className="custom-select" onChange={handleLangChange}>
                                <option value="en">en</option>
                                <option value="ru">ru</option>
                                <option value="uz">uz</option>
                            </select>
                    </div>
                    <div className="log-popup-wrap " id="login-popup-wrap">
                        <div className="log-popup" id="login-popup">
                            <h4 className="auth-header">{lang.login_title}</h4>

                            <form name="form_auth" method="post" action="">
                                {isLoading && <img className='Spinner' src={Spinner} alt='spinner'/>}
                                {/* {error.show &&
                                <div className="error animate__animated animate__shakeX">{error.message}</div>}*/}
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
                                <button className="btn btn-primary" onClick={handleClick} type="button">
                                    {lang.login}
                                </button>
                                <div className="link-item">
                                    <span>Forgot password?</span>
                                    <span>Sign up to Twitter</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}