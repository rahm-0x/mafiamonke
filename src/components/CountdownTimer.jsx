import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your target date here
  const targetDate = new Date("February 20, 2025 00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center space-x-4 text-white text-2xl font-bold">
      {/* Days */}
      <div className="bg-white/10 rounded-md shadow-md flex flex-col items-center justify-center w-[101px] h-[80px]">
        <span className="block text-3xl md:text-4xl">{timeLeft.days}</span>
        <span className="block text-sm">Days</span>
      </div>

      {/* Hours */}
      <div className="bg-white/10 rounded-md shadow-md flex flex-col items-center justify-center w-[101px] h-[80px]">
        <span className="block text-3xl md:text-4xl">{timeLeft.hours}</span>
        <span className="block text-sm">Hours</span>
      </div>

      {/* Minutes */}
      <div className="bg-white/10 rounded-md shadow-md flex flex-col items-center justify-center w-[101px] h-[80px]">
        <span className="block text-3xl md:text-4xl">{timeLeft.minutes}</span>
        <span className="block text-sm">Minutes</span>
      </div>

      {/* Seconds */}
      <div className="bg-white/10 rounded-md shadow-md flex flex-col items-center justify-center w-[101px] h-[80px]">
        <span className="block text-3xl md:text-4xl">{timeLeft.seconds}</span>
        <span className="block text-sm">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
