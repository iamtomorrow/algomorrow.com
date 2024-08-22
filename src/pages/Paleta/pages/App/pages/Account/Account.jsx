

import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Mainbar } from '../../components/Mainbar/Mainbar'
import { SecondaryHeader } from "../../components/SecondaryHeader/SecondaryHeader"
import "./Account.css"

export const PaletaAppAccount = ( ) => {
    return (
        <div className="paleta-app-account--container">
            <SecondaryHeader />

            <main className="paleta-app-main--container">
                <Sidebar />
                <Mainbar
                 />
            </main>
        </div>
    )
}