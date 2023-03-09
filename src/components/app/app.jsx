import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

  const [modal, setModal] = useState({
    type: '',
    isOpen: false,
    ingredient: []
  });

  const ingredients = useSelector(store => store.burgerIngredients.ingredients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients())
  }, [dispatch])

  const app = (
    <>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={styles.main}>
          <BurgerIngredients modal={modal} setModal={setModal} />
          <BurgerConstructor ingredient={ingredients} modal={modal} setModal={setModal}/>
        </main>
        <Modal modal={modal} setModal={setModal}>
          {modal.type === 'ingredientDetails' ? <IngredientDetails modal={modal} /> : <OrderDetails />}
        </Modal>
      </DndProvider>
    </>
  );

  return app;
}

export default App;
