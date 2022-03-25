import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Pen from '../Pen/Pen';
import './Display.css'

const Display = () => {
    const [pens, setPens] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPens(data))
    }, []);

    const addToCart = (pen) => {

        const newCart = [...cart, pen];
        setCart(newCart);


    };

    return (
        <div className='main-container'>
            <div className="pen-container">

                {
                    pens.map(pen => <Pen key={pen.id} pen={pen} addToCart={addToCart}></Pen>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Display;