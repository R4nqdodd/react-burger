export const GET_BURGER_INGREDIENTS_REQUEST = 'GET_BURGER_INGREDIENT_REQUEST';
export const GET_BURGER_INGREDIENTS_SUCCESS = 'GET_BURGER_INGREDIENTS_SUCCESS';
export const GET_BURGER_INGREDIENTS_FAILED = 'GET_BURGER_INGREDIENTS_FAILED';
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

const burgerIngredients = 'https://norma.nomoreparties.space/api/ingredients';
const getIngredientsApi = () => {
  return fetch(burgerIngredients)
    .then(res => res.json());
}

export function getBurgerIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_BURGER_INGREDIENTS_REQUEST
    })
    getIngredientsApi()
      .then(data => {
        if (data && data.success) {
          const ingredients = data.data.map(item => {
            item.count = 0; return item;
          })
          dispatch({
            type: GET_BURGER_INGREDIENTS_SUCCESS,
            ingredients: ingredients
          })
        } else {
          dispatch({
            type: GET_BURGER_INGREDIENTS_FAILED
          })
        }
      })
      .catch(err => {
        dispatch({
          type: GET_BURGER_INGREDIENTS_FAILED
        })
      });
  }
}