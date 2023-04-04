import React, { useRef } from "react";
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from "react-dnd";
import styles from './burger-constructor-element.module.css'
import {
  ConstructorElement,
  DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { DELETE_CONSTRUCTOR_ELEMENT } from '../../services/actions/burger-constructor';
import { DECREASE_COUNTER } from '../../services/actions/burger-ingredients';

import { TIngredient } from '../../utils/types';

type TBurgerConstructorElement = TIngredient & {
  moveIngredient: Function;
  index: number;
};

export function BurgerConstructorElement({ name, _id, uuid, image, price, moveIngredient, index }: TBurgerConstructorElement) {

  const dispatch = useDispatch();

  const ref = useRef<any>();

  const handleClose = () => {
    dispatch({
      type: DELETE_CONSTRUCTOR_ELEMENT,
      uuid: uuid
    })
    dispatch({
      type: DECREASE_COUNTER,
      id: _id,
      count: 1
    })
  }

  const [, sortDropRef] = useDrop({
    accept: 'sort',
    hover(item: { index: number; _id: string }, monitor) {
      const dragIndex: number = item.index;
      const hoverIndex: number = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect: any = ref.current?.getBoundingClientRect();

      const hoverMiddleY: number = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset: any = monitor.getClientOffset();
      const hoverClientY: number = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveIngredient(dragIndex, hoverIndex);

      item.index = hoverIndex;
    }
  })

  const [{ opacity }, sortRef] = useDrag({
    type: 'sort',
    item: () => {
      return { index, _id }
    },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0 : 1,

    })
  });

  sortRef(sortDropRef(ref));

  return (
    <li className={`${styles.item} ml-2`} ref={ref} style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleClose}
      />
    </li>
  );
}