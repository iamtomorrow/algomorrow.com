"use client";

import { APISearch } from "@/api/Search/API.Search";
import { createContext, ReactNode, useContext, useState } from "react";

interface ChildrenProps {
    children: ReactNode
}

interface SearchContextProps {
    query: string
    updateQuery: ( q: string ) => void
    getSearch: ( query: string ) => void
}

const SearchContextInitialState: SearchContextProps = {
    query: "",
    updateQuery: ( ) => { },
    getSearch: ( ) => { }
}

export const SearchContext = createContext<SearchContextProps>( SearchContextInitialState );

export const SearchContextProvider = ({ children }: ChildrenProps) => {
    const [ query, setQuery ] = useState<string>("");

    const updateQuery = ( q: string ) => {
        setQuery( prev => q );
    }

    const getSearch = async ( query: string ) => {
        APISearch.search( query );
    }

    return (
        <SearchContext.Provider value={{
            query,
            updateQuery,
            getSearch
        }}>
            { children }
        </SearchContext.Provider>
    )
}

export const useSearchContext = ( ) => {
    return useContext( SearchContext );
}