const editChanger = (product, setQuantity, setEdit, editOn) => {
  const data = localStorage.getItem('cart');
  const dataDecoded = JSON.parse(data);

  if (!dataDecoded.sales_products) {
    return false;
  }

  dataDecoded.sales_products.forEach((productExist) => {
    if(Number(productExist.product_id) === Number(product.product_id)) {
      setQuantity(productExist.quantity);
    }
  });

  setEdit(!editOn);
}

export default editChanger;