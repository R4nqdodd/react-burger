import styles from './order.module.css';
import Order from "../components/order/order";
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from '../services/types/index';
import { WS_CONNECTION_CLOSE, WS_CONNECTION_START } from '../services/constants/ws';
import { WS_BASE_URL } from '../components/app/app';

export default function OrderPage() {

  const orderData = useSelector(store => store.orders.data);
  
  const dispatch = useDispatch();

  const location = useLocation();

  const userData = useSelector(store => store.auth);

  const { id } = useParams();

  useEffect(() => {
    if (location.pathname === `/feed/${id}`) {
      dispatch({
        type: WS_CONNECTION_START,
        payload: `${WS_BASE_URL}/all`
      })
      return () => {
        dispatch({ type: WS_CONNECTION_CLOSE })
      }
    } else {
      if (userData.user) {
        const token = userData.user.accessToken.split('Bearer ')[1];
        dispatch({
          type: WS_CONNECTION_START,
          payload: `${WS_BASE_URL}?token=${token}`
        })
        return () => {
          dispatch({ type: WS_CONNECTION_CLOSE })
        }
      }
    }
  }, [dispatch, userData])

  const content = () => {
    if (orderData.orders.length > 0) {
      const currentOrder = orderData.orders.find((item) => {
        return item._id === id;
      });
      if (currentOrder) {
        return <Order currentOrder={currentOrder} />;
      }
    }
    return null;
  }

  return (
    <section className={styles.section}>
      {content()}
    </section>
  )
}