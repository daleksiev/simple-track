interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  hover?: boolean;
  className?: string;
}

export function Link({ hover = true, className = "", ...props }: LinkProps) {
  return (
    <a
      className={`link ${hover ? "link-hover" : ""} ${className}`}
      {...props}
    />
  );
}
