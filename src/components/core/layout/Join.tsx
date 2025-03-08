interface JoinProps {
  children: React.ReactNode;
  vertical?: boolean;
  className?: string;
}

export function Join({
  children,
  vertical = false,
  className = "",
}: JoinProps) {
  return (
    <div className={`join ${vertical ? "join-vertical" : ""} ${className}`}>
      {children}
    </div>
  );
}
