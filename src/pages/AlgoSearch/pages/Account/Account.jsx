
import "./Account.css"

import { useEffect, useState } from "react";
import favicon from '../../images/favicon.png'
import { Header } from "../../Header/Header";
import { IoArrowForwardOutline, IoCloseOutline } from "react-icons/io5";
import { AlgoSearchFooter } from "../../Footer/Footer";

export const AlgoSearchAccount = ( ) => {
    const [ accessMethod, setAccessMethod ] = useState("signup");

    useEffect(( ) => {
        document.title = "Algo Account";
        let link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
        link.href = favicon;
    })

    return (
        <div style={{
            width: "100%",
            minHeight: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <Header restricted={true} />

            {
                accessMethod === "signup"
                ? <section className="account-main-section--container">
                <div className="account-main-section-card">
                    <div className="account-section-header">
                        <h1>Create account</h1>
                        <p>By creating an Algo account will have access to all our services in just one token.</p>
                    </div>

                    <form className="account-main-section-form">
                        <div className="account-main-section-input--container">
                            <input 
                                className="input account-main-section-input"
                                placeholder="Full name"
                                type="text"
                            />
                        </div>
                        <div className="account-main-section-input--container">
                            <input 
                                className="input account-main-section-input"
                                placeholder="Email address"
                                type="text"
                            />
                        </div>
                        <div className="account-main-section-input--container">
                            <div style={{
                                width: 40,
                                height: 40,
                            }}>

                            </div>
                            <input 
                                className="input account-main-section-input"
                                placeholder="Phone number"
                                type="text"
                            />
                        </div>
                        <div className="account-main-section-input--container">
                            <input 
                                className="input account-main-section-input"
                                placeholder="Password"
                                type="password"
                            />
                        </div>
                    </form>

                    <div className="account-main-section-notice-container">
                        <p style={{
                            fontSize: 12
                        }}> By clicking Continue, you agree to the Terms. For more information about how we process your personal data, please see our Privacy Policy.</p>
                    </div>

                    <div className="account-main-section-button--container">
                        <button 
                        onClick={ ( ) => setAccessMethod("") }
                        className="rounded-button">
                            <IoCloseOutline
                                size={22}
                            />
                        </button>
                        <button className="expanded-button">
                            <p className="button-text">Continue</p>
                            <IoArrowForwardOutline 
                                size={18}
                            />
                        </button>
                    </div>

                    <footer className="account-main-section-footer--container">
                        <p style={{
                            fontSize: 14
                        }}>Already have an account?</p>
                        <button 
                        onClick={ ( ) => setAccessMethod("signin") }
                        style={{
                            fontSize: 14,
                            color: "blue"
                        }}>Sign in.</button>
                    </footer>
                </div>
            </section>
                : accessMethod !== "" ? <section className="account-main-section--container">
                <div className="account-main-section-card">
                    <div className="account-section-header">
                        <h1>Sign in</h1>
                    </div>

                    <form className="account-main-section-form">
                        <div className="account-main-section-input--container">
                            <input 
                                className="input account-main-section-input"
                                placeholder="Email address"
                                type="text"
                            />
                        </div>

                        <div className="account-main-section-input--container">
                            <input 
                                className="input account-main-section-input"
                                placeholder="Password"
                                type="password"
                            />
                        </div>
                    </form>

                    <div className="account-main-section-button--container">
                        <button 
                        onClick={ ( ) => setAccessMethod("") }
                        className="rounded-button">
                            <IoCloseOutline
                                size={22}
                            />
                        </button>
                        <button className="expanded-button">
                            <p className="button-text">Continue</p>
                            <IoArrowForwardOutline 
                                size={18}
                            />
                        </button>
                    </div>

                    <footer className="account-main-section-footer--container">
                        <p style={{
                            fontSize: 14
                        }}>Don't have an account?</p>
                        <button 
                        onClick={ ( ) => setAccessMethod("signup") }
                        style={{
                            fontSize: 14,
                            color: "blue"
                        }}>Sign up.</button>
                    </footer>
                </div>
            </section> 
            : <div style={{
                width: "60%",
                height: "auto",
                paddingTop: 40,
                paddingBottom: 20,
                borderRadius: 30,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.025)"
            }}>
                <p style={{
                    fontSize: 26,
                    fontWeight: 600
                }}>Create a Algo account now.</p>

                <div className="create-account-section--container">
                    <button 
                    onClick={ ( ) => setAccessMethod("signup") }
                    className="expanded-button">
                        <p className="button-text">Create account</p>
                        <IoArrowForwardOutline 
                            size={18}
                        />
                    </button>
                </div>
            </div>
            } 

            <AlgoSearchFooter 
                restricted={true}
            />
        </div>
    )
}