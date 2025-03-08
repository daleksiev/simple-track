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
}: AvatarProps);
