
import "./Header.css"
import { IoLocationOutline } from "react-icons/io5"
import { useEffect, useState } from "react"

export const AlgoSearchHeader = ( ) => {
    const [ userTimeZone, setUserTimeZone ] = useState("");

    useEffect( ( ) => {
        getTimeZone( );
    }, [ ]);

    const getTimeZone = () => {
        let country = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setUserTimeZone( country );
    }

    return (
        <header className="algosearch-header">
            <div className="algosearch-header-location--container">
                <IoLocationOutline 
                    className="algosearch-header-location-icon"
                />
                <p className="algosearch-header-location-p">{userTimeZone}</p>
            </div>

        </header>
    )
}