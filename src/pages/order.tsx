import styles from './order.module.css';
import Order from "../components/order/order";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { WS_CONNECTION_CLOSE, WS_CONNECTION_START } from '../services/constants/ws';

type TOrder = {
  _id: string;
  ingredients: ReadonlyArray<string>;
  status: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  name: string;
}

export default function OrderPage() {

  const orderData = useSelector((store: any) => store.orders.data);
  const dispatch = useDispatch();

  const userData = useSelector((store: any) => store.auth);

  const token = userData.user.accessToken.split('Bearer ')[1];

  const { id } = useParams();

  let currentOrder: TOrder = { ...orderData };

  if (orderData.length > 0) {
    currentOrder = orderData.ingredients.find((item: any) => item._id === id);
  }

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: `wss://norma.nomoreparties.space/orders?token=${token}`
    })
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSE })
    }
  }, [dispatch])

  const content = () => {
    if (orderData.length > 0) {
      return <Order currentOrder={currentOrder} />;
    }
    return null;
  }

  return (
    <section className={styles.section}>
      {content()}
    </section>
  )
}