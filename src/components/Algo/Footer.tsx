import { Theme } from "@/themes/Algo/theme"

export const Footer = ( ) => {
    return (
        <div
        style={{
            width: "100%",
            height: 100,
            backgroundColor: Theme.default.surfaceColor
        }}>
            <div
            style={{
                width: "100%",
                height: "50%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <p
                style={{
                    fontSize: 14,
                    color: "#000000",
                    marginLeft: 6,
                    marginRight: 6,
                }}>Privacy & Terms</p>
                <p
                style={{
                    fontSize: 14,
                    color: "#000000",
                    marginLeft: 6,
                    marginRight: 6,
                }}>Help</p>
                <p
                style={{
                    fontSize: 14,
                    color: "#000000",
                    marginLeft: 6,
                    marginRight: 6,
                }}>Settings</p>
            </div>

            <div
            style={{
                width: "100%",
                height: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <p
                style={{
                    fontSize: 14,
                    color: "#000000"
                }}>&#65312; Algomorrow Group. All rights reseved.</p>
            </div>
        </div>
    )
}