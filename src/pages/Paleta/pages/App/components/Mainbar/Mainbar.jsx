
import { PiBookFill } from "react-icons/pi"
import { HomeCard } from "../HomeCard/HomeCard"
import "./Mainbar.css"
import { RiBookFill, RiGalleryFill, RiMore2Fill, RiQuestionFill } from "react-icons/ri"

export const Mainbar = ( ) => {
    return (
        <main style={{
            width: "100%",
            height: "100%",
            padding: 10
        }}>
            <div className="mainbar--container">
                <HomeCard 
                    icon={ <RiBookFill className="paleta-app-library-card-icon" />}
                    title={"Biblioteca"}
                    path={"/paleta/library"}
                />

                <HomeCard 
                    icon={ <RiMore2Fill className="paleta-app-library-card-icon" />}
                    title={"Tabela"}
                    path={"/paleta/table"}
                />

                <HomeCard 
                    icon={ <RiGalleryFill className="paleta-app-library-card-icon" />}
                    title={"Galeria"}
                    path={"/paleta/galery"}
                />

                <HomeCard 
                    icon={ <RiQuestionFill className="paleta-app-library-card-icon" />}
                    title={"Quiz"}
                    path={"/paleta/quiz"}
                />
            </div>
        </main>
    )
}