import React, { useEffect, useState } from "react";

function Cart() {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    const removeItem = (id, name) => {
        let find = cartItems.find(
            (cart) => cart.product_name === name && cart.id === id
        );
        if (find) {
            let filter = cartItems.filter(
                (cart) => cart.product_name !== name && cart.id !== id
            );
            localStorage.setItem("cart", JSON.stringify(filter));
            setCartItems(filter);
        }
    };

    return (
        <div>
            {cartItems && cartItems.length > 0 ? (
                <div>
                    {cartItems.map((cart) => (
                        <div key={cart.id}>
                            <p>{cart.product_name}</p>
                            <p>Price: ${cart.price}</p>
                            <select>
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <option key={i}>{i}</option>
                                ))}
                            </select>
                            <button
                                onClick={() =>
                                    removeItem(cart.id, cart.product_name)
                                }
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <p>
                        Total Price:{" "}
                        {cartItems.reduce((a, b) => a + b.price, 0)}
                    </p>
                </div>
            ) : (
                <p>Your Cart is empty</p>
            )}
        </div>
    );
}

export default Cart;
