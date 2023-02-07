import React, { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
  const {
    offerId,
    displayName,
    description,
    price,
    displayAssets
  } = props;

  const {addToBasket} = useContext(ShopContext)

  return (
    <div className="card">
      <div className="card-image">
        <img src={displayAssets} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>

        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              offerId,
              displayName,
              price,
            })
          }>
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
