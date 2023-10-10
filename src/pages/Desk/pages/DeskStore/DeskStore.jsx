
import Logo from '../../../../../public/media/images/logos/desk-logo.png';
import './index.css';

import { Link } from 'react-router-dom';

import ShoppingCartIcon from 'remixicon-react/ShoppingCart2LineIcon';
import ArrowDownIcon from 'remixicon-react/ArrowDownLineIcon';

import { useEffect, useState } from 'react';

import { ProductCard } from './components/ProductCard/ProductCard';

export const DeskStore = ( ) => {
    const [ expanded, setExpanded ] = useState(false);

    const handleExpandHeaderClick = ( ) => {
        setExpanded(!expanded)
    }

    useEffect(( ) => {
        document.title = "Desk Store";
    })

    const products = [
        {
            name: "Dell Inspiron 5556",
            description: "",
            price: "2,100.00"
        }
    ]

    return (
        <div className="desk-store-global--container">
            <div className='desk-store-global-inner--container'>
                <header className='desk-store-header--container' 
                    style={{ height: `${expanded ? '100%' : ""}` }}>
                    <div className='desk-store-header-inner--container'>
                        <div className='logo--container'>
                            <img id='desk-logo' src={ Logo } />
                        </div>

                        <nav className='desk-store-nav--container'>
                            <div className='desk-store-nav-inner--container'>
                                <Link className='link a-navbar-item'>
                                    Computers
                                </Link>
                                <Link className='link a-navbar-item'>
                                    Mobiles
                                </Link>
                                <Link className='link a-navbar-item'>
                                    Acessories
                                </Link>
                                <Link className='link a-navbar-item'>
                                    Storage
                                </Link>
                            </div>
                        </nav>

                        <div className='desk-store-side--container'>
                            <Link className='link a-navbar-item'>
                                Support
                            </Link>
                            <Link  className='link a-navbar-item'>
                                My Account
                            </Link>
                            <Link className='link a-navbar-item'>
                                <ShoppingCartIcon className='header-icon' />
                            </Link>
                            <Link className='link a-navbar-item'
                                onClick={ handleExpandHeaderClick }>
                                <ArrowDownIcon className='header-icon' />
                            </Link>
                        </div>
                    </div>
                </header>

                <section className='desk-store-main-section--container'>
                    <div className='desk-store-main-section-inner--container'>
                        <div className='desk-stote-content--container'>
                            <h1 className='content--container-h1'>New DELL model building</h1>
                            <p className='content--container-p'>Register now and get 30% off in you buy</p>
                            <div className='content-button-container'>
                                <button className='content--container-button button'>
                                    Register
                                </button>
                                <button className='content--container-button buy-now-button button'>
                                    Buy Now
                                </button>
                            </div>
                        </div>  
                    </div>
                </section>

                <main className='desk-store-main--container'>
                    <div className='desk-store-main-inner--container'>
                        <div className='desk-store-left--container'>
                            <div className='desk-store-left-inner--container'>

                            </div>
                        </div>

                        <div className='desk-store-right--container'>
                            <div className='desk-store-right-inner--container'>
                                { products &&
                                    products.map((item) => (
                                        <ProductCard />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </main>

                <footer className='desk-store-footer--container'>
                    <div className='desk-store-footer-inner--container'>
                        <div className='footer-description-column--container'>
                            <p>- The images presented are just illustrative.</p>
                            <p>- Products can vary depending on customer countries.</p>
                            <p>- All the products are registered on Desk license.</p>
                        </div>
                        <div className='footer-content--container'>

                        </div>
                        <div className='footer-copyright--container'>

                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
