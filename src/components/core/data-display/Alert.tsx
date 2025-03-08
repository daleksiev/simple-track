interface AlertProps {
  type?: "info" | "success" | "warning" | "error";
  children: React.ReactNode;
  className?: string;
}

export function Alert({ type = "info", children, className = "" }: AlertProps) {
  return <div className={`alert alert-${type} ${className}`}>{children}</div>;
}
