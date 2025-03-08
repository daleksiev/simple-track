interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "value" | "onChange"
  > {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  className?: string;
}

export function Select({
  options,
  value,
  onChange,
  label,
  error,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <select
        className={`select select-bordered w-full focus:outline-none ${
          error ? "select-error" : ""
        } ${className}`}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
}
