'use client';

import { useState } from 'react';

export default function Accordion({
  children,
  question,
  id,
  active,
}: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(active);

  function toggleAccordion() {
    setAccordionOpen((prev) => !prev);
  }

  // useEffect(() => {
  //   if (active) {
  //     setAccordionOpen(true);
  //   } else {
  //     setAccordionOpen(false);
  //   }
  //   // setAccordionOpen((prev) => !prev);
  // }, [active]);

  return (
    <div className='py-2'>
      <h2>
        <button
          className='flex items-center justify-between w-full py-2 font-semibold text-left'
          onClick={toggleAccordion}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}>
          <span>{question}</span>
          <svg
            className='ml-8 fill-indigo-500 shrink-0'
            width='16'
            height='16'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              y='7'
              width='16'
              height='2'
              rx='1'
              className={`ttransform origin-center transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
            />
            <rect
              y='7'
              width='16'
              height='2'
              rx='1'
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role='region'
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}>
        <div className='overflow-hidden'>
          <p className='pb-3'>{children}</p>
        </div>
      </div>
    </div>
  );
}
