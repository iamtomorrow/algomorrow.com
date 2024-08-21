
import "./CategoryCard.css"

export const CategoryCard = ({ title }) => {
    return (
        <div className="category-card--container">
            <p className="category-card-title">{ title }</p>
        </div>
    )
}