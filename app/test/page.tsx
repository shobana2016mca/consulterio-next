"use client";

import MyComponent from "@/components/Test";
import React from "react";

export default function page() {
  return (
    <div>
      <MyComponent />
      <AboutPage />
      <Contact2 />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center px-5 pb-16 w-full backdrop-blur-[2px] bg-white bg-opacity-50 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-stretch px-12 py-3.5 w-full bg-stone-300 bg-opacity-10 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
            className="shrink-0 w-14 aspect-[0.95]"
          />
          <div className="flex gap-5 justify-between items-start my-auto text-2xl whitespace-nowrap text-black text-opacity-60">
            <div className="mt-4">Home</div>
            <div className="flex flex-col text-2xl font-medium text-black">
              <div className="shrink-0 self-center w-2.5 h-2.5 bg-blue-700 rounded-full" />
              <div className="mt-1.5">About</div>
            </div>
            <div className="mt-4">QA</div>
          </div>
          <div className="justify-center px-8 py-5 text-2xl text-blue-700 border-solid border-[3px] border-blue-700 border-opacity-10 rounded-[45px] max-md:px-5">
            Contact us
          </div>
        </div>
        <div className="mt-28 text-8xl text-black max-md:mt-10 max-md:text-4xl">
          <span className="font-bold">About</span>
          <span className=""> us</span>
        </div>
        <div className="flex gap-5 items-start self-stretch mt-7 w-full max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/03fe37e4b44f2ef8d6e83bdd2afe12594c1f670518926086cb8a2474dd32ed11?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
            className="shrink-0 self-start aspect-[0.17] w-[42px]"
          />
          <div className="flex flex-col grow shrink-0 self-end mt-12 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
            <div className="self-center text-2xl text-center text-neutral-700 max-md:max-w-full">
              WE ARE CONSTANTLY INNOVATING AND CREATIVE
            </div>
            <div className="p-5 mt-44 border-solid backdrop-blur-[100px] bg-zinc-100 bg-opacity-20 border-[10px] border-sky-100 border-opacity-50 rounded-[41px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6faa1dcaf6ed7fdba0b26e36c3e33e8b9157b2616f2f759bc362f496b9371d7b?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6faa1dcaf6ed7fdba0b26e36c3e33e8b9157b2616f2f759bc362f496b9371d7b?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6faa1dcaf6ed7fdba0b26e36c3e33e8b9157b2616f2f759bc362f496b9371d7b?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6faa1dcaf6ed7fdba0b26e36c3e33e8b9157b2616f2f759bc362f496b9371d7b?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6faa1dcaf6ed7fdba0b26e36c3e33e8b9157b2616f2f759bc362f496b9371d7b?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6faa1dcaf6ed7fdba0b26e36c3e33e8b9157b2616f2f759bc362f496b9371d7b?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6faa1dcaf6ed7fdba0b26e36c3e33e8b9157b2616f2f759bc362f496b9371d7b?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6faa1dcaf6ed7fdba0b26e36c3e33e8b9157b2616f2f759bc362f496b9371d7b?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                    className="grow w-full aspect-[0.97] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    <div className="text-6xl text-center text-black text-opacity-80 max-md:max-w-full max-md:text-4xl">
                      Who We Are
                    </div>
                    <div className="shrink-0 mt-11 h-0.5 bg-zinc-800 bg-opacity-60 w-[167px] max-md:mt-10" />
                    <div className="mt-12 text-2xl tracking-widest leading-[50px] text-black text-opacity-70 max-md:mt-10 max-md:max-w-full">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elementum lobortis eget ultricies nisl, ac. Semper sed
                      mauris pellentesque eget iaculis enim. Amet, mi in
                      commodo, sapien, dictumst. Ac mauris ultrices a nibh
                      imperdiet neque, molestie sed pharetra.
                    </div>
                    <div className="flex gap-5 self-end mt-6 max-md:flex-wrap max-md:pr-5">
                      <div className="shrink-0 max-w-full bg-white h-[82px] w-[285px]" />
                      <div className="shrink-0 max-w-full bg-violet-300 border-4 border-white border-solid h-[82px] w-[285px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 text-6xl font-medium text-center text-black text-opacity-80 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Grow up your Workflow
          <br />
          Speed
        </div>
        <div className="flex overflow-hidden relative z-10 flex-col items-center px-16 pt-20 pb-1 max-w-full min-h-[609px] w-[952px] max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87c9772f8fca7ef82cfae2243f7be19b75c5be11862b5565dad229804feae5ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c9772f8fca7ef82cfae2243f7be19b75c5be11862b5565dad229804feae5ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c9772f8fca7ef82cfae2243f7be19b75c5be11862b5565dad229804feae5ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c9772f8fca7ef82cfae2243f7be19b75c5be11862b5565dad229804feae5ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c9772f8fca7ef82cfae2243f7be19b75c5be11862b5565dad229804feae5ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c9772f8fca7ef82cfae2243f7be19b75c5be11862b5565dad229804feae5ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c9772f8fca7ef82cfae2243f7be19b75c5be11862b5565dad229804feae5ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c9772f8fca7ef82cfae2243f7be19b75c5be11862b5565dad229804feae5ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col mt-16 max-w-full w-[716px] max-md:mt-10">
            <div className="self-center text-4xl text-center leading-[53px] text-black text-opacity-60 tracking-[2.34px] max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              dignissim eu, hac mauris. Pharetra accumsan faucibus dolor, enim.
            </div>
            <div className="mt-24 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="justify-center px-7 py-20 text-4xl font-medium text-center whitespace-nowrap rounded-full border-8 border-sky-200 border-solid leading-[58.8px] stroke-[8px] text-blue-700 text-opacity-60 tracking-[2.6px] max-md:px-5 max-md:mt-10">
                    1000+
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="justify-center px-7 py-20 text-4xl font-medium text-center whitespace-nowrap rounded-full border-8 border-sky-200 border-solid leading-[58.8px] stroke-[8px] text-blue-700 text-opacity-60 tracking-[2.6px] max-md:px-5 max-md:mt-10">
                    99.9%
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="justify-center px-10 py-20 text-4xl font-medium text-center whitespace-nowrap rounded-full border-8 border-sky-200 border-solid leading-[58.8px] stroke-[8px] text-blue-700 text-opacity-60 tracking-[2.6px] max-md:px-5 max-md:mt-10">
                    2.4m
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col self-stretch py-20 pr-4 pl-20 w-full fill-slate-100 min-h-[913px] max-md:pl-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9bfc8582bec0ac5af4a525e74c51d4b1a50447ac0ba682b1115034064318c78?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-5 self-center ml-14 max-w-full text-2xl tracking-widest leading-9 text-center whitespace-nowrap text-black text-opacity-60 w-[673px] max-md:flex-wrap">
            <div className="flex-auto">percentage</div>
            <div className="flex-auto">percentage</div>
            <div className="flex-auto">percentage</div>
          </div>
          <div className="relative mt-32 ml-11 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow text-2xl leading-9 text-black text-opacity-60 max-md:mt-5 max-md:max-w-full">
                  <div className="text-7xl font-medium text-black text-opacity-80 max-md:max-w-full max-md:text-4xl">
                    our Goals
                  </div>
                  <div className="mt-14 tracking-widest leading-9 max-md:mt-10 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Auctor nunc posuere aliquam elit proin. Consequat quam vel,
                    praesent tortor.
                  </div>
                  <div className="flex gap-5 mt-16 tracking-widest text-center max-md:flex-wrap max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ee66afc594d0a866414c5899d6f26c6ac0feca48e2e17c503bcb7cb521ecd17?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                      className="shrink-0 w-9 aspect-square"
                    />
                    <div className="flex-auto max-md:max-w-full">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                  <div className="flex gap-5 mt-8 tracking-widest text-center max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ee66afc594d0a866414c5899d6f26c6ac0feca48e2e17c503bcb7cb521ecd17?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                      className="shrink-0 w-9 aspect-square"
                    />
                    <div className="flex-auto max-md:max-w-full">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                  <div className="flex gap-5 mt-8 tracking-widest text-center max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ee66afc594d0a866414c5899d6f26c6ac0feca48e2e17c503bcb7cb521ecd17?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                      className="shrink-0 w-9 aspect-square"
                    />
                    <div className="flex-auto max-md:max-w-full">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                  <div className="flex gap-5 mt-8 tracking-widest text-center max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ee66afc594d0a866414c5899d6f26c6ac0feca48e2e17c503bcb7cb521ecd17?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                      className="shrink-0 w-9 aspect-square"
                    />
                    <div className="flex-auto max-md:max-w-full">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                  <div className="flex gap-5 self-start mt-12 tracking-widest text-center text-black max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd9fad24f495f6c176655d9d3ca0bd8c444a82a042cd1c910f98a1bda519c54b?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                      className="shrink-0 aspect-square w-[30px]"
                    />
                    <div className="flex-auto">Learn More</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/349bdf712d7eaafa88745fda7539aa3a8ded64fdf3458a83d90b80c2dd4ed5ac?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/349bdf712d7eaafa88745fda7539aa3a8ded64fdf3458a83d90b80c2dd4ed5ac?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/349bdf712d7eaafa88745fda7539aa3a8ded64fdf3458a83d90b80c2dd4ed5ac?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/349bdf712d7eaafa88745fda7539aa3a8ded64fdf3458a83d90b80c2dd4ed5ac?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/349bdf712d7eaafa88745fda7539aa3a8ded64fdf3458a83d90b80c2dd4ed5ac?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/349bdf712d7eaafa88745fda7539aa3a8ded64fdf3458a83d90b80c2dd4ed5ac?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/349bdf712d7eaafa88745fda7539aa3a8ded64fdf3458a83d90b80c2dd4ed5ac?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/349bdf712d7eaafa88745fda7539aa3a8ded64fdf3458a83d90b80c2dd4ed5ac?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                  className="self-stretch my-auto w-full aspect-square max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex z-10 gap-5 mt-0 max-w-full bg-white border-4 border-sky-700 border-solid rounded-[58px] w-[412px]">
          <div className="flex justify-center items-center px-6 bg-sky-700 rounded-full h-[85px] w-[85px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2a1b1d42d191a965cbb76fe64c0ed31ae62feff589989b17b7f851b1806ef15?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
              className="w-10 aspect-square"
            />
          </div>
          <div className="flex-auto my-auto text-4xl text-sky-700">
            Lets Start
          </div>
        </div>
        <div className="mt-14 text-7xl font-medium text-black text-opacity-80 max-md:mt-10 max-md:text-4xl">
          Our Team
        </div>
        <div className="mt-16 text-4xl text-black text-opacity-60 max-md:mt-10 max-md:max-w-full">
          team with passionate talanted peapol
        </div>
        <div className="z-10 mt-20 w-full max-w-[1272px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/529db65fd72e938109f9e88185c955a7bf4205506d2d173d3a4f00629ab99db0?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/529db65fd72e938109f9e88185c955a7bf4205506d2d173d3a4f00629ab99db0?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/529db65fd72e938109f9e88185c955a7bf4205506d2d173d3a4f00629ab99db0?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/529db65fd72e938109f9e88185c955a7bf4205506d2d173d3a4f00629ab99db0?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/529db65fd72e938109f9e88185c955a7bf4205506d2d173d3a4f00629ab99db0?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/529db65fd72e938109f9e88185c955a7bf4205506d2d173d3a4f00629ab99db0?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/529db65fd72e938109f9e88185c955a7bf4205506d2d173d3a4f00629ab99db0?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/529db65fd72e938109f9e88185c955a7bf4205506d2d173d3a4f00629ab99db0?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                className="shrink-0 mt-28 max-w-full rounded-full border-4 border-white border-solid aspect-square w-[258px] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/264d2895cb2213377b01f6802d4e2292b5f40bbf97cb70597d2b90eddf786a68?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/264d2895cb2213377b01f6802d4e2292b5f40bbf97cb70597d2b90eddf786a68?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/264d2895cb2213377b01f6802d4e2292b5f40bbf97cb70597d2b90eddf786a68?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/264d2895cb2213377b01f6802d4e2292b5f40bbf97cb70597d2b90eddf786a68?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/264d2895cb2213377b01f6802d4e2292b5f40bbf97cb70597d2b90eddf786a68?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/264d2895cb2213377b01f6802d4e2292b5f40bbf97cb70597d2b90eddf786a68?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/264d2895cb2213377b01f6802d4e2292b5f40bbf97cb70597d2b90eddf786a68?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/264d2895cb2213377b01f6802d4e2292b5f40bbf97cb70597d2b90eddf786a68?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                className="shrink-0 max-w-full rounded-full border-4 border-white border-solid aspect-square w-[258px] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/27627926c032f091b282eef17b45947ec4259ce50a333c7184177f061df56506?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/27627926c032f091b282eef17b45947ec4259ce50a333c7184177f061df56506?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27627926c032f091b282eef17b45947ec4259ce50a333c7184177f061df56506?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/27627926c032f091b282eef17b45947ec4259ce50a333c7184177f061df56506?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/27627926c032f091b282eef17b45947ec4259ce50a333c7184177f061df56506?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27627926c032f091b282eef17b45947ec4259ce50a333c7184177f061df56506?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/27627926c032f091b282eef17b45947ec4259ce50a333c7184177f061df56506?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/27627926c032f091b282eef17b45947ec4259ce50a333c7184177f061df56506?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                className="shrink-0 max-w-full rounded-full border-4 border-white border-solid aspect-square w-[258px] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc212173364994b01efbe99e915301bfca5c2172b0a3502b96aa44d73cf82b81?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc212173364994b01efbe99e915301bfca5c2172b0a3502b96aa44d73cf82b81?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc212173364994b01efbe99e915301bfca5c2172b0a3502b96aa44d73cf82b81?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc212173364994b01efbe99e915301bfca5c2172b0a3502b96aa44d73cf82b81?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc212173364994b01efbe99e915301bfca5c2172b0a3502b96aa44d73cf82b81?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc212173364994b01efbe99e915301bfca5c2172b0a3502b96aa44d73cf82b81?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc212173364994b01efbe99e915301bfca5c2172b0a3502b96aa44d73cf82b81?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc212173364994b01efbe99e915301bfca5c2172b0a3502b96aa44d73cf82b81?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                className="shrink-0 mt-28 max-w-full rounded-full border-4 border-white border-solid aspect-square w-[258px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col items-center self-stretch px-16 py-20 w-full min-h-[1062px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c62acbda04716aad60779cbcac7db5db72fbbfb850919bb807266c32049040f2?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative mt-16 text-7xl font-medium text-black text-opacity-80 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            You are in Good Company
          </div>
          <div className="relative mt-16 text-2xl tracking-widest leading-9 text-center text-black text-opacity-60 max-md:mt-10 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
            nullam nec turpis <br />
            porttitor nisl, bibendum a turpis.
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/213bf103983baecd3b4c9d1a1ad3e3c7a8f07884e7bb854a88f4fb6b9082ba77?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/213bf103983baecd3b4c9d1a1ad3e3c7a8f07884e7bb854a88f4fb6b9082ba77?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/213bf103983baecd3b4c9d1a1ad3e3c7a8f07884e7bb854a88f4fb6b9082ba77?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/213bf103983baecd3b4c9d1a1ad3e3c7a8f07884e7bb854a88f4fb6b9082ba77?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/213bf103983baecd3b4c9d1a1ad3e3c7a8f07884e7bb854a88f4fb6b9082ba77?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/213bf103983baecd3b4c9d1a1ad3e3c7a8f07884e7bb854a88f4fb6b9082ba77?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/213bf103983baecd3b4c9d1a1ad3e3c7a8f07884e7bb854a88f4fb6b9082ba77?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/213bf103983baecd3b4c9d1a1ad3e3c7a8f07884e7bb854a88f4fb6b9082ba77?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
            className="self-stretch mt-20 w-full aspect-[5] max-md:mt-10 max-md:max-w-full"
          />
          <div className="flex relative flex-col pt-8 mt-6 mb-16 max-w-full bg-white rounded-xl w-[878px] max-md:mb-10">
            <div className="self-center text-3xl font-light text-black text-opacity-40 max-md:max-w-full">
              *eg: awsome_email@gmail.com
            </div>
            <div className="justify-center items-center px-16 py-9 mt-7 text-4xl text-white rounded-xl max-md:px-5 max-md:max-w-full">
              SAY HELLO
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-16 w-full max-w-[1360px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-auto gap-5 items-center my-auto text-2xl font-medium text-black text-opacity-80 max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
              className="shrink-0 self-stretch w-14 aspect-[0.95]"
            />
            <div className="flex-auto self-stretch my-auto">
              © Copyright 2021. by MedAmineCk
            </div>
            <div className="flex-auto self-stretch my-auto">
              Terme of Services
            </div>
            <div className="flex-auto self-stretch my-auto">Privacy Policy</div>
          </div>
          <div className="flex shrink gap-5 justify-between px-px basis-auto grow-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a04e0608743f9b57e86a4f05085d07b84da15e508453f11cd5a87eeadf7495af?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a04e0608743f9b57e86a4f05085d07b84da15e508453f11cd5a87eeadf7495af?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a04e0608743f9b57e86a4f05085d07b84da15e508453f11cd5a87eeadf7495af?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a04e0608743f9b57e86a4f05085d07b84da15e508453f11cd5a87eeadf7495af?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a04e0608743f9b57e86a4f05085d07b84da15e508453f11cd5a87eeadf7495af?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a04e0608743f9b57e86a4f05085d07b84da15e508453f11cd5a87eeadf7495af?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a04e0608743f9b57e86a4f05085d07b84da15e508453f11cd5a87eeadf7495af?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a04e0608743f9b57e86a4f05085d07b84da15e508453f11cd5a87eeadf7495af?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
              className="shrink-0 bg-indigo-800 rounded-full aspect-square h-[72px] w-[72px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66c82051c3c973f306cc8d832aa9b171995fc5a43f76dacd82de466f8a015556?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c82051c3c973f306cc8d832aa9b171995fc5a43f76dacd82de466f8a015556?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c82051c3c973f306cc8d832aa9b171995fc5a43f76dacd82de466f8a015556?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c82051c3c973f306cc8d832aa9b171995fc5a43f76dacd82de466f8a015556?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c82051c3c973f306cc8d832aa9b171995fc5a43f76dacd82de466f8a015556?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c82051c3c973f306cc8d832aa9b171995fc5a43f76dacd82de466f8a015556?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c82051c3c973f306cc8d832aa9b171995fc5a43f76dacd82de466f8a015556?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66c82051c3c973f306cc8d832aa9b171995fc5a43f76dacd82de466f8a015556?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
              className="shrink-0 bg-green-500 rounded-full aspect-square h-[72px] w-[72px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/db8804c6472eaab753012466fa36a2bb2d4ab414f5d0fb5f460e8a0a82fe6461?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8804c6472eaab753012466fa36a2bb2d4ab414f5d0fb5f460e8a0a82fe6461?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8804c6472eaab753012466fa36a2bb2d4ab414f5d0fb5f460e8a0a82fe6461?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8804c6472eaab753012466fa36a2bb2d4ab414f5d0fb5f460e8a0a82fe6461?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8804c6472eaab753012466fa36a2bb2d4ab414f5d0fb5f460e8a0a82fe6461?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8804c6472eaab753012466fa36a2bb2d4ab414f5d0fb5f460e8a0a82fe6461?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8804c6472eaab753012466fa36a2bb2d4ab414f5d0fb5f460e8a0a82fe6461?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/db8804c6472eaab753012466fa36a2bb2d4ab414f5d0fb5f460e8a0a82fe6461?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
              className="shrink-0 bg-rose-500 rounded-full aspect-square h-[72px] w-[72px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const NavBar: React.FC = () => (
  <nav className="flex gap-5 justify-between px-12 py-3.5 w-full bg-stone-300 bg-opacity-10 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <Image
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
      alt="Logo"
      className="shrink-0 w-14 aspect-[0.95]"
    />
    <div className="flex gap-5 justify-between my-auto text-2xl whitespace-nowrap text-black text-opacity-60">
      <a href="#home" className="hover:text-black">
        Home
      </a>
      <a href="#about" className="hover:text-black">
        About
      </a>
      <a href="#qa" className="font-medium text-black">
        QA
      </a>
    </div>
    <a
      href="#contact"
      className="justify-center px-8 py-5 text-2xl font-medium text-white shadow-sm rounded-[45px] max-md:px-5 bg-blue-700"
    >
      Contact us
    </a>
  </nav>
);

const Footer: React.FC = () => (
  <footer className="flex gap-5 self-center mt-32 w-full max-w-[1360px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
    <div className="flex flex-auto gap-5 items-center my-auto text-2xl font-medium text-black text-opacity-80 max-md:flex-wrap max-md:max-w-full">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc252cac180e5c31b6f2fe605176a1201e50a20ddc464341671847f3ab32752?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
        alt="Logo"
        className="shrink-0 self-stretch w-14 aspect-[0.95]"
      />
      <div className="flex-auto self-stretch my-auto">
        © Copyright 2021. by MedAmineCk
      </div>
      <a href="#terms" className="flex-auto self-stretch my-auto">
        Terms of Services
      </a>
      <a href="#privacy" className="flex-auto self-stretch my-auto">
        Privacy Policy
      </a>
    </div>
    <div className="flex shrink gap-5 justify-between px-5 basis-auto grow-0">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a04e0608743f9b57e86a4f05085d07b84da15e508453f11cd5a87eeadf7495af?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
        alt="Social 1"
        className="shrink-0 bg-indigo-800 rounded-full aspect-square h-[72px] w-[72px]"
      />
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/66c82051c3c973f306cc8d832aa9b171995fc5a43f76dacd82de466f8a015556?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
        alt="Social 2"
        className="shrink-0 bg-green-500 rounded-full aspect-square h-[72px] w-[72px]"
      />
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/46c31b44734e38632b35478c4f0065ab81714246c300adeb71fd429648ad889b?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
        alt="Social 3"
        className="shrink-0 bg-rose-500 rounded-full aspect-square h-[72px] w-[72px]"
      />
    </div>
  </footer>
);

interface ContactProps {
  phone: string;
  email: string;
  name: string;
  address: string;
}

const ContactDetails: React.FC<ContactProps> = ({
  phone,
  email,
  name,
  //   title,
  address,
}) => (
  <section className="flex flex-col self-stretch my-auto text-2xl text-black max-md:mt-10">
    <div className="flex gap-5">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddc396a576c2e6424cd3a044aa22c1739ece0482fe853ae6dcb23ab657d515ee?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
        alt="Phone Icon"
        className="shrink-0 aspect-square w-[53px]"
      />
      <div className="flex-auto my-auto">{phone}</div>
    </div>
    <div className="flex gap-5 mt-14 whitespace-nowrap max-md:mt-10">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f2ecab4bfb6d6c7efb78d56f16fc7bcd27b67a1474fb4fcaedc66df56b81426?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
        alt="Email Icon"
        className="shrink-0 aspect-square w-[45px]"
      />
      <div className="flex-auto my-auto">{email}</div>
    </div>
    <div className="flex gap-5 items-start mt-14 leading-8 text-black text-opacity-80 max-md:mt-10">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/02aaeb1e5d5610aa8869c7608ebfeb3d34c3c67b37698e86ed84ee04d02bbdd7?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
        alt="User Icon"
        className="shrink-0 rounded-full border-4 border-blue-700 border-dashed aspect-square stroke-[4px] w-[45px]"
      />
      <div className="flex-auto mt-3.5">
        {name}
        <br /> {address}
      </div>
    </div>
  </section>
);

interface ContactFormProps {
  onSubmit: (data: any) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // collect data and call onSubmit
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col grow text-2xl font-medium text-slate-500 max-md:mt-10 max-md:max-w-full"
    >
      <label htmlFor="fullName" className="mt-8 max-md:max-w-full">
        FULL NAME
      </label>
      <input
        id="fullName"
        className="shrink-0 mt-1.5 rounded-md border-2 border-solid bg-zinc-200 bg-opacity-40 border-gray-300 border-opacity-40 h-[59px] max-md:max-w-full"
      />
      <label htmlFor="email" className="mt-8 max-md:max-w-full">
        EMAIL
      </label>
      <input
        type="email"
        id="email"
        className="shrink-0 mt-1.5 rounded-md border-2 border-solid bg-zinc-200 bg-opacity-40 border-gray-300 border-opacity-40 h-[59px] max-md:max-w-full"
      />
      <label htmlFor="subject" className="mt-6 max-md:max-w-full">
        SUBJECT
      </label>
      <input
        id="subject"
        className="shrink-0 mt-1.5 rounded-md border-2 border-solid bg-zinc-200 bg-opacity-40 border-gray-300 border-opacity-40 h-[59px] max-md:max-w-full"
      />
      <label htmlFor="message" className="mt-8 max-md:max-w-full">
        MESSAGE
      </label>
      <textarea
        id="message"
        className="shrink-0 mt-1.5 rounded-md border-2 border-solid bg-zinc-200 bg-opacity-40 border-gray-300 border-opacity-40 h-[181px] max-md:max-w-full"
      />
      <button
        type="submit"
        className="justify-center items-center px-16 py-4 mt-6 text-white bg-blue-700 rounded-md max-md:px-5 max-md:max-w-full"
      >
        Send this message
      </button>
    </form>
  );
};

const ContactUs: React.FC = () => {
  const contactInfo = {
    phone: "+49 30 901820",
    email: "custom_email@domain.com",
    name: "Herrn Eberhard Wellhausen",
    address: "Wittekindshof Schulstrasse 4 32547 Bad Oyenhausen GERMANY",
  };

  return (
    <section className="flex gap-5 mt-28 w-full max-md:flex-wrap max-md:mt-10 max-md:max-full">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae2bc67c435eec72a642d6e5843b9255fb24b859f53ef3bc50d0d9331db11030?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
        alt=""
        className="shrink-0 self-start mt-28 aspect-[0.17] w-[42px] max-md:mt-10"
      />
      <div className="flex flex-col grow shrink-0 items-center px-5 basis-0 w-fit max-md:max-w-full">
        <h1 className="text-8xl font-bold text-black max-md:max-w-full max-md:text-4xl">
          Contact us
        </h1>
        <p className="mt-20 text-2xl text-center text-neutral-700 max-md:mt-10 max-md:max-w-full">
          Feel free to contact us any time you want
        </p>
        <div className="flex gap-0 self-stretch px-0.5 mt-24 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col grow shrink-0 px-11 py-20 rounded-3xl border-4 border-gray-200 border-solid backdrop-blur-[100px] basis-0 bg-slate-50 bg-opacity-50 w-fit max-md:px-5 max-md:max-w-full">
            <div className="mt-3.5 max-w-full w-[754px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <ContactForm onSubmit={(data) => console.log(data)} />
                <ContactDetails {...contactInfo} />
              </div>
            </div>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6851b5d8a2dfffe3f2eccd61f32d4deef1cddc83370853ac068167a53308f62?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
              alt=""
              className="shrink-0 self-start w-24 aspect-square mt-[628px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => (
  <div className="flex flex-col justify-center bg-white">
    <div className="flex flex-col pb-16 w-full backdrop-blur-[2px] bg-white bg-opacity-50 max-md:max-w-full">
      <NavBar />
      <ContactUs />
    </div>
    <Footer />
  </div>
);

function Contact2() {
  return (
    <div className="flex gap-5 mt-28 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae2bc67c435eec72a642d6e5843b9255fb24b859f53ef3bc50d0d9331db11030?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
        className="shrink-0 self-start mt-28 aspect-[0.17] w-[42px] max-md:mt-10"
      />
      <div className="flex flex-col grow shrink-0 items-center px-5 basis-0 w-fit max-md:max-w-full">
        <div className="text-8xl font-bold text-black max-md:max-w-full max-md:text-4xl">
          Contact us
        </div>
        <div className="mt-20 text-2xl text-center text-neutral-700 max-md:mt-10 max-md:max-w-full">
          Feel free to contact us any time you want
        </div>
        <div className="flex gap-0 self-stretch px-0.5 mt-24 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col grow shrink-0 px-11 py-20 rounded-3xl border-4 border-gray-200 border-solid backdrop-blur-[100px] basis-0 bg-slate-50 bg-opacity-50 w-fit max-md:px-5 max-md:max-w-full">
            <div className="mt-3.5 max-w-full w-[754px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-10">
                    <div className="text-6xl font-bold text-black max-md:text-4xl">
                      Let's talk!
                    </div>
                    <div className="mt-14 text-2xl text-blue-700 max-md:mt-10">
                      hate forms? Instead, send us an{" "}
                      <span className="text-blue-700">e-mail.</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                  <div className="mt-28 text-2xl font-medium text-slate-500 max-md:mt-10">
                    FULL NAME
                  </div>
                </div>
              </div>
            </div>
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-2xl text-black max-md:mt-10">
                    <div className="flex gap-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddc396a576c2e6424cd3a044aa22c1739ece0482fe853ae6dcb23ab657d515ee?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                        className="shrink-0 aspect-square w-[53px]"
                      />
                      <div className="flex-auto my-auto">+49 30 901820</div>
                    </div>
                    <div className="flex gap-5 mt-14 whitespace-nowrap max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f2ecab4bfb6d6c7efb78d56f16fc7bcd27b67a1474fb4fcaedc66df56b81426?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                        className="shrink-0 aspect-square w-[45px]"
                      />
                      <div className="flex-auto my-auto">
                        custom_email@doamin.com
                      </div>
                    </div>
                    <div className="flex gap-5 items-start mt-14 leading-8 text-black text-opacity-80 max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/02aaeb1e5d5610aa8869c7608ebfeb3d34c3c67b37698e86ed84ee04d02bbdd7?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/02aaeb1e5d5610aa8869c7608ebfeb3d34c3c67b37698e86ed84ee04d02bbdd7?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02aaeb1e5d5610aa8869c7608ebfeb3d34c3c67b37698e86ed84ee04d02bbdd7?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/02aaeb1e5d5610aa8869c7608ebfeb3d34c3c67b37698e86ed84ee04d02bbdd7?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/02aaeb1e5d5610aa8869c7608ebfeb3d34c3c67b37698e86ed84ee04d02bbdd7?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02aaeb1e5d5610aa8869c7608ebfeb3d34c3c67b37698e86ed84ee04d02bbdd7?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/02aaeb1e5d5610aa8869c7608ebfeb3d34c3c67b37698e86ed84ee04d02bbdd7?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/02aaeb1e5d5610aa8869c7608ebfeb3d34c3c67b37698e86ed84ee04d02bbdd7?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                        className="shrink-0 rounded-full border-4 border-blue-700 border-dashed aspect-square stroke-[4px] w-[45px]"
                      />
                      <div className="flex-auto mt-3.5">
                        Herrn
                        <br />
                        Eberhard Wellhausen
                        <br />
                        Wittekindshof
                        <br />
                        Schulstrasse 4 <br />
                        32547 Bad Oyenhausen
                        <br />
                        GERMANY
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-2xl font-medium text-slate-500 max-md:mt-10 max-md:max-w-full">
                    <div className="shrink-0 rounded-md border-2 border-solid bg-zinc-200 bg-opacity-40 border-gray-300 border-opacity-40 h-[59px] max-md:max-w-full" />
                    <div className="mt-8 max-md:max-w-full">EMAIL</div>
                    <div className="shrink-0 mt-1.5 rounded-md border-2 border-solid bg-zinc-200 bg-opacity-40 border-gray-300 border-opacity-40 h-[59px] max-md:max-w-full" />
                    <div className="mt-6 max-md:max-w-full">SUB</div>
                    <div className="shrink-0 mt-1.5 rounded-md border-2 border-solid bg-zinc-200 bg-opacity-40 border-gray-300 border-opacity-40 h-[59px] max-md:max-w-full" />
                    <div className="mt-8 max-md:max-w-full">MESSAGE</div>
                    <div className="shrink-0 mt-1.5 rounded-md border-2 border-solid bg-zinc-200 bg-opacity-40 border-gray-300 border-opacity-40 h-[181px] max-md:max-w-full" />
                    <div className="justify-center items-center px-16 py-4 mt-6 text-white bg-blue-700 rounded-md max-md:px-5 max-md:max-w-full">
                      Send this message
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6851b5d8a2dfffe3f2eccd61f32d4deef1cddc83370853ac068167a53308f62?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
            className="shrink-0 self-start w-24 aspect-square mt-[628px] max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}
