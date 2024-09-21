import { categoryProps } from "@/types/Algo/Category"

export const CategoryItem = ({ id, title, key }: categoryProps) => {
    return (
        <div
        key={ key }
        style={{
            cursor: "pointer",

            paddingLeft: 10,
            paddingRight: 10,
            marginLeft: 10,
            marginRight: 10,
            paddingTop: 6,
            paddingBottom: 6,
            fontSize: 14,
            borderRadius: "50%"
            // backgroundColor: "red",
        }}>
            { title }
        </div>
    )
}