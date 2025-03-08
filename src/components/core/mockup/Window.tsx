interface WindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Window({ title, children, className = "" }: WindowProps) {
  return (
    <div className={`mockup-window border bg-base-300 ${className}`}>
      {title && (
        <div className="px-4 py-2 bg-base-200 text-base-content">{title}</div>
      )}
      <div className="px-4 py-16 bg-base-200">{children}</div>
    </div>
  );
}
