import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
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

import { DELETE_CONSTRUCTOR_ELEMENT, GET_CONSTRUCTOR_ELEMENT } from '../../services/actions/burger-constructor';
import { INCREASE_COUNTER } from '../../services/actions/burger-ingredients';

export default function BurgerConstructor({ ingredient, modal, setModal }) {

  const temporaryIngredients = useSelector(store => store.burgerIngredients.ingredients)

  const ingredients = useSelector(store => store.constructor.ingredients)

  console.log(ingredients)

  const dispatch = useDispatch();

  function setModalType() {
    setModal({
      ...modal,
      type: 'orderDetails',
      isOpen: true
    });
  }

  useEffect(() => {
    dispatch({
      type: GET_CONSTRUCTOR_ELEMENT,
      ingredients: []
    })
  }, [dispatch])

  const [, constructorDrop] = useDrop({
    accept: 'ingredients',
    drop(itemId) {
      const newIngredient = temporaryIngredients.find(item => item._id === itemId._id)

      newIngredient.uuid = uuidv4(); 

    /*  if (newIngredient.type === 'bun' && ingredients.some(item => item.type === 'bun')) {
        
      console.log(ingredients.find(item => item.type === 'bun')._id)
        dispatch({
          type: DELETE_CONSTRUCTOR_ELEMENT,
          id: ingredients.find(item => item.type === 'bun')._id
        })
        dispatch({
          type: GET_CONSTRUCTOR_ELEMENT,
          ingredients: newIngredients
        });
      } else if (newIngredient.type === 'bun') {
        dispatch({
          type: GET_CONSTRUCTOR_ELEMENT,
          ingredients: newIngredients
        });
      } else {*/
        dispatch({
          type: GET_CONSTRUCTOR_ELEMENT,
          ingredients: [...ingredients, newIngredient]
        });
        dispatch({
          type: INCREASE_COUNTER,
          id: itemId
        })
    // }
    }
  });

  const getUnchangeableItems = (isTop) => {
    if (ingredients) {
      if (ingredients.some(item => item.type === 'bun')) {
        const unchangebleItem = ingredients.find(item => item.type === 'bun')
        if (isTop) {
          return (
            <li className={`${styles.item} mb-4 ml-8 pr-4`}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${unchangebleItem.name} (Верх)`}
                price={unchangebleItem.price}
                thumbnail={unchangebleItem.image}
              />
            </li>
          )
        } else {
          return (
            <li className={`${styles.item} mt-4 ml-8 pr-4`}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${unchangebleItem.name} (Низ)`}
                price={unchangebleItem.price}
                thumbnail={unchangebleItem.image}
              />
            </li>
          )
        }
      }
    }
  }

  return (
    <section className='pl-4' ref={constructorDrop}>
      <ul className={`${styles.items} mt-25`}>
        {getUnchangeableItems(true)}
        <li>
          <ul className={styles.changeable_items} >
            {ingredients &&
              ingredients.map((item, index) => {
                if (!(item.type === 'bun')) {
                {/*  return (
                    <li className={`${styles.item} pr-2`} key={index}>
                      <DragIcon type="primary" />
                      <ConstructorElement
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image}
                      />
                    </li>
                );*/}
                return <BurgerConstructorElement key={index} {...item} index={index}/>
                }
              })
            }
          </ul>
        </li>
        {getUnchangeableItems(false)}
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