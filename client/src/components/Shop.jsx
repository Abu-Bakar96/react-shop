import React, { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';

import { ShopContext } from "../context";
import { Alert } from './Alert';
import { BasketList } from './BasketList';
import { Cart } from './Cart';
import { GoodsList } from './GoodsList';
import { PreLoader } from './PreLoader';

function Shop() {

  const {setGoods, loading, order, isBasketShow,alertName } = useContext(ShopContext)



  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop)
      });
  // eslint-disable-next-line 
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <PreLoader /> : <GoodsList />}
      {isBasketShow && (
        <BasketList/>
      )}
      {alertName && <Alert/>}
    </main>
  );
}

export { Shop };
