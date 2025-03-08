"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "info" | "success" | "warning" | "error";
  duration?: number;
  onClose?: () => void;
  className?: string;
}

export function Toast({
  message,
  type = "info",
  duration = 3000,
  onClose,
  className = "",
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`toast toast-end ${className}`}>
      <div className={`alert alert-${type}`}>
        <span>{message}</span>
      </div>
    </div>
  );
}
