
import "./index.css"

import Logo from './images/logo.jpg'
import MainImage from "./images/main.jpg"

import { Link } from "react-router-dom"

import { RiTwitterXFill } from "react-icons/ri"
import InstagramLineIcon from "remixicon-react/InstagramLineIcon"
import GithubFillIcon from "remixicon-react/GithubFillIcon"
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon"
import { IoArrowForwardOutline } from "react-icons/io5"

export const Paleta = ( ) => {
    return (
        <div style={{
            width: "100%",
            minheight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start"
        }}>
            <header className="header">
                <div className="header-left--container">
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
                    <Link to={"/paleta/signup"} className="header-login-button">Entrar</Link>
                </div>
            </header>

            <section className="main-section">
                <h1 className="main-section-h1">Um app com paletas de possibilidades.</h1>

                <div className="main-section-image--container">
                    <img 
                        src={ MainImage } 
                        className="main-section-image"
                    />
                </div>

                <div className="main-section-button">
                    <Link to={"/paleta/downlodas"} className="download-button">
                        Baixar
                        <IoArrowForwardOutline 
                            size={16} 
                            style={{
                                marginLeft: 4
                            }}
                        />
                    </Link>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-top--container">
                    <Link to={"/"} className="footer-link" >Home</Link>
                    <Link to={"/downloads"} className="footer-link" >Downloads</Link>
                    <Link to={"/planos"} className="footer-link" >Planos</Link>
                    <Link to={"/desenvolvedores"} className="footer-link" >Desenvolvedores</Link>
                    <Link to={"/sobre"} className="footer-link" >Sobre</Link>
                    <Link to={"/sobre"} className="footer-link" >Termos de uso</Link>
                    <Link to={"/sobre"} className="footer-link" >Política de privacidade</Link>
                </div>
                
                <div className="footer-social--container">
                    <Link className="footer-social-link">
                        <InstagramLineIcon size={24} />
                    </Link>
                    <Link className="footer-social-link">
                        <RiTwitterXFill size={24} />
                    </Link>
                    <Link className="footer-social-link">
                        <GithubFillIcon size={24} />
                    </Link>
                    <Link className="footer-social-link">
                        <LinkedinFillIcon size={24} />
                    </Link>
                </div>

                <div className="footer-center--container">
                    <img 
                        src={ Logo } 
                        className="footer-logo"
                    />
                </div>

                <div className="footer-bottom--container">
                    <p className="footer-copyright-text">Paleta @ 2024</p>
                </div>
            </footer>
        </div>
    )
}
