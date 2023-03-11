import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';
import { useSelector } from 'react-redux';

export default function ModalOverlay ({ children, handleCloseModal }) {

  const { ingredientsRequest } = useSelector(store => store.burgerIngredients);
  const currentIngredient = useSelector(store => store.currentIngredient.current);
  const { orderRequest, order } = useSelector(store => store.order);

  const openModal = () => {
     if (currentIngredient || order.number || orderRequest) {
      return styles.modal_overlay_open;
    } else {
      return '';
    }
  }

  return (
    <div className={`${styles.modal_overlay} ${openModal()}`} onClick={handleCloseModal}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.element,
  handleCloseModal: PropTypes.func
}