interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export function Table({ children, className = "" }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`table table-zebra ${className}`}>{children}</table>
    </div>
  );
}

Table.Head = function TableHead({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <thead className={className}>{children}</thead>;
};

Table.Body = function TableBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <tbody className={className}>{children}</tbody>;
};

Table.Row = function TableRow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <tr className={className}>{children}</tr>;
};
