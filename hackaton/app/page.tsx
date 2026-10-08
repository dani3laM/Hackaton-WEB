'use client';

import React, { useState } from "react";
import ProgressBar from "./components/ProgressBarProvider";

export default function App() {
  const [percentage, setPercentage] = useState(10);

  return (
    <main className="p-10 max-w-md mx-auto font-sans flex flex-col items-center justify-center min-h-screen">
      <ProgressBar percentage={percentage} />

      <div className="mt-12 flex items-center space-x-4">
        <label className="text-lg font-medium text-gray-800">
          Input Percentage:
        </label>
        <input type="number"
          min="0"
          max="100"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value === '' ? 0 : Number(e.target.value))}
        />
      </div>
    </main>
  );
}
