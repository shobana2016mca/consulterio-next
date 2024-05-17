import Image from 'next/image';
import React from 'react';

export default function JobPage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

// const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
//   <Image  src={src} alt={alt} className={className} />
// );

const Header = () => (
  <header className='flex justify-center items-center p-16 w-full text-4xl font-extrabold text-white whitespace-nowrap bg-sky-950 max-md:px-5 max-md:max-w-full'>
    <div className='flex gap-5 w-full max-w-[1472px] max-md:flex-wrap max-md:max-w-full'>
      <div className='flex-auto self-start mt-5'>Recruit.</div>
      <Image
        src='https://cdn.builder.io/api/v1/image/assets/TEMP/8db00bd89bf415a7ae4a94bccbc1dc438d5acef4ee3cb0d9a997bd8c9595b415?apiKey=54709c8bd30b4ce38ba82e61049e17ec&'
        alt=''
        className='shrink-0 aspect-square w-[50px]'
        width={50}
        height={50}
      />
    </div>
  </header>
);

const JobInfo = () => (
  <section className='flex overflow-hidden relative flex-col justify-center w-full text-white min-h-[555px] max-md:max-w-full'>
    <Image
      src='https://cdn.builder.io/api/v1/image/assets/TEMP/f8341d0cfedc7ae81b6c862eed3230bd797482a9f7164f0c27e80d77bf895f71?apiKey=54709c8bd30b4ce38ba82e61049e17ec&'
      alt=''
      className='object-cover absolute inset-0 size-full'
      width={1080}
      height={1080}
    />
    <div className='flex relative flex-col justify-center items-start px-16 py-20 w-full bg-sky-950 bg-opacity-90 max-md:px-5 max-md:max-w-full'>
      <div className='flex flex-col mt-36 mb-24 ml-20 max-md:my-10 max-md:max-w-full'>
        <h1 className='text-7xl uppercase max-md:max-w-full max-md:text-4xl'>
          Frontend developer
        </h1>
        <h2 className='mt-10 text-4xl tracking-widest max-md:max-w-full'>
          Manchester, UK
        </h2>
      </div>
    </div>
  </section>
);

type JobDetailsProps = {
  title: string;
  content: string[];
};

const JobDetails: React.FC<JobDetailsProps> = ({ title, content }) => (
  <div className='flex flex-col px-14 py-20 text-3xl bg-white rounded-xl border border-solid border-neutral-200 text-sky-950 max-md:px-5 max-md:max-w-full'>
    <div className='capitalize'>{title}</div>
    {content.map((item, index) => (
      <React.Fragment key={index}>
        <div className='mt-7 text-2xl tracking-wider'>{item}</div>
        {index < content.length - 1 && (
          <div className='shrink-0 mt-14 h-px border border-solid bg-neutral-300 border-neutral-300 max-md:mt-10' />
        )}
      </React.Fragment>
    ))}
  </div>
);

const ApplyForm = () => (
  <form className='flex flex-col self-center px-5 mt-28 w-full max-w-[1447px] max-md:mt-10 max-md:max-w-full'>
    <div className='max-md:max-w-full'>
      <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
        <div className='flex flex-col w-[36%] max-md:ml-0 max-md:w-full'>
          <div className='flex flex-col max-md:mt-10 max-md:max-w-full'>
            <JobDetails
              title='Location'
              content={[
                'Manchester, UK',
                '£45000 - £65000 per annum + Bonus + Pension + Benefits',
                'Hybrid, Permanent',
              ]}
            />
            <div className='flex flex-col items-start px-14 py-16 mt-12 whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-200 text-sky-950 max-md:px-5 max-md:mt-10 max-md:max-w-full'>
              <div className='text-3xl capitalize'>Reference</div>
              <div className='mt-8 text-2xl tracking-wider'>#FDMAN2038-234</div>
            </div>
            <div className='flex flex-col justify-center items-start px-6 py-5 mt-11 max-w-full border border-solid bg-sky-950 border-neutral-200 w-[245px] max-md:px-5 max-md:mt-10'>
              <Image
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/3933253c2d268ba34b7ca23cf62c55dde2698e2b661fc49a69a9c0daddc68680?apiKey=54709c8bd30b4ce38ba82e61049e17ec&'
                alt='Company Logo'
                className='aspect-square w-[31px]'
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full'>
          <div className='flex flex-col grow mt-1.5 text-xl text-sky-950 max-md:mt-10 max-md:max-w-full'>
            <div className='text-3xl capitalize max-md:max-w-full'>
              Description
            </div>
            <div className='mt-12 font-bold tracking-wider text-black max-md:mt-10 max-md:max-w-full'>
              Front End Developer
            </div>
            <div className='mt-8 font-bold tracking-wider text-black max-md:max-w-full'>
              UK Leading Ecommerce Firm – Manchester – Hybrid
            </div>
            <div className='mt-14 text-lg tracking-wider max-md:mt-10 max-md:max-w-full'>
              (Tech stack: Front End Developer, React, ReactJS 18, React Hooks,
              React.js, Shopify platform, JavaScript, TypeScript, HTML, CSS, UI,
              UX, User Interface, User Experience, Javascript Developer, Front
              End Engineer, Front End Developer) <br /> <br />
              Our client is UK&apos; leading Ecommerce clothing company. They
              are looking for a Front End Developer with experience in React and
              Shopify platform. You will be responsible for predominantly
              implementing new Figma designs and functionality to the Shopify
              store, through fluent, maintainable code. You will work alongside
              designers within the creative team, and other senior members on
              multiple technical projects. <br /> <br />
              My client is looking for Front End Developers who has current and
              relevant experience working with React and Shopify platform. You
              will be building new pages, features and functionality on the
              Ecommerce site. You will also discover and debug issues and ensure
              the consistent quality and UX across all devices and browsers.{' '}
              <br /> <br />
              Our client is looking for passionate Front End Developers with
              experience in some or all of the following (full training will be
              provided to fill any gaps in your skill set): React, ReactJS 18,
              React Hooks, React.js, Shopify platform, JavaScript, TypeScript,
              HTML, CSS, GIT, API&apos;s, UI, UX, User Interface, User
              Experience. <br />
            </div>
            <div className='shrink-0 mt-24 h-px border border-solid bg-stone-300 border-stone-300 max-md:mt-10 max-md:max-w-full' />
            <div className='mt-24 text-3xl capitalize max-md:mt-10 max-md:max-w-full'>
              Apply for this role
            </div>
            <div className='mt-14 tracking-wider text-black max-md:mt-10 max-md:max-w-full'>
              Full Name
            </div>
            <label htmlFor='fullName' className='sr-only'>
              Full Name
            </label>
            <input
              className='shrink-0 mt-5 bg-white rounded-xl border border-solid border-zinc-300 h-[81px] max-md:max-w-full'
              type='text'
              id='fullName'
              aria-label='Full Name'
            />
          </div>
        </div>
      </div>
    </div>
    <label htmlFor='email' className='sr-only'>
      Email
    </label>
    <input
      className='shrink-0 self-end mt-5 max-w-full bg-white rounded-xl border border-solid border-zinc-300 h-[81px] w-[852px]'
      type='email'
      id='email'
      aria-label='Email'
    />
    <label htmlFor='contactNumber' className='sr-only'>
      Contact Number
    </label>
    <input
      className='shrink-0 self-end mt-5 max-w-full bg-white rounded-xl border border-solid border-zinc-300 h-[81px] w-[852px]'
      type='tel'
      id='contactNumber'
      aria-label='Contact Number'
    />
    <label htmlFor='coverLetter' className='sr-only'>
      Cover Letter
    </label>
    <textarea
      className='shrink-0 self-end mt-5 max-w-full bg-white rounded-xl border border-solid border-zinc-300 h-[328px] w-[852px]'
      id='coverLetter'
      aria-label='Cover Letter'
    />
    <button
      className='flex gap-5 self-center px-8 py-5 mt-20 w-80 max-w-full text-xl tracking-wider text-black bg-teal-400 max-md:px-5 max-md:mt-10'
      type='submit'>
      <span className='flex-auto'>Send Application</span>
      <Image
        src='https://cdn.builder.io/api/v1/image/assets/TEMP/61de4f00f308502a776d03a0d639331eeefb585e24c89f321931f2ebef01163e?apiKey=54709c8bd30b4ce38ba82e61049e17ec&'
        width={50}
        height={50}
        alt='Send Icon'
        className='shrink-0 aspect-square w-[31px]'
      />
    </button>
  </form>
);

const Footer = () => (
  <footer className='flex justify-center items-center px-16 py-14 mt-48 w-full text-white bg-sky-950 max-md:px-5 max-md:mt-10 max-md:max-w-full'>
    <div className='flex gap-5 w-full max-w-[1422px] max-md:flex-wrap max-md:max-w-full'>
      <div className='flex-auto text-4xl font-extrabold'>Recruit.</div>
      <div className='flex gap-5 my-auto text-right'>
        <div className='grow text-xl tracking-wider'>Designed and built by</div>
        <div className='flex-auto text-2xl font-bold tracking-widest'>
          Terry Cheng
        </div>
      </div>
    </div>
  </footer>
);

const MyComponent = () => (
  <div className='flex flex-col bg-white'>
    <Header />
    <JobInfo />
    <ApplyForm />
    <Footer />
  </div>
);
