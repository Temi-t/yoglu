import React, { useState, createContext, useContext } from 'react';

//create a context for the state about to be created
const valueContext = createContext();
//custom hook to export the context
export const useValues = () => useContext(valueContext);


//create a provider that will feed all children
export default function RegisterProvider ({children}) {
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });

    return(
        //transfer the value of context to children of the provider
        <valueContext.Provider value={[values, setValues]}>
            {children}
        </valueContext.Provider>
    );
}