"use client";

interface RatingProps {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  readonly?: boolean;
  className?: string;
}

export function Rating({
  value,
  onChange,
  max = 5,
  readonly = false,
  className = "",
}: RatingProps) {
  return (
    <div className={`rating ${className}`}>
      {[...Array(max)].map((_, index) => (
        <input
          key={index}
          type="radio"
          name="rating"
          className="mask mask-star-2 bg-orange-400"
          checked={value === index + 1}
          onChange={() => !readonly && onChange?.(index + 1)}
          disabled={readonly}
        />
      ))}
    </div>
  );
}
