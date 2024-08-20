
import "./Header.css"
import Logo from '../images/algo-logo.png'

export const Header = ({ restricted }) => {
    return (
        <header className="algosearch-header">
            <img src={ Logo } className="logo"/>
        </header>
    )
}