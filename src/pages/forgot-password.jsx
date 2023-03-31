import { useState } from 'react';
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './form.module.css';
import { request } from '../components/utils/api';
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setValue(e.target.value);
  }

  const onClickResetPassword = (e) => {
    e.preventDefault();

    request('/password-reset', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: value
      })
    })
    .then(() => {
      navigate('/reset-password')
    })
  }

  return (
    <form className={`${styles.form}`}>
      <h2 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h2>
      <EmailInput
        name={'email'}
        isIcon={false}
        extraClass="mb-6"
        placeholder="Укажите e-mail"
        onChange={onChangeEmail}
        value={value}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass="mb-20"
        onClick={onClickResetPassword}
        >
        Восстановить
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