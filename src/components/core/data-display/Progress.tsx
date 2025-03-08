interface ProgressProps {
  value: number;
  max?: number;
  color?: "primary" | "secondary" | "accent" | "success" | "warning" | "error";
  className?: string;
}

export function Progress({
  value,
  max = 100,
  color = "primary",
  className = "",
}: ProgressProps) {
  return (
    <progress
      className={`progress progress-${color} ${className}`}
      value={value}
      max={max}
    />
  );
}
