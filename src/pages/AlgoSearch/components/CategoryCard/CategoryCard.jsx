
import { useContext } from "react"
import "./CategoryCard.css"
import { SearchContext } from "../../contexts/SearchContext"

export const CategoryCard = ({ title }) => {
    const SearchContxt = useContext( SearchContext );

    const updateContext = ( title ) => {
        SearchContxt.updateCategory(title);
    }

    return (
        <div 
            onClick={ ( ) => updateContext(title) }
            className="category-card--container"
            style={{
                backgroundColor: SearchContxt.searchCategory === title ? "#000000" : "",
                transition: "all .25s ease",
            }}>
            <p 
                className="category-card-title"
                style={{
                    color: SearchContxt.searchCategory === title ? "#ffffff" : ""
                }}>{ title }</p>
        </div>
    )
}