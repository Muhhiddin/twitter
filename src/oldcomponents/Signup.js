import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({show: false, message: ''});

    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
            return false;
        }
        return true;
    }

    const handleSubmit = async () => {
        if (email) {
            let emailIsValid = emailValidation();
            if (!emailIsValid) {
                setError({show: true, message: 'Неверный email'});
                console.log(error)
                setTimeout(() => {
                    setError({show: false, message: ''});
                } , 3000);
                return false;
            }
        }
        if (name && email && password) {
            const response = await fetch('http://localhost:8080/api/user/create.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });
            const body = await response.json();

            console.log(body);

            if (body.success) {
                window.localStorage.setItem('token', body.token);
            } else {
                setError({show: true, message: body.message});
                console.log(error)
                setTimeout(() => {
                    setError({show: false, message: ''});
                } , 3000);

            }
        }
        else
        {
            setError({show: true, message: 'Заполните все поля'});
            console.log(error)
            setTimeout(() => {
                setError({show: false, message: ''});
            } , 3000);
        }
    }

    return(
        <>
            <div className="onboarding boundless">
                <div className="onboarding__background">
                    <img alt="Первый Бит" src="https://1solution.ru/local/templates/nextype_s1/img/services-bg-min.jpg" />
                </div>
                <div className="onboarding__modal">
                    <div className="logo-w">
                        <a href="https://1solution.ru" target="_blank" rel="noreferrer">
                            <img alt="Первый Бит" src="https://1solution.ru/local/templates/nextype_s1/img/Logo-black.svg" />
                        </a>
                    </div>
                    <div className="log-popup-wrap " id="login-popup-wrap">
                        <div className="log-popup" id="login-popup">
                            <h4 className="auth-header">Регистрация</h4>
                            <form name="form_auth" method="post" action="">
                                {error.show && <div className="error animate__animated animate__shakeX">{error.message}</div>}
                                <div className="form-group">
                                    <input className="form-control"
                                           type="text"
                                           value={name}
                                           placeholder="Имя:"
                                           autoComplete="off"
                                           onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input className="form-control"
                                           type="email"
                                           value={email}
                                           placeholder="Почта:"
                                           autoComplete="off"
                                           onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input className="form-control"
                                           type="password"
                                           value={password}
                                           placeholder="Пароль:"
                                           autoComplete="off"
                                           onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="buttons-w">
                                    <button className="btn btn-primary" type="button" onClick={handleSubmit}>
                                        Зарегистрироваться
                                    </button>
                                    <Link className="btn btn-default" to="/">Авторизация</Link>
                                </div>
                            </form>
                            <div className="copy">Первый Бит — международный IT-интегратор</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}