// components/Modal.tsx
import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-30">
      <div className="absolute inset-0  opacity-50"></div>
      <div className="relative z-20 bg-white p-4 rounded-md">
        <div className='mb-5'>
            <button className="absolute top-2 right-2 bg-red-500 text-white px-2" onClick={onClose}>x</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
