export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
    // console.log("action>>>===",action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.itme],
      };
    default:
        return state;
  }
};
export default reducer;
