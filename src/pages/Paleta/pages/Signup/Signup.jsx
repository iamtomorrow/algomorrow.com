
import favicon from "../../images/favicon.png"

import { Link } from "react-router-dom"
import { IoArrowBackOutline, IoArrowForwardOutline, IoCloseOutline } from "react-icons/io5"

import "./index.css"
import { useState, useEffect } from "react"
import { RiEyeLine } from "react-icons/ri"
import { API } from "../../api/api"

export const PaletaSignUp = ( ) => {
    const [ accessFormat, setAccessFormat ] = useState("enter");
    const [ hidePassword, setHidePassword ] = useState(true);

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");

    const doLogin = async ( ) => {
        if ( email !== "" && password !== "" ) {
            await API.doLogin( email, password );
        }
    }

    const register = async ( ) => {
        console.log("s");
        if ( name !== "" && email !== "" && password !== "" ) {
            await API.register(name, email, password);
        }
    }

    useEffect(( ) => {
        document.title = "Paleta | Entrar";
        let link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
        link.href = favicon;
    })

    return (
        <div style={{
            width: "100%",
            minheight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
        }}>
            <div className="signup-header">
                <Link to={"/paleta"} className="back-link">
                    <IoArrowBackOutline 
                        size={22}
                        color="#000000"
                    />
                    <p style={{
                        color: "#000000"
                    }}>Voltar</p>
                </Link>
                <h1>

                </h1>
            </div>

            <h1 style={{
                fontSize: 30,
                color: "#000000"
            }}>Acesse o aplicativo</h1>

            <div className="signup-card--container">
                <div className="signup-card-header--container">
                    <div 
                        className={`card-header-option ${ accessFormat === "enter" ? "card-header-option--active" : ""}`}
                        onClick={ ( ) => setAccessFormat("enter") }>
                        <p className="card-header-option-p">Entrar</p>
                    </div>
                    <div 
                        className={`card-header-option ${ accessFormat === "create" ? "card-header-option--active" : ""}`}
                        onClick={ ( ) => setAccessFormat("create") }>
                        <p className="card-header-option-p">Criar conta</p>
                    </div>
                </div>

                {
                    accessFormat === "enter"
                    ? <div className="signup-form--container">
                        <div className="form-input--container">
                            <input
                                type="text"
                                placeholder="Email"
                                className="form-input"
                                value={email}
                                onChange={ (e) => setEmail(e.target.value) }
                            ></input>
                        </div>
                        <div className="form-input--container">
                            <input
                                type={`${ hidePassword ? "password" : "text"}`}
                                placeholder="Senha"
                                className="form-input"
                                value={password}
                                onChange={ (e) => setPassword(e.target.value) }
                            ></input>
                            <button 
                            onClick={ ( ) => setHidePassword(prev => !prev)}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                            }}>
                                <RiEyeLine 
                                    color="#000000"
                                />
                            </button>
                        </div>

                        <div className="form-buttons--container">
                            
                            <button 
                            onClick={ ( ) => setAccessFormat("")}
                            className="form-button"
                            style={{
                                backgroundColor: "#ffffff"
                            }}>
                                <IoCloseOutline 
                                    color="#000000"
                                    size={24}
                                />
                            </button>

                            <button 
                            onClick={ doLogin }
                            className="form-expanded-button">
                                <p style={{
                                    marginRight: 6,
                                    fontSize: 16
                                }}>Continuar</p>
                                <IoArrowForwardOutline 
                                    color="#ffffff"
                                    size={24}
                                />
                            </button>
                        </div>
                    </div>
                    : accessFormat === "create" ? <div className="signup-form--container">
                        <div className="form-input--container">
                            <input
                                type="text"
                                placeholder="Nome"
                                className="form-input"
                                value={name}
                                onChange={ (e) => setName(e.target.value) }
                            ></input>
                        </div>
                        <div className="form-input--container">
                            <input
                                type="text"
                                placeholder="Email"
                                className="form-input"
                                value={email}
                                onChange={ (e) => setEmail(e.target.value) }
                            ></input>
                        </div>
                        <div className="form-input--container">
                            <input
                                type={`${ hidePassword ? "password" : "text"}`}
                                placeholder="Senha"
                                className="form-input"
                                value={password}
                                onChange={ (e) => setPassword(e.target.value) }
                            ></input>
                            <button 
                            onClick={ ( ) => setHidePassword(prev => !prev)}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                            }}>
                                <RiEyeLine 
                                    color="#000000"
                                />
                            </button>
                        </div>

                        <div className="form-buttons--container">
                            
                            <button 
                            onClick={ ( ) => setAccessFormat("")}
                            className="form-button"
                            style={{
                                backgroundColor: "#ffffff"
                            }}>
                                <IoCloseOutline 
                                    color="#000000"
                                    size={24}
                                />
                            </button>

                            <button 
                            onClick={ register }
                            className="form-expanded-button">
                                <p style={{
                                    marginRight: 6,
                                    fontSize: 16
                                }}>Criar conta</p>
                                <IoArrowForwardOutline 
                                    color="#ffffff"
                                    size={24}
                                />
                            </button>
                        </div>
                    </div> : <></>
                }
            </div>
        </div>
    )
}