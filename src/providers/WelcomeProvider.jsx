import {createContext, useState} from "react";

export const WelcomeContext = createContext();

const WelcomeProvider = ({children}) => {
    const [isWelcome, setWelcome] = useState(false);

    const value = {
        isWelcome,
        setWelcome
    }


    return (
        <WelcomeContext.Provider value={value}>
            <WelcomeContext.Consumer>
                {
                    () => children
                }
            </WelcomeContext.Consumer>
        </WelcomeContext.Provider>
    );
};

export default WelcomeProvider;