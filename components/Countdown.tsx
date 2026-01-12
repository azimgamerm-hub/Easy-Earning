import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 24,
    minutes: 15,
    seconds: 3,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          // Reset or stop timer
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-600 mb-3">বর্তমান সময়</h3>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="p-2 bg-slate-100 rounded">
          <div className="text-2xl font-bold text-cyan-600">{formatTime(timeLeft.days)}</div>
          <div className="text-xs text-gray-500">দিন</div>
        </div>
        <div className="p-2 bg-slate-100 rounded">
          <div className="text-2xl font-bold text-cyan-600">{formatTime(timeLeft.hours)}</div>
          <div className="text-xs text-gray-500">ঘন্টা</div>
        </div>
        <div className="p-2 bg-slate-100 rounded">
          <div className="text-2xl font-bold text-cyan-600">{formatTime(timeLeft.minutes)}</div>
          <div className="text-xs text-gray-500">মিনিট</div>
        </div>
        <div className="p-2 bg-slate-100 rounded">
          <div className="text-2xl font-bold text-cyan-600">{formatTime(timeLeft.seconds)}</div>
          <div className="text-xs text-gray-500">সেকেন্ড</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
