import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from './SectionWrapper';

export default function HeroSection() {
  return (
    <section className='relative'>
      <HeroBackground />
      <SectionWrapper>
        <div
          className={
            'grid grid-cols-2 absolute top-0 left-0 z-20 w-full h-full'
          }>
          <div
            className={
              'hidden lg:block lg:col-span-1 transition-all delay-150 duration-500 ease-in-out'
            }
          />
          <div
            className={
              'col-span-full lg:col-span-1 grid place-content-center p-4 xl:p-8'
            }>
            <HeroContent />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

function HeroBackground() {
  return (
    <div className='relative aspect-square md:aspect-[3/2] lg:aspect-[16/9]'>
      <Image
        src='/hero-img.jpg'
        alt='Background Image'
        width={1919}
        height={960}
        priority={true}
        className='absolute z-10 object-cover w-full h-full'
      />
      <ImageOverlay />
    </div>
  );
}

function ImageOverlay() {
  return (
    <div className='absolute z-20 w-full h-full bg-sky-950 bg-opacity-90' />
  );
}

function HeroContent() {
  return (
    <div className='grid gap-y-4 lg:gap-y-8'>
      <h1 className='text-sm font-bold tracking-widest text-white xs:text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-md:max-w-full'>
        Unlock Your Company&apos;s Potential with Expert HR Recruitment
        Solutions
      </h1>
      <p className='text-xs font-medium text-white xs:text-sm md:text-base lg:text-lg xl:text-xl'>
        Be the driving force behind software companies and corporate giants by
        joining us as an HR recruitment consultant. Shape the future of
        innovation, foster growth, and make a lasting impact on global
        businesses. Elevate your career and be a catalyst for success in the
        dynamic tech landscape.
      </p>
      <Link
        href={'/about-us'}
        className='px-4 py-1.5 sm:px-6 lg:px-8 sm:py-2 lg:py-4 text-white flex items-center gap-x-4 border border-white rounded-md justify-self-start hover:shadow-lg hover:bg-white hover:text-sky-950 transition-all delay-150 duration-500 ease-in-out'>
        <span className='text-xs font-medium xs:text-sm md:font-semibold md:text-base lg:text-2xl'>
          Let work Together
        </span>
        <ArrowRightCircleIcon className='size-4 md:size-4 lg:size-8' />
      </Link>
    </div>
  );
}
