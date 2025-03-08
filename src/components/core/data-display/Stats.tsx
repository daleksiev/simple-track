interface StatProps {
  title: string;
  value: string | number;
  desc?: string;
  icon?: React.ReactNode;
  className?: string;
}

interface StatsProps {
  children: React.ReactNode;
  className?: string;
}

export function Stats({ children, className = "" }: StatsProps) {
  return <div className={`stats shadow ${className}`}>{children}</div>;
}

Stats.Stat = function Stat({
  title,
  value,
  desc,
  icon,
  className = "",
}: StatProps) {
  return (
    <div className={`stat ${className}`}>
      {icon && <div className="stat-figure text-primary">{icon}</div>}
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      {desc && <div className="stat-desc">{desc}</div>}
    </div>
  );
};
