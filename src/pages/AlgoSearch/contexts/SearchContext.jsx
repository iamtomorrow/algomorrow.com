
import { createContext, useState } from "react";

export const SearchContext = createContext( );

export const SearchContextProvider = ({ children }) => {
    const [ searchQuery, setSearchQuery ] = useState("");

    const updateQuery = ( query ) => {
        setSearchQuery( query );
    }

    return (
        <SearchContext.Provider value={{ searchQuery, updateQuery }}>
            { children }
        </SearchContext.Provider>
    )
}