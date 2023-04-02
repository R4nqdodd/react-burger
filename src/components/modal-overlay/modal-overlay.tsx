import React, {FC} from 'react';
import styles from './modal-overlay.module.css';
import { useSelector } from 'react-redux';

type TModalStore = {
  modal: {
    isRequest: boolean;
    isFailed: boolean;
    currentModal: JSX.Element | null;
    resetActionType: string;
  }
}

type TModalOverlay = {
  children: JSX.Element;
  handleCloseModal: () => void;
}

export const ModalOverlay: FC<TModalOverlay> = ({ children, handleCloseModal }) => {

  const { isRequest, currentModal } = useSelector((store: TModalStore) => store.modal);

  const openModal = () => {
     if (isRequest || currentModal) {
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