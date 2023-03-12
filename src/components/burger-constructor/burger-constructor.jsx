import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './burger-constructor.module.css';
import { BurgerConstructorElement } from '../burger-constructor-element/burger-constructor-element';
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { v4 as uuidv4 } from 'uuid';

import { useDrop } from 'react-dnd';

import { GET_CONSTRUCTOR_ELEMENT, GET_CONSTRUCTOR_BUN } from '../../services/actions/burger-constructor';
import { DECREASE_COUNTER, INCREASE_COUNTER } from '../../services/actions/burger-ingredients';
import { ORDER_RESET, sentOrderNumber } from '../../services/actions/order';
import { SET_MODAL } from '../../services/actions/modal';
import OrderDetails from '../order-details/order-details';

export default function BurgerConstructor() {

  const temporaryIngredients = useSelector(store => store.burgerIngredients.ingredients)

  const ingredients = useSelector(store => store.constructor.ingredients);
  const bun = useSelector(store => store.constructor.bun);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_CONSTRUCTOR_ELEMENT,
      ingredients: []
    })
  }, [dispatch])

  const [, constructorDrop] = useDrop({
    accept: 'ingredients',
    drop(itemId) {
      const newIngredient = { ...temporaryIngredients.find(item => item._id === itemId._id) }

      newIngredient.uuid = uuidv4();

      if (newIngredient.type === 'bun' && bun) {
        dispatch({
          type: DECREASE_COUNTER,
          id: bun._id,
          count: 2
        })
        dispatch({
          type: INCREASE_COUNTER,
          id: itemId,
          count: 2
        })
        dispatch({
          type: GET_CONSTRUCTOR_BUN,
          bun: newIngredient
        });
      } else if (newIngredient.type === 'bun') {
        dispatch({
          type: INCREASE_COUNTER,
          id: itemId,
          count: 2
        })
        dispatch({
          type: GET_CONSTRUCTOR_BUN,
          bun: newIngredient
        });
      } else {
        dispatch({
          type: GET_CONSTRUCTOR_ELEMENT,
          ingredients: [...ingredients, newIngredient]
        });
        dispatch({
          type: INCREASE_COUNTER,
          id: itemId,
          count: 1
        })
      }
    }
  });

  const moveIngredient = (dragIndex, hoverIndex) => {
    const dragIngredient = ingredients[dragIndex];
    const newIngredients = [...ingredients];
    newIngredients.splice(dragIndex, 1);
    newIngredients.splice(hoverIndex, 0, dragIngredient);

    dispatch({
      type: GET_CONSTRUCTOR_ELEMENT,
      ingredients: newIngredients
    })
    
  }

  const [, sortDropRef] = useDrop({
    accept: 'sort',
  })

  const getUnchangeableItems = (isTop) => {
    if (bun) {
      return (
        <li className={`${styles.item} ${isTop ? 'mb-4' : 'mt-4'} ml-8 pr-4`}>
          <ConstructorElement
            type={isTop ? 'top' : 'bottom'}
            isLocked={true}
            text={`${bun.name} ${isTop ? '(Верх)' : '(Низ)'}`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </li>
      )
    }
  }

  const totalPrice = useMemo(() => {
    if (bun) {
      const bunsTotal = bun.price * 2;
      if (ingredients && ingredients.length > 0) {
        const ingredientsTotal = ingredients.reduce((prev, item) => {
          return prev + item.price
        }, 0);
        return ingredientsTotal + bunsTotal;
      }
      return bunsTotal
    }
  }, [ingredients, bun]);

  const handleOrder = () => {
    const ingredientsId = [...ingredients].map(item => item._id);
    dispatch({
      type: SET_MODAL,
      currentModal: <OrderDetails />,
      resetActionType: ORDER_RESET
    })
    dispatch(sentOrderNumber([ bun._id, ...ingredientsId]));
  }

  return (
    <section className='pl-4' ref={constructorDrop}>
      <ul className={`${styles.items} mt-25`}>
        {getUnchangeableItems(true)}
        <li>
          <ul className={styles.changeable_items} ref={sortDropRef}>
            {ingredients &&
              ingredients.map((item, index) => {
                if (!(item.type === 'bun')) {
                  return <BurgerConstructorElement key={item.uuid} {...item} moveIngredient={moveIngredient} index={index} />
                }
              })
            }
          </ul>
        </li>
        {getUnchangeableItems(false)}
      </ul>
      {bun ?
        <div className={`${styles.total} mt-10 pr-4`}>
          <p className="text text_type_digits-medium mr-10">{totalPrice}<CurrencyIcon type="primary" /></p>
          <Button htmlType="button" type="primary" size="medium" onClick={handleOrder}>
            Оформить заказ
          </Button>
        </div>
        : null
      }
    </section>
  );
}