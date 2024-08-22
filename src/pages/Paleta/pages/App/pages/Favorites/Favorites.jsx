
import "./Favorites.css"

import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Mainbar } from '../../components/Mainbar/Mainbar'
import { SecondaryHeader } from "../../components/SecondaryHeader/SecondaryHeader"

export const PaletaAppFavorites = ( ) => {
    return (
        <div className="paleta-app-favorites--container">
            <SecondaryHeader />

            <main className="paleta-app-main--container">
                <Sidebar />
                <Mainbar
                 />
            </main>
        </div>
    )
}