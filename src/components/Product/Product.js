import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    
    const {name, img, seller, id, price, ratings} = props.product;
    const {handleAddToCart}= props;
    return (
        <div className='product'>
            <img src={img}></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <small>{seller}</small>
                <p>Ratings: {ratings}</p>
            </div>
            <button 
            className='btn-cart'
            onClick={
                ()=> handleAddToCart(props.product)
            }>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
            
        </div>
    );
};

export default Product;