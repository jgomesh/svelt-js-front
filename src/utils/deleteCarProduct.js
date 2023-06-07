import addAllPrices from "./addAllPrices";

const deleteCarProduct = (id, cartInfo, setDisabled, setCartInfo) => {
  const data = localStorage.getItem('cart');
  const products = JSON.parse(data).sales_products.filter((product) => {
    if(Number(product.product_id) === id) {
      return false;
    }
    return true;
  });

  
  const prices = products.map((product) => product.price * product.quantity);
  const totalPrice = addAllPrices(prices);

  const newData = {
    ...cartInfo,
    total_price: totalPrice,
    sales_products: products,
  }

  if(products.length === 0) {
    setDisabled(true)
  };
  
  setCartInfo(newData);

  return localStorage.setItem('cart', JSON.stringify(newData));
};

export default deleteCarProduct