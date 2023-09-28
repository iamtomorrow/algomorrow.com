
import { Link } from "react-router-dom";

import Logo from '../../../public/media/images/logos/desk-logo.png';

export const Header = ( ) => {
    return (
        <div className='header--container'>
            <div className='inner-header--container'>
                <div className='desk-logo logo--container'>
                    <img className='b-header-logo' id='desk-logo' src={ Logo } />
                </div>
                <nav className='navbar-center--container navbar'>
                <ul className='navbar-list'>
                    <Link to={'/desk/store'} className='a-navbar-item link'>Store</Link>
                    <Link to={'/desk/services'} className='a-navbar-item link'>Services</Link>
                    <Link to={'/desk/deskbase'} className='a-navbar-item link'>Deskbase</Link>
                    <Link to={'/desk/apis'} className='a-navbar-item link'>APIs</Link>
                    <Link to={'/desk/careers'} className='a-navbar-item link'>Careers</Link>
                    <Link to={'/desk/contactus'} className="a-navbar-item link">Contact Us</Link>
                    <Link to={'/desk/whoweare'} className='a-navbar-item link'>Who We Are</Link>
                </ul>
                </nav>
                <nav className='navbar-end--container navbar'>

                </nav>
            </div>
        </div>
    )
}