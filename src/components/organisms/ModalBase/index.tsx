import { useRef } from 'react';
import useModalClickOutside from './hooks/useModalClickOutside';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
  className?: string;
};

const ModalBase: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  children,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalClickOutside(isOpen, setIsOpen, modalRef);

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 flex items-start justify-center p-8 z-50 overflow-y-auto ${className}`}
      >
        <div
          className="fixed inset-0 bg-black opacity-20"
          onClick={setIsOpen}
        ></div>
        <div
          ref={modalRef}
          className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full"
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalBase;
