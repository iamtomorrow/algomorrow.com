
import { IoArrowBackOutline } from "react-icons/io5"
import "./SecondaryHeader.css"
import { useNavigate } from "react-router-dom"

export const SecondaryHeader = ( ) => {
    const nav = useNavigate( );

    const navigate = ( route ) => {
        nav(route);
    }

    return (
        <header className="paleta-app--container">
            <div className="paleta-app-secondary-header--container">
                <button 
                onClick={ ( ) => navigate("/paleta/")}
                className="paleta-app-secondary-header-back-button">
                    <IoArrowBackOutline />
                    <p>Back</p>
                </button>
            </div>
        </header>
    )
}