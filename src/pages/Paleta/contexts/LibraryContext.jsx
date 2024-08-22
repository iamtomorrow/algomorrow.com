import { createContext, useContext, useState } from "react";
import { API } from "../api/api";

export const LibraryContext = createContext( )

export const LibraryContextProvider = ({ children }) => {
    const [ library, setLibrary ] = useState([ ]);

    const updateLibrary = async ( ) => {
        let lib = await API.getLibrary( );
        setLibrary( lib );
    } 

    return (
        <LibraryContext.Provider value={{ library, updateLibrary }}>
            { children }
        </LibraryContext.Provider>
    )
}