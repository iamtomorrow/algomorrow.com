"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ChildrenProps {
    children: ReactNode
}

interface SearchContextProps {
    query: string
    updateQuery: ( q: string ) => void
}

const SearchContextInitialState: SearchContextProps = {
    query: "",
    updateQuery: ( ) => { }
}

export const SearchContext = createContext<SearchContextProps>( SearchContextInitialState );

export const SearchContextProvider = ({ children }: ChildrenProps) => {
    const [ query, setQuery ] = useState<string>("");

    const updateQuery = ( q: string ) => {
        setQuery( prev => q );
    }

    return (
        <SearchContext.Provider value={{
            query,
            updateQuery
        }}>
            { children }
        </SearchContext.Provider>
    )
}

export const useSearchContext = ( ) => {
    return useContext( SearchContext );
}