"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
  onComplete?: () => void;
  className?: string;
}

export function Countdown({
  targetDate,
  onComplete,
  className = "",
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        onComplete?.();
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div
      className={`grid grid-flow-col gap-5 text-center auto-cols-max ${className}`}
    >
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.days } as any}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.hours } as any}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.minutes } as any}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.seconds } as any}></span>
        </span>
        sec
      </div>
    </div>
  );
}
