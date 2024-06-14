export default function AccordionTest() {
  return (
    <div className={'max-w-4xl mx-auto'}>
      <div className='grid gap-y-4'>
        <h2 className='text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]'>
          Frequently asked questions
        </h2>

        <div className='accordion-group' data-accordion='default-accordion'>
          <div
            className='accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4 active'
            id='basic-heading-one-with-icon'>
            <button
              className='accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600'
              aria-controls='basic-collapse-one-with-icon'>
              <h5>How can I reset my password?</h5>
              <svg
                className='w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600 origin-center'
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
                className='w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600'
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
              className='accordion-content w-full overflow-hidden pr-4'
              aria-labelledby='basic-heading-one'
              style={{ maxHeight: '250px' }}>
              <p className='text-base text-gray-900 font-normal leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quo quidem quos quaerat dicta mollitia at inventore. Officiis
                architecto quas dignissimos in vitae, pariatur possimus.
              </p>
            </div>
          </div>
          <div
            className='accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4'
            id='basic-heading-two-with-icon'>
            <button
              className='accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600'
              aria-controls='basic-collapse-two-with-icon'>
              <h5>How do I update my billing information?</h5>
              <svg
                className='w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600'
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
                className='w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600'
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
              className='accordion-content w-full overflow-hidden pr-4'
              aria-labelledby='basic-heading-two'>
              <p className='text-base text-gray-900 font-normal leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quo quidem quos quaerat dicta mollitia at inventore. Officiis
                architecto quas dignissimos in vitae, pariatur possimus.
              </p>
            </div>
          </div>
          <div
            className='accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4'
            id='basic-heading-three-with-icon'>
            <button
              className='accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600'
              aria-controls='basic-collapse-three-with-icon'>
              <h5>How can I contact customer support?</h5>
              <svg
                className='w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600'
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
                className='w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600'
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
              className='accordion-content w-full overflow-hidden pr-4'
              aria-labelledby='basic-heading-three'>
              <p className='text-base text-gray-900 font-normal leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quo quidem quos quaerat dicta mollitia at inventore. Officiis
                architecto quas dignissimos in vitae, pariatur possimus.
              </p>
            </div>
          </div>
          <div
            className='accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4'
            id='basic-heading-three-with-icon'>
            <button
              className='accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600'
              aria-controls='basic-collapse-three-with-icon'>
              <h5>How do I delete my account?</h5>
              <svg
                className='w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600'
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
                className='w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600'
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
              className='accordion-content w-full overflow-hidden pr-4'
              aria-labelledby='basic-heading-three'>
              <p className='text-base text-gray-900 font-normal leading-6'>
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
