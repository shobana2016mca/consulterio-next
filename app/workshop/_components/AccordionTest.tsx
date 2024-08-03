export default function AccordionTest() {
  return (
    <div className={'max-w-4xl mx-auto'}>
      <div className='grid gap-y-4'>
        <h2 className='text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]'>
          Frequently asked questions
        </h2>

        <div className='accordion-group' data-accordion='default-accordion'>
          <div
            className='p-4 mb-8 transition duration-500 border border-gray-300 border-solid accordion rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 lg:p-4 active'
            id='basic-heading-one-with-icon'>
            <button
              className='inline-flex items-center justify-between w-full text-lg font-normal leading-8 text-left text-gray-900 transition duration-500 accordion-toggle group hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600'
              aria-controls='basic-collapse-one-with-icon'>
              <h5>How can I reset my password?</h5>
              <svg
                className='block w-6 h-6 text-gray-900 transition duration-500 origin-center accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6 12H18M12 18V6'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
              <svg
                className='hidden w-6 h-6 text-gray-900 transition duration-500 accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6 12H18'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
            </button>
            <div
              id='basic-collapse-one-with-icon'
              className='w-full pr-4 overflow-hidden accordion-content'
              aria-labelledby='basic-heading-one'
              style={{ maxHeight: '250px' }}>
              <p className='text-base font-normal leading-6 text-gray-900'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quo quidem quos quaerat dicta mollitia at inventore. Officiis
                architecto quas dignissimos in vitae, pariatur possimus.
              </p>
            </div>
          </div>
          <div
            className='p-4 mb-8 border border-gray-300 border-solid accordion rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 lg:p-4'
            id='basic-heading-two-with-icon'>
            <button
              className='inline-flex items-center justify-between w-full text-lg font-normal leading-8 text-left text-gray-900 transition duration-500 accordion-toggle group hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600'
              aria-controls='basic-collapse-two-with-icon'>
              <h5>How do I update my billing information?</h5>
              <svg
                className='block w-6 h-6 text-gray-900 transition duration-500 accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6 12H18M12 18V6'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
              <svg
                className='hidden w-6 h-6 text-gray-900 transition duration-500 accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6 12H18'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
            </button>
            <div
              id='basic-collapse-two-with-icon'
              className='w-full pr-4 overflow-hidden accordion-content'
              aria-labelledby='basic-heading-two'>
              <p className='text-base font-normal leading-6 text-gray-900'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quo quidem quos quaerat dicta mollitia at inventore. Officiis
                architecto quas dignissimos in vitae, pariatur possimus.
              </p>
            </div>
          </div>
          <div
            className='p-4 mb-8 border border-gray-300 border-solid accordion rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 lg:p-4'
            id='basic-heading-three-with-icon'>
            <button
              className='inline-flex items-center justify-between w-full text-lg font-normal leading-8 text-left text-gray-900 transition duration-500 accordion-toggle group hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600'
              aria-controls='basic-collapse-three-with-icon'>
              <h5>How can I contact customer support?</h5>
              <svg
                className='block w-6 h-6 text-gray-900 transition duration-500 accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6 12H18M12 18V6'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
              <svg
                className='hidden w-6 h-6 text-gray-900 transition duration-500 accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6 12H18'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
            </button>
            <div
              id='basic-collapse-three-with-icon'
              className='w-full pr-4 overflow-hidden accordion-content'
              aria-labelledby='basic-heading-three'>
              <p className='text-base font-normal leading-6 text-gray-900'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quo quidem quos quaerat dicta mollitia at inventore. Officiis
                architecto quas dignissimos in vitae, pariatur possimus.
              </p>
            </div>
          </div>
          <div
            className='p-4 mb-8 border border-gray-300 border-solid accordion rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 lg:p-4'
            id='basic-heading-three-with-icon'>
            <button
              className='inline-flex items-center justify-between w-full text-lg font-normal leading-8 text-left text-gray-900 transition duration-500 accordion-toggle group hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600'
              aria-controls='basic-collapse-three-with-icon'>
              <h5>How do I delete my account?</h5>
              <svg
                className='block w-6 h-6 text-gray-900 transition duration-500 accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6 12H18M12 18V6'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
              <svg
                className='hidden w-6 h-6 text-gray-900 transition duration-500 accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6 12H18'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
            </button>
            <div
              id='basic-collapse-three-with-icon'
              className='w-full pr-4 overflow-hidden accordion-content'
              aria-labelledby='basic-heading-three'>
              <p className='text-base font-normal leading-6 text-gray-900'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quo quidem quos quaerat dicta mollitia at inventore. Officiis
                architecto quas dignissimos in vitae, pariatur possimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
