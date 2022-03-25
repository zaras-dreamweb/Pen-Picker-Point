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

    const addToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    };

    const addedItems = cart;
    console.log(addedItems);


    const handleRandomButton = () => {
        setCart([]);
    }


    const cartRefreshButton = () => {
        setCart([]);
    }



    return (
        <div className='main-container'>
            <div className="pen-container">
                {
                    pens.map(pen => <Pen key={pen.id} pen={pen} addToCart={addToCart}></Pen>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} randomButton={handleRandomButton} cartDeleteButton={cartRefreshButton}></Cart>
            </div>
        </div >
    );
};

export default Display;