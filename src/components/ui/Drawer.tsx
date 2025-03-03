"use client";

import { useState } from "react";
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
    <a className="flex items-center gap-3 px-3 py-2 hover:bg-indigo-500  rounded-lg">
      <span className="text-base transition-all duration-300">{icon}</span>
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

const Drawer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { icon: <HomeIcon className="w-4 h-4" />, title: "Dashboard" },
    { icon: <PersonIcon className="w-4 h-4" />, title: "Profile" },
    { icon: <BarChartIcon className="w-4 h-4" />, title: "Statistics" },
    { icon: <GearIcon className="w-4 h-4" />, title: "Settings" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full overflow-hidden bg-base-100  z-10  transition-all duration-300  ${
        isExpanded ? "w-48" : "w-16"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full w-full py-4 border-r-3 border-x-indigo-500">
        <div className="px-4 mb-2">
          <h2 className={`font-bold text-sm`}>Menu</h2>
        </div>
        <ul className="menu menu-vertical gap-3 px-3 w-full ">
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
    </div>
  );
};

export default Drawer;
