import React from 'react';
import './App.css';
import AppHeader from './appHeader/app-header';
import BurgerIngredients from './burgerIngredients/burger-ingredients';
import BurgerConstructor from './burgerConstructor/burger-constructor';
import Modal from './modal/modal';
import ModalOverlay from './modalOverlay/modal-overlay';

function App() {

  const [ingredients, setIngredients] = React.useState({
    ingredient: []
  })

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
  }

  React.useEffect(() => {
    getIngredients();
  }, [])

  
  console.log(ingredients.ingredient);

  const app = (
    <>
      <AppHeader />
      <main className='main'>
        <BurgerIngredients ingredient={ingredients.ingredient} />
        <BurgerConstructor ingredient={ingredients.ingredient} />
      </main>
      <ModalOverlay />
    </>
  );

  return app;
}

export default App;
