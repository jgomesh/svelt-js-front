const addAllPrices = (prices) => {
  return prices.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);
};

export default addAllPrices;
