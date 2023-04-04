import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { TUserData } from '../utils/types';

type TProtectedRouteElement = {
  element: JSX.Element;
  anonymous?: boolean;
}

export const ProtectedRouteElement: FC<TProtectedRouteElement> = ({ element, anonymous = false }) => {

  const userData = useSelector((store: TUserData) => store.auth);

  const location = useLocation();
  const from = location.state?.from || '/';

  if (!userData.isAuth) {
    return <h1 className="text text_type_main-large">Загрузка...</h1>;
  }

  if (anonymous && userData.user) {
    return <Navigate to={from} />;
  }


  if (!anonymous && !userData.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
}