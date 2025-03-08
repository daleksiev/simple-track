import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  placeholder?: string;
  size?: "xs" | "sm" | "md" | "lg";
  shape?: "circle" | "square";
  className?: string;
}

export function Avatar({
  src,
  alt = "",
  placeholder,
  size = "md",
  shape = "circle",
  className = "",
}: AvatarProps) {
  const sizeClass = size !== "md" ? `avatar-${size}` : "";
  const shapeClass = shape === "square" ? "rounded" : "rounded-full";

  return (
    <div className={`avatar ${className}`}>
      <div className={`w-12 ${sizeClass} ${shapeClass} bg-base-200 relative`}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 48px, 48px"
            className={shapeClass}
          />
        ) : (
          <div className="flex items-center justify-center text-base-content h-full">
            {placeholder || alt?.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
    </div>
  );
}
