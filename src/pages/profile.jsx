import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { editProfileInfoRequest, logoutRequest } from "../components/utils/api";
import { deleteCookie, getCookie } from "../components/utils/utils";
import { GET_USER_SUCCESS, USER_LOGOUT } from "../services/actions/auth";
import styles from './profile.module.css';


export default function ProfilePage() {
  const inputNameRef = useRef();

  const userData = useSelector(store => store.auth.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(true);

  const [value, setValue] = useState({
    name: userData.name,
    email: userData.email,
    password: ''
  })

  const onIconClickName = () => {
    setIsDisabled(false);
    setTimeout(() => inputNameRef.current.focus(), 0)
  }

  const onBlurName = () => {
    setIsDisabled(true);
  }

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const onClickLogoutButton = () => {
    logoutRequest(getCookie('token'))
      .then(() => {
        deleteCookie('token');
        dispatch({
          type: USER_LOGOUT
        })
        navigate('/login');
      })
  }

  const onClickSubmit = (e) => {
    e.preventDefault();

    editProfileInfoRequest(userData.accessToken, value)
      .then(data => {
        dispatch({
          type: GET_USER_SUCCESS,
          user: {
            ...userData.user,
            email: data.user.email,
            name: data.user.name
          }
        })
      })
  }

  const onReset = () => {
    setValue({
      email: userData.email,
      name: userData.name
    })
  }

  const buttons = (
    <>
      <Button htmlType="reset" type="secondary" size="medium" extraClass="mt-6" onClick={onReset}>Отмена</Button>
      <Button htmlType="submit" type="primary" size="medium" extraClass="mt-6" onClick={onClickSubmit}>Сохранить</Button>
    </>
  )
  return (
    <section className={styles.section}>
      <nav className={`${styles.navigation} mr-15`}>
        <ul className={styles.navigation_menu}>
          <li className={`${styles.navigation_item}`}>
            <Link className={`${styles.navigation_item_active} text text_type_main-medium`} to='/profile'>
              Профиль
            </Link>
          </li>
          <li className={`${styles.navigation_item} text text_type_main-medium text_color_inactive`}>
            <Link className={`${styles.navigation_item} text text_type_main-medium text_color_inactive`} to='orders'>
              История заказов
            </Link>
          </li>
          <li className={`${styles.navigation_item} text text_type_main-medium text_color_inactive`} >
            <button className={`${styles.logout_button} text text_type_main-medium text_color_inactive`} type='button' onClick={onClickLogoutButton}>
              Выход
            </button>
          </li>
        </ul>
        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <form className={styles.form}>
        <Input
          type="text"
          value={value.name}
          placeholder={'Имя'}
          icon={'EditIcon'}
          onIconClick={onIconClickName}
          disabled={isDisabled}
          onChange={onChange}
          onBlur={onBlurName}
          ref={inputNameRef}
          extraClass={'mb-6'}
          name={'name'}
        />
        <EmailInput
          value={value.email}
          placeholder={'Логин'}
          isIcon={true}
          onChange={onChange}
          extraClass={'mb-6'}
          name={'email'}
        />
        <PasswordInput
          value={value.password}
          onChange={onChange}
          icon={'EditIcon'}
          name={'password'}
        />
        { buttons }

      </form>
    </section>
  );
}