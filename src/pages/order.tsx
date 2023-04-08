import styles from './order.module.css';
import Order from "../components/order/order";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function OrderPage() {

  const orderData = useSelector((store: any) => store.orders.data);

  const { id } = useParams();

  const currentOrder = orderData.ingredients.find((item: any) => item._id === id);

  return (
    <section className={styles.section}>
      <Order currentOrder={currentOrder} />
    </section>
  )
}