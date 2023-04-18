import styles from './burger-ingredient.module.css';
import {
  Counter,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
<<<<<<< HEAD

import { DELETE_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT } from '../../services/constants/current-ingredient';
import { SET_MODAL } from '../../services/constants/modal';
import IngredientDetails from '../inngredient-details/ingredient-details';
import Order from '../order/order';

=======
>>>>>>> sprint-17
import { TIngredient } from '../../utils/types';
import { useLocation, useNavigate } from 'react-router-dom';

type TBurgerIngredient = {
  ingredient: TIngredient;
};

export default function BurgerIngredient({ ingredient }: TBurgerIngredient) {

  const { _id } = ingredient;
<<<<<<< HEAD

  const dispatch = useDispatch();
=======
  const location = useLocation();
  const navigate = useNavigate();
>>>>>>> sprint-17

  const [{ opacity }, ingredientRef] = useDrag({
    type: 'ingredients',
    item: { _id },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    })
  });

  const onClick = () => {
    navigate(`/ingredients/${ingredient._id}`, { state: { background: location, currentIngredient: ingredient } });
  }

  return (
<<<<<<< HEAD
    <li className={`${styles.item}`} ref={ingredientRef} style={{ opacity }}>
=======
    <li className={`${styles.item}`} ref={ingredientRef} style={{ opacity }} onClick={onClick}>
>>>>>>> sprint-17
      <img className={`${styles.image} pl-4 pr-4 pb-1`} src={ingredient.image} alt={ingredient.name} />
      <div className={`${styles.item_price} pt-1 pb-1`}>
        <CurrencyIcon type="primary" />
        <p className="text text_type_digits-default">{ingredient.price}</p>
      </div>
      <p className={`${styles.item_name} text text_type_main-default`}>
        {ingredient.name}
      </p>
      {ingredient.count !== 0 && <Counter count={ingredient.count} size="default" extraClass="m-1" />}
    </li>
  );
}