import CartItems from "../atomics/CartItems";

function Cart({ cartInfo, setCartInfo, history, finishPayment, setDisabled, hiddeCart }) {
  return (
    <div className={hiddeCart ? "hiddeCartContainer" : "cartContainer"}>
      <CartItems cartInfo={cartInfo} setCartInfo={setCartInfo} setDisabled={setDisabled} />
      <div>
        <span>Total</span> {(cartInfo.total_price).toFixed(2)}
      </div>
      {finishPayment ? (
        ''
      ) : (
        <div>
          <button className="payment_button" onClick={() => {
            history.push('/finish');
          }}>
            Ir para o pagamento.
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
