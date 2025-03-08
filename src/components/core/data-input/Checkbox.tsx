interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

export function Checkbox({
  label,
  error,
  className = "",
  ...props
}: CheckboxProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        {label && <span className="label-text">{label}</span>}
        <input
          type="checkbox"
          className={`checkbox ${error ? "checkbox-error" : ""} ${className}`}
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
