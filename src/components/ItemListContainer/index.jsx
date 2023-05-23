import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import React, { useState, useEffect } from "react";
import title from "../title";

const makeUp = [
    { id: 1, image: "https://www.pngwing.com/es/free-png-bidbb", title: "Labial" },
    { id: 2, image: "https://www.pngwing.com/es/free-png-hoacx", title: "Base de Maquillaje" },
    { id: 3, image: "https://www.freepng.es/png-k84m54/", title: "BSombra de ojos" },
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(makeUp);
            }, 3000);
        });
        getData.then(res => console.log(res));

    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
            <title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;