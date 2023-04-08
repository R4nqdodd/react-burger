import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useRef, useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { editProfileInfoRequest, logoutRequest } from "../utils/api";
import { deleteCookie, getCookie } from "../utils/utils";
import { USER_LOGIN, USER_LOGOUT } from "../services/constants/auth";
import styles from './profile.module.css';
import { useForm } from "../hooks/use-form";

import { TUserData, TUser } from "../utils/types";

export default function ProfilePage() {
  const inputNameRef = useRef<any>();

  const { pathname } = useLocation();

  const userData = useSelector((store: TUserData<TUser>) => store.auth.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(true);

  const { values, handleChange, setValues } = useForm({
    name: userData.name,
    email: userData.email,
    password: ''
  });

  const onIconClickName = () => {
    setIsDisabled(false);
    setTimeout(() => inputNameRef.current.focus(), 0);
  }

  const onBlurName = () => {
    setIsDisabled(true);
  }

  const onClickLogoutButton = () => {
    logoutRequest(getCookie('token'))
      .then(() => {
        deleteCookie('token');
        dispatch({
          type: USER_LOGOUT
        });
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onClickSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editProfileInfoRequest(userData.accessToken, values)
      .then(data => {
        dispatch({
          type: USER_LOGIN,
          user: {
            ...userData,
            email: data.user.email,
            name: data.user.name
          }
        });
      });
  };

  const onReset = () => {
    setValues({
      email: userData.email,
      name: userData.name,
      password: ''
    });
  };

  const onClickProfileButton = () => {
    navigate('/profile');
  };

  const onClickOrdersButton = () => {
    navigate('/profile/orders');
  };

  const buttons = (
    <>
      <Button htmlType="reset" type="secondary" size="medium" extraClass="mt-6">Отмена</Button>
      <Button htmlType="submit" type="primary" size="medium" extraClass="mt-6">Сохранить</Button>
    </>
  );

  return (
    <section className={styles.section}>
      <nav className={`${styles.navigation} mr-15`}>
        <ul className={styles.navigation_menu}>
          <li className={`${styles.navigation_item}`}>
            <button className={`${styles.navigation_item} ${pathname === '/profile' && styles.active} text text_type_main-medium text_color_inactive`} type='button' onClick={onClickProfileButton}>
              Профиль
            </button>
          </li>
          <li className={`${styles.navigation_item}`}>
            <button className={`${styles.navigation_item} ${pathname === '/profile/orders' && styles.active} text text_type_main-medium text_color_inactive`} type='button' onClick={onClickOrdersButton}>
              История заказов
            </button>
          </li>
          <li className={`${styles.navigation_item} text text_type_main-medium text_color_inactive`} >
            <button className={`${styles.navigation_item} text text_type_main-medium text_color_inactive`} type='button' onClick={onClickLogoutButton}>
              Выход
            </button>
          </li>
        </ul>
        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      {pathname === '/profile'
        ?
        <form className={styles.form} onSubmit={onClickSubmit} onReset={onReset}>
          <Input
            type="text"
            value={values.name}
            placeholder={'Имя'}
            icon={'EditIcon'}
            onIconClick={onIconClickName}
            disabled={isDisabled}
            onChange={handleChange}
            onBlur={onBlurName}
            ref={inputNameRef}
            extraClass={'mb-6'}
            name={'name'}
          />
          <EmailInput
            value={values.email}
            placeholder={'Логин'}
            isIcon={true}
            onChange={handleChange}
            extraClass={'mb-6'}
            name={'email'}
          />
          <PasswordInput
            value={values.password}
            onChange={handleChange}
            icon={'EditIcon'}
            name={'password'}
          />
          {buttons}

        </form>
        :
        <div className={styles.outlet_container}>
          <Outlet />
        </div>
      }
    </section>
  );
}