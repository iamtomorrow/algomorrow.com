
import "./index.css"

import MainImage from "./images/main.jpg"
import favicon from "./images/favicon.png"

import { Link } from "react-router-dom"
import { useEffect } from "react"
import { IoArrowForwardOutline } from "react-icons/io5"
import { Header } from "./header"
import { Footer } from "./footer"

export const Paleta = ( ) => {

    useEffect(( ) => {
        document.title = "Paleta | Home";
        let link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
        link.href = favicon;
    })

    return (
        <div style={{
            width: "100%",
            minheight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start"
        }}>
            <Header />
            
            <section className="main-section">
                <h1 className="main-section-h1">Um app com paletas de possibilidades.</h1>

                <div className="main-section-image--container">
                    <img 
                        src={ MainImage } 
                        className="main-section-image"
                    />
                </div>

                <div className="main-section-button">
                    <Link to={"/paleta/downloads"} className="download-button">
                        Baixar
                        <IoArrowForwardOutline 
                            size={16} 
                            style={{
                                marginLeft: 4
                            }}
                        />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    )
}
