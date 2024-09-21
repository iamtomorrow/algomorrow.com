"use client";

import Logo from "../../../assets/Algo/images/light-logo.png";
import { useSearchContext } from "@/contexts/Algo/SearchContext";
import { useEffect, useState } from "react";
import "./page.css";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { useRouteContext } from "@/contexts/Algo/RouteContext";
import { CategoryBar } from "@/components/Algo/Algo.CategoryBar";

const Search = ( ) => {
    const { updateQuery, query } = useSearchContext( );
    const { updateRoute } = useRouteContext( );

    const [ searchQuery, setSearchQuery ] = useState<string>("");

    const updateContextAndNavigate = ( ) => {
        const timeStamp = Date.now( );
        updateQuery( searchQuery );
        updateRoute(`search?q=${searchQuery}&filter=all&timestamp=${timeStamp}`);    
    }

    useEffect(( ) => {
            
    }, [ ]);

    return (
        <div
        style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "green",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <div
            style={{
                width: "100%",
                height: 100,
                // backgroundColor: "red",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start"
            }}>
                <div
                style={{
                    height: "100%",
                    width: 160,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "blue"
                }}>
                    <div
                    style={{
                        width: 80,
                        height: 60,
                        // backgroundColor: "red",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                    }}>
                        <Image 
                            src={ Logo }
                            alt="Algo Logo"
                            width={1000}
                            height={1000}
                            style={{
                                width: "100%",
                            }}
                        />
                    </div>
                </div>

                <div
                style={{
                    height: "100%",
                    width: "60%",
                    // background: "green",
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <form
                    className="search-form--container">
                    <input 
                        style={{
                        height: "100%",
                        width: "100%",
                        paddingLeft: 20,
                        backgroundColor: "transparent"
                        // backgroundColor: "red"
                        }}
                        placeholder="Search the Web"
                        value={ query }
                        onChange={ (e) => {
                        e.preventDefault( );
                        setSearchQuery(e.target.value)
                        }}
                    />

                    <button
                    onClick={ (e) => {
                        e.preventDefault( );
                        setSearchQuery(prev => "");
                    }}
                    className={`${ searchQuery !== "" ? "search-form-clean-button--active" : "search-form-clean-button"}`}>
                        <CgClose 
                        size={20}
                        color="#000000"
                        />
                    </button>
                    <button
                    onClick={ (e) => {
                        e.preventDefault( );
                        updateContextAndNavigate();
                    }}
                    className="search-form-search-button--active">
                        <BiSearch 
                            size={20}
                            color="#000000"
                        />
                    </button>
                    </form>
                </div>
            </div>

            <CategoryBar />

            <div
            style={{
                width: "90%",
                height: 2,
                border: "1px solid rgba(0, 0, 0, 0.2)"
            }}>

            </div>
        </div>
    )
}

export default Search;
