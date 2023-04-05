import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import HomePage from '../../pages/home';
import AppHeader from '../app-header/app-header';
import IngredientsPage from '../../pages/ingredients';
import LoginPage from '../../pages/login';
import RegisterPage from '../../pages/register';
import ForgotPasswordPage from '../../pages/forgot-password';
import ResetPasswordPage from '../../pages/reset-password';
import ProfilePage from '../../pages/profile';
import { useEffect } from 'react';
import { getCookie } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../services/actions/auth';
import { ProtectedRouteElement } from '../protected-route';
import { Modal } from '../modal/modal';
import { getBurgerIngredients } from '../../services/actions/burger-ingredients';
import IngredientDetails from '../inngredient-details/ingredient-details';
import { DELETE_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT } from '../../services/constants/current-ingredient';
import { SET_MODAL } from '../../services/constants/modal';
import NotFoundPage from '../../pages/NotFound';
import { TModalStore } from '../../utils/types';

function App() {

  const { currentModal } = useSelector((store: TModalStore) => store.modal)
  const location = useLocation();
  const background = location.state && location.state.background;

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getUser(getCookie('token')));
    dispatch(getBurgerIngredients());
    if (location.state) {
      dispatch({
        type: SET_CURRENT_INGREDIENT,
        current: location.state.currentIngredient
      })
      dispatch({
        type: SET_MODAL,
        currentModal: <IngredientDetails ingredient={location.state.currentIngredient} />,
        resetActionType: DELETE_CURRENT_INGREDIENT
      })
    }
  }, [dispatch]);

  const app = (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<ProtectedRouteElement element={<LoginPage />} anonymous={true} />} />
        <Route path='/register' element={<ProtectedRouteElement element={<RegisterPage />} anonymous={true} />} />
        <Route path='/forgot-password' element={<ProtectedRouteElement element={<ForgotPasswordPage />} anonymous={true} />} />
        <Route path='/reset-password' element={<ProtectedRouteElement element={<ResetPasswordPage />} anonymous={true} />} />
        <Route path='/profile' element={<ProtectedRouteElement element={<ProfilePage />} />} />
        <Route path='/profile/orders' element={<ProtectedRouteElement element={<ProfilePage />} />} />
        <Route path='/profile/orders/:id' element={<ProtectedRouteElement element={<ProfilePage />} />} />
        <Route path='/feed' element={<HomePage />} />
        <Route path='/feed/:id' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/ingredients/:id' element={<IngredientsPage />} />
      </Routes>
      {background && <Routes>
        <Route path='/ingredients/:id' element={
          <Modal>
            {currentModal}
          </Modal>} />
      </Routes>}
    </>
  );

  return app;
}

export default App;