import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './burger-ingredient.module.css';
import {
  Counter,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';

import { SET_CURRENT_INGREDIENT } from '../../services/actions/current-ingredient';
import { OPEN_MODAL, SET_MODAL_TYPE } from '../../services/actions/modal';

export default function BurgerIngredient({ ingredient }) {

  const { _id } = ingredient;

  const dispatch = useDispatch();

  function openModal() {
    dispatch({
      type: SET_CURRENT_INGREDIENT,
      current: ingredient
    })
    dispatch({
      type: SET_MODAL_TYPE,
      modalType: 'ingredientDetails'
    })
    dispatch({
      type: OPEN_MODAL
    })
  }

  const [{ opacity }, ingredientRef] = useDrag({
    type: 'ingredients',
    item: {_id},
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    })
  });

  return (
    <li className={`${styles.item} mr-6`} onClick={openModal} ref={ingredientRef} style={{ opacity }}>
      <img className={`${styles.image} pl-4 pr-4 pb-1`} src={ingredient.image} alt={ingredient.name} />
      <div className={`${styles.item_price} pt-1 pb-1`}>
        <CurrencyIcon type="primary" />
        <p className="text text_type_digits-default">{ingredient.price}</p>
      </div>
      <p className={`${styles.item_name} text text_type_main-default`}>
        {ingredient.name}
      </p>
       { ingredient.count !== 0 && <Counter count={ingredient.count} size="default" extraClass="m-1" />}
    </li>
  );
}

BurgerIngredient.propTypes = {
  ingredient: PropTypes.object,
}