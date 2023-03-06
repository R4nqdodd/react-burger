import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor({ ingredient, modal, setModal }) {

  function setModalType () {
    setModal({
      ...modal,
      type: 'orderDetails',
      isOpen: true
    });
  }

  return (
    <section className='pl-4'>
      <ul className={`${styles.items} mt-25`}>
        <li className={`${styles.item} mb-4 ml-8 pr-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`Краторная булка N-200i (Верх)`}
            price={1255}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </li>
        <li>
          <ul className={styles.changeable_items}>
            {
              ingredient.map((item, index) => {
                if (!(item.type === 'bun')) {
                  return (
                    <li className={`${styles.item} pr-2`} key={item._id}>
                      <DragIcon type="primary" />
                      <ConstructorElement
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image}
                      />
                    </li>
                  );
                }
              })
            }
          </ul>
        </li>
        <li className={`${styles.item} mt-4 ml-8 pr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`Краторная булка N-200i (Низ)`}
            price={1255}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </li>
      </ul>
      <div className={`${styles.total} mt-10 pr-4`}>
        <p className="text text_type_digits-medium mr-10">610<CurrencyIcon type="primary" /></p>
        <Button htmlType="button" type="primary" size="medium" onClick={setModalType}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredient: PropTypes.array,
  modal: PropTypes.object,
  setModal: PropTypes.func
}