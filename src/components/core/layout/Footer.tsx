interface FooterProps {
  children: React.ReactNode;
  className?: string;
}

export function Footer({ children, className = "" }: FooterProps) {
  return (
    <footer
      className={`footer p-10 bg-base-200 text-base-content ${className}`}
    >
      {children}
    </footer>
  );
}

Footer.Column = function FooterColumn({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <span className="footer-title">{title}</span>
      {children}
    </div>
  );
};
