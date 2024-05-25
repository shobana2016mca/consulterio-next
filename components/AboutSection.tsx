import Image from "next/image";

export default function AboutSection() {
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
                priority
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
                  right time and at an affordable price.
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
                  Effective Recruitment Solutions Since 2018
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Since our inception in 2018, Consultero has been committed to
                  revolutionizing the recruitment process for our clients. Our
                  expertise and dedication have consistently led to streamlined
                  hiring procedures, ensuring that companies not only find the
                  right candidates but do so efficiently and effectively. We
                  take a personalized approach to each project, understanding
                  the unique needs of every client.
                </p>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
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
            <div className="img-box">
              <Image
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                className="hidden lg:block "
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
