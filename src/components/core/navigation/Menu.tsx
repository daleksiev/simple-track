interface MenuItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

interface MenuProps {
  items: MenuItem[];
  className?: string;
}

export function Menu({ items, className = "" }: MenuProps) {
  return (
    <ul className={`menu bg-base-200 w-56 rounded-box ${className}`}>
      {items.map((item, index) => (
        <li key={index}>
          {item.href ? (
            <a href={item.href}>
              {item.icon}
              {item.label}
            </a>
          ) : (
            <button onClick={item.onClick}>
              {item.icon}
              {item.label}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
