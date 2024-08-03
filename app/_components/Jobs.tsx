import Image from 'next/image';
import JobOpening from './JobOpening';

export default function Jobs() {
  return (
    <>
      <section className='flex flex-col px-5 mt-36 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full'>
        <h3 className='text-3xl font-extrabold tracking-widest text-teal-400 uppercase max-md:max-w-full'>
          jobs
        </h3>
        <div className='flex gap-5 mt-1.5 text-5xl text-sky-950 max-md:flex-wrap max-md:max-w-full'>
          <h4 className='self-end flex-auto mt-5 max-md:max-w-full max-md:text-4xl'>
            Latest Openings
          </h4>
          <Image
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/48b9ab01186c9457b700f8daaae48ac516587bf93efb556a83e0c4515fd0189b?apiKey=54709c8bd30b4ce38ba82e61049e17ec&'
            alt=''
            width={77}
            height={77}
            className='shrink-0 aspect-[1.1] w-[77px]'
          />
        </div>
      </section>
      <section className='px-px mt-11 max-md:mt-10 max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <JobOpening
            title='Frontend Developer'
            location='Manchester, UK'
            salary='£40000 - £55000 per annum'
            description='Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate'
            bgColor='bg-teal-400'
          />
          <JobOpening
            title='Frontend Developer'
            location='Manchester, UK'
            salary='£40000 - £55000 per annum'
            description='Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate'
            bgColor='bg-sky-950'
          />
          <JobOpening
            title='Frontend Developer'
            location='Manchester, UK'
            salary='£40000 - £55000 per annum'
            description='Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate'
            bgColor='bg-sky-950'
          />
        </div>
      </section>
    </>
  );
}
