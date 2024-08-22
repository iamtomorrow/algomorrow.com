
import "./Header.css"
import Logo from "../../../images/logo.jpg"
import { RiNotification4Line, RiSearchFill, RiSearchLine } from "react-icons/ri"
import { IoNotificationsOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

export const PaletaAppHeader = ( ) => {
    const nav = useNavigate( );

    const navigate = ( route ) => {
        nav(route);
    }

    return (
        <header className="paleta-app-header">
            <div className="paleta-app-header-logo--container">
                <img 
                    src={ Logo } 
                    alt="logo" 
                    className="header-logo"
                />
            </div>

            <div className="paleta-app-header-sidebar--container">
                <button 
                onClick={ ( ) => navigate("/paleta/search") }
                className="paleta-app-header-search-button">
                    <RiSearchLine size={22}/>
                </button>

                <button 
                onClick={ ( ) => navigate("/paleta/notifications") }
                className="paleta-app-header-notification-button">
                    <RiNotification4Line size={22}/>
                </button>
            </div>
        </header>
    )
}