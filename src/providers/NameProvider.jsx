import {createContext, useState} from "react";

export const NameContext = createContext();

const NameProvider = ({children}) => {
    const [name, setName] = useState('');

    const value = {
        name,
        setName
    }

    return (
        <NameContext.Provider value={value}>
            <NameContext.Consumer>
                {
                    () => children
                }
            </NameContext.Consumer>
        </NameContext.Provider>
    );
};

export default NameProvider;