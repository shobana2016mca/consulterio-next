import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

export default function AboutSection() {
  return (
    <section>
      <SectionWrapper>
        <div className={'space-y-16'}>
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
            <div className='grid gap-y-4 xl:gap-y-8 content-center col-span-full lg:col-span-1 order-1 xl:order-last'>
              <h2 className='font-manrope font-bold text-4xl lg:text-5xl text-black max-lg:text-center relative'>
                About Us{' '}
              </h2>
              <p className='font-normal text-xl leading-8 text-gray-500'>
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
            <div className='grid gap-y-4 xl:gap-y-8'>
              <h2 className='font-manrope font-bold text-4xl lg:text-5xl text-black max-lg:text-center'>
                Effective Recruitment Solutions Since 2018
              </h2>
              <p className='font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto'>
                Since our inception in 2018, Consultero has been committed to
                revolutionizing the recruitment process for our clients. Our
                expertise and dedication have consistently led to streamlined
                hiring procedures, ensuring that companies not only find the
                right candidates but do so efficiently and effectively. We take
                a personalized approach to each project, understanding the
                unique needs of every client.
              </p>
              <p className='font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto'>
                By leveraging advanced recruitment strategies and our extensive
                network, we significantly enhance the quality and speed of
                hiring. Our goal is to make the recruitment process seamless,
                reducing time-to-hire and ensuring a perfect fit for every role.
                With Consultero, you can trust that your recruitment process
                will be handled with precision and care, leading to improved
                outcomes and a stronger, more capable workforce.
              </p>
            </div>
            <div className='relative aspect-square h-full w-full'>
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
        {/* <div className={'space-y-16'}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
            <div className='img-box relative'>
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
            <div className='lg:pl-[100px] flex items-center'>
              <div className='data w-full'>
                <h2 className='font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative'>
                  About Us{' '}
                </h2>
                <p className='font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto'>
                  Welcome to Consultero, your trusted partner in HR recruitment
                  solutions for software-based and corporate companies.
                  Established in 2016, we specialize in connecting top talent
                  with leading organizations, ensuring they find the perfect fit
                  for their needs. At Consultero, we understand the critical
                  role that talent plays in the success of any business.
                  That&apos;s why our mission is to provide unparalleled
                  recruitment services, delivering the right candidates at the
                  right time and at an affordable price.
                </p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-9 '>
            <div className='lg:pr-24 flex items-center'>
              <div className='data w-full relative'>
                <Image
                  src='https://pagedone.io/asset/uploads/1702034785.png'
                  alt='About Us tailwind page'
                  className='block lg:hidden mb-9 mx-auto object-cover w-full h-full rounded-md'
                  // width={592}
                  // height={481}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 592px'
                />
                <h2 className='font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center'>
                  Effective Recruitment Solutions Since 2018
                </h2>
                <p className='font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto'>
                  Since our inception in 2018, Consultero has been committed to
                  revolutionizing the recruitment process for our clients. Our
                  expertise and dedication have consistently led to streamlined
                  hiring procedures, ensuring that companies not only find the
                  right candidates but do so efficiently and effectively. We
                  take a personalized approach to each project, understanding
                  the unique needs of every client.
                </p>
                <p className='font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto'>
                  By leveraging advanced recruitment strategies and our
                  extensive network, we significantly enhance the quality and
                  speed of hiring. Our goal is to make the recruitment process
                  seamless, reducing time-to-hire and ensuring a perfect fit for
                  every role. With Consultero, you can trust that your
                  recruitment process will be handled with precision and care,
                  leading to improved outcomes and a stronger, more
                  capable workforce.
                </p>
              </div>
            </div>
            <div className='img-box relative'>
              <Image
                src='https://pagedone.io/asset/uploads/1702034785.png'
                alt='About Us tailwind page'
                className='hidden lg:block origin-cover w-full h-full'
                // width={592}
                // height={481}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 592px'
              />
            </div>
          </div>
        </div> */}
      </SectionWrapper>
    </section>
  );
}

function AboutSetion() {
  return <></>;
}
