"use client";

import { ChildrenProps } from "@/types/types";
import { createContext, useContext, useState } from "react";

interface RouteContextProps {
    route: string 
    updateRoute: ( route: string ) => void
}

const RouteContextInitialState: RouteContextProps = {
    route: "Home",
    updateRoute: ( ) => { },
}

export const RouteContext = createContext< RouteContextProps >( RouteContextInitialState );

export const RouteContextProvider = ({ children }: ChildrenProps ) => {
    const [ route, setRoute ] = useState<string>("");

    const updateRoute = ( route: string ) => {
        setRoute( prev => route );
        console.log( route );
        window.location.href = `/${route}`;
    }

    return (
        <RouteContext.Provider value={{ route, updateRoute }}>
            { children }
        </RouteContext.Provider>
    )
}

export const useRouteContext = ( ) => {
    return useContext( RouteContext );
}