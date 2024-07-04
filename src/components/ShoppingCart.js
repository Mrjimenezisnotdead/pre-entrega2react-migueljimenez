// ShoppingCart.js

import React, { useState } from 'react';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    };

    return (
        <div>
            <h3>Carrito de Compras</h3>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.title} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
