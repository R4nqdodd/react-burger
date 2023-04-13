import styles from './feed.module.css';
import { useEffect } from 'react';
import OrderList from '../components/order-list/order-list';
import OrderBoard from '../components/order-board/order-board';
import { useDispatch, useSelector } from '../services/types/index';
import { WS_CONNECTION_CLOSE, WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../services/constants/ws';
import { WS_BASE_URL } from '../components/app/app';

export default function FeedPage() {

  const dispatch = useDispatch();

  const feedData = useSelector(store => store.orders.data);

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: `${WS_BASE_URL}/all`
    })

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSE })
    }
  }, [dispatch]);

  return (
    <>
      <main className={styles.main}>
        <h1 className={`${styles.title} text text_type_main-large mb-5 mt-10`}>Лента заказов</h1>
        <section className={`${styles.section_orders} mr-15`}>
          <OrderList orders={feedData.orders} status={false} />
        </section>
        <section className={styles.section_digits}>
          <OrderBoard title='Готовы:' orders={feedData.orders} done={true} />
          <OrderBoard title='В работе:' orders={feedData.orders} done={false} />
          <div className={styles.complete_for_all_a_time}>
            <h2 className={`text text_type_main-medium`}>
              Выполнено за всё время:
            </h2>
            <p className={`${styles.beaty_number} text text_type_digits-large`}>
              {feedData.total}
            </p>
          </div>
          <div className={styles.complete_for_all_a_time}>
            <h2 className={`text text_type_main-medium`}>
              Выполнено за сегодня:
            </h2>
            <p className={`${styles.beaty_number} text text_type_digits-large`}>
              {feedData.totalToday}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}