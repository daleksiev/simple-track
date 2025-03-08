interface HeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Hero({ title, subtitle, children, className = "" }: HeroProps) {
  return (
    <div className={`hero min-h-[50vh] bg-base-200 ${className}`}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          {subtitle && <p className="py-6">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}
