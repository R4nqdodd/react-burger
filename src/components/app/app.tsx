import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';

import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../inngredient-details/ingredient-details';

function App() {

  const [ingredients, setIngredients] = React.useState({
    ingredient: []
  })

  const [modal, setModal] = React.useState({
    type: '',
    isOpen: false,
    ingredient: []
  });

  const burgerIngredients = 'https://norma.nomoreparties.space/api/ingredients';

  const getIngredients = () => {
    return fetch(burgerIngredients)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(data => {
        setIngredients({ ...ingredients, ingredient: data.data })
      })
      .catch(e => {
        console.log(`Ошибка ${e.status}`);
      })
  }

  React.useEffect(() => {
    getIngredients();
  }, []);

  const app = (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredient={ingredients.ingredient} modal={modal} setModal={setModal} />
        <BurgerConstructor ingredient={ingredients.ingredient} modal={modal} setModal={setModal} />
      </main>
      <Modal modal={modal} setModal={setModal}>
        { modal.type === 'ingredientDetails' ? <IngredientDetails modal={modal}/> : <OrderDetails /> }
      </Modal>
    </>
  );

  return app;
}

export default App;
