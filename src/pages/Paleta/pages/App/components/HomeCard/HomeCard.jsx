
import { useNavigate } from "react-router-dom"
import "./HomeCard.css"

export const HomeCard = ({ icon, title, path } ) => {
    const nav = useNavigate( );

    const navigate = ( route ) => {
        nav(route);
    }

    return (
        <div 
        onClick={ ( ) => navigate(path) }
        className="paleta-app-library-card--container">
            <div className="paleta-app-library-card">
                { icon }
                <p className="paleta-app-library-card-title">{ title }</p>
            </div>
        </div>
    )
}