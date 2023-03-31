import { useDispatch, useSelector } from 'react-redux';
import styles from './ingredients.module.css';
import IngredientDetails from '../components/inngredient-details/ingredient-details';
import { useLocation } from 'react-router-dom';
import { getBurgerIngredients } from '../services/actions/burger-ingredients';
import { useEffect } from 'react';

export default function IngredientsPage() {

  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(getBurgerIngredients);
  }, [dispatch])

  const ingredients = useSelector(store => store.burgerIngredients.ingredients);

  const location = useLocation();

  const { pathname } = location;

  const path = pathname.split('/ingredients/')[1]
  console.log(path)

  const ingredient = ingredients.find((item) => item._id === path);

  const content = (
    !!ingredient ? <IngredientDetails ingredient={ingredient} /> : <h1>Загрузка...</h1>
  )


 /* const ingredient = {
    _id: "60d3b41abdacab0026a733c7",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
    count: 0
  }*/

  return (
    <section className={styles.section}>
      {content}
    </section>
  );
}