import React from "react";
import {useDispatch} from 'react-redux'
import styles from './burger-constructor-element.module.css'
import {
  ConstructorElement,
  DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { DELETE_CONSTRUCTOR_ELEMENT, GET_CONSTRUCTOR_ELEMENT } from '../../services/actions/burger-constructor';
import { INCREASE_COUNTER, DECREASE_COUNTER } from '../../services/actions/burger-ingredients';

export function BurgerConstructorElement ({ name, _id, index, image, price }) {

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({
      type: DELETE_CONSTRUCTOR_ELEMENT,
      id: _id + index
    })
    dispatch({
      type: DECREASE_COUNTER,
      id: _id
    })
  }

  return (
    <li className={`${styles.item} pr-2`}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleClose}
      />
    </li>
  );
}