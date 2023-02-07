import { createContext, useReducer } from 'react';

import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispath] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispath({ type: 'CLOSE_ALERT' });
  };
  value.removeFromBasket = (itemId) => {
    dispath({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } });
  };
  value.addToBasket = (item) => {
    dispath({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.incQuantity = (itemId) => {
    dispath({ type: 'INCREMENT_QUANTITY', payload: { id: itemId } });
  };

  value.decQuantity = (itemId) => {
    dispath({ type: 'DECREMENT_QUANTITY', payload: { id: itemId } });
  };

  value.handleBasketShow = () => {
    dispath({ type: 'TOOGLE_BASKET' });
  };
  value.setGoods = (data) => {
    dispath({ type: 'SET_GOODS', payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
