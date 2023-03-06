import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal-overlay.module.css';

import OrderDetails from '../orderDetails/order-details';
import IngredientDetails from '../inngredientDetails/ingredient-details';

import Modal from '../modal/modal';

export default function ModalOverlay ({ modal, setModal }) {

  const modalRoot = document.getElementById("modal-root");
  
  function handleCloseModal (e) {
    setModal({
      ...modal,
      isOpen: false
    })
  }

  return ReactDOM.createPortal((
    <div className={`${styles.modal_overlay} ${modal.isOpen && styles.modal_overlay_open}`} onClick={handleCloseModal}>
      <Modal modal={modal} setModal={setModal} handleCloseModal={handleCloseModal}>
        { modal.type === 'ingredientDetails' ? <IngredientDetails modal={modal}/> : <OrderDetails /> }
      </Modal>
    </div>
  ), modalRoot);
}