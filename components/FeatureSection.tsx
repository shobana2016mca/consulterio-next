export default function FeatureSection() {
  return (
    <section className='py-20 bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className='font-manrope text-4xl text-center text-gray-900 font-bold mb-14'>
          Our results in numbers
        </h2>
        <div className='flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between'>
          <div className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100'>
            <div className='flex gap-5'>
              <div className='font-manrope text-2xl font-bold text-indigo-600'>
                240%
              </div>
              <div className='flex-1'>
                <h4 className='text-xl text-gray-900 font-semibold mb-2'>
                  Company growth
                </h4>
                <p className='text-xs text-gray-500 leading-5'>
                  Company&apos;s remarkable growth journey as we continually
                  innovate and drive towards new heights of success.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100'>
            <div className='flex gap-5'>
              <div className='font-manrope text-2xl font-bold text-indigo-600'>
                175+
              </div>
              <div className='flex-1'>
                <h4 className='text-xl text-gray-900 font-semibold mb-2'>
                  Company growth
                </h4>
                <p className='text-xs text-gray-500 leading-5'>
                  Our very talented team members are the powerhouse of pagedone
                  and pillars of our success.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100'>
            <div className='flex gap-5'>
              <div className='font-manrope text-2xl font-bold text-indigo-600'>
                625+
              </div>
              <div className='flex-1'>
                <h4 className='text-xl text-gray-900 font-semibold mb-2'>
                  Projects Completed
                </h4>
                <p className='text-xs text-gray-500 leading-5'>
                  We have accomplished more than 625 projects worldwide and we
                  are still counting many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
