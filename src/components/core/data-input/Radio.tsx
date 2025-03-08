interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

export function Radio({ label, error, className = "", ...props }: RadioProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        {label && <span className="label-text">{label}</span>}
        <input
          type="radio"
          className={`radio ${error ? "radio-error" : ""} ${className}`}
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
