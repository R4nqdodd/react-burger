import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredient.module.css';
import {
  Counter,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredient({ ingredient, modal, setModal }) {

  function setModalType() {
    setModal({
      ...modal,
      type: 'ingredientDetails',
      isOpen: true,
      ingredient: ingredient
    });
  }

  return (
    <li className={`${styles.item} mr-6`} onClick={setModalType}>
      <img className={`${styles.image} pl-4 pr-4 pb-1`} src={ingredient.image} alt={ingredient.name} />
      <div className={`${styles.item_price} pt-1 pb-1`}>
        <CurrencyIcon type="primary" />
        <p className="text text_type_digits-default">{ingredient.price}</p>
      </div>
      <p className={`${styles.item_name} text text_type_main-default`}>
        {ingredient.name}
      </p>
      <Counter count={1} size="default" extraClass="m-1" />
    </li>
  );
}

BurgerIngredient.propTypes = {
  ingredient: PropTypes.object,
  modal: PropTypes.object,
  setModal: PropTypes.func
}