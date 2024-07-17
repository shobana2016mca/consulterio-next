import SectionHeading from './SectionHeading';
import SectionWrapper from './SectionWrapper';

export default function CTASection() {
  return (
    <section className='pb-12'>
      <SectionWrapper>
        <div className='bg-indigo-600 rounded-2xl p-8 xl:p-11 space-y-4 md:space-y-6 lg:space-y-8'>
          <SectionHeading center color='text-white'>
            Subscribe to the latest offer
          </SectionHeading>
          <p className='text-indigo-200 text-center font-normal text-sm md:text-lg lg:text-xl leading-5 md:leading-6 lg:leading-8'>
            Join our community of subscribers and receive regular updates
            delivered straight to your inbox. It&apos;s quick, easy, and free
          </p>
          <form action='#'>
            <div className='max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between'>
              <label htmlFor='ctaEmail' className='sr-only'>
                Email
              </label>
              <input
                type='text'
                id='ctaEmail'
                name='ctaEmail'
                autoComplete='email'
                className='py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300  text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent'
                placeholder='Enter your email..'
              />
              <button
                type='button'
                className='py-2 px-5 text-sm bg-indigo-500 shadow-md rounded-full  text-white font-semibold hover:bg-indigo-700'>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </section>
  );
}
