import addAllPrices from "./addAllPrices";

const editCart = (quantity, product, cartInfo, setCartInfo) => {

  const data = localStorage.getItem('cart');

  if(!quantity){
    return null
  }

  if(data) {
    const dataDecoded = JSON.parse(data);

      const productsUpdated = dataDecoded.sales_products.map((productExist) => {
        if(Number(productExist.product_id) === Number(product.product_id)) {
          return {...productExist, quantity: quantity};
        }
        return productExist;
      });

      const cartItems = {
        ...cartInfo,
        ...dataDecoded,
        sales_products: productsUpdated,
      };

      const prices = cartItems.sales_products.map((product1) => Number(product1.price) * Number(product1.quantity));
      const totalPrice = addAllPrices(prices);
      const cartItemsCoded = JSON.stringify(cartItems);

      setCartInfo({ ...cartInfo, ...cartItems, total_price: totalPrice});
      localStorage.setItem('cart', cartItemsCoded);
    }
}

export default editCart