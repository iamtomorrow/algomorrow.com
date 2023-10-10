
import Logo from '../../../../../public/media/images/logos/desk-logo.png';
import './index.css';

import { Link } from 'react-router-dom';
import favicon from './media/images/icons/deskstore-logo.ico';
import DeskStoreLogo from './media/images/logos/deskstore-footer-logo.png';

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
        document.title = "Desk Online Store - All Desk products in one place.";
        let link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
        link.href = favicon;
    })

    const products = [
        {
            name: "Dell Inspiron 5556",
            description: "",
            price: "2,100.00",
            brand: "DELL",
            image: "https://images.yaoota.com/iLdtUruNaVK3hYjJCDmORKBcQS0=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production-ke/media/crawledproductimages/9367dd9a37b8d864f00ae16d981828d92892ef11.jpg",
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
                                        <ProductCard name={ item.name }
                                            price={ item.price }
                                            brand={ item.brand }
                                            description={ item.description }
                                            image={ item.image } />
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
                            <div className='footer-content-inner--container'>
                                <div className='footer-content-left--container'>
                                    <img className='footer-content-logo' src={ DeskStoreLogo } />
                                </div>
                                <div className='footer-content-right--container'>

                                </div>
                            </div>
                        </div>
                        <div className='footer-copyright--container'>
                            <div className='footer-copyright-left--conatiner'>
                                <p className='footer-copyright-p'>@ Desk Technologies.</p>
                            </div>
                            <div className='footer-copyright-right--container'>
                                <p className='footer-copyright-p'>
                                    Payment methods accepted: PIX, Credit card (Mastercard, Visa), Bancary slip, and Picpay.
                                </p>
                                <p className='footer-copyright-p'>
                                    Desk Store is a extension of Desk Technologies which is a division of Group Algomorrow, Inc. Visit us at algomorrow.com.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
