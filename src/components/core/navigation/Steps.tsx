interface Step {
  label: string;
  content?: React.ReactNode;
}

interface StepsProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (step: number) => void;
  className?: string;
}

export function Steps({
  steps,
  currentStep,
  onStepClick,
  className = "",
}: StepsProps) {
  return (
    <ul className={`steps ${className}`}>
      {steps.map((step, index) => (
        <li
          key={index}
          className={`step ${index <= currentStep ? "step-primary" : ""}`}
          onClick={() => onStepClick?.(index)}
        >
          {step.label}
        </li>
      ))}
    </ul>
  );
}
