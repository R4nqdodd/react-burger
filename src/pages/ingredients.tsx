import { useSelector } from 'react-redux';
import styles from './ingredients.module.css';
import IngredientDetails from '../components/inngredient-details/ingredient-details';
import { useParams } from 'react-router-dom';

type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  count: number;
  uuid?: string;
};

type TIngredients<TIngredient> = {
  burgerIngredients: {
    ingredients: ReadonlyArray<TIngredient>;
    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
  };
};

export default function IngredientsPage() {

  const ingredients = useSelector((store: TIngredients<TIngredient>) => store.burgerIngredients.ingredients);

  const { id } = useParams();

  const ingredient = ingredients.find((item: TIngredient) => item._id === id);

  const content = (
    !!ingredient ? <IngredientDetails ingredient={ingredient} /> : <h1>Загрузка...</h1>
  )

  return (
    <section className={styles.section}>
      {content}
    </section>
  );
}