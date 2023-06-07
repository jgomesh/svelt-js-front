import { useState } from 'react';

const useQuantity = (quantityProvider = 0) => {
  const [quantity, setQuantity] = useState(quantityProvider);

  const onMore = (event) => {
    event.preventDefault();
    if(quantity < 50) {
      return setQuantity(quantity + 1);
    };
    setQuantity(0);
  };

  const onLess = (event) => {
    event.preventDefault();
    if(quantity !== 0) {
      return setQuantity(quantity - 1);
    };
    setQuantity(50);
  };

  const avoidMax = (event) => {
    setQuantity(Number(event.target.value));
    if(Number(event.target.value) > 50 ) {
      setQuantity(50);
    }
  }

  return { quantity, setQuantity, onMore, onLess, avoidMax };
}

export default useQuantity;
