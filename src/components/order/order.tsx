import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
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

  const ingredientsStore = useSelector((store: TBurgerIngredients<TIngredient>) => store.burgerIngredients.ingredients);

  const ingredients = currentOrder.ingredients.map((item: string) => {
    return {
      ...ingredientsStore.find((findItem: TIngredient) => {
        return findItem._id === item;
      })
    }
  }).map(item => {
    if (item.type === 'bun'){
      item.count = 2;
    } else {
      item.count = 1;
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
            ingredients.map((item, index) => {
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