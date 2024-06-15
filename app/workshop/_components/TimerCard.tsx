'use client';

import { useEffect, useState } from 'react';

export default function TimerCard() {
  const [remainingTime, setRemainingTime] = useState({
    days: 7,
    hours: 12,
    minutes: 12,
    seconds: 60,
  });

  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 7);
    countdownDate.setHours(countdownDate.getHours() + 12);
    countdownDate.setMinutes(countdownDate.getMinutes() + 12);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setRemainingTime({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='grid grid-cols-4 gap-4'>
      <div className='flex flex-col items-center'>
        <span className='text-4xl font-bold text-slate-900'>
          {remainingTime.days}
        </span>
        <span className='text-lg font-semibold text-slate-700'>Days</span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-4xl font-bold text-slate-900'>
          {remainingTime.hours}
        </span>
        <span className='text-lg font-semibold text-slate-700'>Hours</span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-4xl font-bold text-slate-900'>
          {remainingTime.minutes}
        </span>
        <span className='text-lg font-semibold text-slate-700'>Minutes</span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-4xl font-bold text-slate-900'>
          {remainingTime.seconds}
        </span>
        <span className='text-lg font-semibold text-slate-700'>Seconds</span>
      </div>
    </div>
  );

  // return (
  //   <div className='grid grid-cols-3 gap-4'>
  //     <div className='flex flex-col items-center'>
  //       <span className='text-4xl font-bold text-slate-900'>12</span>
  //       <span className='text-lg font-semibold text-slate-700'>Days</span>
  //     </div>
  //     <div className='flex flex-col items-center'>
  //       <span className='text-4xl font-bold text-slate-900'>12</span>
  //       <span className='text-lg font-semibold text-slate-700'>Hours</span>
  //     </div>
  //     <div className='flex flex-col items-center'>
  //       <span className='text-4xl font-bold text-slate-900'>12</span>
  //       <span className='text-lg font-semibold text-slate-700'>Minutes</span>
  //     </div>
  //   </div>
  // );
}
