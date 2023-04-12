import { useSelector } from '../services/types/index';
import styles from './ingredients.module.css';
import IngredientDetails from '../components/inngredient-details/ingredient-details';
import { useParams } from 'react-router-dom';

import { TIngredient } from '../utils/types';

export default function IngredientsPage() {

  const ingredients = useSelector(store => store.burgerIngredients.ingredients);

  const { id } = useParams();

  const ingredient = ingredients.find((item) => item._id === id);

  const content = (
    !!ingredient ? <IngredientDetails ingredient={ingredient} /> : <h1>Загрузка...</h1>
  )

  return (
    <section className={styles.section}>
      {content}
    </section>
  );
}