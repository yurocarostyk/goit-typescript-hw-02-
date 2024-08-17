declare module 'react-modal' {
    import { ComponentType, ReactNode } from 'react';
  
    interface ModalProps {
      isOpen?: boolean;
      onRequestClose?: () => void;
      contentLabel?: string;
      className?: string;
      overlayClassName?: string;
      shouldCloseOnOverlayClick?: boolean;
      shouldCloseOnEsc?: boolean;
      children?: ReactNode; // Додаємо children тут
    }
  
    const Modal: ComponentType<ModalProps> & {
      setAppElement: (element: string) => void;
    };
  
    export default Modal;
  }
  