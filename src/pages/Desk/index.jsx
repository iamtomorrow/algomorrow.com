
import { useEffect, useState } from "react";
import InstagramIcon from "remixicon-react/InstagramLineIcon";
import { RiTwitterXFill } from "react-icons/ri"
import FacebookIcon from 'remixicon-react/FacebookFillIcon';
import LikedinIcon from 'remixicon-react/LinkedinFillIcon';
import ArrowRight from "remixicon-react/ArrowRightUpLineIcon"
import { Header } from "./Header";

import Logo from '../../../public/media/images/logos/desk-logo.png';
import favicon from './images/favicon.png'

import "./index.css"

export const Desk = ( ) => {
    const fullPhrase = "Free. Friedly. Sponsor Block. ";
    const [ phrase, setPhrase ] = useState("");
    const [ count, setCount ] = useState();

    useEffect(( ) => {
        setTimeout(( ) => {
            if ( count <= fullPhrase.length ) {
                setTimeout(( ) => {
                    setPhrase( prev => prev += fullPhrase.at(count-1));
                    setCount( prev => prev +=1 );
                }, 100);
            } else {
                setPhrase("");
                setCount(0);
            }
        }, count <= fullPhrase.length ? 100 : 1000);
    })

    useEffect(( ) => {
        document.title = "Desk - We are powered by developers. We powered developers.";
        let link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
        link.href = favicon;
    })

    return (
        <div className="a-global--container">
            <Header Logo={ Logo }/>

            <div className='desk-main--container'>
                <div className='a-main-inner--container'>
                    <div style={{
                        display: "flex"
                    }}>
                        <h1 className='main-h1'>YouTube by </h1>
                        <h1 className='main-h1' style={{
                            color: "#420097",
                            marginLeft: 14,
                        }}>Desk</h1>
                    </div>
                    <div style={{
                        width: "100%",
                        height: 50,
                        // backgroundColor: "red",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <h3 className='main-h3'>{ phrase }</h3>
                    </div>
                    <div className='main-bottom--container'>
                        <div style={{
                            width: "100%",
                            height: "auto",
                            // backgroundColor: "green",
                            marginTop: 50,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <a  
                            style={{
                                backgroundColor: "black",
                                height: 50,
                                width: 240,
                                borderRadius: 25,
                                outline: 'none',
                                border: "none",
                                color: "#ffffff",
                                marginBottom: 20,
                                marginTop: 20,
                                fontSize: 14,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                                className='social-link' 
                                href="https://api.expo.dev/v2/artifacts/eas/7zCotNzpcmGPpgvjuLyUJs" 
                                target="_blank">
                                Download
                                <ArrowRight color="#ffffff" size={20} />
                            </a>
                            <p style={{
                                color: "#ffffff",
                                fontSize: 14
                            }}>v1.3.6+1720286592237</p>
                            <p style={{
                                color: "#ffffff",
                                lineBreak: "auto",
                                fontSize: 13,
                                marginTop: 20
                            }}>
                            Desk will give you a chance to install and update our YouTube latest versions easier than before.
                            </p>
                        </div>
                        <div>

                        </div>
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
                                <RiTwitterXFill className='social-icon' />
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
