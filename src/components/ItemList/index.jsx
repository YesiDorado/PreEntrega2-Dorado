import Item from "../Item";
import "../ItemList/itemList.css";

export default function ItemList ({Shop}) {
    return(
        <div className="ListaShop">
            <LayOut title="Bienvenidos">{Shop.map(sho=> <Item key={sho.id} {...sho} />)}
            </LayOut>
        </div>
    )
}
