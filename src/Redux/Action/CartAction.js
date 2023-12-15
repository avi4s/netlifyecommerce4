import {
  ADD_TO_CART,
  FETCH_CART_ITEMS,
  REMOVE_FROM_CART,
  UPDATE_QTY,
} from "../../Constants/Types";

const addToCartItem = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

const updateQty = (itemId, quantity) => ({
  type: UPDATE_QTY,
  payload: { itemId, quantity },
});

const removeFromCartItem = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

const fetchCartItems = (item) => {
  return {
    type: FETCH_CART_ITEMS,
    payload: item,
  };
};

const actions = {
  addToCartItem,
  updateQty,
  removeFromCartItem,
  fetchCartItems,
};

export default actions;
