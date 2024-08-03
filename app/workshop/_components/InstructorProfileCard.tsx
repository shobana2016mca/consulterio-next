import { instructor } from '@/app/_constants';
import Image from 'next/image';
import { FaUniversity } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa6';

export default function InstructorProfileCard() {
  return (
    <div className='p-4 lg:p-0'>
      <div className='px-4 pt-8 pb-10 space-y-2 bg-white border rounded-lg shadow-lg'>
        <div className='relative mx-auto rounded-full w-36'>
          <span className='absolute right-3 m-3 h-1.5 w-1.5 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2 animate-ping'></span>
          <Image
            className='w-full h-auto mx-auto rounded-full'
            src={instructor.profileImage}
            alt=''
            width={256}
            height={256}
            priority={true}
          />
        </div>
        <h1 className='my-1 text-xl font-bold leading-8 text-center text-gray-900'>
          {instructor.name}
        </h1>
        <h3 className='font-medium leading-6 text-center text-gray-600 font-lg text-semibold'>
          {instructor.designation}
        </h3>
        <p className='text-sm font-normal leading-6 tracking-tight text-gray-500 text-start hover:text-gray-600'>
          <span className={'block font-medium'}>Expertise:</span>
          <span className={'block'}>{instructor.expertise}</span>
        </p>
        <p className='text-sm font-normal leading-6 tracking-tight text-gray-500 text-start hover:text-gray-600'>
          <span className={'block font-medium'}>Philosophy:</span>
          <span className={'block'}>{instructor.philosophy}</span>
        </p>

        {instructor.education.map((edu, index) => (
          <div
            key={index}
            className='text-sm font-normal leading-6 tracking-tight text-gray-500 text-start hover:text-gray-600'>
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
            className='text-sm font-normal leading-6 tracking-tight text-gray-500 text-start hover:text-gray-600'>
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

        <ul className='px-3 py-2 mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow'>
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
        {/* <ul className='px-3 py-2 mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow'>
          <li className='flex items-center py-3 text-sm'>
            <span>Status</span>
            <span className='ml-auto'>
              <span className='px-2 py-1 text-xs font-medium text-green-700 bg-green-200 rounded-full'>
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
