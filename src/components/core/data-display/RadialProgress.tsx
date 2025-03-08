import { CSSProperties } from "react";

interface RadialProgressProps {
  value: number;
  size?: string;
  thickness?: string;
  color?: string;
  className?: string;
}

export function RadialProgress({
  value,
  size = "4rem",
  thickness = "4px",
  color = "primary",
  className = "",
}: RadialProgressProps) {
  const style = {
    "--value": value,
    "--size": size,
    "--thickness": thickness,
  } as CSSProperties;

  return (
    <div className={`radial-progress text-${color} ${className}`} style={style}>
      {value}%
    </div>
  );
}
