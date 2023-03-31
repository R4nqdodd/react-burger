import { useState } from 'react';
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './form.module.css';
import { request, resetPasswordRequest } from '../components/utils/api';
import { useNavigate } from 'react-router-dom';

export default function ResetPasswordPage() {

  const navigate = useNavigate();

  const [value, setValue] = useState({
    password: '',
    token: ''
  });

  const onChangePassword = (e) => {
    setValue({
      ...value,
      password: e.target.value
    })
  }

  const onChangeToken = (e) => {
    setValue({
      ...value,
      token: e.target.value
    })
  }

  const onClickSubmit = (e) => {
    e.preventDefault();

    resetPasswordRequest(value)
      .then(() => {
        navigate('/login');
      })
  }

  return (
    <form className={`${styles.form}`}>
      <h2 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h2>
      <PasswordInput placeholder="Введите новый пароль" extraClass={'mb-6'} onChange={onChangePassword} value={value.password} />
      <Input
        type="text"
        placeholder="Введите код из письма"
        extraClass="mb-6"
        onChange={onChangeToken} 
        value={value.token}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass="mb-20"
        onClick={onClickSubmit}
        >
        Сохранить
      </Button>
      <p className="text text_type_main-default text_color_inactive">
        Вспомнили пароль?
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={`${styles.secondary_button}`}>
          Войти
        </Button>
      </p>
    </form>
  );
}