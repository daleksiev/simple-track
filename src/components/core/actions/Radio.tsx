interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  className?: string;
}

export function Radio({ label, className = "", ...props }: RadioProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span>
        <input type="radio" className={`radio ${className}`} {...props} />
      </label>
    </div>
  );
}
