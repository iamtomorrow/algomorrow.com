
import "./Search.css"
import Logo from '../../images/algo-logo.png'
import favicon from '../../images/favicon.png'

import { useContext, useState, useEffect } from "react"
import { SearchContext } from "../../contexts/SearchContext"
import { IoSearchOutline, IoCloseOutline} from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { RiSettings3Line, RiSearchLine } from "react-icons/ri"
import { PageBar } from "../../components/PageBar/PageBar"
import { CategoryCard } from "../../components/CategoryCard/CategoryCard"

const searchCategories = [
    "All", "Videos", "Images", "News", "Shopping", "Maps"
]

export const AlgoSearchSearch = ( ) => {
    const nav = useNavigate( );

    const SearchContxt = useContext( SearchContext );
    const [ query, setQuery ] = useState( SearchContxt.searchQuery );
    const [ isOnFocus, setIsOnFocus ] = useState(true);

    const navigate = ( route ) => {
        if ( query.length ) {
            SearchContxt.updateQuery( query );
            nav(`${route}?q=${query}&page=1&category=${SearchContxt.searchCategory}&lang=en&location=usa&limit&theme=default`);
        }
    }

    useEffect(( ) => {
        document.title = `${SearchContxt.searchQuery} - Algo Search`;
        let link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
        link.href = favicon;
    })

    useEffect(( ) => {
        if ( query === "" ) {
            nav("/")
        }
    }, [ ]);

    return (
        <div className="algosearch-search--page">
            <div className="algosearch-search--page-header--container">
                <header className="algosearch-search--page-header">
                    <div className="algosearch-search--page-logo--container">
                        <Link to={"/"}>
                            <img className="algosearch-search--page-logo" src={ Logo } alt="logo" />
                        </Link>
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
                                placeholder=""
                                value={query}
                                onChange={ (e) => setQuery(e.target.value)}
                                onFocus={ ( ) => setIsOnFocus( prev => true ) }
                                onBlur={ ( ) => setIsOnFocus( prev => query !== "" ? true : false) }
                            />
                            <p 
                            className="search-bar-input-placeholder"
                            style={{
                                display: "flex",
                                fontSize: isOnFocus ? 0 : 14,
                                marginBottom: isOnFocus ? 46 : 0,
                                paddingRight: 10,
                                paddingLeft: isOnFocus ? 10 : 0,
                                height: 30,
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                alignItems: "center",
                                color: "rgba(0, 0, 0, 0.6)",
                                position: "absolute",
                            }}>Search the Web</p>
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
                          width: query !== "" ? 100 : 46,
                          paddingLeft: query !== "" ? 20 : 0,
                          paddingRight: query !== "" ? 20 : 0,
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

                    <div className="algosearch-search--page-sidebar--container">
                        <Link 
                        to={"/settings"}
                        className="settings-link">
                            <RiSettings3Line
                                size={20}
                            />
                        </Link>
                    </div>
                </header>
            </div>

            <section className="algosearch-search--page-categories--container">
                <div className="algosearch-search--page-categories">
                    {
                        searchCategories.map((item) => (
                            <CategoryCard 
                                title={ item }
                                selected={ item === SearchContxt.searchCategory ? true : false }
                            />
                        ))
                    }
                </div>
            </section>

            <div className="algosearch-search--page-center-col">
                <PageBar 
                    description={"SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, ..."}
                    title={"SpaceX"}
                    faviconURL={"https://www.spacex.com/static/images/share.jpg"}
                    url={"https://www.spacex.com/"}
                    key={"bhyf7du"}
                />

                <PageBar 
                    description={"costco nsfw cups going viral · zach wilson Football quarterback · star wars the acolyte cancelled · bmw recalls water pump · nyt strands hints · 2025 nfl mock ..."}
                    title={"Google"}
                    faviconURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCC"}
                    url={"https://www.google.com.br/?hl=pt-BR"}
                    key={"fhyf7sfu"}
                />

                <PageBar 
                    description={"costco nsfw cups going viral · zach wilson Football quarterback · star wars the acolyte cancelled · bmw recalls water pump · nyt strands hints · 2025 nfl mock ..."}
                    title={"Google"}
                    faviconURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCC"}
                    url={"https://www.google.com.br/?hl=pt-BR"}
                    key={"fhyf7sfu"}
                />
            </div>
        </div>
    )
}