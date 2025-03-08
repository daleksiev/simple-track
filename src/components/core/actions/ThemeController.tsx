"use client";

interface ThemeControllerProps {
  className?: string;
}

export function ThemeController({ className = "" }: ThemeControllerProps) {
  return (
    <div className={`dropdown ${className}`}>
      <div tabIndex={0} role="button" className="btn">
        Theme
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
      >
        <li>
          <button
            onClick={() =>
              document.documentElement.setAttribute("data-theme", "light")
            }
          >
            Light
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              document.documentElement.setAttribute("data-theme", "dark")
            }
          >
            Dark
          </button>
        </li>
      </ul>
    </div>
  );
}
