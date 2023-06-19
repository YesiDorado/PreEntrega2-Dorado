import React, { useState, useEffect } from "react";

import { getShop } from "../../data/shop";
import { getShoppingById } from "../../data/shop";

import ItemList from "../ItemList/index";
import { useParams } from "react-router-dom";

/* import{getDocs, collection, query, where} from 'firebase/firestore' */
/* import {db} from '../../services/firebaseConfig' */

export default function ItemListContainer({ greeting }) {
    const [shop, setShop] = useState([]);

    const [loading, setLoading] = useState(true)

    const { shoppId } = useParams()

    useEffect(() => {     //para que la accion se ejecute cuando lo queremos usamos UseEffect, entonces el "useEffect" hace que el componente se ejecute cuando se monta y cuando el "shoppId" cambie

        setLoading(true)

    // A - Ver abajo

        const asyncFunc = shoppId ? getShoppingById : getShop

        asyncFunc(shoppId)
            .then(response => {
                setShop(response)
            })
            .catch(error => {
                console.error(error)
            })


    }, [shoppId])

    return (
        <div>
            <div>
                <ItemList Shop={shop} />
            </div>
        </div>
    );

// MODIFICAR CON FIREBASE  - ver VIDEO CLASE 12
// A - Ver abajo

/*
const collectionRef = shoppId
? query(collection(db, 'shop'), where ('continente', '==', continenteId))
: collection(db, 'shop")

getDocs(collectionRef)
. then(response => {
    const productsAdapted = response.docs.map(doc =>{
        const data = doc.data()
        return {id: doc.id, ...data}
    })
    setShop(productsAdapted)
})
.catch(error=> {
    console.log(error)
})
.finally(() =>{
    setLoading(false)
})



*/    
}
