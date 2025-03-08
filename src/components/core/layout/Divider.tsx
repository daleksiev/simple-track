interface DividerProps {
  text?: string;
  vertical?: boolean;
  className?: string;
}

export function Divider({
  text,
  vertical = false,
  className = "",
}: DividerProps) {
  return (
    <div
      className={`divider ${vertical ? "divider-vertical" : ""} ${className}`}
    >
      {text}
    </div>
  );
}
