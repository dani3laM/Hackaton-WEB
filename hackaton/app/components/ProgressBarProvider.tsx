'use client';

interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  // Ensure the percentage stays between 0 and 100
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl mb-6 font-sans text-black">Progress bar</h1>

      <div
        className={clampedPercentage ? "bg-[#ff6a6aff]" : ""}
        style={{ width: `${clampedPercentage}%`, minWidth: clampedPercentage > 0 ? '3rem' : '0' }}
      >
        {clampedPercentage > 0 && (
          <span className="text-white text-sm font-medium drop-shadow-sm">{clampedPercentage}%</span>
        )}
      </div>

    </div>
  );
}
