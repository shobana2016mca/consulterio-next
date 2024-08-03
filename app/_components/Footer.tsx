import {
  ArrowRight,
  FacebookLogo,
  InstagramLogo,
  XLogo,
  YoutubeLogo,
} from '@/app/_assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from './SectionWrapper';

export default function Footer() {
  return (
    <footer className='w-full bg-sky-950'>
      <SectionWrapper>
        {/* <!--Grid--> */}
        <div className='grid grid-cols-1 gap-4 py-10 lg:grid-cols-4'>
          <div className='p-4 col-span-full lg:col-span-1 lg:justify-self-center lg:p-0'>
            <Link
              href={'/'}
              className={
                'h-14 w-full inline-flex lg:justify-start justify-center'
              }>
              <Image
                src={'/logo.png'}
                alt='footer-text'
                height={24}
                width={210}
                className='object-contain w-auto h-full'
              />
            </Link>
            {/* <Link
              href='#'
              className='flex justify-center cursor-pointer lg:justify-start'>
              <PagedoneLogo className='w-40 h-8' />
            </Link> */}
            <p className='py-8 text-sm text-center text-gray-200 lg:max-w-xs lg:text-left'>
              Trusted in 5 countries, 10k candidates & 250+ companies have taken
              our service.
            </p>
            <Link
              href='/contact-us'
              className='py-2.5 cursor-pointer px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0'>
              Contact us
            </Link>
          </div>

          {/* <!--End Col--> */}
          <div className='self-center w-full p-4 col-span-full md:col-span-1 justify-self-center lg:p-0'>
            <h4 className='text-lg font-medium text-gray-300 mb-7 '>
              Quick Links
            </h4>
            <ul className='text-sm transition-all duration-500'>
              <li className='mb-6'>
                <Link
                  href='/'
                  className='text-gray-300 cursor-pointer hover:text-gray-500'>
                  Home
                </Link>
              </li>
              <li className='mb-6'>
                <Link
                  href='/about-us'
                  className='text-gray-300 cursor-pointer hover:text-gray-500'>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/workshop'
                  className='text-gray-300 cursor-pointer hover:text-gray-500'>
                  Batch Details
                </Link>
              </li>
            </ul>
          </div>

          {/* <!--End Col--> */}
          <div className='self-center w-full p-4 col-span-full md:col-span-1 justify-self-center lg:p-0'>
            <h4 className='text-lg font-medium text-gray-300 mb-7'>Support</h4>
            <ul className='text-sm transition-all duration-500'>
              <li className='mb-6'>
                <Link
                  href='/customer-support'
                  className='text-gray-300 cursor-pointer hover:text-gray-500'>
                  Customer Support
                </Link>
              </li>
              <li className='mb-6'>
                <Link
                  href='/terms-of-conditions'
                  className='text-gray-300 cursor-pointer hover:text-gray-500'>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy-policy'
                  className='text-gray-300 cursor-pointer hover:text-gray-500'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* <!--End Col--> */}
          <div className='self-center w-full p-4 col-span-full lg:col-span-1 justify-self-center lg:p-0'>
            <h4 className='text-lg font-medium text-gray-300 mb-7'>
              Subscribe
            </h4>
            <p className='text-sm leading-6 text-gray-300 mb-7'>
              Subscribe to get the latest news from us
            </p>
            <Link
              href='#!'
              className='flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-indigo-600 transition-all duration-500 border border-indigo-600 rounded-full cursor-pointer w-fit hover:bg-indigo-50'>
              Subscribe
              <ArrowRight />
            </Link>
          </div>
        </div>
        {/* <!--Grid--> */}
        <div className='border-t border-gray-200 py-7'>
          <div className='flex flex-col items-center justify-center lg:justify-between lg:flex-row'>
            <span className='text-sm text-gray-500 '>
              @Consultero {new Date().getFullYear()}, All rights reserved.
            </span>
            <div className='flex mt-4 space-x-4 sm:justify-center sm:mt-0 '>
              <Link
                href='#'
                className='flex items-center justify-center w-8 h-8 transition-all duration-500 rounded-full cursor-pointer bg-black/80 hover:bg-black'>
                <XLogo className='w-5 h-5 text-white group-hover:text-white' />
              </Link>
              <Link
                href='#'
                className="group cursor-pointer relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center hover:bg-gray-900 before:content[''] before:absolute before:w-full before:h-full before:-z-10">
                <InstagramLogo className='w-8 h-8 text-white' />
              </Link>
              <Link
                href='#'
                className='relative  w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF]  hover:bg-gray-900 '>
                <FacebookLogo className='w-[1rem] h-[1rem] text-white' />
              </Link>
              <Link
                href='#'
                className='relative  w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#FF0000]  hover:bg-gray-900 '>
                <YoutubeLogo className='w-[1.25rem] h-[0.875rem] text-white' />
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}

// bg-sky-950
