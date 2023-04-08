import styles from './order-board.module.css';

type TOrderBoard = {
  title: string;
  orders: any;
  done: boolean
};

export default function OrderBoard({ title, orders, done }: TOrderBoard) {

  const textColor = done ? '#00CCCC' : 'white';

  const getNumbers = () => {
    if (done) {
      return orders.map((item: any, index: number) => {
        if (item.status === 'done') {
          return (
            <li key={index}>
              <p className="text text_type_digits-default" style={{ color: textColor }}>{item.number}</p>
            </li>
          )
        }
        return null;
      })
    } else {
      return orders.map((item: any, index: number) => {
        if (item.status !== 'done') {
          return (
            <li key={index}>
              <p className="text text_type_digits-default" style={{ color: textColor }}>{item.number}</p>
            </li>
          )
        }
        return null;
      })
    }
  }

  return (
    <>
      <div className={`${styles.ready_orders} mr-9`}>
        <h2 className={`${styles.ready_orders_title}`}>
          {title}
        </h2>
        <ul className={styles.ready_orders_list}>
          {getNumbers()}
        </ul>
      </div>
    </>
  );
}