import { Metadata } from 'next';

import SectionHeading from '../_components/SectionHeading';
import SectionWrapper from '../_components/SectionWrapper';
import { quotePageContent } from '../_constants';
import QuoteForm from './_components/QuoteForm';
import QuoteServices from './_components/QuoteServices';

export const metadata: Metadata = {
  title: 'Consultero | Get a Quote',
  description: 'Get a quote for your custom needs',
};

export default function GetAQuote() {
  return (
    <main>
      <section className='text-gray-800'>
        <SectionWrapper>
          <div className='grid grid-cols-1 gap-8 py-4 lg:grid-cols-2 md:py-8 lg:py-16'>
            <div className='flex flex-col items-stretch px-4 gap-y-4 lg:px-6 xl:px-12'>
              <div className={'space-y-4'}>
                <p className='text-center text-blue-600 lg:text-start'>
                  Have Custom Needs
                </p>
                <SectionHeading>
                  Get a Quote for Your Custom Needs
                </SectionHeading>
                {/* <h3 className='mb-5 text-base font-semibold md:text-2xl lg:text-3xl'>
                Get Custom Pricing
                </h3> */}
                <p className='text-sm text-gray-600 md:text-base lg:text-lg'>
                  &lsquo;Welcome to our consultero! We are committed to
                  providing the best service possible. Our team works tirelessly
                  to ensure customer satisfaction. We value your feedback and
                  strive to improve our services based on it. Thank you for
                  choosing us!&lsquo;
                </p>
              </div>

              {quotePageContent.map((content) => (
                <QuoteServices content={content} key={content.id} />
              ))}
            </div>

            <div className='mt-8 mb-8 bg-white border border-gray-100 shadow-sm shadow-gray-500/20 sm:rounded-lg sm:shadow-lg lg:mt-0'>
              <div className='relative p-4 py-8 border-b border-gray-300 sm:px-8'>
                <h3 className='inline-block mb-1 text-base font-medium md:text-2xl lg:text-3xl'>
                  <span className='mr-4'>Get a quote!</span>
                  <span className='inline-block rounded-md bg-blue-100 px-1 py-0.5 lg:px-2 lg:py-1 lg:text-sm text-xs text-blue-700 sm:inline'>
                    Quick Response
                  </span>
                </h3>
                <p className='text-gray-600'>Contact us for custom use cases</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </SectionWrapper>
      </section>
    </main>
  );
}
