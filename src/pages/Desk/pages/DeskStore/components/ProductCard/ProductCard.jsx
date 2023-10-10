
import './styles.css';

export const ProductCard = ( { name, description, price, brand, image }) => {
    return (
        <div className="product-card--container">
            <div className='product-card-inner--container'> 
                <div className='product-card-image--container'>
                    <img className='product-card-image' src={ image } />
                </div>
                <div className='product-card-description--container'>
                    <p className='product-card-description'>{ name }</p>
                </div>
                <div className='product-card-price-info--container'>
                    <p className='product-card-price'>R$ { price }</p>
                </div>
                <div className='product-card-button--container'>
                    <button className='product-card-button'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}
