import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../../pages/home';
import AppHeader from '../app-header/app-header';
import IngredientsPage from '../../pages/ingredients';
import LoginPage from '../../pages/login';
import RegisterPage from '../../pages/register';
import ForgotPasswordPage from '../../pages/forgot-password';
import ResetPasswordPage from '../../pages/reset-password';
import ProfilePage from '../../pages/profile';
import { useEffect } from 'react';
import { getProfileInfoRequest } from '../utils/api';
import { getCookie } from '../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../services/actions/auth';
import { ProtectedRouteElement } from '../protected-route';
import Modal from '../modal/modal';
import { getBurgerIngredients } from '../../services/actions/burger-ingredients';

function App() {

  const userData = useSelector(store => store.auth);
  const { currentModal } = useSelector(store => store.modal);
  const location = useLocation();
  //console.log(location);
  const background = location.state && location.state.background;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(getCookie('token')));
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  const app = (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<ProtectedRouteElement element={<LoginPage />} isneedAuth={false} />} />
        <Route path='/register' element={<ProtectedRouteElement element={<RegisterPage />} isneedAuth={false} />} />
        <Route path='/forgot-password' element={<ProtectedRouteElement element={<ForgotPasswordPage />} isneedAuth={false} />} />
        <Route path='/reset-password' element={<ProtectedRouteElement element={<ResetPasswordPage />} isneedAuth={false} />} />
        <Route path='/profile' element={<ProtectedRouteElement element={<ProfilePage />} isneedAuth={true} />} />
        <Route path='/profile/orders' element={<ProtectedRouteElement element={<ProfilePage />} isneedAuth={true} />} />
        <Route path='/profile/orders/:id' element={<ProtectedRouteElement element={<ProfilePage />} isneedAuth={true} />} />
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