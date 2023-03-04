import React from 'react';
import styles from './order-details.module.css';

import graphics from '../../images/graphics.svg'

export default function OrderDetails() {

  return (
    <>
      <p className={`${styles.order_number} text text_type_digits-large mt-30`}>035436</p>
      <p className="text text_type_main-medium mt-8">
        Идентификатор заказа
      </p>
      <img className='mt-15' src={graphics} alt='галка' />
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}