import React, { useEffect, useState } from "react";
import { getShoppingById } from "../../data/shop.js";
import ItemDetail from "../ItemDetail/index";
import { useParams } from "react-router-dom";

/* 
import {getDoc, doc} from 'firebase/firestore' */
/* import {db} from '../../services/firebaseConfig' */

export default function ItemDetailContainer() {
    const [Shop, setShop] = useState(null);

    const [loading, setLoading] = useState(true)

    const { ItemId } = useParams()

// A - Ver abajo

    useEffect(() => {
        getShoppingById(parseInt(ItemId))   /*o poner Number */
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

// MODIFICAR CON FIREBASE  - ver VIDEO CLASE 12
// A - Ver abajo

/*
useEffect (() => {
    setLoading(true)

    const docRef = doc(db, 'shop', ItemId)

    getDoc(docRef)
    .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data}
        setShop(productAdapted)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(()=> {
        setLoading(false)
    })
}, [ItemId])

*/