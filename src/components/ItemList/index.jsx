import "./itemList.css";
import Item from "../Item/index";
import Layout from "../LayOut/index";

export default function ItemList ({Shop}) {
    return(
        <div className="ListaShop">
            <Layout title="Bienvenidos a Nuestra Tienda">{Shop.map(sho=> <Item key={sho.id} {...sho} />)}
            </Layout>
        </div>
    );
}

// En REACT hay que poner un "KEY" cuando utilizamos MAP
