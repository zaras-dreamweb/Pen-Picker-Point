import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart-info'>
            <h1>Order Summery</h1>
            <p>Name:{ }</p>
            <div className="double-btn">
                <button>BEST FOR ME</button><br />
                <button>Refresh Cart</button>
            </div>
        </div>
    );
};

export default Cart;