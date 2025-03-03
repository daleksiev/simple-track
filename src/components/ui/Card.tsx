import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`card bg-base-200 shadow-lg ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

Card.Header = function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`card-header p-6 ${className}`}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

Card.Body = function CardBody({ children, className = "" }: CardBodyProps) {
  return (
    <div className={`card-body p-6 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

Card.Footer = function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`card-footer p-6 border-t border-base-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card; 