
import favicon from "../../images/favicon.png"
import Logo from "../../images/algo-logo.png"

import "./Settings.css"
import { useState, useEffect } from "react";
import { IoEarthOutline, IoLanguageOutline } from "react-icons/io5";

export const AlgoSearchSettings = ( ) => {

    useEffect(( ) => {
        document.title = "Algo Settings";
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
            <header className="algosearch-settings-header">
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <img 
                        className="logo"
                        src={ Logo }
                    />
                    <p style={{
                        fontSize: 16,
                        fontWeight: 600
                    }}>Search settings</p>
                </div>
            </header>

            <main className="algosearch-settings-main-container">
                <div className="algosearch-settings-main-container-card">
                    <header className="algosearch-settings-main-container-card-header">
                        <p className="algosearch-settings-main-container-card-header-title">Language and Region</p>
                    </header>

                    <section className="algosearch-settings-main-container-card-option">
                        <div className="algosearch-settings-main-container-card-option-icon--container">
                            <IoLanguageOutline />
                        </div>
                        <div className="algosearch-settings-main-container-card-option-side--container">
                            <p className="algosearch-settings-main-container-card-option-side--container-title">Display language</p>
                            <p className="algosearch-settings-main-container-card-option-side--container-description">For buttons, lables, hints, etc.</p>
                        </div>

                        <div className="algosearch-settings-main-container-card-option-select--container">
                            <select className="algosearch-settings-main-container-card-option-select">
                                <option>English (International)</option>
                            </select>
                        </div>
                    </section>

                    <section className="algosearch-settings-main-container-card-option">
                        <div className="algosearch-settings-main-container-card-option-icon--container">
                            <IoEarthOutline />
                        </div>
                        <div className="algosearch-settings-main-container-card-option-side--container">
                            <p className="algosearch-settings-main-container-card-option-side--container-title">Region</p>
                            <p className="algosearch-settings-main-container-card-option-side--container-description">For your search results.</p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )   
}