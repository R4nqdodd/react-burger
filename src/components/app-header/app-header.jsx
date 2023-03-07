import React from 'react';
import styles from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          <li className={styles.menu_bar}>
            <a className={`${styles.menu_item} pl-5 pr-5 pt-4 pb-4 mr-2`} href='#'>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default pl-2">
                Конструктор
              </p>
            </a>
            <a className={`${styles.menu_item} pr-5 pl-5 pt-4 pb-4`} href='#'>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default pl-2 text_color_inactive">
                Лента заказов
              </p>
            </a>

          </li>
          <li className={styles.logo}>
            <a href='#'>
              <Logo />
            </a>
          </li>
          <li>
            <a className={`${styles.personal_account_login} pr-5 pl-5 pt-4 pb-4`} href='#'>
              <ProfileIcon type="secondary" />
              <p className="text text_type_main-default pl-2 text_color_inactive">
                Личный кабинет
              </p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}