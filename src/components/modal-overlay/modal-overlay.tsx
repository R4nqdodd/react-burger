import { FC } from 'react';
import styles from './modal-overlay.module.css';
import { useSelector } from '../../services/types/index';

type TModalOverlay = {
  children: JSX.Element;
  handleCloseModal: () => void;
}

export const ModalOverlay: FC<TModalOverlay> = ({ children, handleCloseModal }) => {

  const { isRequest, currentModal } = useSelector(store => store.modal);

  const openModal = isRequest || currentModal ? styles.modal_overlay_open : '';

  return (
    <div className={`${styles.modal_overlay} ${openModal}`} onClick={handleCloseModal}>
      {children}
    </div>
  );
}