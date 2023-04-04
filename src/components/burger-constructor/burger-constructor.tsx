import { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './burger-constructor.module.css';
import { BurgerConstructorElement } from '../burger-constructor-element/burger-constructor-element';
import {
  ConstructorElement,
  CurrencyIcon,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { v4 as uuidv4 } from 'uuid';

import { useDrop } from 'react-dnd';

import { getConstructorIngredient, addIngredientToConstructor } from '../../services/actions/burger-constructor';
import { ORDER_RESET, sentOrderNumber } from '../../services/actions/order';
import { SET_MODAL } from '../../services/actions/modal';
import OrderDetails from '../order-details/order-details';
import { useNavigate } from 'react-router-dom';

import { TIngredient, TUserData } from '../../utils/types';

type TTemporaryIngredients<TIngredient> = {
  burgerIngredients: {
    ingredients: ReadonlyArray<TIngredient>;
  };
};

type TConstructor<TIngredient> = {
  constructor: {
    ingredients: ReadonlyArray<TIngredient>;
    bun: TIngredient;
  };
};

export default function BurgerConstructor() {

  const temporaryIngredients = useSelector((store: TTemporaryIngredients<TIngredient>) => store.burgerIngredients.ingredients)

  const { ingredients, bun } = useSelector((store: TConstructor<TIngredient>) => store.constructor);

  const userData = useSelector((store: TUserData) => store.auth);

  const navigate = useNavigate();

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getConstructorIngredient([]))
  }, [dispatch])

  const [, constructorDrop] = useDrop({
    accept: 'ingredients',
    drop(DragItem: TIngredient) {
      const newIngredient = { ...temporaryIngredients.find((item: TIngredient) => item._id === DragItem._id) } as TIngredient;
      newIngredient.uuid = uuidv4();

      const newIngredients: TIngredient[] = [...ingredients, newIngredient];

      dispatch(addIngredientToConstructor(newIngredient, bun, DragItem, newIngredients));
    }
  });

  const moveIngredient = (dragIndex: number, hoverIndex: number) => {
    const dragIngredient: TIngredient = ingredients[dragIndex];
    const newIngredients: TIngredient[] = [...ingredients];
    newIngredients.splice(dragIndex, 1);
    newIngredients.splice(hoverIndex, 0, dragIngredient);

    dispatch(getConstructorIngredient(newIngredients))

  }

  const [, sortDropRef] = useDrop({
    accept: 'sort',
  })

  const getUnchangeableItems = (isTop: boolean) => {
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
      const bunsTotal: number = bun.price * 2;
      if (ingredients && ingredients.length > 0) {
        const ingredientsTotal = ingredients.reduce((prev: number, item: TIngredient) => {
          return prev + item.price
        }, 0);
        return ingredientsTotal + bunsTotal;
      }
      return bunsTotal
    }
  }, [ingredients, bun]);

  const handleOrder = () => {
    if (!userData.user) {
      navigate('/login');
    } else {
      const ingredientsId: string[] = [...ingredients].map(item => item._id);
      dispatch({
        type: SET_MODAL,
        currentModal: <OrderDetails />,
        resetActionType: ORDER_RESET
      })
      dispatch(sentOrderNumber([bun._id, ...ingredientsId]));
    }
  }

  return (
    <section className='pl-4' ref={constructorDrop}>
      <ul className={`${styles.items} mt-25`}>
        {getUnchangeableItems(true)}
        <li>
          <ul className={styles.changeable_items} ref={sortDropRef}>
            {ingredients &&
              ingredients.map((item: TIngredient, index: number) => {
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