'use client';

import { useEffect, useState } from 'react';
import { BiTimer } from 'react-icons/bi';
import SectionSubHeading from './SectionSubHeading';

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
    <>
      <div className='from-primary to-secondary relative rounded-lg bg-[url(https://cdn.webcrumbs.org/assets/images/ask-ai/bgs/16.svg)] p-4 lg:p-8'>
        <div className='p-4 space-y-2 text-center rounded-lg bg-neutral-50/40 lg:p-8 backdrop-blur-lg xs:space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12'>
          <div className='flex items-center justify-center'>
            <SectionSubHeading
              iconLeft={<BiTimer className='fill-yellow' />}
              iconRight={<BiTimer className='fill-yellow' />}>
              Next Batch Starts In
            </SectionSubHeading>
          </div>
          <div className=''>
            <div className='grid grid-cols-4 lg:gap-x-8 gap-x-2'>
              <div className='w-full col-span-1 py-4 text-center rounded-md shadow-2xl'>
                <div className='text-2xl font-semibold text-slate-700 lg:text-6xl md:text-4xl lg:font-bold'>
                  {remainingTime.days}
                </div>
                <div className='text-xs font-medium text-center lg:text-2xl md:text-xl sm:text-base text-slate-600 lg:font-semibold'>
                  Days
                </div>
              </div>
              <div className='w-full col-span-1 py-4 text-center rounded-md shadow-2xl'>
                <div className='text-2xl font-semibold text-slate-700 lg:text-6xl md:text-4xl lg:font-bold'>
                  {remainingTime.hours}
                </div>
                <div className='text-xs font-medium text-center lg:text-2xl md:text-xl sm:text-base text-slate-600 lg:font-semibold'>
                  Hours
                </div>
              </div>
              <div className='w-full col-span-1 py-4 text-center rounded-md shadow-2xl'>
                <div className='text-2xl font-semibold text-slate-700 lg:text-6xl md:text-4xl lg:font-bold'>
                  {remainingTime.minutes}
                </div>
                <div className='text-xs font-medium text-center lg:text-2xl md:text-xl sm:text-base text-slate-600 lg:font-semibold'>
                  Minutes
                </div>
              </div>
              <div className='w-full col-span-1 py-4 text-center rounded-md shadow-2xl'>
                <div className='text-2xl font-semibold text-slate-700 lg:text-6xl md:text-4xl lg:font-bold'>
                  {remainingTime.seconds}
                </div>
                <div className='text-xs font-medium text-center lg:text-2xl md:text-xl sm:text-base text-slate-600 lg:font-semibold'>
                  Seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='grid grid-cols-4 gap-4'>
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
      </div> */}
    </>
  );
}
