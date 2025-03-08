interface FileInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "className"
  > {
  label?: string;
  error?: string;
  className?: string;
}

export function FileInput({
  label,
  error,
  className = "",
  ...props
}: FileInputProps) {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        type="file"
        className={`file-input file-input-bordered w-full ${
          error ? "file-input-error" : ""
        } ${className}`}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
}
