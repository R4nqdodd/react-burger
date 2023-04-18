import styles from './order-list.module.css';
import OrderListItem from '../order-list-item/order-list-item';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

export default function OrderList({ orders, status }: any) {

  console.log(orders)

=======

type TWSOrder = {
  _id: string;
  ingredients: ReadonlyArray<string>;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}

type TOrderList = {
  status: boolean;
  orders: ReadonlyArray<TWSOrder>;
}

export default function OrderList({ orders, status }: TOrderList) {
 
>>>>>>> sprint-17
  const getOrders = () => {
    if (orders.length > 0) {
      return orders.map((item: any) => {
        return (
            <OrderListItem key={item._id} order={item} status={status} />
        )
      })
    } else {
      return (<div></div>)
    }
  }

  return (
    <ul className={`${styles.order_list_bar} mb-4`}>
      {getOrders()}
    </ul>
  );
}