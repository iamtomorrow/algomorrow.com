
import { Mainbar } from "./components/Mainbar/Mainbar"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { PaletaAppHeader } from "./Header/Header"
import "./index.css"

export const PaletaApp = ( ) => {
    return (
        <div className="paleta-app--container">
            <PaletaAppHeader />
            
            <main className="paleta-app-main--container">
                <Sidebar />
                <Mainbar
                 />
            </main>
        </div>
    )
}