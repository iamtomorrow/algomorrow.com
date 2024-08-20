
import { FaXTwitter } from "react-icons/fa6";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";

import favicon from "./images/favicon.png"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css"
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";

export const AlgoSearch = ( ) => {

    useEffect(( ) => {
        document.title = "Algo";
        let link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
        link.href = favicon;
    })

    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
        }}>
            <img 
                src={ favicon } 
                alt="favicon"
                style={{
                    width: "100px"
                }}
            />
            <h1 style={{
                textAlign: "center"
            }}>Algo Search Engine is comming!</h1>

            <footer className="algo-footer">
                <Link 
                className="footer-link"
                to={{ pathname: "https://www.instagram.com/algosearch/" }}
                target="_blank">
                    <InstagramLineIcon 
                        size={30}
                        color="#000000"
                    />
                </Link>
                <Link 
                className="footer-link"
                to={"https://www.x.com/algosearch/"}
                target="_blank">
                    <FaXTwitter 
                        size={30}
                        color="#000000"
                    />
                </Link>
                <Link 
                className="footer-link"
                to={{ pathname: "https://www.github.com/iamtomorrow/" }}
                target="_blank">
                    <GithubFillIcon 
                        size={30}
                        color="#000000"
                    />
                </Link>
                <Link 
                className="footer-link"
                to={{ pathname: "https://www.linkedin.com/wearedesk" }}
                target="_blank">
                    <LinkedinFillIcon 
                        size={30}
                        color="#000000"
                    />
                </Link>
            </footer>
        </div>
    )
}