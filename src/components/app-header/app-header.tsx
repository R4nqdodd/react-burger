import { Link } from 'react-router-dom';
import styles from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

import { TUserData, TUser } from '../../utils/types';

export default function AppHeader() {

  const userData = useSelector((store: TUserData<TUser>) => store.auth);

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          <li className={styles.menu_bar}>
            <Link to='/' className={`${styles.menu_item} pl-5 pr-5 pt-4 pb-4 mr-2`}  >
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default pl-2">
                Конструктор
              </p>
            </Link>
            <a className={`${styles.menu_item} pr-5 pl-5 pt-4 pb-4`} href='#'>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default pl-2 text_color_inactive">
                Лента заказов
              </p>
            </a>

          </li>
          <li className={styles.logo}>
            <Link to='/'>
              <Logo />
            </Link>
          </li>
          <li>
            <Link to={'/profile'} className={`${styles.personal_account_login} pr-5 pl-5 pt-4 pb-4`}>
              <ProfileIcon type="secondary" />
              <p className="text text_type_main-default pl-2 text_color_inactive">
                Личный кабинет
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}