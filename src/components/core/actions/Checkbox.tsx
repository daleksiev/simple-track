interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span>
        <input type="checkbox" className={`checkbox ${className}`} {...props} />
      </label>
    </div>
  );
}
