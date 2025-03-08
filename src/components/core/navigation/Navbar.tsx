interface NavbarProps {
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
  className?: string;
}

export function Navbar({ start, center, end, className = "" }: NavbarProps) {
  return (
    <div className={`navbar bg-base-200 ${className}`}>
      {start && <div className="navbar-start">{start}</div>}
      {center && <div className="navbar-center">{center}</div>}
      {end && <div className="navbar-end">{end}</div>}
    </div>
  );
}
