"use client";

import { SearchContext } from "@/contexts/Algo/SearchContext";
import { useContext, useEffect } from "react";
import "./page.css";

const Search = ( ) => {
    const SearchContxt = useContext( SearchContext );

    useEffect(( ) => {
        
    })

    return (
        <div
        style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <div
            style={{
                width: "100%",
                height: 100,
                backgroundColor: "red",
            }}>
                <div
                style={{
                    height: "100%",
                    width: 200,
                    backgroundColor: "blue"
                }}>

                </div>

                <div
                style={{
                    height: "100%",
                    width: 200,
                    backgroundColor: "blue"
                }}>

                </div>
            </div>
        </div>
    )
}

export default Search;
