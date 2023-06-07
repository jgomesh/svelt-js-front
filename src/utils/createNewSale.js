import createSale from "./api/createSale";

const createNewSale = async (cartInfo, setCartInfo) => {
  const response = await createSale(cartInfo, 'sell');
  localStorage.removeItem('cart');
  setCartInfo({ user_id: 0, seller_id: 0, total_price: 0.00, delivery_address: "", delivery_number: "", sales_products: []});
  return response;
}

export default createNewSale;
