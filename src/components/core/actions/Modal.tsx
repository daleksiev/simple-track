"use client";

import { useCallback, useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  className = "",
}: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
    onClose();
  }, [onClose]);

  if (!isModalOpen) return null;

  return (
    <dialog className={`modal modal-open ${className}`}>
      <div className="modal-box">
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        {children}
        <div className="modal-action">
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={handleClose} />
    </dialog>
  );
}
