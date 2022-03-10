import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NameProvider from "./providers/NameProvider";
import WelcomeProvider from "./providers/WelcomeProvider";
import LangProvider from "./providers/LangProvider";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <WelcomeProvider>
            <NameProvider>
                <LangProvider>
                    <App/>
                </LangProvider>
            </NameProvider>
        </WelcomeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);