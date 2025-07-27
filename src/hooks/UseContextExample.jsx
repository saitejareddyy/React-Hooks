import { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {

    const [name, setName] = useState("");

    const object = {
        name, setName
    }
    return (
        <AppContext.Provider value={object}>
            {children}
        </AppContext.Provider>
    )
}
