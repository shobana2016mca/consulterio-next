import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Tetimonial";
import Card from "@/components/card";

import Image from "next/image";

type CardProps = {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
};
type JobOpeningProps = {
  title: string;
  location: string;
  salary: string;
  description: string;
  bgColor: string;
};

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center bg-white">
        <Hero />
        <Mission />
        <Services />
        <Testimonial />
        <Jobs />
        <Card />
        <ContactUs />
      </div>
    </main>
  );
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description }) => {
  return (
    <article className="flex flex-col grow items-start px-10 py-12 w-full bg-white rounded-md shadow-sm text-sky-950">
      <Image
        src={imgSrc}
        alt=""
        width={63}
        height={63}
        className="aspect-square w-[63px]"
      />
      <h2 className="mt-5 text-2xl capitalize">{id}</h2>
      <h2 className="mt-5 text-2xl capitalize">{title}</h2>
      <p className={"mt-6 text-base tracking-widerdescription"}>
        {description}
      </p>
    </article>
  );
};

const JobOpening: React.FC<JobOpeningProps> = ({
  title,
  location,
  salary,
  description,
  bgColor,
}) => {
  return (
    <>
      <article
        className={`${bgColor} flex flex-col grow px-12 py-16 w-full text-xl tracking-wider text-white border border-white border-solid`}
      >
        <h3 className="text-2xl font-bold tracking-widest">{title}</h3>
        <div className="mt-4">{location}</div>
        <div className="mt-10">{salary}</div>
        <p className="mt-9 text-lg tracking-wider">{description}</p>{" "}
        <div className="mt-14 text-lg tracking-wider underline capitalize">
          view job
        </div>{" "}
      </article>
    </>
  );
};

function Hero() {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center self-stretch w-full text-white max-md:max-w-full">
      <div className="relative h-screen">
        <Image
          src="/hero-img.jpg"
          alt="Background Image"
          width={1919}
          height={960}
          className="object-cover absolute z-10 h-full"
        />
        <div className=" w-full h-full bg-sky-950 bg-opacity-90 absolute z-20" />

        <div className="flex absolute z-30 flex-col justify-center items-end px-16 py-24 w-full h-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-32 mb-20 ml-20 max-w-full w-[724px] max-md:my-10">
            <h2 className="text-3xl tracking-widest max-md:max-w-full">
              Unlock Your Company’s Potential with Expert HR Recruitment
              Solutions
            </h2>
            <h1 className="mt-9 text-2xl max-md:max-w-full max-md:text-2xl xs:text-xl">
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

function Mission() {
  return (
    <section className="w-full max-w-[1584px] max-md:max-w-full mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <article className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <h3 className="text-3xl font-extrabold tracking-widest text-teal-400 uppercase max-md:max-w-full">
              misson
            </h3>
            <h4 className="mt-9 text-5xl text-sky-950 max-md:max-w-full max-md:text-4xl">
              We’ve managed over 2.5 million candidates
            </h4>
            <p className="mt-16 text-xl tracking-wider text-black max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed
              blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet
              velit magna a aliquam. Faucibus et quam ac elit placerat tristique
              vulputate. Elit sit varius condimentum tempor vel commodo
              malesuada.
            </p>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3897aa5cb3f0f84de4a9f19da339b70ac11571da12a77c0d627a24fd55d9bd4?apiKey=54709c8bd30b4ce38ba82e61049e17ec&"
              alt=""
              width={77}
              height={77}
              className="mt-12 aspect-[1.1] w-[77px] max-md:mt-10"
            />
          </div>
        </article>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/623d0841a0fffdb3b2cd20a7f3f463112a061db5ccca652452f2060002a111ec?apiKey=54709c8bd30b4ce38ba82e61049e17ec&"
          alt="Mission Image"
          layout="intrinsic"
          objectFit="cover"
          width={716}
          height={640}
          className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </section>
  );
}

function Services() {
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
              id="04"
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

function Jobs() {
  return (
    <>
      <section className="flex flex-col px-5 mt-36 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
        <h3 className="text-3xl font-extrabold tracking-widest text-teal-400 uppercase max-md:max-w-full">
          jobs
        </h3>
        <div className="flex gap-5 mt-1.5 text-5xl text-sky-950 max-md:flex-wrap max-md:max-w-full">
          <h4 className="flex-auto self-end mt-5 max-md:max-w-full max-md:text-4xl">
            Latest Openings
          </h4>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48b9ab01186c9457b700f8daaae48ac516587bf93efb556a83e0c4515fd0189b?apiKey=54709c8bd30b4ce38ba82e61049e17ec&"
            alt=""
            width={77}
            height={77}
            className="shrink-0 aspect-[1.1] w-[77px]"
          />
        </div>
      </section>
      <section className="px-px mt-11 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <JobOpening
            title="Frontend Developer"
            location="Manchester, UK"
            salary="£40000 - £55000 per annum"
            description="Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate"
            bgColor="bg-teal-400"
          />
          <JobOpening
            title="Frontend Developer"
            location="Manchester, UK"
            salary="£40000 - £55000 per annum"
            description="Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate"
            bgColor="bg-sky-950"
          />
          <JobOpening
            title="Frontend Developer"
            location="Manchester, UK"
            salary="£40000 - £55000 per annum"
            description="Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate"
            bgColor="bg-sky-950"
          />
        </div>
      </section>
    </>
  );
}

function ContactUs() {
  return (
    <>
      <article className="self-center mt-44 ml-20 text-xl tracking-wider text-black max-md:mt-10">
        Full Name
      </article>
      <form className="flex gap-5 px-5 mt-5 w-full text-3xl font-extrabold tracking-widest text-teal-400 uppercase whitespace-nowrap max-w-[1422px] max-md:flex-wrap max-md:max-w-full">
        <label htmlFor="contactInput" className="sr-only">
          contact
        </label>
        <input
          type="text"
          id="contactInput"
          className="w-full h-[81px] max-md:max-w-full bg-white rounded-xl border border-solid border-zinc-300"
          placeholder="Enter your contact"
        />
        <button type="submit" className="flex-auto self-start mt-2.5">
          contact
        </button>
      </form>
      <section className="mt-2 w-full max-w-[1422px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <header className="flex flex-col px-5 max-md:mt-10 max-md:max-w-full">
              <h4 className="text-5xl capitalize text-sky-950 max-md:max-w-full max-md:text-4xl">
                Looking for a new opportunity?
              </h4>
              <p className="mt-12 text-xl tracking-wider text-black max-md:mt-10 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed
                blandit rhoncus tellus senectus at quis. Mi at fermentum
                imperdiet velit magna a aliquam. Faucibus et quam ac elit
                placerat tristique vulputate
              </p>
            </header>
          </article>
          <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 mt-7 text-xl tracking-wider text-black max-md:mt-10 max-md:max-w-full">
              <label htmlFor="emailInput" className="sr-only">
                Email
              </label>
              <input
                id="emailInput"
                type="email"
                className="shrink-0 mt-5 bg-white rounded-xl border border-solid border-zinc-300 h-[81px] max-md:max-w-full"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <label htmlFor="contactNumberInput" className="sr-only">
                Contact Number
              </label>
              <input
                id="contactNumberInput"
                type="tel"
                className="shrink-0 mt-9 bg-white rounded-xl border border-solid border-zinc-300 h-[81px] max-md:max-w-full"
                placeholder="Enter your contact number"
                aria-label="Enter your contact number"
              />
            </div>
          </article>
        </div>
      </section>

      <button className="flex gap-5 justify-between px-8 py-5 mt-16 ml-32 text-xl tracking-wider text-black whitespace-nowrap bg-teal-400 max-md:px-5 max-md:mt-10">
        <span className="my-auto">Submit</span>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebd3e41fc3252b10502e067502dfc45637c924ff6bfa217a79e21d1d48481379?apiKey=54709c8bd30b4ce38ba82e61049e17ec&"
          alt=""
          width={31}
          height={31}
          className="shrink-0 aspect-square w-[31px]"
        />
      </button>
    </>
  );
}
