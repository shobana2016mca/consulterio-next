import Image from "next/image";
import * as React from "react";

export default function AboutPage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
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
                  Since 2018, Consultero has been dedicated to transforming
                  businesses through exceptional talent solutions. With a proven
                  track record of delivering over 200 successful recruitment
                  projects, we have partnered with more than 175 companies,
                  including industry leaders like TCS and Capgemini.
                </p>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Our mission is to drive your company&apos;s growth by
                  connecting you with the right candidates who not only meet
                  your requirements but also contribute to your long-term
                  success. We take pride in our personalized approach, ensuring
                  that every hiring solution is tailored to fit your unique
                  needs. At Consultero, we believe that the right talent can
                  propel your business to new heights. Whether you are a startup
                  or an established corporation, our team is committed to
                  supporting your journey with expertise, dedication, and a
                  passion for excellence. Discover the Consultero advantage
                  today and let us help you build the future of your business.
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
                  priority
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
                  the unique needs of every client. By leveraging advanced
                  recruitment strategies and our extensive network, we
                  significantly enhance the quality and speed of hiring. Our
                  goal is to make the recruitment process seamless, reducing
                  time-to-hire and ensuring a perfect fit for every role. With
                  Consultero, you can trust that your recruitment process will
                  be handled with precision and care, leading to improved
                  outcomes and a stronger, more capable workforce.
                </p>
              </div>
            </div>
            <div className="img-box">
              <Image
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="Consulterio"
                className="hidden lg:block "
                width={592}
                height={481}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* <SwiperAbout /> */}
      {/* <MyComponent /> */}
    </>
  );
}

type TeamMemberProps = {
  name: string;
  role: string;
  imgSrc: string;
  imgAlt: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imgSrc,
  imgAlt,
}) => (
  <div className="flex flex-col grow pb-9 w-full bg-white shadow-sm max-md:mt-8">
    <Image
      loading="lazy"
      src={imgSrc}
      alt={imgAlt}
      className="w-full aspect-[1.1]"
      width={50}
      height={50}
    />
    <div className="flex flex-col self-start mt-9 ml-8 max-md:ml-2.5">
      <div className="text-3xl text-sky-950">{name}</div>
      <div className="mt-4 text-xl tracking-wider leading-8 text-black">
        {role}
      </div>
    </div>
  </div>
);

const MyComponent: React.FC = () => {
  const teamMembers = [
    {
      name: "Emil Yancy",
      role: "Team Leader",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/151a22c52a8a2c45ea0796f21a17b3fdbefab496e3424e813150452838338262?apiKey=54709c8bd30b4ce38ba82e61049e17ec&",
      imgAlt: "Portrait of Emil Yancy",
    },
    {
      name: "Coty Robin",
      role: "Senior Recruitor",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1592a4821d7aedaf758f5756430d67960f86b4b544ef43a4fbcda48d0994d10d?apiKey=54709c8bd30b4ce38ba82e61049e17ec&",
      imgAlt: "Portrait of Coty Robin",
    },
    {
      name: "Missie Moira",
      role: "Senior Recruitor",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8ac0751f6e7a34adf97c553c81d66bb96a366eebf8cc239df3bb54b130276935?apiKey=54709c8bd30b4ce38ba82e61049e17ec&",
      imgAlt: "Portrait ofie Moira",
    },
    {
      name: "Presley Kiera",
      role: "Senior Recruitor",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dabbcc1d8eadc3ba89aa5bfa72f73a81cdb35b789d0b620325bb5c72ccfa7314?apiKey=54709c8bd30b4ce38ba82e61049e17ec&",
      imgAlt: "Portrait of Presley Kiera",
    },
    {
      name: "Dave Jools",
      role: "Junior Recruitor",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/49ccdf2f6b29ad5ecdd8ed2e704bf416e2d418c11a0e36836839100b79f877a9?apiKey=54709c8bd30b4ce38ba82e61049e17ec&",
      imgAlt: "Portrait of Dave Jools",
    },
    {
      name: "Ilene Leone",
      role: "Junior Recruitor",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0bdbd58782472cb35b3e84a3086c40214f9ada9f566a15858a41e80a7c7497e1?apiKey=54709c8bd30b4ce38ba82e61049e17ec&",
      imgAlt: "Portrait of Ilene Leone",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white">
      <section className="flex overflow-hidden relative flex-col justify-center self-stretch w-full text-7xl text-white uppercase whitespace-nowrap min-h-[498px] max-md:max-w-full max-md:text-4xl">
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e39ed372ff095855e0793bff77f72edba3348e4f35963723926cc1df7501f8bb?apiKey=54709c8bd30b4ce38ba82e61049e17ec&"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative justify-center items-start pt-56 pr-16 pb-44 pl-36 w-full bg-sky-950 bg-opacity-90 max-md:py-10 max-md:pr-5 max-md:pl-8 max-md:max-w-full max-md:text-4xl">
          About
        </div>
      </section>
      <section className="mt-56 w-full max-w-[1429px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 mt-6 max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-extrabold tracking-widest text-teal-400 uppercase max-md:max-w-full">
                Message from CEO
              </div>
              <div className="mt-11 text-6xl text-sky-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                We are here to support your career.
              </div>
              <p className="mt-14 text-xl tracking-wider leading-8 text-black max-md:mt-10 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Tellus euismod commodo
                ridiculus at pretium egestas ullamcorper ornare. At sit ut nec
                nunc accumsan risus vestibulum nisi. Vitae faucibus facilisis
                sit quis egestas. Magna consectetur sit sagittis auctor sed
                massa vulputate. Lobortis mollis sed viverra in integer
                dictumst. Fringilla massa id integer.
                <br />
                <br />
                Feugiat suspendisse nulla risus lectus. Suscipit et gravida
                vehicula ut orci gravida volutpat ut. Amet sit est tincidunt sed
                luctus diam. Viverra massa neque dictum a. Bibendum quis eget mi
                vitae. Proin dolor felis viverra sed est nisl dictum. Massa sed
                mi a tincidunt. Morbi vestibulum nam elementum commodo posuere
                mattis vitae. Et vestibulum quam tincidunt.
              </p>
            </div>
          </div>
          <aside className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 text-xl font-bold tracking-wider leading-8 text-right text-black max-md:mt-10 max-md:max-w-full">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9c4c9c2373543c7223db5587f50ce5f692c1f66b3083755eb77508674d9496b?apiKey=54709c8bd30b4ce38ba82e61049e17ec&"
                alt="Portrait of Laila Britney"
                className="w-full aspect-[0.8] max-md:max-w-full"
              />
              <div className="mt-6">
                Laila Britney
                <br />
                <span className="font-light">CEO OF RECUIT</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="flex justify-center items-center self-stretch px-16 py-20 mt-44 w-full bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center my-7 w-full max-w-[1440px] max-md:max-w-full">
          <div className="text-3xl font-extrabold tracking-widest text-teal-400 uppercase">
            Our Team
          </div>
          <div className="mt-8 text-5xl text-center capitalize text-sky-950 max-md:max-w-full max-md:text-4xl">
            We are Career specialists
          </div>
          <div className="self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {teamMembers.slice(0, 4).map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  imgSrc={member.imgSrc}
                  imgAlt={member.imgAlt}
                />
              ))}
            </div>
          </div>
          <div className="mt-12 max-w-full w-[704px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {teamMembers.slice(4).map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  imgSrc={member.imgSrc}
                  imgAlt={member.imgAlt}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-36 ml-20 text-xl tracking-wider text-black max-md:mt-10">
        <label htmlFor="fullName" className="sr-only">
          Full Name
        </label>
        <input
          className="w-full max-w-[690px] bg-white rounded-xl border border-solid border-zinc-300 h-[81px]"
          type="text"
          id="fullName"
          placeholder="Full Name"
          aria-label="Full Name"
        />
      </section>
      <section>
        <div className="mt-9 ml-14 text-xl tracking-wider text-black">
          Email
        </div>
        <div className="w-full max-w-[1440px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl capitalize text-sky-950 max-md:max-w-full max-md:text-4xl">
                  Looking for a new opportunity?
                </div>
                <p className="mt-12 text-xl tracking-wider text-black max-md:mt-10 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar
                  sed blandit rhoncus tellus senectus at quis. Mi at fermentum
                  imperdiet velit magna a aliquam. Faucibus et quam ac elit
                  placerat tristique vulputate.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 mt-4 text-xl tracking-wider text-black max-md:mt-10 max-md:max-w-full">
                <label htmlFor="contactNumber" className="sr-only">
                  Contact Number
                </label>
                <input
                  className="shrink-0 bg-white rounded-xl border border-solid border-zinc-300 h-[81px] max-md:max-w-full"
                  type="text"
                  id="contactNumber"
                  placeholder="Contact Number"
                  aria-label="Contact Number"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex gap-5 justify-between px-8 py-5 mt-16 ml-32 text-xl tracking-wider text-black whitespace-nowrap bg-teal-400 max-md:px-5 max-md:mt-10">
        <button className="my-auto">Submit</button>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af10187f69ef8004524ffff2f5d3b0c16a643e4f26fb91179b852f3297e3a054?apiKey=54709c8bd30b4ce38ba82e61049e17ec&"
          alt="Submit Icon"
          className="shrink-0 aspect-square w-[31px]"
        />
      </div>
    </div>
  );
};
