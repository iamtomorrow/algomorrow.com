
import Logo from '../../../public/media/images/logos/glaucia-logo.png';

import './index.css';

export const Glaucia = () => {
    return (
        <div className="b-global--container">
            <div className='header--container'>
                <div className='inner-header--container'>
                    <div className='glaucia-logo logo--container'>
                        <img className='b-header-logo' id='glaucia-developers-logo' src={ Logo } />
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
            </div>
            <div className='a-main--container'>
                <div className='a-main-inner--container'>
                    <h1 className='main-h1'>Powered by Smart Sensibility</h1>
                    <p className='main-p'>Designed with a foundation in linear algebra and powered by Python's versatile programming environment, Glaucia is on a mission to unravel complex patterns and insights from diverse datasets. As you nurture Glaucia's growth, you're shaping the future of intelligent technology one layer at a time.</p>
                    <div className='a-main-button--container'>

                    </div>
                </div>
            </div>

            <footer className='footer--container'>
            <div className='footer-left--container'>
                <div className='a-footer-social-links--container'>
                    <div className='a-footer-social-links'>

                    </div>
                </div>
            </div>
            <div className='footer-right--container'>
            <div className='footer-content--container'>
                <ul className='footer-content-nav--container'>
                    <p className='footer-copyright'>Glaucia @ 2023</p>
                    <li className='navbar-footer-item'>Privacy & Legal</li>
                    <li className='navbar-footer-item'>Contact</li>
                    <li className='navbar-footer-item'>News</li>
                    <li className='navbar-footer-item'>Get Updates</li>
                    <p className='footer-copyright'>Glaucia is a division of Algomorrow, Inc. Visit us at algomorrow.com</p>
                </ul>
            </div>
            </div>
        </footer>
        </div>
    )    
}
