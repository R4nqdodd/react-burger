import { request } from "../../utils/api";
import { RESET_CONSTRUCTOR } from "../constants/burger-constructor";
import { RESET_COUNTER } from "../constants/burger-ingredients";
import { IS_FAILED, IS_REQUEST, IS_SUCCESS } from "../constants/modal";
import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILED,
  ORDER_RESET
} from '../constants/order';
import { AppDispatch } from "../types";

export interface IOrderRequestAction {
  readonly type: typeof ORDER_REQUEST;
}

export interface IOrderSuccessAction {
  readonly type: typeof ORDER_SUCCESS;
  readonly name: string;
  readonly order: { number: number };
}

export interface IOrderFailedAction {
  readonly type: typeof ORDER_FAILED;
}

export interface IOrderResetAction {
  readonly type: typeof ORDER_RESET;
}

export type TOrderAction =
  | IOrderRequestAction
  | IOrderSuccessAction
  | IOrderFailedAction
  | IOrderResetAction;

const getOrder = (ingredientsId: ReadonlyArray<string>) => request('/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    ingredients: ingredientsId
  })
})

export function sentOrderNumber(ingredientsId: ReadonlyArray<string>) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: ORDER_REQUEST
    })
    dispatch({
      type: IS_REQUEST
    })
    getOrder(ingredientsId)
      .then(data => {
        dispatch({
          type: ORDER_SUCCESS,
          name: data.name,
          order: {
            number: data.order.number
          }
        })
        dispatch({
          type: IS_SUCCESS
        })
        dispatch({
          type: RESET_CONSTRUCTOR
        })
        dispatch({
          type: RESET_COUNTER
        })

      })
      .catch(err => {
        dispatch({
          type: ORDER_FAILED
        })
        dispatch({
          type: IS_FAILED
        })
        console.log(`Ошибка: ${err.status}`);
      })
  }
}