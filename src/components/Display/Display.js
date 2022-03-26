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
        if (newCart.length > 4) {
            alert("Can't add more to cart!")
        }
        else {
            setCart(newCart);
        }

    };

    const handleRandomButton = () => {
        let addedItem = cart;
        const randomArray = [];
        let random = addedItem[Math.floor(Math.random() * addedItem.length)];
        randomArray.push(random);
        setCart(randomArray);
    };

    const cartRefreshButton = (cart) => {
        setCart([]);
    };



    return (
        <div className='main-container'>
            <div className="pen-container">
                {
                    pens.map(pen => <Pen key={pen.id} pen={pen} addToCart={addToCart}></Pen>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRandomButton={handleRandomButton} cartRefreshButton={cartRefreshButton}></Cart>
            </div>
        </div >
    );
};

export default Display;