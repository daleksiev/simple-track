interface BadgeProps {
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = "primary",
  size = "md",
  children,
  className = "",
}: BadgeProps) {
  const sizeClass =
    size === "sm" ? "badge-sm" : size === "lg" ? "badge-lg" : "";

  return (
    <div className={`badge badge-${variant} ${sizeClass} ${className}`}>
      {children}
    </div>
  );
}
