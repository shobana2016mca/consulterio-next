import { instructor } from '@/app/_constants';
import Image from 'next/image';
import { FaUniversity } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa6';

export default function InstructorProfileCard() {
  return (
    <div className='p-4 lg:p-0'>
      <div className='rounded-lg space-y-2 border bg-white px-4 pt-8 pb-10 shadow-lg'>
        <div className='relative mx-auto w-36 rounded-full'>
          <span className='absolute right-3 m-3 h-1.5 w-1.5 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2 animate-ping'></span>
          <Image
            className='mx-auto h-auto w-full rounded-full'
            src={instructor.profileImage}
            alt=''
            width={256}
            height={256}
            priority={true}
          />
        </div>
        <h1 className='my-1 text-center text-xl font-bold leading-8 text-gray-900'>
          {instructor.name}
        </h1>
        <h3 className='font-lg text-semibold text-center leading-6 text-gray-600 font-medium'>
          {instructor.designation}
        </h3>
        <p className='text-start text-sm leading-6 text-gray-500 hover:text-gray-600 font-normal tracking-tight'>
          <span className={'block font-medium'}>Expertise:</span>
          <span className={'block'}>{instructor.expertise}</span>
        </p>
        <p className='text-start text-sm leading-6 text-gray-500 hover:text-gray-600 font-normal tracking-tight'>
          <span className={'block font-medium'}>Philosophy:</span>
          <span className={'block'}>{instructor.philosophy}</span>
        </p>

        {instructor.education.map((edu, index) => (
          <div
            key={index}
            className='text-start text-sm leading-6 text-gray-500 hover:text-gray-600 font-normal tracking-tight'>
            <p className={'flex items-center gap-x-2'}>
              <span>
                <FaUserGraduate className='size-4' />
              </span>
              <span className={'block font-medium'}>{edu.degree}</span>
            </p>
            <p className={'flex items-center gap-x-2'}>
              <span>
                <FaUniversity className='size-4' />
              </span>
              <span className={'block'}>{edu.institution}</span>
            </p>
          </div>
        ))}

        {instructor.professionalExperience.map((exp, index) => (
          <div
            key={index}
            className='text-start text-sm leading-6 text-gray-500 hover:text-gray-600 font-normal tracking-tight'>
            <p className={'flex items-center gap-x-2'}>
              <span>
                <FaUserGraduate className='size-4' />
              </span>
              <span className={'block font-medium'}>{exp.title}</span>
            </p>
            <p className={'flex items-center gap-x-2'}>
              <span>
                <FaUniversity className='size-4' />
              </span>
              <span className={'block'}>{exp.description}</span>
            </p>
          </div>
        ))}

        <ul className='mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow'>
          {instructor.professionalExperience.map((exp, index) => (
            <li key={index} className='flex items-center py-3 text-sm'>
              <p className={'flex flex-col items-start gap-y-4'}>
                <span
                  className={
                    'rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700'
                  }>
                  {exp.title}
                </span>
                <span className='ml-auto'>{exp.description}</span>
              </p>
            </li>
          ))}
        </ul>
        {/* <ul className='mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow'>
          <li className='flex items-center py-3 text-sm'>
            <span>Status</span>
            <span className='ml-auto'>
              <span className='rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700'>
                Open for side gigs
              </span>
            </span>
          </li>
          <li className='flex items-center py-3 text-sm'>
            <span>Joined On</span>
            <span className='ml-auto'>Apr 08, 2022</span>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
