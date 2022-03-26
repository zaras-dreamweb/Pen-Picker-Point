import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRandomButton, cartRefreshButton }) => {

    return (
        <div className='cart-info'>
            <h1>Your Order Summery</h1>
            <div className="item-name">
                {
                    cart.map(item => <h3 key={item.price}>
                        <img className='logo-img' src={item.picture} alt="" />{item.name}
                    </h3>)
                }
            </div>

            <div className="double-btn">
                <button onClick={handleRandomButton} >BEST FOR ME</button><br />
                <button onClick={cartRefreshButton} >Refresh Cart</button>
            </div>
        </div>
    );
};

export default Cart;