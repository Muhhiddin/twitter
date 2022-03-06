import React, {useState} from 'react';

const Context = createContext()

const ThemeProvider = (children) => {
    const [state, setState] = useState()
    return <Context.Provider>
        <Context.Consume>
            {
                () => children
            }
        </Context.Consume>
    </Context.Provider>
};

export default ThemeProvider;