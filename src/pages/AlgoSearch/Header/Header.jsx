
import { Link } from "react-router-dom"

import "./Header.css"
import Logo from '../images/algo-logo.png'

export const Header = ({ restricted }) => {
    return (
        <header className="algosearch-header">
            <Link to={"/"}>
                <img src={ Logo } className="logo"/>
            </Link>
        </header>
    )
}