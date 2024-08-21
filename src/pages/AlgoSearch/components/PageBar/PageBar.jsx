
import { Link } from "react-router-dom"
import "./PageBar.css"

export const PageBar = ({ faviconURL, title, url, description }) => {
    return (
        <div className="page-bar--container">
            <header className="page-bar-header--container">
                <div className="page-bar-favicon--container">
                    <img 
                        src={ faviconURL } 
                        alt="favicon"
                        className="page-bar-favicon"
                    />
                </div>

                <div className="page-bar-info--container">
                    <h1 className="page-bar-info-title">{ title }</h1>
                    <p className="page-bar-info-url">{ url }</p>
                </div>
            </header>

            <body className="page-bar-body--container">
                <Link to={url} className="page-bar-info-link">{ title }</Link>
                <p className="page-bar-info-description">{ description }</p>
            </body>
        </div>
    )
}