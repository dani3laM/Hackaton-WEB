'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { useEffect, useState } from 'react';

export default function percentageBar() {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => prevPercentage + 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <ProgressBar
    height="4px"
    color="#000000"
    options={{ showSpinner: false }}
    shallowRouting
  />
}


