"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <p className="w-full">
      <CountUp
        decimal=","
        prefix="$"
        duration={2}
        decimals={2}
        end={amount}
      />
    </p>
  );
};

export default AnimatedCounter;
