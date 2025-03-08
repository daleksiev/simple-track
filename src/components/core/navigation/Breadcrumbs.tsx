interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <div className={`breadcrumbs ${className}`}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
