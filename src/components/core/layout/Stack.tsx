interface StackProps {
  children: React.ReactNode;
  spacing?: number;
  className?: string;
}

export function Stack({ children, spacing = 4, className = "" }: StackProps) {
  return (
    <div className={`flex flex-col space-y-${spacing} ${className}`}>
      {children}
    </div>
  );
}
