import { resultInNumber } from '@/app/_constants';

export default function ResultInNumberCard() {
  return (
    <div className='flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between'>
      {resultInNumber.map((item) => (
        <div
          key={item.id}
          className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100'>
          <div className='flex gap-5'>
            <div className='font-manrope text-2xl font-bold text-indigo-600'>
              {item.number}
            </div>
            <div className='flex-1 space-y-2'>
              <h4 className='text-xl text-gray-900 font-semibold'>
                {item.title}
              </h4>
              <p className='text-xs text-gray-500 leading-5'>
                {item.description1}
              </p>
              <p className='text-xs text-gray-500 leading-5'>
                {item.description2}
              </p>
              <p className='text-xs text-gray-500 leading-5'>
                {item.description3}
              </p>
              <p className='text-xs text-gray-500 leading-5'>
                {item.description4}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
