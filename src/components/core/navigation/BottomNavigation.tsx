interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface BottomNavigationProps {
  items: NavItem[];
  className?: string;
}

export function BottomNavigation({
  items,
  className = "",
}: BottomNavigationProps) {
  return (
    <div className={`btm-nav ${className}`}>
      {items.map((item, index) => (
        <button
          key={index}
          className={item.active ? "active" : ""}
          onClick={item.onClick}
        >
          {item.icon}
          <span className="btm-nav-label">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
