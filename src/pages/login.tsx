import { FormEvent } from "react";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, useNavigate } from "react-router-dom";
import styles from './form.module.css';
<<<<<<< HEAD
import { loginRequest } from "../utils/api";
import { USER_LOGIN } from "../services/constants/auth";
import { useDispatch } from "react-redux";
import { setCookie } from '../utils/utils';
=======
import { useDispatch, useSelector } from '../services/types/index';
>>>>>>> sprint-17
import { useForm } from "../hooks/use-form";
import { getLogin } from "../services/actions/auth";

export default function LoginPage() {

  const location = useLocation();

  const userData = useSelector(store => store.auth);

  const { values, handleChange } = useForm({
    email: '',
    password: ''
  });

  let pathname: string;

  if (location.state) {
    pathname = location.state.from.pathname
  } else {
    pathname = '/'
  }

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onClickLogin = (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    dispatch(getLogin(values));
    if (userData.isLogin) {
      navigate(pathname);
    }
  }

  const regiterButtonHandle = () => {
    navigate('/register')
  }

  const forgotPasswordButtonHandle = () => {
    navigate('/forgot-password')
  }

  return (
    <form className={`${styles.form}`} onSubmit={onClickLogin}>
      <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
      <EmailInput
        name={'email'}
        isIcon={false}
        extraClass={`mb-6`}
        value={values.email}
        onChange={handleChange}
      />
      <PasswordInput
        extraClass={'mb-6'}
        value={values.password}
        onChange={handleChange}
        name={'password'}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass="mb-20"
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