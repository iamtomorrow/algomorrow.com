import { Header } from "../../header"

export const PaletaPlans = ( ) => {
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

            <p>Check out our plans</p>
        </div>
    )
}