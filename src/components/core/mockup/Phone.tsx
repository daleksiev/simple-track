interface PhoneProps {
  children: React.ReactNode;
  className?: string;
}

export function Phone({ children, className = "" }: PhoneProps) {
  return (
    <div className={`mockup-phone border-primary ${className}`}>
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">{children}</div>
      </div>
    </div>
  );
}
