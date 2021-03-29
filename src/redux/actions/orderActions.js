import axios from "../../axios_orders";

export const loadOrders = () => {
  return function (dispatch, getState) {
    dispatch(loadOrdersStart());
    const token = getState().signupLoginReducer.token;
    const userId = getState().signupLoginReducer.userId;
    axios
      .get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((response) => {
        const loadOrder = Object.entries(response.data).reverse();
        console.log(loadOrder);
        dispatch(loadOrdersSuccess(loadOrder));
      })
      .catch((err) => {
        dispatch(loadOrdersError(err));
      });
  };
};

export const loadOrdersSuccess = (orders) => {
  return {
    type: "LOAD_ORDERS_SUCCESS",
    orders,
  };
};

export const loadOrdersError = (error) => {
  return {
    type: "LOAD_ORDERS_ERROR",
    error,
  };
};

export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};

// SaveOrder actions
export const saveOrder = (order) => {
  return function (dispatch, getState) {
    dispatch(saveOrderStart());
    const token = getState().signupLoginReducer.token;
    axios
      .post(`/orders.json?auth=${token}&`, order)
      .then((response) => {
        dispatch(saveOrderSuccess());
      })
      .catch((error) => {
        dispatch(saveOrderError(error));
      });
  };
};

export const saveOrderStart = () => {
  return {
    type: "SAVE_ORDER_START",
  };
};

export const saveOrderSuccess = () => {
  return {
    type: "SAVE_ORDER_SUCCESS",
  };
};

export const saveOrderError = (error) => {
  return {
    type: "SAVE_ORDER_ERROR",
    error,
  };
};
