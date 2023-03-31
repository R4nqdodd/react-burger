import { useState } from "react";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import styles from './form.module.css';
import { loginRequest } from "../components/utils/api";
import { USER_LOGIN } from "../services/actions/auth";
import { useDispatch } from "react-redux";
import { setCookie } from '../components/utils/utils';

export default function LoginPage() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loginData, setData] = useState({
    email: '',
    password: ''
  });

  const onChange = e => {
    setData({ ...loginData,
      [e.target.name]: e.target.value})
  }

  const onClickLogin = (e) => {
    e.preventDefault();

    loginRequest(loginData)
      .then(data => {
        dispatch({
          type: USER_LOGIN,
          email: data.user.email,
          name: data.user.name,
          accessToken: data.accessToken
        })

        setCookie('token', data.refreshToken)
        navigate('/')
      })
  }

  const regiterButtonHandle = () => {
    navigate('/register')
  }

  const forgotPasswordButtonHandle = () => {
    navigate('/forgot-password')
  }

  return (
    <form className={`${styles.form}`}>
      <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
      <EmailInput
        name={'email'}
        isIcon={false}
        extraClass={`mb-6`}
        value={loginData.email}
        onChange={onChange}
      />
      <PasswordInput
        extraClass={'mb-6'}
        value={loginData.password}
        onChange={onChange} 
        name={'password'}
        />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass="mb-20"
        onClick={onClickLogin}
        >
        Войти
      </Button>
      <p className="text text_type_main-default text_color_inactive">
        Вы - новый пользователь?
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={`${styles.secondary_button}`}
          onClick={regiterButtonHandle}>
          Зарегистрироваться
        </Button>
      </p>
      <p className="text text_type_main-default text_color_inactive mt-4">
        Забыли пароль?
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={`${styles.secondary_button}`}
          onClick={forgotPasswordButtonHandle}
          >
          Восстановить пароль
        </Button>
      </p>
    </form>
  );
}