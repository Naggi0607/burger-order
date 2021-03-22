const INGREDIENT_PRICE = { salad: 1, cheese: 1.5, meat: 3, bacon: 1 };

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  },
  totalPrice: 6,
  purchasing: false,
  ingredientNames: {
    bacon: "Bacon",
    cheese: "Cheese",
    meat: "Meat",
    salad: "Salad",
  },
};
const burgerReducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredient]: state.ingredients[action.ingredient] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredient],
      purchasing: true,
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    const newPrice = state.totalPrice - INGREDIENT_PRICE[action.ingredient];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredient]: state.ingredients[action.ingredient] - 1,
      },
      totalPrice: newPrice,
      purchasing: newPrice > 6,
    };
  }
  return state;
};

export default burgerReducer;
