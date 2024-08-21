
import "./SidebarButton.css"
import { useNavigate } from "react-router-dom"

export const SidebarButton = ({ icon, title, path }) => {
    const nav = useNavigate( );

    const navigate = ( route ) => {
        nav(route);
    }

    return (
        <button 
        onClick={ ( ) => navigate(path) }
        className="sidebar-button">
            {
                icon
            }
            <p className="paleta-app-sidebar-button-title">{ title }</p>
        </button>
    )
}