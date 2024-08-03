'use client';

// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { useRef } from 'react';
import { Autoplay } from 'swiper/modules';
const testimonials = [
  {
    id: 1,
    message:
      'I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!',
    image: '/user1.jpg',
    username: 'john',
    companyname: 'infoys',
  },
  {
    id: 2,
    message:
      'I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!',
    image: '/user1.jpg',
    username: 'DANIEL JOHNSON',
    companyname: 'Dell',
  },
  {
    id: 3,
    message:
      'I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!',
    image: '/user1.jpg',
    username: 'ROBERT GREEN',
    companyname: 'TCS',
  },
  {
    id: 4,
    message:
      'I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!',
    image: '/user1.jpg',
    username: 'OLIVER GOODMAN',
    companyname: 'IBM',
  },
];

export default function TestimonialSection() {
  return (
    <>
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='w-full h-screen mySwiper'>
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={testimonial.id}>
            <section className='relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:px-8'>
              <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
              <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />
              <div className='max-w-2xl mx-auto lg:max-w-4xl'>
                <img
                  className='h-12 mx-auto'
                  src='https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg'
                  alt=''
                />
                <figure className='mt-10'>
                  <blockquote className='text-xl font-semibold leading-8 text-center text-gray-900 sm:text-2xl sm:leading-9'>
                    <p>“{testimonial.message}”</p>
                  </blockquote>
                  <figcaption className='mt-10'>
                    <Image
                      className='w-10 h-10 mx-auto rounded-full'
                      src={testimonial.image}
                      alt={testimonial.username}
                      width={32}
                      height={32}
                    />
                    <div className='flex items-center justify-center mt-4 space-x-3 text-base'>
                      <div className='font-semibold text-gray-900'>
                        {testimonial.username}
                      </div>

                      <div className='text-gray-600'>
                        {testimonial.companyname}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper> */}

      <div>
        <TestimonialCard />
      </div>
    </>
  );
}

function TestimonialCard() {
  const testimonialRef = useRef<SwiperRef>(null);

  function handleNext() {
    if (testimonialRef.current !== null) {
      testimonialRef?.current.swiper.slideNext();
    }
  }

  function handlePrev() {
    if (testimonialRef.current !== null) {
      testimonialRef?.current.swiper.slidePrev();
    }
  }

  return (
    <section className='py-24 '>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex flex-wrap items-center justify-center max-w-sm mx-auto gap-y-8 lg:gap-y-0 md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 sm:max-w-2xl lg:max-w-full'>
          <div className='w-full lg:w-2/5'>
            <span className='block mb-4 text-sm font-medium text-gray-500'>
              Testimonial
            </span>
            <h2 className='text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8'>
              23k+ Customers gave their{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600'>
                Feedback
              </span>
            </h2>
            {/* <!-- Slider controls --> */}
            <div className='flex items-center justify-center gap-4 lg:justify-start'>
              <button
                id='slider-button-left'
                className='flex items-center justify-center w-12 h-12 transition-all duration-500 border border-indigo-600 border-solid rounded-lg group hover:bg-indigo-600'
                onClick={() => handlePrev()}>
                <svg
                  className='w-6 h-6 text-indigo-600 group-hover:text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
              <button
                id='slider-button-right'
                className='flex items-center justify-center w-12 h-12 transition-all duration-500 border border-indigo-600 border-solid rounded-lg group hover:bg-indigo-600'
                onClick={() => handleNext()}>
                <svg
                  className='w-6 h-6 text-indigo-600 group-hover:text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>

          {/*  */}
          <div className='w-full lg:w-3/5'>
            {/* <!--Slider wrapper--> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              ref={testimonialRef}
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}>
              <SwiperSlide>
                <div className='p-6 transition-all duration-500 bg-white border border-gray-300 border-solid rounded-2xl max-sm:max-w-sm max-sm:mx-auto hover:border-indigo-600'>
                  <div className='flex items-center gap-5 mb-5 sm:mb-9'>
                    <Image
                      src='https://pagedone.io/asset/uploads/1696229969.png'
                      alt='avatar'
                      width={56}
                      height={56}
                    />
                    <div className='grid gap-1'>
                      <h5 className='font-medium text-gray-900 transition-all duration-500 '>
                        Jane D
                      </h5>
                      <span className='text-sm leading-6 text-gray-500'>
                        CEO{' '}
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 mb-5 transition-all duration-500 sm:mb-9 text-amber-500 '>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                  </div>
                  <p className='text-sm leading-6 text-gray-500 transition-all duration-500 min-h-24 group-hover:text-gray-800'>
                    The user interface of this pagedone is so intuitive, I was
                    able to start using it without any guidance.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='p-6 transition-all duration-500 bg-white border border-gray-300 border-solid rounded-2xl max-sm:max-w-sm max-sm:mx-auto hover:border-indigo-600'>
                  <div className='flex items-center gap-5 mb-5 sm:mb-9'>
                    <Image
                      src='	https://pagedone.io/asset/uploads/1696229994.png'
                      alt='avatar'
                      width={56}
                      height={56}
                    />
                    <div className='grid gap-1'>
                      <h5 className='font-medium text-gray-900 transition-all duration-500 '>
                        Harsh P.
                      </h5>
                      <span className='text-sm leading-6 text-gray-500'>
                        Product Designer{' '}
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 mb-5 transition-all duration-500 sm:mb-9 text-amber-500 '>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                  </div>
                  <p className='text-sm leading-6 text-gray-500 transition-all duration-500 min-h-24 group-hover:text-gray-800'>
                    I used to dread doing my taxes every year, but pagedone has
                    made the process so much simpler and stress-free.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='p-6 transition-all duration-500 bg-white border border-gray-300 border-solid rounded-2xl max-sm:max-w-sm max-sm:mx-auto hover:border-indigo-600'>
                  <div className='flex items-center gap-5 mb-5 sm:mb-9'>
                    <Image
                      src='https://pagedone.io/asset/uploads/1696229969.png'
                      alt='avatar'
                      width={56}
                      height={56}
                    />
                    <div className='grid gap-1'>
                      <h5 className='font-medium text-gray-900 transition-all duration-500 '>
                        Jane D
                      </h5>
                      <span className='text-sm leading-6 text-gray-500'>
                        CEO{' '}
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 mb-5 transition-all duration-500 sm:mb-9 text-amber-500 '>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                  </div>
                  <p className='text-sm leading-6 text-gray-500 transition-all duration-500 min-h-24 group-hover:text-gray-800'>
                    The user interface of this pagedone is so intuitive, I was
                    able to start using it without any guidance.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='p-6 transition-all duration-500 bg-white border border-gray-300 border-solid rounded-2xl max-sm:max-w-sm max-sm:mx-auto hover:border-indigo-600'>
                  <div className='flex items-center gap-5 mb-5 sm:mb-9'>
                    <Image
                      src='	https://pagedone.io/asset/uploads/1696229994.png'
                      alt='avatar'
                      width={56}
                      height={56}
                    />
                    <div className='grid gap-1'>
                      <h5 className='font-medium text-gray-900 transition-all duration-500 '>
                        Harsh P.
                      </h5>
                      <span className='text-sm leading-6 text-gray-500'>
                        Product Designer{' '}
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 mb-5 transition-all duration-500 sm:mb-9 text-amber-500 '>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                    <svg
                      className='w-5 h-5'
                      viewBox='0 0 18 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z'
                        fill='currentColor'></path>
                    </svg>
                  </div>
                  <p className='text-sm leading-6 text-gray-500 transition-all duration-500 min-h-24 group-hover:text-gray-800'>
                    I used to dread doing my taxes every year, but pagedone has
                    made the process so much simpler and stress-free.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
