import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styles from './modal-overlay.module.css';
import { useSelector } from 'react-redux';

export default function ModalOverlay ({ children, handleCloseModal }) {

  const modal = useSelector(store => store.modal);

  return (
    <div className={`${styles.modal_overlay} ${modal.isOpen && styles.modal_overlay_open}`} onClick={handleCloseModal}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.element,
  handleCloseModal: PropTypes.func
}