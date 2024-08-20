
import Logo from './images/logo.jpg'
import { Link } from "react-router-dom"

import { RiTwitterXFill } from "react-icons/ri"
import InstagramLineIcon from "remixicon-react/InstagramLineIcon"
import GithubFillIcon from "remixicon-react/GithubFillIcon"
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon"

export const Footer = ( ) => {
    return (
        <footer className="paleta-footer">
        <div className="footer-top--container">
            <Link to={"/"} className="footer-link" >Home</Link>
            <Link to={"/paleta/downloads"} className="footer-link" >Downloads</Link>
            <Link to={"/paleta/planos"} className="footer-link" >Planos</Link>
            <Link to={"/paleta/desenvolvedores"} className="footer-link" >Desenvolvedores</Link>
            <Link to={"/paleta/sobre"} className="footer-link" >Sobre</Link>
            <Link to={"/paleta/termos"} className="footer-link" >Termos de uso</Link>
            <Link to={"/paleta/privacidade"} className="footer-link" >Política de privacidade</Link>
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
    )
}