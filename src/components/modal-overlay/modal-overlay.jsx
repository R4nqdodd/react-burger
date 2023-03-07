import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styles from './modal-overlay.module.css';

export default function ModalOverlay ({ modal, children, handleCloseModal }) {

  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal((
    <div className={`${styles.modal_overlay} ${modal.isOpen && styles.modal_overlay_open}`} onClick={handleCloseModal}>
      {children}
    </div>
  ), modalRoot);
}

ModalOverlay.propTypes = {
  modal: PropTypes.object,
  setModal: PropTypes.func
}