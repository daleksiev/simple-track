interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  className?: string;
}

export function Toggle({ label, className = "", ...props }: ToggleProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span>
        <input type="checkbox" className={`toggle ${className}`} {...props} />
      </label>
    </div>
  );
}
