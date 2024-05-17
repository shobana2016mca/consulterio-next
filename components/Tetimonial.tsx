"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
const testimonials = [
  {
    id: 1,
    message:
      "I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!",
    image: "/user1.jpg",
    username: "john",
    companyname: "infoys",
  },
  {
    id: 2,
    message:
      "I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!",
    image: "/user1.jpg",
    username: "DANIEL JOHNSON",
    companyname: "Dell",
  },
  {
    id: 3,
    message:
      "I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!",
    image: "/user1.jpg",
    username: "ROBERT GREEN",
    companyname: "TCS",
  },
  {
    id: 4,
    message:
      "I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!",
    image: "/user1.jpg",
    username: "OLIVER GOODMAN",
    companyname: "IBM",
  },
];

export default function Testimonial() {
  return (
    <>
      <Swiper
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
        className="mySwiper h-screen w-full"
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={testimonial.id}>
            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
              <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <img
                  className="mx-auto h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                  alt=""
                />
                <figure className="mt-10">
                  <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p>“{testimonial.message}”</p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <Image
                      className="mx-auto h-10 w-10 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.username}
                      width={32}
                      height={32}
                    />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">
                        {testimonial.username}
                      </div>

                      <div className="text-gray-600">
                        {testimonial.companyname}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
