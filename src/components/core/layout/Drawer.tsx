"use client";

import { useState } from "react";
import { Navigation } from "../navigation/Navigation";

interface DrawerProps {
  className?: string;
}

export function Drawer({ className = "" }: DrawerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`drawer ${className}`}>
      <div
        className={`fixed z-20 top-0 left-0 h-full bg-base-200 border-r border-base-300 shadow-lg transition-all duration-300 ${
          isExpanded ? "w-48" : "w-14"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <Navigation isExpanded={isExpanded} />
      </div>
      <main className={`ml-14 transition-all duration-300`}></main>
    </div>
  );
}
