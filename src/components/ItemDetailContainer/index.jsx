import React, { useEffect, useState } from "react";
import { getShoppingById } from "../../data/shop.js";
import ItemDetail from "../ItemDetail/index";
import { useParams } from "react-router-dom";



export default function ItemDetailContainer() {
    const [Shop, setShop] = useState(null);
    const { ItemId } = useParams()

    useEffect(() => {
        getShoppingById(parseInt(ItemId))
            .then(response => {
                setShop(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [ItemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...Shop} />
        </div>
    );
}