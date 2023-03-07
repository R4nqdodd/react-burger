import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

export default function Modal({ children, modal, setModal }) {

  function handleStopPropagation(e) {
    e.stopPropagation();
  }

  function handleCloseModal() {
    setModal({
      ...modal,
      isOpen: false,
    })
  }

  useEffect(() => {
    function handleCloseESC (e) {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    }
    document.addEventListener('keydown', handleCloseESC);

      return () => document.removeEventListener('keydown', handleCloseESC);
  }, [])

  return (
    <ModalOverlay modal={modal} handleCloseModal={handleCloseModal} >
      <div className={styles.modal} onClick={handleStopPropagation}>
        {children}
        <button type='button' aria-label='закрыть' className={`${styles.close_button} mt-15 mr-10`}>
          <CloseIcon type="primary" onClick={handleCloseModal} />
        </button>
      </div>
    </ModalOverlay>
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  handleCloseModal: PropTypes.func
}