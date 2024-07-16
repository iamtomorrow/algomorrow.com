
import { useEffect, useState } from "react";
import { RiTwitterXFill } from "react-icons/ri"
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import GitHubIcon from "remixicon-react/GithubFillIcon"

import ArrowRight from "remixicon-react/ArrowRightUpLineIcon"
import DownloadLineIcon from "remixicon-react/DownloadLineIcon"
import { Header } from "./Header";

import Logo from '../../../public/media/images/logos/desk-logo.png';
import favicon from './images/favicon.png'
import Background from "./images/backgrounds/background_dark.jpg";
import Banner from "./images/backgrounds/home-banner-dark.png";
import image1 from "./images/1_.jpg";
import image2 from "./images/2_.jpg";
import image3 from "./images/3_.jpg";
import image4 from "./images/4_.jpg";

import "./index.css"

export const Desk = ( ) => {
    const fullPhrase = "Free. Friedly. Sponsor Block. ";
    const [ phrase, setPhrase ] = useState("");
    const [ count, setCount ] = useState();
    const [ typingBar, setTypingBar ] = useState(false);

    useEffect(( ) => {
        setTimeout(( ) => {
            if ( count <= fullPhrase.length ) {
                setTimeout(( ) => {
                    setPhrase( prev => prev += fullPhrase.at(count-1));
                    setCount( prev => prev +=1 );
                    setTypingBar( prev => !prev);
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
            // backgroundImage: `url(${Background})`,
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
                    <img  src={ Banner } width={300} />
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
                            fontSize: 44,
                            letterSpacing: 1,
                        }}>Get YouTube by Desk is under development but you can get it and helps by watching the videos you love.</h1>
                        </div>
                    </div>
                    <div style={{
                        width: "100%",
                        height: 40,
                        // backgroundColor: "red",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <h3 style={{
                            color: "#ffffff",
                            fontSize: 20,
                        }}>{ phrase }</h3>
                        <h3>{ typingBar ? "|" : " "}</h3>
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
                                textDecoration: "none",
                                backgroundColor: "rgba(256, 256, 256, 0.025)",
                                height: 60,
                                width: 280,
                                borderRadius: 30,
                                outline: 'none',
                                border: "none",
                                color: "#ffffff",
                                marginBottom: 20,
                                marginTop: 20,
                                fontSize: 14,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 18,
                                fontWeight: "lighter"
                            }}
                                className='social-link' 
                                href="https://expo.dev/artifacts/eas/tww7nomgpdd8VqbRahGkro.apk" 
                                target="_blank">
                                Download for free
                                <DownloadLineIcon 
                                    color="#ffffff" 
                                    size={22} 
                                    style={{
                                        marginLeft: 10,
                                    }}
                                />
                            </a>
                            <p style={{
                                color: "#ffffff",
                                fontSize: 16,
                                textAlign: "center",
                            }}>v1.13.11+1721084392097</p>
                        <div style={{
                            width: "80%",
                            // backgroundColor: "red"
                        }}>
                            <p style={{
                                color: "#ffffff",
                                lineBreak: "auto",
                                fontSize: 14,
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

            <div className="main-section--container">
                <div style={{
                    width: "100%",
                    height: "100%"
                }}>
                    <div style={{
                        width: "100%",
                        height: 120,
                        // backgroundColor: "red",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "30"
                    }}>
                        <h1 style={{
                            fontSize: 40,
                            color: "#ffffff",
                            marginBottom: 10,
                            letterSpacing: 1,
                            fontWeight: "600"
                        }}>Features</h1>
                        <p style={{
                            fontSize: 20,
                            color: "#ffffff",
                            textAlign: "center",
                        }}>
                            This is a list of the main features found in the current version of YouTube by Desk.
                        </p>
                    </div>

                    <div className="main-inner-section--container">
                        <div className="box-main-inner-section--container">
                            <div className="box-header-main-inner-section--container">
                                <h1 className="box-header-h1-main-inner-section--container">Dark mode</h1>
                                <p className="box-header-p-main-inner-section--container">Full metal dark</p>
                            </div>

                            <div className="box-center-main-inner-section--container">
                                <img src={ image1 } height={"100%"} />
                            </div>

                            <p className="box-header-p-main-inner-section--container">
                                Features the called Full Metal Dark mode to reduce battery and eye strain.
                            </p>
                        </div>

                        <div className="box-main-inner-section--container">
                            <div className="box-header-main-inner-section--container">
                                <h1 className="box-header-h1-main-inner-section--container">Multi-language support</h1>
                                <p className="box-header-p-main-inner-section--container">Three current available languages</p>
                            </div>

                            <div className="box-center-main-inner-section--container">
                                <img src={ image3 } height={"100%"} />
                            </div>

                            <p className="box-header-p-main-inner-section--container">
                                Currently YouTube by Desk has support for three main languages, English, Portuguese, and Chinese. Future versions will bring support for all YouTube support languages.
                            </p>
                        </div>

                        <div className="box-main-inner-section--container">
                            <div className="box-header-main-inner-section--container">
                                <h1 className="box-header-h1-main-inner-section--container">New design</h1>
                                <p className="box-header-p-main-inner-section--container">Redesigned app</p>
                            </div>

                            <div className="box-center-main-inner-section--container">
                                <img src={ image4 } height={"100%"} />
                            </div>

                            <p className="box-header-p-main-inner-section--container">
                                YouTube by Desk has a new design compared with the orignal YouTube app. It can be found in video cards, channel pages, tab bars and much more.
                            </p>
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
