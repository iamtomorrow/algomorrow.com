"use client";

import { APISearch } from "@/api/Search/API.Search";
import { ChildrenProps } from "@/types/types";
import { createContext, useContext, useEffect, useState } from "react";

interface CategoriesContextProps {
    categories: any[]
    getCategories: ( ) => void
}

const CategoriesContextInitialState: CategoriesContextProps = {
    categories: [],
    getCategories: ( ) => { },
}

export const CategoriesContext = createContext( CategoriesContextInitialState );

export const CategoriesContextProvider = ({ children }: ChildrenProps ) => {
    const [ categories, setCategories ] = useState<any[]>([]);

    const getCategories = async ( ) => {
        let _categories = await APISearch.getCategories( );
        setCategories( prev => _categories );
    }

    useEffect(( ) => {
        getCategories( );
    }, [ ]);

    return (
        <CategoriesContext.Provider value={{ categories, getCategories }}>
            { children }
        </CategoriesContext.Provider>
    )
}

export const useCategoriesContext = ( ) => {
    return useContext( CategoriesContext );
}