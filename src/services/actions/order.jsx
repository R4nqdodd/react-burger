export const ORDER_REQUEST = 'ORDER_NUMBER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_NUMBER_SUCCESS';
export const ORDER_FAILED = 'ORDER_NUMBER_FAILED';

const order = 'https://norma.nomoreparties.space/api/orders'
const getOrderApi = (ingredients) => {
  return fetch(
    order,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredients
      })
    }
  )
    .then(res => res.json());
}

export function sentOrderNumber(ingredientsId) {
  return function (dispatch) {
    dispatch({
      type: ORDER_REQUEST
    })
    getOrderApi(ingredientsId)
      .then(data => {
        if (data && data.success) {
          dispatch({
            type: ORDER_SUCCESS,
            name: data.name,
            order: {
              number: data.order.number
            }
          })
        } else {
          dispatch({
            type: ORDER_FAILED
          })
        }
      })
      .catch(err => {
        console.log(`Ошибка: ${err.status}`)
      })
  }
}