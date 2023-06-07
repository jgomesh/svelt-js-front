import editCart from '../utils/editCart';
import editChanger from '../utils/editChanger';

function EditOn({ product, editOn, setCartInfo, cartInfo, quantity, setEdit, setQuantity }) {

  return (
    <>
      {editOn ? (
        <button onClick={(event) => {
          event.preventDefault();
          editCart(quantity, product, cartInfo, setCartInfo);
          setEdit(!editOn);
        }}>
          CONFIRM
        </button>
      ): (
        <button onClick={(event) => {
          event.preventDefault();
          editChanger(product, setQuantity, setEdit, editOn)
        }}>
          EDIT
        </button>
      )}
    </>
  )
}

export default EditOn;
