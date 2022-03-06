import React, {createContext, useContext, useState} from 'react';
import en from '../lang/en.json';
import ru from '../lang/ru.json';
import uz from '../lang/uz.json';
const LangContext = createContext()

const LangProvider = ({children}) => {

    let defaultLang;
    switch (localStorage.getItem('lang')) {
        case 'en': defaultLang = en; break;
        case 'ru': defaultLang = ru; break;
        case 'uz': defaultLang = uz; break;
        default: defaultLang = en
    }

    const [lang, setLang] = useState(defaultLang)
    const handleChangeLang = (langType) => {
        localStorage.setItem('lang', langType);
        switch (langType) {
            case 'en': setLang(en); break;
            case 'ru': setLang(ru); break;
            case 'uz': setLang(uz); break;
            default: setLang(localStorage.getItem('lang'))
        }
    }
    return (
        <LangContext.Provider value={{lang, handleChangeLang}}>
            <LangContext.Consumer>
                {
                    () => children
                }
            </LangContext.Consumer>
        </LangContext.Provider>
    );
};

export const useLang = (setter) => {
    const {lang, handleChangeLang} = useContext(LangContext)
    return setter ? [handleChangeLang] : [lang, handleChangeLang]
}

export default LangProvider;