import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {  useSelector } from '../services/types/index';

import { TUserData, TUser } from '../utils/types';

type TProtectedRouteElement = {
  element: JSX.Element;
  anonymous?: boolean;
}

export const ProtectedRouteElement: FC<TProtectedRouteElement> = ({ element, anonymous = false }) => {

<<<<<<< HEAD
  const userData = useSelector((store: TUserData<TUser>) => store.auth);
=======
  const userData = useSelector(store => store.auth);
>>>>>>> sprint-17

  const location = useLocation();
  const from = location.state?.from || '/';

  if (!userData.isAuth) {
    return <h1 className="text text_type_main-large">Загрузка...</h1>;
  }

  if (anonymous && userData.isLogin) {
    return <Navigate to={from} />;
  }


  if (!anonymous && !userData.isLogin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
}