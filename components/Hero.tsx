import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center self-stretch w-full text-white max-md:max-w-full">
      <div className="relative h-screen">
        <Image
          src="/hero-img.jpg"
          alt="Background Image"
          width={1919}
          height={960}
          className="object-contain absolute z-10 h-full"
        />
        <div className=" w-full h-full bg-sky-950 bg-opacity-90 absolute z-20" />

        <div className="flex absolute z-30 flex-col justify-center xs:mt-48 sm:mt-36 items-end px-16 py-24 w-full h-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-32 mb-20 ml-20 max-w-full w-[724px] max-md:my-10">
            <h2 className="text-4xl font-bold tracking-widest max-md:max-w-full">
              Unlock Your Company’s Potential with Expert HR Recruitment
              Solutions
            </h2>
            <h1 className="mt-9 lg:text-lg max-md:max-w-full max-md:text-2xl xs:text-xl">
              <p className="text-white">
                Be the driving force behind software companies and corporate
                giants by joining us as an HR recruitment consultant. Shape the
                future of innovation, foster growth, and make a lasting impact
                on global businesses. Elevate your career and be a catalyst for
                success in the dynamic tech landscape
              </p>
            </h1>
            <button className="flex gap-5 py-5 pr-8 pl-10 mt-20 ml-3 max-w-full text-2xl border border-white border-solid tracking-[2.4px] w-[357px] max-md:px-5 max-md:mt-10 max-md:ml-2.5">
              <span className="flex-auto">Let work Together</span>
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30a7fdf0ee3fb824ca46cb780a40730d69062e5e75f9b731e569fb6d0c24d8ba?apiKey=54709c8bd30b4ce38ba82e61049e17ec&"
                alt=""
                width={31}
                height={31}
                className="shrink-0 aspect-square w-[31px]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
