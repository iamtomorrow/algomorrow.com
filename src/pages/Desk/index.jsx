
import { useEffect, useState } from "react";
import { RiTwitterXFill } from "react-icons/ri"
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import GitHubIcon from "remixicon-react/GithubFillIcon"

import ArrowRight from "remixicon-react/ArrowRightUpLineIcon"
import { Header } from "./Header";

import Logo from '../../../public/media/images/logos/desk-logo.png';
import favicon from './images/favicon.png'
import Background from "./images/backgrounds/background_dark.jpg"

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
        <div 
        style={{
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '100%',
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <Header Logo={ Logo }/>

            <div style={{
                width: "100%",
                height: "100%",
                display:"flex",
                flexDirection: "column",
            }}>
            <div className='desk-main--container'>
                <div className='a-main-inner--container'>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <div style={{
                            width: "80%",
                            // backgroundColor: "red",
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <h1 style={{
                            color: "#ffffff",
                            textAlign: "center",
                            fontWeight: "bolder",
                            fontSize: 38
                        }}>Get YouTube by Desk today and enjoy the videos and music you love</h1>
                        </div>
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
                        <div style={{
                            width: "80%",
                            // backgroundColor: "red"
                        }}>
                            <p style={{
                                color: "#ffffff",
                                lineBreak: "auto",
                                fontSize: 13,
                                marginTop: 20,
                                textAlign: "center"
                            }}>
                            Desk will give you a chance to install and update our YouTube latest versions easier than before.
                            </p>
                        </div>
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
        </div>
    )
}
