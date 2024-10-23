
import Image from "next/image"
import Link from "next/link"
import "./Header.css"

import { RiMenuLine } from "react-icons/ri"

export const Header = ( ) => {
    return (
        <div
        style={{
            width: "100%",
            height: 120,
            backgroundColor: "#ffffff"
        }}>
            <header
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <div
                style={{
                    width: 200,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Image 
                        src={ require("../../../../assets/Cookies/dark-logo.png")}
                        alt="Logo"
                        width={1000}
                        height={1000}
                        style={{
                            width: 120,
                        }}
                    />
                </div>

                <nav
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <Link 
                    className="header-link"
                    href={"/cookies/"}>Who is AlgoCookies</Link>
                    <Link 
                    className="header-link"
                    href={"/cookies/"}>Features</Link>
                    <Link 
                    className="header-link"
                    href={"/cookies/"}>Pricing</Link>
                    <Link 
                    className="header-link"
                    href={"/cookies/"}>Developers</Link>
                </nav>

                <div
                style={{
                    width: 200,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <button
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.05)"
                    }}>
                        <RiMenuLine 
                            size={26}
                            color="#000000"
                        />
                    </button>
                </div>
            </header>
        </div>
    )
}