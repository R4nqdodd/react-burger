import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRouteElement = ({ element, isneedAuth }) => {

  const userData = useSelector(store => store.auth);

  if (isneedAuth) {
    if (!userData.isAuth) {
      return <h1 className="text text_type_main-large">Загрузка...</h1>;
    }

    if (userData.user) {
      return element;
    } else {
      return <Navigate to='/login' />;
    }

  } else {
    if (!userData.isAuth) {
      return <h1 className="text text_type_main-large">Загрузка...</h1>;
    }

    if (userData.user) {
      return <Navigate to='/' />;
    } else {
      return element;
    }
  }
}