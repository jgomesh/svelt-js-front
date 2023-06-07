function EditButtons({product, editOn, onMore, quantity, onLess, avoidMax}) {

  return (
    <>
      { editOn ? (
        <div className="edit_cart_container">
          <button onClick={(event) => onMore(event)}>
            +
          </button>
          <input type="number" value={quantity} placeholder={`${quantity}`} onChange={(event) => avoidMax(event)}/>
          <button onClick={(event) => onLess(event)}>
            -
          </button>
        </div>
      ) : <span>{product.quantity}</span> }
    </>
  )
}

export default EditButtons;
