interface RangeProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export function Range({
  label,
  min = 0,
  max = 100,
  step = 1,
  className = "",
  ...props
}: RangeProps) {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        className={`range ${className}`}
        {...props}
      />
    </div>
  );
}
