import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NameProvider from "./providers/NameProvider";
import WelcomeProvider from "./providers/WelcomeProvider";
import LangProvider from "./providers/LangProvider";

ReactDOM.render(
    <WelcomeProvider>
        <NameProvider>
            <LangProvider>
                <App/>
            </LangProvider>
        </NameProvider>
    </WelcomeProvider>,
    document.getElementById('root')
);