
import "./Footer.css"
import { useEffect, useState } from "react";

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
            <div className="footer-inner--container">
                <p className="footer-inner-p">{ userTimeZone }</p>
                <a className="footer-inner-a">Privacy</a>
                <a className="footer-inner-a">Terms</a>
                <a className="footer-inner-a">Settings</a>
            </div>
        </footer>
    )
}