import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../inngredient-details/ingredient-details';
import { getBurgerIngredients } from '../../services/actions/burger-ingredients';

function App() {
  
  const currentIngredient = useSelector(store => store.currentIngredient.current)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch])

  const app = (
    <>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
        <Modal>
          {currentIngredient ? <IngredientDetails /> : <OrderDetails />}
        </Modal>
      </DndProvider>
    </>
  );

  return app;
}

export default App;
