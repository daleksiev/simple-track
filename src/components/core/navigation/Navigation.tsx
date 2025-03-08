"use client";

import {
  HomeIcon,
  PersonIcon,
  BarChartIcon,
  GearIcon,
} from "@radix-ui/react-icons";

interface NavItemProps {
  icon: React.ReactNode;
  title: string;
  isExpanded: boolean;
}

const NavItem = ({ icon, title, isExpanded }: NavItemProps) => (
  <li>
    <a className="flex items-center gap-3 px-3 py-2 hover:bg-base-200 rounded-lg mx-2">
      <span className="text-base">{icon}</span>
      <span
        className={`whitespace-nowrap transition-all duration-300 text-sm ${
          isExpanded ? "opacity-100" : "opacity-0 w-0"
        }`}
      >
        {title}
      </span>
    </a>
  </li>
);

export function Navigation({ isExpanded }: { isExpanded: boolean }) {
  const navItems = [
    { icon: <HomeIcon className="w-4 h-4" />, title: "Dashboard" },
    { icon: <PersonIcon className="w-4 h-4" />, title: "Profile" },
    { icon: <BarChartIcon className="w-4 h-4" />, title: "Statistics" },
    { icon: <GearIcon className="w-4 h-4" />, title: "Settings" },
  ];

  return (
    <div className="flex flex-col h-full py-4">
      <div className="px-4 mb-2">
        <h2
          className={`font-bold text-sm transition-all duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        >
          Menu
        </h2>
      </div>
      <ul className="menu menu-vertical gap-1 px-0">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            title={item.title}
            isExpanded={isExpanded}
          />
        ))}
      </ul>
    </div>
  );
}
