import { resultInNumber } from '@/app/_constants';
import { BiCheckDouble } from 'react-icons/bi';

export default function ResultInNumberCard() {
  return (
    <div className='flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between'>
      {resultInNumber.map((item) => (
        <div
          key={item.id}
          className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-xl mt-4 md:mt-6 lg:mt-8'>
          <div className=' grid justify-items-center gap-y-6'>
            <div className='font-sans bg-blue-600 -skew-x-12 -rotate-12 text-2xl font-bold text-white text-center px-6 py-2'>
              <span>{item.number}</span>
            </div>
            <div className='space-y-2'>
              <h4 className='text-base md:text-xl lg:text-2xl text-gray-900 font-semibold text-center'>
                {item.title}
              </h4>
              <p className='text-sm lg:text-base font-normal text-gray-500 leading-5 inline-flex items-start gap-x-2'>
                <span>
                  <BiCheckDouble className='size-6 text-green-500' />
                </span>
                <span>{item.description1}</span>
              </p>
              <p className='text-sm lg:text-base font-normal text-gray-500 leading-5 inline-flex items-start gap-x-2'>
                <span>
                  <BiCheckDouble className='size-6 text-green-500' />
                </span>
                <span>{item.description2}</span>
              </p>
              <p className='text-sm lg:text-base font-normal text-gray-500 leading-5 inline-flex items-start gap-x-2'>
                <span>
                  <BiCheckDouble className='size-6 text-green-500' />
                </span>
                <span>{item.description3}</span>
              </p>
              <p className='text-sm lg:text-base font-normal text-gray-500 leading-5 inline-flex items-start gap-x-2'>
                <span>
                  <BiCheckDouble className='size-6 text-green-500' />
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
