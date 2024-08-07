import { approaches } from '@/app/_constants';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '../../_components/SectionWrapper';

export default function OurApproachSection() {
  return (
    <section>
      {/* <!-- Approach --> */}
      <div className='bg-sky-950'>
        <SectionWrapper>
          {/* <!-- Approach --> */}
          <div className='py-10 lg:pt-20 lg:pb-20'>
            {/* <!-- Title --> */}
            <div className='max-w-3xl mb-10 lg:mb-14'>
              <h2 className='text-2xl font-semibold text-white md:text-4xl md:leading-tight'>
                Our Approach
              </h2>
              <p className='mt-1 text-neutral-400'>
                At Consultero, we believe that a strategic and personalized
                approach is key to successful recruitment. Our method is
                designed to ensure that we deliver the best talent to meet your
                unique business needs. Here&apos;s how we do it:
              </p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Grid --> */}
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center'>
              <div className='aspect-w-16 aspect-h-9 lg:aspect-none'>
                <Image
                  className='object-cover w-full rounded-xl'
                  src='https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Image Description'
                  width={480}
                  height={600}
                  priority
                />
              </div>
              {/* <!-- End Col --> */}

              {/* <!-- Timeline --> */}
              <div>
                {/* <!-- Heading --> */}
                <div className='mb-4'>
                  <h3 className='text-[#ff0] text-xs font-medium uppercase'>
                    Steps
                  </h3>
                </div>
                {/* <!-- End Heading --> */}

                {/* Approaches steps */}

                {approaches.map((approach) => (
                  <div key={approach.id} className='flex gap-x-5 ms-1'>
                    {/* <!-- Icon --> */}
                    <div className='relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white'>
                      <div className='relative z-10 flex items-center justify-center size-8'>
                        <span className='flex flex-shrink-0 justify-center items-center size-8 border border-white text-[#ff0] font-semibold text-xs uppercase rounded-full'>
                          {approach.id}
                        </span>
                      </div>
                    </div>
                    {/* <!-- End Icon --> */}

                    {/* <!-- Right Content --> */}
                    <div className='grow pt-0.5 pb-8 sm:pb-12'>
                      <p className='text-sm lg:text-base text-neutral-400'>
                        <span className='text-white'>{approach.title} : </span>
                        {approach.description}
                      </p>
                    </div>
                    {/* <!-- End Right Content --> */}
                  </div>
                ))}

                <Link
                  className='group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none'
                  href='#'>
                  <svg
                    className='flex-shrink-0 size-4'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                    <path
                      className='transition opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100'
                      d='M14.05 2a9 9 0 0 1 8 7.94'></path>
                    <path
                      className='transition opacity-0 group-hover:opacity-100 group-focus:opacity-100'
                      d='M14.05 6A5 5 0 0 1 18 10'></path>
                  </svg>
                  Schedule a call
                </Link>
              </div>
              {/* <!-- End Timeline --> */}
            </div>
            {/* <!-- End Grid --> */}
          </div>
        </SectionWrapper>
      </div>
      {/* <!-- End Approach --> */}
    </section>
  );
}
