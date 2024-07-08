import { useRef } from 'react';
import useModalClickOutside from './hooks/useModalClickOutside';
import useScrollLock from './hooks/useScrollLockOutside';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
};

const ModalBase: React.FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useScrollLock(isOpen);
  useModalClickOutside(isOpen, setIsOpen, modalRef);

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 flex items-start justify-center overflow-y-auto`}
      >
        <div
          className="fixed inset-0 bg-black opacity-20"
          onClick={setIsOpen}
        ></div>
        <div
          ref={modalRef}
          className={`relative bg-white p-6 m-8 rounded-lg shadow-lg w-full max-w-3xl`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalBase;
