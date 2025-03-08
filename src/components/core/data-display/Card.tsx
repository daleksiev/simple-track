interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`card bg-base-200 shadow-lg ${className}`}>{children}</div>
  );
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

Card.Body = function CardBody({ children, className = "" }: CardBodyProps) {
  return <div className={`card-body p-6 ${className}`}>{children}</div>;
};

Card.Title = function CardTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h3 className={`card-title ${className}`}>{children}</h3>;
};
