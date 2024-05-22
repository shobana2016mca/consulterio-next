import Image from 'next/image';

export default function AboutSection() {
  return (
    <>
      <section className='py-14 lg:py-24 relative'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative '>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
            <div className='img-box'>
              <Image
                src='https://pagedone.io/asset/uploads/1702034769.png'
                alt='About Us tailwind page'
                className='max-lg:mx-auto'
                width={592}
                height={481}
                priority
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
        </div>
      </section>

      <section className='py-14 lg:py-24 relative'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative '>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-9 '>
            <div className='lg:pr-24 flex items-center'>
              <div className='data w-full'>
                <Image
                  src='https://pagedone.io/asset/uploads/1702034785.png'
                  alt='About Us tailwind page'
                  className='block lg:hidden mb-9 mx-auto'
                  width={592}
                  height={481}
                />
                <h2 className='font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center'>
                  We are Creative Since 2005
                </h2>
                <p className='font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto'>
                  With a focus on software-based and corporate sectors, our team
                  of experts is dedicated to understanding the unique
                  requirements of each client and sourcing candidates who not
                  only possess the necessary skills but also align with their
                  company culture. Our core value of providing quality
                  recruitment services at an affordable price sets us apart. We
                  offer a competitive fee structure of 8.33% on the annual CTC,
                  ensuring our clients receive exceptional value without
                  compromising on quality. Experience the difference with
                  Consultero. Let us help you build a talented team that drives
                  your business forward.
                </p>
              </div>
            </div>
            <div className='img-box'>
              <Image
                src='https://pagedone.io/asset/uploads/1702034785.png'
                alt='About Us tailwind page'
                className='hidden lg:block '
                width={592}
                height={481}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutSetion() {
  return <></>;
}
