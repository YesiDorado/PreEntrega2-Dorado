import React from "react";
import "./itemDetail.css";
import ItemCount from "../ItemCount/index";

import { useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import { useContext } from "react";

export default function ItemDetail({ nombre, imagen, precioProducto, stock }) {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item =
        {
            nombre, precioProducto
        }
        addItem(item, quantity)
    }

    return (
        <div className="cardProducto">
            <div className="Producto">
                <h2 className="NameProduct"> Producto seleccionado: {nombre}</h2>
                <div className="product_img">
                    <img src={imagen} alt={nombre} className="ProductImg" />
                </div>
                <section>
                    <p className="cost">Precio: {precioProducto}
                    </p>
                </section>
                <section className="ItemQty">

                    {
                        quantityAdded > 0 ? (
                            <Link to="/cart" className="Option"> Producto Seleccionado</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </section>
            </div>
        </div>
    );
}