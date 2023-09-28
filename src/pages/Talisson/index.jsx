
import Avatar from '../../../public/media/images/profiles/me.jpeg';

import { useEffect, useState } from 'react';
import './index.css';

export const Talisson = ( ) => {
    const [ winHeight, setWinHeight ] = useState( window.scrollY );

    useEffect(() => {
        window.addEventListener("scroll", ( ) => {
            setWinHeight( window.scrollY );
        })
    }, []);

    return (
        <div className="profile profile-page">
            <div className='profile--container'>
                <div className='profile-header--container'>
                    <ul className='profile-nav--container'>
                        <li className={`profile-nav-item ${winHeight <= 100 ? "profile-nav-item--active" : ""}`}>Overview</li>
                        <li className={`profile-nav-item ${winHeight > 100 ? "profile-nav-item--active" : ""}`}>Biography</li>
                        <li className='profile-nav-item'>Library</li>
                        <li className='profile-nav-item'>Discography</li>
                    </ul>
                </div>
                <div className='profile-body--container'>
                    <div className='profile-overview--container'>
                        <div className='profile-avatar--container'>
                            <img className='profile-avatar' src={ Avatar } />
                        </div>
                        <div className='profile-name--container'>
                            <p className='profile-name'>Talisson Rodrigues</p>
                        </div>
                    </div>

                    <div className='profile-biography--container'>

                    </div>
                </div>
            </div>
        </div>
    )
}
