import * as React from 'react';

export default function JobsPage({
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

type JobProps = {
  jobRef: string;
  title: string;
  location: string;
  salary: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
};

const JobCard: React.FC<JobProps> = ({
  jobRef,
  title,
  location,
  salary,
  description,
  imgSrc,
  imgAlt,
}) => (
  <section className='pt-20 mt-7 max-w-full border border-white border-solid w-[1440px] max-md:pl-5'>
    <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
      <article className='flex flex-col w-2/5 max-md:ml-0 max-md:w-full'>
        <div className='flex flex-col mt-4 text-3xl tracking-widest text-sky-950 max-md:mt-10 max-md:max-w-full'>
          <div className='text-xl tracking-wider text-zinc-500'>
            {`Job Ref: ${jobRef}`}
          </div>
          <h2 className='mt-12 text-4xl font-bold tracking-[2px] max-md:mt-10 max-md:max-w-full'>
            {title}
          </h2>
          <p className='mt-4'>{location}</p>
          <p className='mt-11'>{salary}</p>
        </div>
      </article>
      <div className='flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full'>
        <div className='flex flex-col grow mt-10 text-lg tracking-wider text-sky-950 max-md:mt-10 max-md:max-w-full'>
          <p className='max-md:max-w-full'>{description}</p>
          <img
            loading='lazy'
            src={imgSrc}
            alt={imgAlt}
            className='self-end mt-14 aspect-[1.1] w-[77px] max-md:mt-10'
          />
        </div>
      </div>
    </div>
  </section>
);

const jobData = [
  {
    jobRef: '#FDMAN2038-234',
    title: 'Frontend Developer',
    location: 'Manchester, UK',
    salary: '£40000 - £55000 per annum',
    description:
      'Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate. Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate',
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/f9067df93f1acd344c4155dd9959aeaac58b4065e4f071edcf11348049de9612?apiKey=54709c8bd30b4ce38ba82e61049e17ec&',
    imgAlt: '',
  },
  {
    jobRef: '#FDMAN2038-234',
    title: 'Frontend Developer',
    location: 'Manchester, UK',
    salary: '£40000 - £55000 per annum',
    description:
      'Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate. Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate',
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/b74ff10e63073bcca57337f377fcc699e289d069b427717f942fc98cc54032b6?apiKey=54709c8bd30b4ce38ba82e61049e17ec&',
    imgAlt: '',
  },
  {
    jobRef: '#FDMAN2038-234',
    title: 'Frontend Developer',
    location: 'Manchester, UK',
    salary: '£40000 - £55000 per annum',
    description:
      'Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate. Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate',
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/b74ff10e63073bcca57337f377fcc699e289d069b427717f942fc98cc54032b6?apiKey=54709c8bd30b4ce38ba82e61049e17ec&',
    imgAlt: '',
  },
  {
    jobRef: '#FDMAN2038-234',
    title: 'Frontend Developer',
    location: 'Manchester, UK',
    salary: '£40000 - £55000 per annum',
    description:
      'Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate. Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate',
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/d144d68c7aefa7e227df797afdc3fcf9a5e2a8856e3c1850f73d9bac010fdded?apiKey=54709c8bd30b4ce38ba82e61049e17ec&',
    imgAlt: '',
  },
];

function MyComponent() {
  return (
    <div className='flex flex-col items-center bg-white'>
      <header className='flex justify-center items-center self-stretch p-16 w-full text-4xl font-extrabold text-white whitespace-nowrap bg-sky-950 max-md:px-5 max-md:max-w-full'>
        <div className='flex gap-5 w-full max-w-[1472px] max-md:flex-wrap max-md:max-w-full'>
          <div className='flex-auto self-start mt-5'>Recruit.</div>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/8db00bd89bf415a7ae4a94bccbc1dc438d5acef4ee3cb0d9a997bd8c9595b415?apiKey=54709c8bd30b4ce38ba82e61049e17ec&'
            alt=''
            className='shrink-0 aspect-square w-[50px]'
          />
        </div>
      </header>
      <section className='flex overflow-hidden relative flex-col justify-center self-stretch w-full text-7xl text-white uppercase whitespace-nowrap min-h-[498px] max-md:max-w-full max-md:text-4xl'>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/e39ed372ff095855e0793bff77f72edba3348e4f35963723926cc1df7501f8bb?apiKey=54709c8bd30b4ce38ba82e61049e17ec&'
          alt=''
          className='object-cover absolute inset-0 size-full'
        />
        <div className='relative justify-center items-start pt-56 pr-16 pb-44 pl-36 w-full bg-sky-950 bg-opacity-90 max-md:py-10 max-md:pr-5 max-md:pl-8 max-md:max-w-full max-md:text-4xl'>
          Jobs
        </div>
      </section>
      <form className='flex justify-center items-center self-stretch px-16 py-16 w-full text-2xl tracking-wider bg-stone-50 text-zinc-400 max-md:px-5 max-md:max-w-full'>
        <div className='flex gap-0 w-full max-w-[1440px] max-md:flex-wrap max-md:max-w-full'>
          <label htmlFor='jobSearch' className='sr-only max-md:max-w-full'>
            Search for job titles...
          </label>
          <input
            type='text'
            id='jobSearch'
            placeholder='Search for job titles...'
            className='grow justify-center items-start px-16 py-10 bg-white border border-solid border-zinc-300 w-fit max-md:pr-5 max-md:pl-7 max-md:max-w-full'
          />
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/1756015457bd9130023d5fba8920d9355da41b13685712798b53b568c62ce66a?apiKey=54709c8bd30b4ce38ba82e61049e17ec&'
            alt=''
            className='shrink-0 max-w-full aspect-[1.1] w-[110px]'
          />
        </div>
      </form>
      {jobData.map((job, index) => (
        <JobCard
          key={index}
          jobRef={job.jobRef}
          title={job.title}
          location={job.location}
          salary={job.salary}
          description={job.description}
          imgSrc={job.imgSrc}
          imgAlt={job.imgAlt}
        />
      ))}
      <section className='flex gap-5 px-5 mt-24 w-full text-2xl tracking-wider text-black max-w-[1437px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
        <p className='flex-auto'>Show 1 - 4 of 20 entries</p>
        <p className='flex-auto'>
          <span className='font-extrabold'>1 </span> | 2 | 3 | 4{' '}
        </p>
      </section>
      <footer className='flex justify-center items-center self-stretch px-16 py-14 mt-40 w-full text-white bg-sky-950 max-md:px-5 max-md:mt-10 max-md:max-w-full'>
        <div className='flex gap-5 w-full max-w-[1422px] max-md:flex-wrap max-md:max-w-full'>
          <div className='flex-auto text-4xl font-extrabold'>Recruit.</div>
          <div className='flex gap-5 my-auto text-right'>
            <p className='grow text-xl tracking-wider'>Designed and built by</p>
            <p className='flex-auto text-2xl font-bold tracking-widest'>
              Terry Cheng
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
