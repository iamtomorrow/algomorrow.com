
import DeskLogo from '../public/media/images/logos/desk-logo.png';
import GlauciaLogo from '../public/media/images/logos/glaucia-logo.png';
import UnderSorrowLogo from '../public/media/images/logos/under-sorrow-logo.png';
import Logo from '../public/media/images/logos/algomorrow-logo.png';

import { Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='global--container'>
      <header className='header--container'>
        <div className='logo--container'>
          {/* <p id='logo'>algomorrow</p> */}
          <img src={ Logo } id='logo' className='header-logo' />
        </div>
        <nav className='navbar-center--container navbar'>
          <ul className='navbar-list'>
            <Link className='navbar-item link' to={"/developers"}>Developers</Link>
            <Link className='navbar-item link' to={"/glaucia"}>Discover</Link>
            <Link className='navbar-item link' to={"/technology"}>Technology</Link>
            <Link className='navbar-item link' to={"/creations"}>Our Creations</Link>
            <Link className='navbar-item link' to={"/whoweare"}>Who We Are</Link>
          </ul>
        </nav>
        <nav className='navbar-end--container navbar'>

        </nav>
      </header>
      <main className='main--container'>
        <p>Who we are powering</p>
        <div className='brands--container'>
          <div className='brand--container'>
            <img className='brand-logo' src={ GlauciaLogo } />
          </div>
          <div className='brand--container'>
            <img className='brand-logo' src={ DeskLogo } />
          </div>
          <div className='brand--container'>
            <img className='brand-logo' src={ UnderSorrowLogo } />
          </div>
        </div>
        {/* <span className='main-message'>Waiting...</span> */}
      </main>
      <footer className='footer--container'>
        <div className='footer-left--container'>
          
        </div>
        <div className='footer-right--container'>
          <div className='footer-content--container'>
            <ul className='footer-content-nav--container'>
              <p className='footer-copyright'>Algomorrow, Inc @ 2023</p>
              <li className='navbar-footer-item'>Privacy & Legal</li>
              <li className='navbar-footer-item'>Contact</li>
              <li className='navbar-footer-item'>News</li>
              <li className='navbar-footer-item'>Get Updates</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
