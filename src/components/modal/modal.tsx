import React, { useEffect, FC, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from '../../services/types/index';
import styles from './modal.module.css';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { RESET_MODAL } from '../../services/constants/modal';
import { useLocation, useNavigate } from 'react-router-dom';

type TModal = {
  children: JSX.Element | null;
}

export const Modal: FC<TModal> = ({ children }) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  const { isRequest, isFailed } = useSelector(store => store.modal);

  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleStopPropagation(e: MouseEvent<Element, Event>) {
    console.log(e)
    e.stopPropagation();
  }

  function handleCloseModal() {
    dispatch({
      type: RESET_MODAL
    })
    if (location.state) {
      navigate(location.state.background.pathname);
    }
  }

  const modalLoading = () => {
    if (isRequest) {
      return (<div className={styles.modal}> <p className="text text_type_main-large">Загрузка...</p> </div>)
    } else if (isFailed) {
      return (<div className={styles.modal}> <p className="text text_type_main-large">Ошибка!!!</p> </div>)
    } else {
      return (
        <div className={styles.modal} onClick={handleStopPropagation}>
          {children}
          <button type='button' aria-label='закрыть' className={`${styles.close_button} mt-15 mr-10`}>
            <CloseIcon type="primary" onClick={handleCloseModal} />
          </button>
        </div>
      )
    }
  }


  useEffect(() => {
    function handleCloseESC(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    }
    document.addEventListener('keydown', handleCloseESC);

    return () => document.removeEventListener('keydown', handleCloseESC);
  }, [])

  return ReactDOM.createPortal((
    <ModalOverlay handleCloseModal={handleCloseModal} >
      {modalLoading()}
    </ModalOverlay>
  ), modalRoot);
}