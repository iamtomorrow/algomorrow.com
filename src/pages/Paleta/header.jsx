
import "./index.css"
import { Link, useNavigate } from "react-router-dom"
import Logo from './images/logo.jpg'

export const Header = ( ) => {
    const navigation = useNavigate( );

    return (
        <header className="header">
            <div 
            onClick={ ( ) => navigation.name("/") }
            className="header-left--container">
                <img 
                    src={ Logo } 
                    className="logo"
                />
            </div>

            <div className="header-center--container">
                <nav className="header-navbar--container">
                    <Link to={"/paleta"} className="navbar-link" >Home</Link>
                    <Link to={"/paleta/downloads"} className="navbar-link" >Downloads</Link>
                    <Link to={"/paleta/planos"} className="navbar-link" >Planos</Link>
                    {/* <Link to={"/desenvolvedores"} className="navbar-link" >Desenvolvedores</Link> */}
                    <Link to={"/paleta/sobre"} className="navbar-link" >Sobre</Link>
                </nav>
            </div>

            <div className="header-right--container">
                <Link to={"/paleta/entrar"} className="header-login-button">Entrar</Link>
            </div>
        </header>
    )
}