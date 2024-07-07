
import { Link } from "react-router-dom";
import GitHubIcon from "remixicon-react/GithubFillIcon"
import { RiTwitterXFill } from "react-icons/ri"
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import "./Header.css"
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";

export const Header = ( { Logo }) => {
    return (
        <div className="header desk-header--container">
            <div className="desk-inner-header--container">
                <div className='desk-logo logo--container'>
                    <img className='b-header-logo' id='desk-logo' src={ Logo } />
                </div>
                <nav className='navbar navbar-center--container'>
                {/* <ul className='navbar-list'>
                    <Link to={'/desk/store'} className='a-navbar-item link'>Store</Link>
                    <Link to={'/desk/services'} className='a-navbar-item link'>Services</Link>
                    <Link to={'/desk/deskbase'} className='a-navbar-item link'>Deskbase</Link>
                    <Link to={'/desk/apis'} className='a-navbar-item link'>APIs</Link>
                    <Link to={'/desk/careers'} className='a-navbar-item link'>Careers</Link>
                    <Link to={'/desk/contactus'} className="a-navbar-item link">Contact Us</Link>
                    <Link to={'/desk/whoweare'} className='a-navbar-item link'>Who We Are</Link>
                </ul> */}
                </nav>
                <nav className='navbar-end--container'>
                    <a  className='social-link' 
                        href="https://github.com/wearedesk/" 
                        target="_blank">
                        <GitHubIcon size={20} className="header-icon"/>
                        {/* <p className='social-p'>/desktechnologies</p> */}
                    </a>
                    <a  className='social-link' 
                        href="https://x.com/wearedesk/" 
                        target="_blank">
                        <RiTwitterXFill size={20} className="header-icon"/>
                        {/* <p className='social-p'>/desktechnologies</p> */}
                    </a>
                    <a  className='social-link' 
                        href="https://instagram.com/desktechnologies/" 
                        target="_blank">
                        <InstagramLineIcon size={20} className="header-icon"/>
                        {/* <p className='social-p'>/desktechnologies</p> */}
                    </a>
                    <a  className='social-link' 
                        href="https://linkedin.com/in/wearedesk/" 
                        target="_blank">
                        <LinkedinFillIcon size={20} className="header-icon"/>
                        {/* <p className='social-p'>/desktechnologies</p> */}
                    </a>
                </nav>
            </div>
        </div>
    )
}