import { useState } from 'react';
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import styles from './form.module.css';
import { registrationRequest, request } from '../components/utils/api';
import { useDispatch } from 'react-redux';
import { USER_LOGIN } from '../services/actions/auth';
import { setCookie } from '../components/utils/utils';

export default function RegisterPage() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [registrationData, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setData({
      ...registrationData,
      [e.target.name]: e.target.value
    });
  }

  const onClickLoginButton = () => {
    navigate('/login');
  }

  const onSubmitRegister = (e) => {
    e.preventDefault();

    registrationRequest(registrationData)
      .then((data) => {
        dispatch({
          type: USER_LOGIN,
          email: data.user.email,
          name: data.user.name,
          accessToken: data.accessToken
        });
        setCookie('token', data.refreshToken);
        navigate('/');
      });
  }

  return (
    <form className={`${styles.form}`}>
      <h2 className={`text text_type_main-medium mb-6`}>Регистрация</h2>
      <Input
        type="text"
        placeholder="Имя"
        extraClass="mb-6"
        onChange={onChange}
        value={registrationData.name}
        name={'name'}
      />
      <EmailInput
        name={'email'}
        isIcon={false}
        extraClass="mb-6"
        onChange={onChange}
        value={registrationData.email}
      />
      <PasswordInput
        extraClass={'mb-6'}
        onChange={onChange}
        value={registrationData.password}
        name={'password'}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass="mb-20"
        onClick={onSubmitRegister}
      >
        Зарегистрироваться
      </Button>
      <p className="text text_type_main-default text_color_inactive">
        Уже зарегистрированы?
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={`${styles.secondary_button}`}
          onClick={onClickLoginButton}
        >
          Войти
        </Button>
      </p>
    </form>
  );
}