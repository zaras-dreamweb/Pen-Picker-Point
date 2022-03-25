import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Pen.css'


const Pen = ({ pen, addToCart }) => {
    const { name, price, picture } = pen;
    return (
        <div className='card-container'>
            <img src={picture} alt="" />

            <div className="card-information">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Price:</strong> {price}</p>
            </div>
            <button onClick={() => addToCart(name)} className='cart-btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Pen;