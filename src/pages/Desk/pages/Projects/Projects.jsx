
import './index.css';
import { Header } from "../../Header"
import Logo from "../../../../../public/media/images/logos/desk-logo.png"
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon"

export const Projects = ( ) => {
    return (
        <div 
        style={{
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#000000"
        }}>
            <Header Logo={ Logo } />

            <div
            style={{
                width: "100%",
                height: 80,
                paddingLeft: "5%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // backgroundColor: "red"
            }}>
                <h1 style={{
                    color: "#ffffff",
                    fontSize: 20,
                    fontWeight: "bolder"
                }}>Featured projects</h1>
            </div>

            <div style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 20,
            }}>
                <div style={{
                    height: "100%",
                    width: "25%",
                    borderRadius: 10,   
                }}>
                    <div style={{
                        width: "100%",
                        height: "40%",
                        // background: "red",
                        borderRadius: 10,  
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <img 
                            src="https://archive.org/download/new-youtube-logo/new-youtube-logo.jpg" 
                            style={{
                                width: "60%",
                            }}
                        />
                    </div>

                    <div style={{
                        width: "100%",
                        height: "40%",
                        display: "flex",
                        flexDirection: "column",
                        // background: "green"
                    }}>
                        <h1 style={{
                            fontSize: 28,
                            fontWeight: "bolder",
                            color: "#ffffff",
                            padding: 10
                        }}>The YouTube Project</h1>
                        <p style={{
                            fontSize: 14,
                            color: "rgba(256, 256, 256, 0.8)",
                            padding: 10
                        }}>Desk will give you the chance to install and update YouTube latest versions easier than before and contribute with us. In this project you will find resources and features and even the opportunity to contribute with us and become a Desk developer.</p>
                        <ArrowRightLineIcon 
                            size={30}
                            color='#ffffff'
                            style={{
                                marginLeft: 10
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
