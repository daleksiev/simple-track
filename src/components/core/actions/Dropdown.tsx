"use client";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Dropdown({ trigger, children, className = "" }: DropdownProps) {
  return (
    <div className={`dropdown ${className}`}>
      <div tabIndex={0} role="button" className="m-1">
        {trigger}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
      >
        {children}
      </ul>
    </div>
  );
}
