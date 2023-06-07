import { useState } from 'react';
import EditOn from './EditOn';
import EditButtons from './EditButtons';
import deleteCarProduct from '../utils/deleteCarProduct';
import useQuantity from '../hooks/useQuantity';

function CartItem({product, setCartInfo, cartInfo, setDisabled}) {
  const [editOn, setEdit] = useState(false);
  const { quantity, setQuantity, onMore, onLess, avoidMax } = useQuantity(product.quantity);

  return (
    <div className="cartProduct">
      <img src={product.url_image} alt={product.url_image}/>
      <h5>{product.name}</h5>
      <EditButtons 
       product={product}
       editOn={editOn}
       onMore={onMore}
       onLess={onLess}
       avoidMax={avoidMax}
       quantity={quantity}
       />
      <button onClick={(event) => {
        event.preventDefault();
        let cartI = cartInfo;
        if (cartInfo.sales_products.length === 1) {
          cartI = {...cartInfo, seller_id: Number("X")}
        }
        deleteCarProduct(Number(product.product_id), cartI, setDisabled, setCartInfo);
      }}>
        X
      </button>
      <EditOn
        product={product}
        editOn={editOn}
        setCartInfo={setCartInfo}
        cartInfo={cartInfo}
        quantity={quantity}
        setEdit={setEdit}
        setQuantity={setQuantity}
      />
    </div>
  )
}

export default CartItem;
