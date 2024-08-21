
import "./Header.css"
import Logo from "../../../images/logo.jpg"
import { RiNotification4Line, RiSearchFill, RiSearchLine } from "react-icons/ri"
import { IoNotificationsOutline } from "react-icons/io5"

export const PaletaAppHeader = ( ) => {
    return (
        <header className="paleta-app-header">
            <div className="logo--container">
                <img 
                    src={ Logo } 
                    alt="logo" 
                    className="header-logo"
                />
            </div>

            <div className="paleta-app-header-sidebar--container">
                <button className="paleta-app-header-search-button">
                    <RiSearchLine size={22}/>
                </button>

                <button className="paleta-app-header-notification-button">
                    <RiNotification4Line size={22}/>
                </button>
            </div>
        </header>
    )
}