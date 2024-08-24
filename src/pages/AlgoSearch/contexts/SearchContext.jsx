
import { createContext, useState } from "react";

export const SearchContext = createContext( );

export const SearchContextProvider = ({ children }) => {
    const [ searchQuery, setSearchQuery ] = useState("");
    const [ searchCategory, setSearchCategory ] = useState("All");
    const [ searchFilter, setSearchFilter ] = useState("");

    const updateQuery = ( query ) => {
        setSearchQuery( perv => query );
    }

    const updateCategory = ( category ) => {
        setSearchCategory( prev => category );
    }

    return (
        <SearchContext.Provider value={{ 
            searchQuery, 
            updateQuery,
            searchCategory,
            updateCategory
        }}>
            { children }
        </SearchContext.Provider>
    )
}