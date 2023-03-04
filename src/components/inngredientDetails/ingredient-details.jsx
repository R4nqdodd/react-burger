import React from 'react';
import styles from './ingredient-details.module.css';

export default function IngredientDetails() {
  return (
    <>
      <h2 className="text text_type_main-large ml-10 mt-10 mr-10" style={{ alignSelf: 'start' }}>
        Детали ингредиента
      </h2>
      <img src='https://code.s3.yandex.net/react/code/bun-02-large.png' alt='Краторная булка' />
      <p className="text text_type_main-medium mt-4">
        Краторная булка N-200i
      </p>
      <ul className={`${styles.ingredient_info} mt-8 mb-15`}>
        <li className={`${styles.ingredient_info_item}`}>
          <h3 className="text text_type_main-default text_color_inactive">
            Калории, ккал
          </h3>
          <p className="text text_type_main-default text_color_inactive">
            123
          </p>
        </li>
        <li className={`${styles.ingredient_info_item}`}>
          <h3 className="text text_type_main-default text_color_inactive">
            Белки, г
          </h3>
          <p className="text text_type_main-default text_color_inactive">
            123
          </p>
        </li>
        <li className={`${styles.ingredient_info_item}`}>
          <h3 className="text text_type_main-default text_color_inactive">
            Жиры, г
          </h3>
          <p className="text text_type_main-default text_color_inactive">
            123
          </p>
        </li>
        <li className={`${styles.ingredient_info_item}`}>
          <h3 className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </h3>
          <p className="text text_type_main-default text_color_inactive">
            123
          </p>
        </li>
      </ul>
    </>
  );
}