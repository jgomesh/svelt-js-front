import addToCart from '../utils/addToCart';

function ConfirmChange({ confirm, setConfirm, quantity, setQuantity, product, cartInfo, userId, setCartInfo }) {
  const isHome = window.location.href.includes('home');

  return (
    <>
      {confirm && (
        <div className={isHome ? 'confirm_change_home' : 'confirm_change_cart'}>
          That product is from another seller, do you want to clear your cart and add that product?
          <button
            className='confirm_button'
            onClick={async () => {
              await addToCart(quantity, product, cartInfo, userId, setCartInfo, setQuantity);
              setConfirm(false);
            }}
            name="Clear cart and add product"
          >
            Confirm
          </button>
        </div>
      )}
    </>
  );
}

export default ConfirmChange;
