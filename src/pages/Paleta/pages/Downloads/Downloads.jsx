
import { Link } from "react-router-dom"
import { RiAndroidLine } from "react-icons/ri"
import { Header } from "../../header"
import "./index.css"
import { IoArrowForwardOutline } from "react-icons/io5"

export const PaletaDownloads = ( ) => {
    return (
        <div style={{
            width: "100%",
            minheight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start"
        }}>
            <Header />

            <div style={{
                width: "80%",
                height: "180px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <h1 style={{
                    fontSize: "28px"
                }}>Downloads</h1>
                <p style={{
                    fontSize: "16px",
                    textAlign: "center",
                    fontWeight: "500"
                }}>Caso não encontre seu sistema, não se preocupe, pois, muito em breve, o aplicativo será distribuido para todos os sistemas de smartphones.</p>
                <p style={{
                    fontSize: "16px",
                    textAlign: "center",
                    fontWeight: "500"
                }}>Por favor, compreenda que todas as versões listadas abaixo se encontram em modo de teste.</p>
            </div>

            <div className="download-section">
                <Link 
                    to={""}
                    className="download-section-link">
                    {/* <RiAndroidLine 
                        size={26}
                    /> */}
                    <p className="download-section-link-p">Android</p>
                    <IoArrowForwardOutline 
                        size={26}
                    />
                </Link>
                <p style={{
                    color: "#00000",
                    fontSize: 14
                }}>Versão 1.0.0</p>
            </div>
        </div>
    )
}
