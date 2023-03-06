import React from 'react';
import './App.css';
import AppHeader from './appHeader/app-header';
import BurgerIngredients from './burgerIngredients/burger-ingredients';
import BurgerConstructor from './burgerConstructor/burger-constructor';
import ModalOverlay from './modalOverlay/modal-overlay';

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
      <main className='main'>
        <BurgerIngredients ingredient={ingredients.ingredient} modal={modal} setModal={setModal} />
        <BurgerConstructor ingredient={ingredients.ingredient} modal={modal} setModal={setModal} />
      </main>
      <ModalOverlay modal={modal} setModal={setModal} />
    </>
  );

  return app;
}

export default App;
