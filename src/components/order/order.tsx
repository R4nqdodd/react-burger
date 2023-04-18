import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
<<<<<<< HEAD
import ingr from '../../images/ingredient preview.png';
import styles from './order.module.css';
import OrderItem from "../order_item/order_item";
import { useSelector } from "react-redux";
import { TIngredient } from "../../utils/types";

type TBurgerIngredients<TIngredient> = {
  burgerIngredients: {
    ingredients: ReadonlyArray<TIngredient>;
    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
  };
};

=======
import styles from './order.module.css';
import OrderItem from "../order_item/order_item";
import { useSelector } from '../../services/types/index';
import { TIngredient } from "../../utils/types";

>>>>>>> sprint-17
type TOrder = {
  currentOrder: {
    _id: string;
    ingredients: ReadonlyArray<string>;
    status: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    name: string;
  }
}

export default function Order({ currentOrder }: TOrder) {

<<<<<<< HEAD
  const ingredientsStore = useSelector((store: TBurgerIngredients<TIngredient>) => store.burgerIngredients.ingredients);

  const ingredients = currentOrder.ingredients.map((item: string) => {
    return {
      ...ingredientsStore.find((findItem: TIngredient) => {
=======
  const ingredientsStore = useSelector(store => store.burgerIngredients.ingredients);

  let sortIngredients: Array<TIngredient> = [];

  const ingredients = currentOrder.ingredients.map((item) => {
    return {
      ...ingredientsStore.find((findItem) => {
>>>>>>> sprint-17
        return findItem._id === item;
      })
    }
  }).map(item => {
    if (item.type === 'bun'){
      item.count = 2;
<<<<<<< HEAD
    } else {
      item.count = 1;
=======
      if(!sortIngredients.some((findItem) => findItem.type === 'bun' )) {
        sortIngredients.unshift(item as TIngredient);
      }
    } else {
      item.count = 1;
      if(!sortIngredients.some((findItem) => findItem._id === item._id )) {
        sortIngredients.push(item as TIngredient);
      } else {
        sortIngredients.forEach((findItem) => {
          if(findItem._id === item._id) {
            findItem.count++;
          }
          return findItem;
        })
      }
>>>>>>> sprint-17
    }
    return item;
  }) as TIngredient[];

  const totatPrice = ingredients.reduce((prev, item) => {
    return prev + item.price;
  }, 0)

  return (
    <div className={styles.order}>
      <h1 className={`${styles.order_number} text text_type_digits-default mb-10 mt-15`}>
        #{currentOrder.number}
      </h1>
      <h2 className="text text_type_main-medium mb-3">
        {currentOrder.name}
      </h2>
      <p className="text text_type_main-small mb-15"
        style={currentOrder.status === 'done' ? { color: '#00CCCC' } : { color: 'white' }}
      >
        {currentOrder.status}
      </p>
      <h2 className="text text_type_main-medium mb-6">
        Состав:
      </h2>
      <div>
        <ul className={`${styles.order_list_bar} mb-10`}>
          {
<<<<<<< HEAD
            ingredients.map((item, index) => {
=======
            sortIngredients.map((item, index) => {
>>>>>>> sprint-17
              return (
                <OrderItem key={index} image={item.image} ingredientName={item.name} count={item.count} price={item.price} />
              );
            })
          }
        </ul>
      </div>
      <div className={styles.order_caption}>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(currentOrder.updatedAt)} />
        </p>
        <p className="text text_type_digits-default">
          {totatPrice} <CurrencyIcon type='primary' />
        </p>
      </div>
    </div>
  )
}