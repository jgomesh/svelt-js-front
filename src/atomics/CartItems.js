import CartItem from "./CartItem";

function  CartItems({cartInfo, setCartInfo, setDisabled }) {
  
  return (
      <div className="cart_items_container">
        {cartInfo.sales_products && cartInfo.sales_products.map((product, index) => (
          <CartItem key={`cart-${index}`} product={product} setDisabled={setDisabled} setCartInfo={setCartInfo} cartInfo={cartInfo}/>
         ))
        }
      </div>
  );
}

export default CartItems;
