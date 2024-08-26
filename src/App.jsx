
import favicon from "./pages/AlgoSearch/images/favicon.png"
import Logo from "./pages/AlgoSearch/images/algo-logo.png"

import { useContext, useEffect, useState } from "react";

import "./App.css"
import "./index.css"
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { AlgoSearchFooter } from "./pages/AlgoSearch/Footer/Footer";
import { SearchContext } from "./pages/AlgoSearch/contexts/SearchContext";
import { AlgoSearchHeader } from "./pages/AlgoSearch/Header/Header";

const App = ( ) => {
    const nav = useNavigate( );
    const [ query, setQuery ] = useState("");
    const [ isOnFocus, setIsOnFocus ] = useState(false);

    const SearchContxt = useContext( SearchContext );

    const getSearchResults = async ( ) => {
        console.log( query );
    }

    const navigate = ( route ) => {
        if ( query.length ) {
            SearchContxt.updateQuery(query);
            SearchContxt.updateCategory("Images");
            nav(`${ route }?q=${ query }&category=${ SearchContxt.searchCategory }`);
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
            {/* <AlgoSearchHeader /> */}

            <section className="search-bar-section">
                <div className="search-bar-logo--container">
                    <img className="search-bar-logo" src={ Logo } />
                </div>

                <form 
                  onSubmit={ ( ) => navigate("/search")} 
                  className="search-bar-form--container">
                    <div className="search-bar-input--container">
                        <div className="search-left-button">
                            <IoSearchOutline
                                size={24}
                            />
                        </div>
                        <div className="search-bar-input">
                            <input 
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 2,
                                    // backgroundColor: "red"
                                }}
                                placeholder="Search the Web"
                                value={query}
                                onChange={ (e) => setQuery(e.target.value)}
                                onFocus={ ( ) => setIsOnFocus( prev => true ) }
                                onBlur={ ( ) => setIsOnFocus( prev => query !== "" ? true : false) }
                            />
                        </div>
                        {
                            query !== "" 
                            ? <button 
                            onClick={ (e) => { 
                                e.preventDefault( );
                                setQuery("");
                                setIsOnFocus( prev => false );
                            }}
                            className="close-button">
                                <IoCloseOutline 
                                    size={24}
                                    color="#000000"
                                />
                            </button>
                            : <button 
                                className="close-button">
                            </button>
                        }
                        <button 
                        onClick={ (e) => { 
                            e.preventDefault(); 
                            navigate("/search")} 
                        }
                        className="search-button"
                        style={{
                          width: query !== "" ? 100 : 60,
                          paddingLeft: query !== "" ? 20 : 20,
                          paddingRight: query !== "" ? 20 : 20,
                        }}>
                            <p 
                              className="search-button-p"
                              style={{
                                display: query !== "" ? "flex" : "none"
                              }}>Search</p>
                            <RiSearchLine
                              className="search-button-icon" 
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

export default App;
