interface BrowserProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export function Browser({
  url = "https://example.com",
  children,
  className = "",
}: BrowserProps) {
  return (
    <div className={`mockup-browser border bg-base-300 ${className}`}>
      <div className="mockup-browser-toolbar">
        <div className="input">{url}</div>
      </div>
      <div className="flex justify-center px-4 py-16 bg-base-200">
        {children}
      </div>
    </div>
  );
}
