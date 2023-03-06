import React, { useEffect } from 'react';
import styles from './modal.module.css';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

export default function Modal ({children, handleCloseModal}) {

  function handleStopPropagation (e) {
    e.stopPropagation();
  }

  function handleCloseESC (e) {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCloseESC);

      return () => document.removeEventListener('keydown', handleCloseESC);
  }, [])

  return(
    <div className={styles.modal} onClick={handleStopPropagation}>
      {children}
      <button type='button' aria-label='закрыть' className={`${styles.close_button} mt-15 mr-10`}>
        <CloseIcon type="primary" onClick={handleCloseModal}/>
      </button>
    </div>
  );
}