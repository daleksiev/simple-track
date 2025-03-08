interface IndicatorProps {
  children: React.ReactNode;
  badge?: React.ReactNode;
  position?: "top" | "bottom" | "start" | "end";
  className?: string;
}

export function Indicator({
  children,
  badge,
  position = "top",
  className = "",
}: IndicatorProps) {
  return (
    <div className={`indicator ${className}`}>
      <span
        className={`indicator-item indicator-${position} badge badge-primary`}
      >
        {badge}
      </span>
      {children}
    </div>
  );
}
