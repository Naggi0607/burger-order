export const addIngredient = (ingredient) => {
  return { type: "ADD_INGREDIENT", ingredient };
};
export const removeIngredient = (ingredient) => {
  return { type: "REMOVE_INGREDIENT", ingredient };
};
