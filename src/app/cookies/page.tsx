
import { Header } from "@/components/Cookies/Header/Header";
import "./page.css";

const Cookie = ( ) => {
    return (
        <div
        className="window--container">
            <Header />

            <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff",
            }}>
                <h2
                style={{
                    color: "#000000",
                    fontSize: 46,
                    textAlign: "center",
                }}>Cookie Compliance, by Algomorrow</h2>

                <div
                style={{
                    width: "70%",
                    height: "auto"
                }}>
                <p
                style={{
                    color: "#000000",
                    fontSize: 18,
                    textAlign: "center",
                }}>AlgoCookie provides everything you need to begin collecting visitors’ consent, including an automatic cookie scanner, a customisable user interface, and various integration methods.</p>
                </div>
            </div>
        </div>
    )
}

export default Cookie;
