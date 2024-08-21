
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
            nav(`${route}?q=${query}&page=1&filter=all&lang=en&location=usa&limit&theme=default`);
        }
    }

    useEffect(( ) => {
        document.title = `${SearchContxt.searchQuery} - Algo Search`;
        let link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
        link.href = favicon;
    })

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
                            <CategoryCard title={ item } />
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
            </div>
        </div>
    )
}