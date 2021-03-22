const initialState = {
  orders: [],
  loading: false,
};

const orderReducer = (state = initialState, action) => {
  if (action.type === "LOAD_ORDERS_START") {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === "LOAD_ORDERS_SUCCESS") {
    console.log("Reducer :" + action.orders);
    return {
      ...state,
      loading: false,
      orders: action.orders,
    };
  } else if (action.type === "LOAD_ORDERS_ERROR") {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  return state;
};

export default orderReducer;
