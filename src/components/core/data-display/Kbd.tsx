interface KbdProps {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

export function Kbd({ children, size = "md", className = "" }: KbdProps) {
  const sizeClass = size !== "md" ? `kbd-${size}` : "";

  return <kbd className={`kbd ${sizeClass} ${className}`}>{children}</kbd>;
}
