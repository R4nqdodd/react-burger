import styles from './order-item.module.css';
<<<<<<< HEAD
import Ingrimage from '../../images/test_image.png';
=======
>>>>>>> sprint-17
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

type TOrderItem = {
  image: string;
  ingredientName: string;
  count: number;
  price: number;
}

export default function OrderItem({ image, ingredientName, count, price }: TOrderItem) {
  return (
    <li className={styles.order_list_item}>
      <div className={styles.order_list_item_title}>
        <div className={styles.icon}>
          <img src={image} className={styles.image} />
        </div>
        <p className={`${styles.order_list_item_subtitle} pl-4 pr-4 text text_type_main-default`}>
          {ingredientName}
        </p>
      </div>
      <div className={styles.order_list_item_price}>
        <p className="text text_type_digits-default pr-2">
          {count} x {price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
}