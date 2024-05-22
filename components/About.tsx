import Image from "next/image";

export default function About() {
  return (
    <>
      {/* <section className='flex flex-col px-5 mb-10  w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full'>
        <div className='mt-20 w-full max-md:mt-10 max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            <div className='flex flex-col w-[56%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col mt-9 max-md:mt-10 max-md:max-w-full'>
                <div className='flex gap-5 items-start max-md:flex-wrap'>
                  <div className='flex flex-col grow shrink-0 self-start px-5 basis-0 w-fit max-md:max-w-full'>
                    <div className='text-6xl text-black max-md:max-w-full max-md:text-4xl'>
                      <span className='font-bold'>Payment</span>
                      <span className=''> for </span>
                      <br />
                      <span className=''>any </span>
                      <span className='font-bold'>buseniss</span>
                    </div>
                    <div className='mt-8 text-2xl text-neutral-700 max-md:mt-10 max-md:max-w-full'>
                      we bring everything that&apos;s required to build websites
                      and apps <br />
                      that accept payments and send payout globally
                    </div>
                  </div>
                </div>
                <div className='flex flex-col xs:flex-col px-20 max-md:px-5 max-md:max-w-full'>
                  <button className='bg-red-500 p-10'>Know more</button>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow max-md:mt-10 max-md:max-w-full'>
                <Image
                  alt=''
                  src={
                    'https://cdn.builder.io/api/v1/image/assets/TEMP/a3e12e250dc9e16935cefd934503ec8e10f5a0e8ee28b3c9b132f2644cc4e3ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100'
                  }
                  width={100}
                  height={100}
                  className='w-full aspect-[1.01] max-md:max-w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <AboutUs />
    </>
  );
}

function AboutUs() {
  return (
    <>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <Image
                src="https://pagedone.io/asset/uploads/1702034769.png"
                alt="About Us tailwind page"
                className="max-lg:mx-auto"
                width={592}
                height={481}
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us{" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Welcome to Consultero, your trusted partner in HR recruitment
                  solutions for software-based and corporate companies.
                  Established in 2016, we specialize in connecting top talent
                  with leading organizations, ensuring they find the perfect fit
                  for their needs. At Consultero, we understand the critical
                  role that talent plays in the success of any business.
                  That&apos;s why our mission is to provide unparalleled
                  recruitment services, delivering the right candidates at the
                  right time and at an affordable price. With a focus on
                  software-based and corporate sectors, our team of experts is
                  dedicated to understanding the unique requirements of each
                  client and sourcing candidates who not only possess the
                  necessary skills but also align with their company culture.
                  Our core value of providing quality recruitment services at an
                  affordable price sets us apart. We offer a competitive fee
                  structure of 8.33% on the annual CTC, ensuring our clients
                  receive exceptional value without compromising on quality.
                  Experience the difference with Consultero. Let us help you
                  build a talented team that drives your business forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <Image
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  className="block lg:hidden mb-9 mx-auto"
                  width={592}
                  height={481}
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  We are Creative Since 2005
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Pagedone isn&apos;t just a collection of components and
                  guidelines; it&apos;s a philosophy. We go beyond aesthetics,
                  prioritizing accessibility, scalability, and usability. Every
                  element, from the tiniest detail to the grandest layout, is
                  meticulously crafted to enhance functionality and elevate user
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="img-box">
              <Image
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                className="hidden lg:block "
                width={592}
                height={481}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  240%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Company&apos;s remarkable growth journey as we continually
                    innovate and drive towards new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  175+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Our very talented team members are the powerhouse of
                    pagedone and pillars of our success.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  625+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Projects Completed
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    We have accomplished more than 625 projects worldwide and we
                    are still counting many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
