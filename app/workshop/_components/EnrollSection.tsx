import SectionWrapper from '@/app/_components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';

export default function EnrollSection() {
  return (
    <div className='relative grid content-center h-64 font-sans text-slate-700'>
      <Image
        src={'/enroll-bg.svg'}
        alt='Enroll now'
        fill
        sizes='(min-width: 640px) 640px, 100vw'
        // width={800}
        // height={400}
        className='object-cover w-full h-full md:h-96'
      />

      <div
        className={'absolute top-0 left-0 grid content-center w-full h-full'}>
        <SectionWrapper>
          <div className='flex flex-col items-center justify-between md:flex-row gap-x-6 gap-y-8'>
            <div className='text-center md:w-1/2 md:text-left'>
              <h2 className='mb-4 text-3xl font-semibold xl:text-4xl xl:font-bold'>
                Unlock Your Potential
              </h2>
              <p className='text-base font-medium lg:font-semibold lg:text-lg text-slate-700'>
                Upgrade your skills with our premium workshop. Enroll now and
                access exclusive content!
              </p>
            </div>

            <div className='flex justify-center md:w-1/2'>
              <Link
                href='/enroll'
                className='px-6 py-3 font-semibold text-red-500 transition-all duration-500 ease-in-out delay-150 bg-white rounded-full shadow-lg hover:shadow-sm hover:text-white hover:bg-red-500'>
                Enroll Now
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
