import { useContext } from 'react';
import { ShopContext } from "../context";
import React from 'react';

function BasketItem(props) {
  const {
    offerId,
    displayName,
    price,
    quantity
  } = props;

  const {removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext)


  return (
    <li className="collection-item">
      {displayName}{' '}
      <i className="material-icons basket-quantity" onClick={() => decQuantity(offerId)}>
        remove
      </i>{' '}
      x {quantity}{' '}
      <i className="material-icons basket-quantity" onClick={() => incQuantity(offerId)}>
        add
      </i>
      = {Number(price) * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromBasket(offerId)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
