import { useEffect, useState } from 'react';
import { useSelector } from '../../services/types/index';
import { useInView } from 'react-hook-inview';
import styles from './burger-ingredients.module.css';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import { Link, useLocation } from 'react-router-dom';

export default function BurgerIngredients() {

  const location = useLocation();

  const [bunRef, bunInView] = useInView();
  const [sauceRef, sauceInView] = useInView();
  const [mainRef, mainInView] = useInView();

  const [current, setCurrent] = useState('Булки');

  const ingredients = useSelector(store => store.burgerIngredients.ingredients);

  useEffect(() => {
    if (bunInView) {
      setCurrent('Булки')
    } else if (sauceInView) {
      setCurrent('Соусы')
    } else if (mainInView) {
      setCurrent('Начинки')
    }
  }, [bunInView, sauceInView, mainInView]);

  return (
    <section className={`${styles.burger_ingredients} mr-10`}>
      <h1 className="text text_type_main-large mt-10">
        Соберите бургер
      </h1>
      <div className={`${styles.tab} mt-5`}>
        <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <section className='mt-10'>
        <ul className={styles.burger_ingredients_bar}>
          <li>
            <h2 className="text text_type_main-medium" ref={bunRef}>
              Булки
            </h2>
            <ul className={`${styles.burger_ingredients_list} mt-6 ml-4`}>
              {ingredients.map((item) => {
                if (item.type === 'bun') {
                  return (
                    <BurgerIngredient ingredient={item} key={`${item._id}`} />
                  )
                }
              }
              )}
            </ul>
          </li>
          <li>
            <h2 className="text text_type_main-medium mt-10" ref={sauceRef}>
              Соусы
            </h2>
            <ul className={`${styles.burger_ingredients_list} mt-6 ml-4`}>
              {ingredients.map((item) => {
                if (item.type === 'sauce') {
                  return (
                    <BurgerIngredient key={item._id} ingredient={item} />
                  )
                }
              }
              )}
            </ul>
          </li>
          <li>
            <h2 className="text text_type_main-medium mt-10" ref={mainRef}>
              Начинки
            </h2>
            <ul className={`${styles.burger_ingredients_list} mt-6 ml-4`}>
              {ingredients.map((item) => {
                if (item.type === 'main') {
                  return (
                    <BurgerIngredient key={item._id} ingredient={item} />
                  )
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