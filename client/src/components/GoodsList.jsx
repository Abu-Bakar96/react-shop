import React, {useContext} from 'react';
import { ShopContext } from '../context';

import { GoodsItem } from './GoodsItem';

function GoodsList() {
  const {goods =  []} = useContext(ShopContext)


  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.offerId} 
        offerId={item.offerId} 
        displayName={item.displayName}
        description={item.displayDescription}
        price={item.price.regularPrice}
        displayAssets={item.displayAssets[0].full_background}
        />
      ))}
    </div>
  );
}

export { GoodsList };
