
import InstagramIcon from 'remixicon-react/InstagramLineIcon';
import TwitterIcon from 'remixicon-react/TwitterFillIcon';
import YoutubeIcon from 'remixicon-react/YoutubeFillIcon';
import FacebookIcon from 'remixicon-react/FacebookFillIcon';

import { Link } from 'react-router-dom';
import Logo from '../../../public/media/images/logos/desk-developers-logo.jpg';
import './index.css';

export const DeskDevelopers = ( ) => {
    return (
        <div className="a-global--container">
            <div className='a-header--container'>
                <div className='desk-developers-logo logo--container'>
                    <img className='header-logo' id='desk-developers-logo' src={ Logo } />
                </div>
                <nav className='navbar-center--container navbar'>
                <ul className='navbar-list'>
                    <li className='a-navbar-item'>Learn</li>
                    <li className='a-navbar-item'>Develop</li>
                    <li className='a-navbar-item'>Design</li>
                    <li className='a-navbar-item'>Products</li>
                    <li className='a-navbar-item'>Who We Are</li>
                </ul>
                </nav>
                <nav className='navbar-end--container navbar'>

                </nav>
            </div>
            <div className='a-main--container'>
                <div className='a-main-inner--container'>
                    <h1 className='main-h1'>Be part of our developer team</h1>
                    <p className='main-p'>Using our tools and services, you can provide an exceptional experience to Desk users around the world</p>
                    <div className='a-main-button--container'>
                        <button className='learn-more-button main-button'>Learn More</button>
                        <button className='join-now-button main-button'>Join Now</button>
                    </div>
                </div>
            </div>

            <footer className='footer--container'>
            <div className='footer-left--container'>
                <div className='a-footer-social-links--container'>
                    <div className='a-footer-social-links'>
                        <div className='social-link'>
                            <InstagramIcon className='social-icon' />
                            <p className='social-p'>/deskdevelopers</p>
                        </div>
                        <div className='social-link'>
                            <FacebookIcon className='social-icon' />
                            <p className='social-p'>/deskdevelopers</p>
                        </div>
                        <div className='social-link'>
                            <TwitterIcon className='social-icon' />
                            <p className='social-p'>/deskdevelopers</p>
                        </div>
                        <div className='social-link'>
                            <YoutubeIcon className='social-icon' />
                            <p className='social-p'>/desk</p>
                        </div>
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
                    <p className='footer-copyright'>Desk is a division of Algomorrow, Inc. Visit us at algomorrow.com</p>
                </ul>
            </div>
            </div>
        </footer>
        </div>
    )    
}
