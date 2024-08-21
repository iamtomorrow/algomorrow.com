
import favicon from "./images/favicon.png"
import Logo from "./images/algo-logo.png"

import { useContext, useEffect, useState } from "react";

import "./index.css"
import { AlgoSearchFooter } from "./Footer/Footer";
import { IoArrowForwardOutline, IoCloseOutline, IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { RiSettings3Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "./contexts/SearchContext";

export const AlgoSearch = ( ) => {
    const nav = useNavigate( );
    const [ query, setQuery ] = useState("");

    const SearchContxt = useContext( SearchContext );

    const getSearchResults = async ( ) => {
        console.log( query );
    }

    const navigate = ( route ) => {
        if ( query.length ) {
            nav(`${route}?q=${query}`);
            SearchContxt.updateQuery(query);
        }
    }

    useEffect(( ) => {
        document.title = "Algo";
        let link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
        link.href = favicon;
    })

    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            {/* <img 
                src={ favicon } 
                alt="favicon"
                style={{
                    width: "100px"
                }}
            />
            <h1 style={{
                textAlign: "center"
            }}>Algo Search Engine is comming!</h1> */}
            <header style={{
                width: "100%",
                height: 100,
                padding: 10,
                alignItems: "center",
                display: "flex"
            }}>
                <Link 
                to={"/settings"}
                className="settings-link">
                    <RiSettings3Line
                        size={20}
                    />
                </Link>
            </header>

            <section className="search-bar-section">
                <div className="search-bar-logo--container">
                    <img className="search-bar-logo" src={ Logo } />
                </div>

                <form 
                className="search-bar-form--container">
                    <div className="search-bar-input--container">
                        <button className="search-left-button">
                            <IoSearchOutline
                                size={24}
                                color="#000000"
                            />
                        </button>
                        <input 
                            
                            placeholder="Search the Web"
                            className="search-bar-input"
                            value={query}
                            onChange={ (e) => setQuery(e.target.value)}
                        />
                        {
                            query !== "" &&
                            <button 
                            onClick={ ( ) => setQuery("") }
                            className="close-button">
                                <IoCloseOutline 
                                    size={24}
                                    color="#000000"
                                />
                            </button>
                        }
                        <button 
                        onClick={ (e) => { 
                            e.preventDefault(); 
                            navigate("/search")} 
                        }
                        className="search-button">
                            <IoArrowForwardOutline
                                size={22}
                            />
                        </button>
                    </div>
                </form>
                <div className="search-categories-bar--container">
                    <button className="search-category-button">
                        All
                    </button>
                    <button className="search-category-button">
                        Images
                    </button>
                    <button className="search-category-button">
                        Videos
                    </button>
                    <button className="search-category-button">
                        News
                    </button>
                    <button className="search-category-button">
                        Shopping
                    </button>
                </div>
            </section>

            <AlgoSearchFooter restricted={true} />
        </div>
    )
}