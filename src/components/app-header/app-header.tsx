import { Link, useLocation, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const onClickConstructor = () => {
    navigate('/');
  }

  const onClickFeed = () => {
    navigate('/feed');
  }

  const onClickProfileInformation = () => {
    navigate('/profile');
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          <li className={styles.menu_bar}>
            <button className={`${styles.menu_item} pl-5 pr-5 pt-4 pb-4 mr-2`} onClick={onClickConstructor}>
              <BurgerIcon type={pathname === '/' ? 'primary' : 'secondary'} />
              <p className={`${pathname !== '/' && 'text_color_inactive'} text text_type_main-default pl-2`}>
                Конструктор
              </p>
            </button>
            <button className={`${styles.menu_item} pr-5 pl-5 pt-4 pb-4`} onClick={onClickFeed}>
              <ListIcon type={pathname === '/feed' ? 'primary' : 'secondary'}  />
              <p className={`${pathname !== '/feed' && 'text_color_inactive'} text text_type_main-default pl-2`}>
                Лента заказов
              </p>
            </button>
          </li>
          <li className={styles.logo}>
            <Link to='/'>
              <Logo />
            </Link>
          </li>
          <li>
            <button className={`${styles.personal_account_login} pr-5 pl-5 pt-4 pb-4`} onClick={onClickProfileInformation}>
              <ProfileIcon type={pathname === '/profile' || pathname === '/profile/orders' ? 'primary' : 'secondary'}  />
              <p className={`${pathname === '/profile' || pathname === '/profile/orders' ? '' : 'text_color_inactive'} text text_type_main-default pl-2`}>
                Личный кабинет
              </p>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}