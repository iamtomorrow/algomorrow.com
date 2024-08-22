
import { SidebarButton } from "../SidebarButton/SidebarButton"
import "./Sidebar.css"
import { RiHeartLine, RiHome2Line, RiSearchLine, RiUser3Line } from "react-icons/ri"

export const Sidebar = ( ) => {
    return (
        <div className="paleta-app-sidebar--container">
            <div className="paleta-app-sidebar">
                <SidebarButton 
                    icon={ <RiHome2Line className="paleta-app-sidebar-button-icon"/> }
                    title={"Home"}
                    path={"/paleta/"}
                />

                <SidebarButton 
                    icon={ <RiSearchLine className="paleta-app-sidebar-button-icon"/> }
                    title={"Pesquisar"}
                    path={"/paleta/search"}
                />

                <SidebarButton 
                    icon={ <RiHeartLine className="paleta-app-sidebar-button-icon"/> }
                    title={"Favoritos"}
                    path={"/paleta/favorites"}
                />

                <SidebarButton 
                    icon={ <RiUser3Line className="paleta-app-sidebar-button-icon"/> }
                    title={"Você"}
                    path={"/paleta/account"}
                />
            </div>
        </div>
    )
}