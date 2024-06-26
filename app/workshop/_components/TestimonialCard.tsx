'use client';

import { BlockquoteIcon } from '@/assets/icons';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
// import type {  } from 'swiper/types';

import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
} from 'swiper/modules';

// Import Swiper styles
import { testimonials } from '@/constants';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialCard() {
  return (
    <div className={''}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Navigation, Pagination, A11y, FreeMode]}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          480: { slidesPerView: 1.3 },
          567: { slidesPerView: 1.4 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.1 },
          992: { slidesPerView: 2.2 },
          1024: { slidesPerView: 2.3 },
          1280: { slidesPerView: 2.4 },
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        a11y={{ enabled: true }}
        // _beforeBreakpoint={{
        //   640: { slidesPerView: 1 },
        //   768: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        //  }}
        rewind={true}
        loop={true}
        freeMode={true}
        draggable={true}
        edgeSwipeDetection={true}
        simulateTouch={true}
        grabCursor={true}
        navigation={false}
        pagination={true}
        className={''}>
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className={'w-full h-full my-12'}>
            <div className='text-left shadow-lg p-4 rounded-md'>
              <div className='mb-4 text-black aspect-video h-full w-full grid content-center'>
                <BlockquoteIcon className='mb-2' />
                <p className='mt-2 text-base leading-6 line-clamp-5'>
                  {testimonial.content}
                </p>
                <div className='text-sm mt-5'>
                  <Link
                    href='#'
                    className='font-medium leading-none text-indigo-600 hover:text-black transition duration-500 ease-in-out'>
                    {testimonial.name}
                  </Link>
                  <p>{testimonial.designation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
