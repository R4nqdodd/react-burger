import React from 'react';
import styles from './burger-ingredient.module.css';
import {
  Counter,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredient({ ingredient }) {
  return (
    <>
      <li className={`${styles.item} mr-6`}>
        <img className={`${styles.image} pl-4 pr-4 pb-1`} src={ingredient.image} alt='ALT' />
        <div className='pt-1 pb-1' style={{ display: 'flex' }}>
          <CurrencyIcon type="primary" />
          <p className="text text_type_digits-default">{ingredient.price}</p>
        </div>
        <p className="text text_type_main-default" style={{ textAlign: 'center' }}>
          {ingredient.name}
        </p>
        <Counter count={1} size="default" extraClass="m-1" />
      </li>
    </>
  );
}