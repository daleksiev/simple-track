interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

export function Toggle({
  label,
  error,
  className = "",
  ...props
}: ToggleProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        {label && <span className="label-text">{label}</span>}
        <input
          type="checkbox"
          className={`toggle ${error ? "toggle-error" : ""} ${className}`}
          {...props}
        />
      </label>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
}
