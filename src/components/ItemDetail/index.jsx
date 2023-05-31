import React from "react";
import "./itemDetail.css";
import ItemCount from "../ItemCount/index";

export default function ItemDetail ({ id, nombre, imagen, precioProducto, stock }) {
    return(
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
            </section>  
            </div>
        </div>
    );
}