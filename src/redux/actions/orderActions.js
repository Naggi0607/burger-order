import axios from "../../axios_orders";

export const loadOrders = () => {
  return function (dispatch) {
    dispatch(loadOrdersStart());

    axios
      .get("/orders.json")
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
