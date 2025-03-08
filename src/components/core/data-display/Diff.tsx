interface DiffProps {
  before: React.ReactNode;
  after: React.ReactNode;
  className?: string;
}

export function Diff({ before, after, className = "" }: DiffProps) {
  return (
    <div className={`diff aspect-[16/9] ${className}`}>
      <div className="diff-item-1">{before}</div>
      <div className="diff-item-2">{after}</div>
    </div>
  );
}
