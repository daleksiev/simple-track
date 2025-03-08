"use client";

import Link from "next/link";
import {
  HomeIcon,
  PersonIcon,
  ClockIcon,
  GearIcon,
} from "@radix-ui/react-icons";

interface NavItemProps {
  icon: React.ReactNode;
  title: string;
  isExpanded: boolean;
  href: string;
}

const NavItem = ({ icon, title, isExpanded, href }: NavItemProps) => (
  <li>
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2 hover:bg-base-200 rounded-lg mx-2"
    >
      <span className="text-base">{icon}</span>
      <span
        className={`whitespace-nowrap transition-all duration-300 text-sm ${
          isExpanded ? "opacity-100" : "opacity-0 w-0"
        }`}
      >
        {title}
      </span>
    </Link>
  </li>
);

export function Navigation({ isExpanded }: { isExpanded: boolean }) {
  const navItems = [
    { icon: <HomeIcon className="w-4 h-4" />, title: "Dashboard", href: "/" },
    {
      icon: <ClockIcon className="w-4 h-4" />,
      title: "History",
      href: "/history",
    },
    {
      icon: <PersonIcon className="w-4 h-4" />,
      title: "Profile",
      href: "/profile",
      hidden: true,
    },
    {
      icon: <GearIcon className="w-4 h-4" />,
      title: "Settings",
      href: "/settings",
      hidden: true,
    },
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
        {navItems.map((item, index) =>
          item?.hidden ? null : (
            <NavItem
              key={index}
              icon={item.icon}
              title={item.title}
              isExpanded={isExpanded}
              href={item.href}
            />
          )
        )}
      </ul>
    </div>
  );
}
