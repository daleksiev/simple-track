"use client";

interface SwapProps {
  onElement: React.ReactNode;
  offElement: React.ReactNode;
  active?: boolean;
  onChange?: (active: boolean) => void;
  className?: string;
}

export function Swap({
  onElement,
  offElement,
  active = false,
  onChange,
  className = "",
}: SwapProps) {
  return (
    <label className={`swap ${active ? "swap-active" : ""} ${className}`}>
      <input
        type="checkbox"
        checked={active}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <div className="swap-on">{onElement}</div>
      <div className="swap-off">{offElement}</div>
    </label>
  );
}
