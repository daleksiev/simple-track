"use client";
import { useState } from "react";
interface CollapseProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Collapse({
  title,
  children,
  defaultOpen = false,
  className = "",
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`collapse bg-base-200 ${className}`}>
      <input
        type="checkbox"
        checked={isOpen}
        onChange={(e) => setIsOpen(e.target.checked)}
      />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">{children}</div>
    </div>
  );
}
