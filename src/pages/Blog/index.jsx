
import InstagramIcon from "remixicon-react/InstagramLineIcon";
import TwitterIcon from 'remixicon-react/TwitterFillIcon'
import FacebookIcon from 'remixicon-react/FacebookFillIcon';
import LikedinIcon from 'remixicon-react/LinkedinFillIcon';
import { Header } from "./Header";

import Logo from '../../../public/media/images/logos/desk-logo.png';

export const Desk = ( ) => {
    return (
        <div className="a-global--container">
            <Header Logo={ Logo }/>

            <div className='a-main--container main--container'>
                <div className='a-main-inner--container'>
                    <p>Blog</p>
                    <div className='a-main-button--container'>

                    </div>
                </div>
            </div>

            <footer className='footer--container'>
            <div className='footer-left--container'>
                <div className='a-footer-social-links--container'>
                    <div className='a-footer-social-links'>
                        <a  className='social-link' 
                            href="https://www.instagram.com/desktechnologies/" 
                            target="_blank">
                            <InstagramIcon className='social-icon' />
                            {/* <p className='social-p'>/desktechnologies</p> */}
                        </a>
                        <div className='social-link'>
                            <FacebookIcon className='social-icon' />
                            {/* <p className='social-p'>/deskdevelopers</p> */}
                        </div>
                        <a  className='social-link' 
                            href="https://twitter.com/wearedesk" 
                            target="_blank">
                            <TwitterIcon className='social-icon' />
                            {/* <p className='social-p'>/wearedesk</p> */}
                        </a>
                        <a  className='social-link' 
                            href="https://www.linkedin.com/company/desktechnologies/" 
                            target="_blank">
                            <LikedinIcon className='social-icon' />
                            {/* <p className='social-p'>/desktechnologies</p> */}
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-right--container'>
            <div className='footer-content--container'>
                <ul className='footer-content-nav--container'>
                    <p className='footer-copyright'>Desk @ 2023</p>
                    <li className='navbar-footer-item'>Privacy & Legal</li>
                    <li className='navbar-footer-item'>Contact</li>
                    <li className='navbar-footer-item'>News</li>
                    <li className='navbar-footer-item'>Get Updates</li>
                    <p className='footer-copyright'>Desk is a division of Algomorrow Group, Inc. Visit us at algomorrow.com</p>
                </ul>
            </div>
            </div>
        </footer>
        </div>
    )
}
