import React from 'react';
import ReactDOM from 'react';
import styles from './modal.module.css';

import OrderDetails from '../orderDetails/order-details';
import IngredientDetails from '../inngredientDetails/ingredient-details';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

export default function Modal () {
  return(
    <div className={styles.modal}>
      {/*<OrderDetails />*/}   
      <IngredientDetails /> 
      <button type='button' aria-label='закрыть' className={`${styles.close_button} mt-15 mr-10`}>
        <CloseIcon type="primary" />
      </button>
    </div>
  );
}