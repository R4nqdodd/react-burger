import { FormEvent } from 'react';
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate, useLocation } from "react-router-dom";
import styles from './form.module.css';
import { useForm } from '../hooks/use-form';
import { getRegister } from '../services/actions/auth';
import { useDispatch, useSelector } from '../services/types';

export default function RegisterPage() {

  const location = useLocation();
  const userData = useSelector(store => store.auth);

  let pathname: string;

  if (location.state) {
    pathname = location.state.from.pathname
  } else {
    pathname = '/'
  }

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { values, handleChange } = useForm({
    name: '',
    email: '',
    password: ''
  })

  const onClickLoginButton = () => {
    navigate('/login');
  }

  const onSubmitRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(getRegister(values));
    if (userData.isLogin) {
      navigate(pathname);
    }
  }

  return (
    <form className={`${styles.form}`} onSubmit={onSubmitRegister}>
      <h2 className={`text text_type_main-medium mb-6`}>Регистрация</h2>
      <Input
        type="text"
        placeholder="Имя"
        extraClass="mb-6"
        onChange={handleChange}
        value={values.name}
        name={'name'}
      />
      <EmailInput
        name={'email'}
        isIcon={false}
        extraClass="mb-6"
        onChange={handleChange}
        value={values.email}
      />
      <PasswordInput
        extraClass={'mb-6'}
        onChange={handleChange}
        value={values.password}
        name={'password'}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass="mb-20"
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