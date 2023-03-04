import React from 'react';
import styles from './burger-ingredients.module.css';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burgerIngredient/burger-ingredient';


export default function BurgerIngredients({ ingredient }) {

  const [current, setCurrent] = React.useState('Булки');

  return (
    <section className={`${styles.burger_ingredients} mr-10`}>
      <h1 className="text text_type_main-large mt-10">
        Соберите бургер
      </h1>
      <div className={`${styles.tab} mt-5`}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <section className='mt-10'>
        <ul className={styles.burger_ingredients_bar}>
          <li>
            <h2 className="text text_type_main-medium">
              Булки
            </h2>
            <ul className={`${styles.burger_ingredients_list} mt-6 ml-4`}>
              {ingredient.map((item) => {
                if(item.type === 'bun'){
                 return (<BurgerIngredient ingredient={item} />)
                }
              }
              )}
            </ul>
          </li>
          <li>
            <h2 className="text text_type_main-medium mt-10">
              Соусы
            </h2>
            <ul className={`${styles.burger_ingredients_list} mt-6 ml-4`}>
            {ingredient.map((item) => {
                if(item.type === 'sauce'){
                 return (<BurgerIngredient ingredient={item} />)
                }
              }
              )}
            </ul>
          </li>
          <li>
            <h2 className="text text_type_main-medium mt-10">
              Начинки
            </h2>
            <ul className={`${styles.burger_ingredients_list} mt-6 ml-4`}>
            {ingredient.map((item) => {
                if(item.type === 'main'){
                 return (<BurgerIngredient ingredient={item} />)
                }
              }
              )}
            </ul>
          </li>
        </ul>
      </section>
    </section >
  );
}