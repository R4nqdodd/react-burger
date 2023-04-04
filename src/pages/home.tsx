import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './home.module.css';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import { Modal } from '../components/modal/modal';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { TModalStore } from '../utils/types';

function HomePage() {

  const modal = useSelector((store: TModalStore) => store.modal);

  const homePage = (
    <>
      <DndProvider backend={HTML5Backend}>
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
      <Modal>
        {modal.currentModal}
      </Modal>
    </>
  );

  return homePage;
}

export default HomePage;