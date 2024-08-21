
import { Mainbar } from "../../components/Mainbar/Mainbar"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { SecondaryHeader } from "../../components/SecondaryHeader/SecondaryHeader"
import "./Search.css"

export const PaletaAppSearch = ( ) => {
    return (
        <div className="paleta-app-search--container">
            <SecondaryHeader />

            <main className="paleta-app-main--container">
                <Sidebar />
                <Mainbar
                 />
            </main>
        </div>
    )
}