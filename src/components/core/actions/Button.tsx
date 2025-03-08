"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "error"
    | "success"
    | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass = "btn";
  const variantClass = variant !== "outline" ? `btn-${variant}` : "btn-outline";
  const sizeClass = size !== "md" ? `btn-${size}` : "";
  const shadowClass = ["secondary", "accent"].includes(variant)
    ? "shadow-sm shadow-indigo-600"
    : "";

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${shadowClass} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
}
