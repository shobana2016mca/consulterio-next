import Image from 'next/image';
import SectionHeading from './SectionHeading';
import SectionWrapper from './SectionWrapper';

export default function AboutSection() {
  return (
    <section>
      <SectionWrapper>
        <div className={'space-y-4 md:space-y-8 lg:space-y-16'}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
            <div className='relative w-full h-full aspect-square md:aspect-[3/2] col-span-full lg:col-span-1 order-last lg:order-1'>
              <Image
                src='https://pagedone.io/asset/uploads/1702034769.png'
                alt='About Us tailwind page'
                className='object-cover w-full h-full rounded-md'
                // width={592}
                // height={481}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 592px'
              />
            </div>
            <div className='grid content-center order-1 gap-y-4 xl:gap-y-8 col-span-full lg:col-span-1 xl:order-last'>
              <SectionHeading>About Us</SectionHeading>
              <p className='text-sm font-normal leading-5 text-gray-500 md:text-lg lg:text-xl md:leading-6 lg:leading-8'>
                Welcome to Consultero, your trusted partner in HR recruitment
                solutions for software-based and corporate companies.
                Established in 2016, we specialize in connecting top talent with
                leading organizations, ensuring they find the perfect fit for
                their needs. At Consultero, we understand the critical role that
                talent plays in the success of any business. That&apos;s why our
                mission is to provide unparalleled recruitment services,
                delivering the right candidates at the right time and at an
                affordable price.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-9 '>
            <div className='grid content-center gap-y-4 xl:gap-y-8'>
              <SectionHeading>
                Effective Recruitment Solutions Since 2018
              </SectionHeading>
              <p className='text-sm font-normal leading-5 text-gray-500 md:text-lg lg:text-xl md:leading-6 lg:leading-8'>
                Since our inception in 2018, Consultero has been committed to
                revolutionizing the recruitment process for our clients. Our
                expertise and dedication have consistently led to streamlined
                hiring procedures, ensuring that companies not only find the
                right candidates but do so efficiently and effectively. We take
                a personalized approach to each project, understanding the
                unique needs of every client.
              </p>
              <p className='text-sm font-normal leading-5 text-gray-500 md:text-lg lg:text-xl md:leading-6 lg:leading-8'>
                By leveraging advanced recruitment strategies and our extensive
                network, we significantly enhance the quality and speed of
                hiring. Our goal is to make the recruitment process seamless,
                reducing time-to-hire and ensuring a perfect fit for every role.
                With Consultero, you can trust that your recruitment process
                will be handled with precision and care, leading to improved
                outcomes and a stronger, more capable workforce.
              </p>
            </div>
            <div className='relative w-full h-full aspect-square'>
              <Image
                src='https://pagedone.io/asset/uploads/1702034785.png'
                alt='About Us tailwind page'
                className='object-cover w-full h-full rounded-md'
                // width={592}
                // height={481}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 592px'
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
