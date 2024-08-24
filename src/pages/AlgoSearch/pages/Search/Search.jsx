
import "./Search.css"
import Logo from '../../images/algo-logo.png'
import favicon from '../../images/favicon.png'

import { useContext, useState, useEffect } from "react"
import { SearchContext } from "../../contexts/SearchContext"
import { IoArrowForwardOutline, IoCloseOutline} from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { RiSettings3Line } from "react-icons/ri"
import { PageBar } from "../../components/PageBar/PageBar"
import { CategoryCard } from "../../components/CategoryCard/CategoryCard"

const searchCategories = [
    "All", "Videos", "Images", "News", "Shopping", "Maps"
]

export const AlgoSearchSearch = ( ) => {
    const nav = useNavigate( );

    const SearchContxt = useContext( SearchContext );
    const [ query, setQuery ] = useState( SearchContxt.searchQuery );

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
                            <img className="logo" src={ Logo } alt="logo" />
                        </Link>
                    </div>

                    <div className="algosearch-search--page-search-bar--container">
                        <input 
                            placeholder="Search the Web"
                            className="algosearch-search--page-search-bar-input"
                            value={ query }
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