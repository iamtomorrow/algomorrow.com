
import { useNavigate } from "react-router-dom"
import "./LibraryCard.css"

export const LibraryCard = ({ imageURL, title, base, path }) => {
    const nav = useNavigate( );

    const navigate = ( route ) => {
        nav(route);
    }

    return (
        <div 
        onClick={ ( ) => navigate(path) }
        className="paleta-app-library-card--container">
            <div className="paleta-app-library-card">
                <div className="paleta-app-library-card-image--container">
                    <img 
                        className="paleta-app-library-card-image"
                        src={ imageURL } 
                        alt="library-card-image"
                    />
                </div>
                <div className="paleta-app-library-card-title--container">
                    <p className="paleta-app-library-card-base">{ base }</p>
                    <p className="paleta-app-library-card-title">{ title }</p>
                </div>
            </div>
        </div>
    )
}