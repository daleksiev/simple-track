interface ArtboardProps {
  children: React.ReactNode;
  size?: "1" | "2" | "3" | "4" | "5" | "6";
  horizontal?: boolean;
  className?: string;
}

export function Artboard({
  children,
  size = "1",
  horizontal = false,
  className = "",
}: ArtboardProps) {
  return (
    <div
      className={`artboard ${
        horizontal ? "artboard-horizontal" : ""
      } phone-${size} ${className}`}
    >
      {children}
    </div>
  );
}
