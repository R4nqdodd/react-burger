import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/types/index';
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
import { ORDER_RESET } from '../../services/constants/order';
import { sentOrderNumber } from '../../services/actions/order';
import { SET_MODAL } from '../../services/constants/modal';
import OrderDetails from '../order-details/order-details';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

import { TIngredient, TUserData, TUser } from '../../utils/types';

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
=======
import { useLocation, useNavigate } from 'react-router-dom';
import { TIngredient } from '../../utils/types';
>>>>>>> sprint-17

export default function BurgerConstructor() {

  const temporaryIngredients = useSelector(store => store.burgerIngredients.ingredients)

  const { ingredients, bun } = useSelector(store => store.BurgerConstructor);
  const location = useLocation();

<<<<<<< HEAD
  const userData = useSelector((store: TUserData<TUser>) => store.auth);
=======
  const userData = useSelector(store => store.auth);
>>>>>>> sprint-17

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [, constructorDrop] = useDrop({
    accept: 'ingredients',
    drop(DragItem: TIngredient) {
      const newIngredient = { ...temporaryIngredients.find(item => item._id === DragItem._id) } as TIngredient;
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
        const ingredientsTotal = ingredients.reduce((prev, item) => {
          return prev + item.price
        }, 0);
        return ingredientsTotal + bunsTotal;
      }
      return bunsTotal
    }
  }, [ingredients, bun]);

  const handleOrder = () => {
    if (!userData.isLogin) {
      navigate('/login');
    } else {
      navigate('/', {state: {background: location}})
      const ingredientsId: string[] = [...ingredients].map(item => item._id);
      dispatch({
        type: SET_MODAL,
        currentModal: <OrderDetails />,
        resetActionType: ORDER_RESET
      })
      if (bun) {
        dispatch(sentOrderNumber([bun._id, ...ingredientsId], userData.user.accessToken));
      }
    }
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