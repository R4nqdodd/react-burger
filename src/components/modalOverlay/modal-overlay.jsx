import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './modal-overlay.module.css';

import Modal from '../modal/modal';

export default function ModalOverlay () {

  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal((
    <div className={styles.modal_overlay}>
      <Modal />
    </div>
  ), modalRoot);
}