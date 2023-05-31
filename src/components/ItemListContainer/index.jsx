import React, { useState, useEffect } from "react";
import { getShop } from "../../data/shop";
import { getShoppingById } from "../../data/shop";
import ItemList from "../ItemList/index";
import { useParams } from "react-router-dom";

export default function ItemListContainer ({ greeting }) {
    const [shop, setShop] = useState([]);
    const { shoppId } = useParams()

    useEffect(() => {
        const asyncFunc = shoppId ? shoppId : getShop

        asyncFunc(shoppId)
        .then(response =>{
            setShop(response)
        })
        .catch(error => {
            console.error(error)
        })
        
    }, [shoppId])

    return (
        <div>
            <div>
                <h1>{greeting}</h1>
            </div>
            <div>
                <ItemList Shop={shop} />
            </div>
        </div>
    );
}
