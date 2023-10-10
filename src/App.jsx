
import DeskLogo from '../public/media/images/logos/desk-logo.png';
import GlauciaLogo from '../public/media/images/logos/glaucia-logo.png';
import UnderSorrowLogo from '../public/media/images/logos/under-sorrow-logo.png';
import Logo from '../public/media/images/logos/algomorrow-header-logo.png';

import { Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import { Footer } from './Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='a-global--container'>
      <header className='header--container'>
        <div className='inner-header--container'>
          <div className='logo--container'>
            <img src={ Logo } id='algomorrow-logo' className='header-logo' />
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
        </div>
      </header>

      <main className='main--container'>
        <p className='main-p'>Who we are powering</p>
        <div className='brands--container'>
          <div className='brand--container'>
            <img className='brand-logo' src={ GlauciaLogo } />
          </div>
          <Link to={'/Desk'} className='brand--container link'>
            <img className='brand-logo' src={ DeskLogo } />
          </Link>
          <div className='brand--container'>
            <img className='brand-logo' src={ UnderSorrowLogo } />
          </div>
        </div>
        {/* <span className='main-message'>Waiting...</span> */}
      </main>

      <Footer />
    </div>
  )
}

export default App
