"use client";
import React, { useRef, useState } from "react";
const card = [
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
function Card() {
  return (
    <section className="flex justify-center items-center self-stretch px-16 py-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
      <article className="flex flex-col items-center mt-20 mb-12 w-full max-w-[1438px] max-md:my-10 max-md:max-w-full">
        <h3 className="text-3xl font-extrabold tracking-widest text-teal-400 uppercase">
          Process I Plan
        </h3>
        <h4 className="mt-8 text-5xl text-center capitalize text-sky-950 max-md:max-w-full max-md:text-4xl">
          Assist you to find a job that matches with your goal
        </h4>
        <section className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <Card
              id="01"
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0001885fded6c7ab8e6fa7c73b73299d1c99675779fcebe79901b7fe14e405f3?apiKey=54709c8bd30b4ce38ba82e61049e17ec&"
              title="Searching"
              description="Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis."
            />
            <Card
              id="02"
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/528f642c4715de6efdc52df0b66b877d59ba6c949643f6b82e1db2cbeaed81ed?apiKey=54709c8bd30b4ce38ba82e61049e17ec&"
              title="Mock Interview"
              description="Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis."
            />
            <Card
              id="03"
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/44f1ea5884529bc7e3f0782425c4b59fae60b519f5ce98f00abb052d2f9d6a4f?apiKey=54709c8bd30b4ce38ba82e61049e17ec&"
              title="Reference Check"
              description="Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis."
            />
            <Card
              id="1"
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ecda037de64a3304b1f1d6e9dc21e0726d69fa158711a0d7ebc8d6b36d7ab224?apiKey=54709c8bd30b4ce38ba82e61049e17ec&"
              title="Get you Onboard"
              description="Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis."
            />
          </div>
        </section>
      </article>
    </section>
  );
}
