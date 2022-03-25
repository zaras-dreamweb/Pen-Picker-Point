import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);

    return (
        <div className='cart-info'>
            <h1>Order Summery</h1>
            <div className="item-name">
                {
                    cart.map(item => <h3 key={item.id}>{item.name}</h3>)
                }
            </div>

            <div className="double-btn">
                <button>BEST FOR ME</button><br />
                <button>Refresh Cart</button>
            </div>
        </div>
    );
};

export default Cart;