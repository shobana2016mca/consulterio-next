import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='flex overflow-hidden relative flex-col justify-center self-stretch w-full text-white max-md:max-w-full'>
      <div className='relative h-screen'>
        <Image
          src='/hero-img.jpg'
          alt='Background Image'
          width={1919}
          height={960}
          priority
          className='object-cover absolute z-10 w-full h-full'
        />
        <div className=' w-full h-full bg-sky-950 bg-opacity-90 absolute z-20' />

        <div className='flex absolute z-30 flex-col justify-center items-end px-16 py-24 w-full h-full max-md:px-5 max-md:max-w-full'>
          <div className='flex flex-col mt-32 mb-20 ml-20 max-w-full w-[724px] max-md:my-10 lg:gap-y-10 md:gap-y-8 gap-y-4'>
            <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-widest max-md:max-w-full'>
              Unlock Your Company&apos;s Potential with Expert HR Recruitment
              Solutions
            </h1>
            <h2 className='xs:text-sm md:text-base xl:text-lg max-md:max-w-full max-md:text-2xl'>
              <p className='text-white'>
                Be the driving force behind software companies and corporate
                giants by joining us as an HR recruitment consultant. Shape the
                future of innovation, foster growth, and make a lasting impact
                on global businesses. Elevate your career and be a catalyst for
                success in the dynamic tech landscape
              </p>
            </h2>
            <Link
              href={'/about-us'}
              className='flex items-center gap-5 py-5 pr-8 pl-10 max-w-full text-2xl border border-white border-solid tracking-[2.4px] w-[357px] max-md:px-5'>
              <span className='flex-auto xs:text-sm font-semibold md:text-base'>
                Let work Together
              </span>
              <Image
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/30a7fdf0ee3fb824ca46cb780a40730d69062e5e75f9b731e569fb6d0c24d8ba?apiKey=54709c8bd30b4ce38ba82e61049e17ec&'
                alt=''
                width={31}
                height={31}
                className='shrink-0 aspect-square w-[31px]'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
