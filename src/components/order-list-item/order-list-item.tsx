import styles from './order-list-item.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/types/index';
import { TIngredient } from '../../utils/types';
import { Link, useLocation } from 'react-router-dom';

type TWSOrder = {
  _id: string;
  ingredients: ReadonlyArray<string>;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}

type TOrder = {
  status: boolean;
  order: TWSOrder;
}


export default function OrderListItem({ order, status }: TOrder) {

  const ingredientsStore = useSelector(store => store.burgerIngredients.ingredients);

  console.log(order)

  const location = useLocation();

  const temp = order.ingredients.map(item => {
    if (item === null) {
      return "60d3b41abdacab0026a733cd"
    }

    return item
  })

  const ingredients = temp.map((item) => {
    return ingredientsStore.find((findItem) => {
      if (item === null) {
        return "60d3b41abdacab0026a733cd"
      }
      return findItem._id === item;
    })
  }) as TIngredient[];


  const ingredientsPrice = ingredients.map((item) => {
    return item.price;
  })

  const orderPrice = ingredientsPrice.reduce((prev, item) => {
    return prev + item;
  }, 0)

  const visibleIngredients = ingredients.slice(0, 6);
  const invisibleIngredients = ingredients.slice(6);

  const ingredientIcons = () => {
    if (typeof visibleIngredients !== 'undefined') {
      return visibleIngredients.map((item, index) => {
        if (index === 5 && invisibleIngredients.length > 0) {
          return (
            <li key={index} className={styles.order_icon} style={{ left: -20 * index, zIndex: 5 - index }}>
              <img src={item.image} className={styles.order_image} />
              <div className={`${styles.counter}`}>
                <p className={`${styles.counter_number} text text_type_digits-default`}>+{invisibleIngredients.length + 1}</p>
              </div>
            </li>
          )
        }
        return (
          <li key={index} className={styles.order_icon} style={{ left: -20 * index, zIndex: 5 - index }}>
            <img src={item.image} className={styles.order_image} />
          </li>
        )
      })
    }
  }

  return (
    <li className={`${styles.order_list_item} mb-4 mr-2`}>
      <Link to={order._id} className={styles.link} state={{background: location, currentOrder: order}}>
        <div className={`${styles.order_title}`}>
          <p className="text text_type_digits-default pt-6 pr-6 pl-6">
            #{order.number}
          </p>
          <p className="text text_type_main-small text_color_inactive pt-6 pr-6">
            <FormattedDate date={new Date(order.updatedAt)} />
          </p>
        </div>
        <p className="text text_type_main-medium pt-6 pr-6 pl-6">
          {order.name}
        </p>
        {status && <p className={`text text_type_main-small pt-2 pl-6`} style={order.status === 'done' ? { color: '#00CCCC' } : { color: 'white' }}>
          {order.status}
        </p>}
        <div className={`${styles.order_details} pt-6 pl-6 pb-6`}>
          <ul className={styles.order_icons}>
            {ingredientsStore.length > 0 && ingredientIcons()}
          </ul>
          <div className={`${styles.order_price} pr-6`}>
            <p className="text text_type_digits-default">{orderPrice}</p>
            <CurrencyIcon type='primary' />
          </div>
        </div>
      </Link>
    </li>
  );
}