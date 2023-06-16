import React from "react";
import "./ItemCount.css";
import { useState } from "react";
import LayOut from "../LayOut/index";

export default function ItemCount({ initial, stock, onAdd }) {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="counter">
            <div className="controls">
            <button className="Button" onClick={decrement}>-</button>
            <h4 className="Number">{quantity}</h4>
            <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd (quantity)} disabled={!stock}>Agregar carrito</button>
            </div>
        </div>
    );
}

