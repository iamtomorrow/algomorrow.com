import { useCategoriesContext } from "@/contexts/Algo/CategoriesContext"
import { CategoryItem } from "./Algo.CategoryItem";

export const CategoryBar = ( ) => {
    const { categories } = useCategoriesContext( );

    return (
        <div
        style={{
            width: "90%",
            height: 60,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            // backgroundColor: "red"
        }}>
            {
                categories &&
                categories.map((item, index) => (
                    <CategoryItem 
                        id={ item.id }
                        title={ item.title }
                        key={ item.key }
                    />
                ))
            }
        </div>
    )
}