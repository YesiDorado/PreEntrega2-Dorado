import React from 'react';
import "./item.css";
import { Link } from "react-router-dom";

export default function Item({ id, nombre, precioProducto, imagen }) {
    
    return (
        <div className='CardItem'>
            <div className='FichaShop'>
                <h2 className='Nombre'>
                    Producto: {nombre}
                </h2>
                <div className='item-card_img'>
                    <img src={imagen} alt={nombre} className='ItemImg' />
                </div>
                <br />
                <section>
                    <p className='PrecioProducto'>
                        Precio: {precioProducto}
                    </p>
                </section>
                <br />
                <section className='Detalle'>
                    <Link to={`/Item/${id}`} className='Option'>Ver Detalle</Link>
                </section>
            </div>
        </div>
    )
}
