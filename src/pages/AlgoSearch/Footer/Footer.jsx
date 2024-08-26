
import { FaXTwitter } from "react-icons/fa6";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import { Link } from "react-router-dom";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";

import "./Footer.css"
import { useEffect, useState } from "react";
import { BsTwitterX } from "react-icons/bs";

export const AlgoSearchFooter = ({ restricted }) => {
    const [ userTimeZone, setUserTimeZone ] = useState("");

    useEffect(( ) => {
        getTimeZone( );
    }, [ ])

    const getTimeZone = () => {
        let country = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setUserTimeZone( country );
    }

    return (
        <footer className="algo-footer">
            {
                !restricted &&
                <div className="footer-social--container">
                    <Link 
                        to={{ pathname: "https://www.instagram.com/algosearch" }}
                        target="_blank"
                        className="footer-social-link"
                    >
                        <InstagramLineIcon />
                    </Link>

                    <Link 
                        to={{ pathname: "https://www.x.com/algosearch" }}
                        target="_blank"
                        className="footer-social-link"
                    >
                        <BsTwitterX />
                    </Link>

                    <Link 
                        to={{ pathname: "https://www.github.com/iamtomorrow" }}
                        target="_blank"
                        className="footer-social-link"
                    >
                        <GithubFillIcon />
                    </Link>
                    <Link 
                        to={{ pathname: "https://www.linkedin.com/in/wearedesk" }}
                        target="_blank"
                        className="footer-social-link"
                    >
                        <LinkedinFillIcon />
                    </Link>
                </div>
            }
            <div className="footer-inner--container">
                <a className="footer-inner-a">Privacy & Terms</a>
                <a className="footer-inner-a">Help</a>
                <a className="footer-inner-a">Settings</a>
            </div>
            <div className="footer-copyright-section">
                <p>&#169; 2024 Algomorrow Group. All rights reserved.</p>
            </div>
        </footer>
    )
}
