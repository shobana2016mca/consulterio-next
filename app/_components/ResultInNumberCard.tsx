import { resultInNumber } from '@/app/_constants';
import { BiCheckDouble } from 'react-icons/bi';

export default function ResultInNumberCard() {
  return (
    <div className='flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between'>
      {resultInNumber.map((item) => (
        <div
          key={item.id}
          className='w-full p-6 mx-auto mt-4 bg-white shadow-xl max-lg:max-w-2xl lg:mx-0 lg:w-1/3 rounded-2xl md:mt-6 lg:mt-8'>
          <div className='grid justify-items-center gap-y-6'>
            <div className='px-6 py-2 font-sans text-2xl font-bold text-center text-white -skew-x-12 bg-blue-600 -rotate-12'>
              <span>{item.number}</span>
            </div>
            <div className='space-y-2'>
              <h4 className='text-base font-semibold text-center text-gray-900 md:text-xl lg:text-2xl'>
                {item.title}
              </h4>
              <p className='inline-flex items-start text-sm font-normal leading-5 text-gray-500 lg:text-base gap-x-2'>
                <span>
                  <BiCheckDouble className='text-green-500 size-6' />
                </span>
                <span>{item.description1}</span>
              </p>
              <p className='inline-flex items-start text-sm font-normal leading-5 text-gray-500 lg:text-base gap-x-2'>
                <span>
                  <BiCheckDouble className='text-green-500 size-6' />
                </span>
                <span>{item.description2}</span>
              </p>
              <p className='inline-flex items-start text-sm font-normal leading-5 text-gray-500 lg:text-base gap-x-2'>
                <span>
                  <BiCheckDouble className='text-green-500 size-6' />
                </span>
                <span>{item.description3}</span>
              </p>
              <p className='inline-flex items-start text-sm font-normal leading-5 text-gray-500 lg:text-base gap-x-2'>
                <span>
                  <BiCheckDouble className='text-green-500 size-6' />
                </span>
                <span>{item.description4}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
