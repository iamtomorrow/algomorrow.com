
import Logo from "../../../../assets/Desk/images/dark-logo.png";
import "./Header.css";

import Image from "next/image";

export const Header = ( ) => {
    return (
        <div
        className="desk-header--container">
            <div
            className="desk-header">
                <div
                style={{
                    width: 120,
                    height: "100%",
                    // backgroundColor: "blue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Image 
                    src={ Logo }
                    alt="Desk Logo"
                    width={1000}
                    style={{
                        width: 100,
                    }}
                    />
                </div>

                <nav
                className="desk-header-nav">
                    <li
                    className="nav-link">Research</li>
                    <li
                    className="nav-link">Products</li>
                    <li
                    className="nav-link">Developers</li>
                    <li
                    className="nav-link">Company</li>
                    <li
                    className="nav-link">Who are we?</li>
                </nav>

                <div
                style={{
                    width: 200,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "yellow"
                }}>
                    <button
                    className="desk-login-header-button">
                        <p>Singin</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
