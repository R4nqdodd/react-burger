import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { CLOSE_MODAL } from '../../services/actions/modal';
import { DELETE_CURRENT_INGREDIENT } from '../../services/actions/current-ingredient';

export default function Modal({ children }) {
  const modalRoot = document.getElementById("modal-root");

  const { ingredientsRequset, ingredientsFailed } = useSelector(store => store.burgerIngredients)
  const { orderRequest, orderFailed } = useSelector(store => store.order);

  const dispatch = useDispatch();

  function handleStopPropagation(e) {
    e.stopPropagation();
  }

  function handleCloseModal() {
    dispatch({
      type: CLOSE_MODAL,
    })
    dispatch({
      type: DELETE_CURRENT_INGREDIENT
    })
  }

  useEffect(() => {
    function handleCloseESC(e) {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    }
    document.addEventListener('keydown', handleCloseESC);

    return () => document.removeEventListener('keydown', handleCloseESC);
  }, [])

  return ReactDOM.createPortal((
    <ModalOverlay handleCloseModal={handleCloseModal} >
      {ingredientsRequset || orderRequest
      ? <div className={styles.modal}> <p className="text text_type_main-large">Загрузка...</p> </div>
      : ingredientsFailed || orderFailed 
      ? <div className={styles.modal}> <p className="text text_type_main-large">ОШИБКА!!!</p> </div>
      :
        <div className={styles.modal} onClick={handleStopPropagation}>
          {children}
          <button type='button' aria-label='закрыть' className={`${styles.close_button} mt-15 mr-10`}>
            <CloseIcon type="primary" onClick={handleCloseModal} />
          </button>
        </div>
        }
    </ModalOverlay>
  ), modalRoot);
}

Modal.propTypes = {
  children: PropTypes.element,
}