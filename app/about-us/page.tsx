import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { FaChalkboardTeacher, FaHandshake } from 'react-icons/fa';
import { FaRegCircleCheck, FaRegCirclePlay } from 'react-icons/fa6';
import { GiSkills } from 'react-icons/gi';
import { GoCommentDiscussion } from 'react-icons/go';
import {
  MdManageAccounts,
  MdOutlineConnectWithoutContact,
} from 'react-icons/md';
import { RiGuideFill } from 'react-icons/ri';
import SectionHeading from '../_components/SectionHeading';
import SectionWrapper from '../_components/SectionWrapper';

export const metadata: Metadata = {
  title: 'Consultero | About Us',
  description: 'About us page for Consultero',
};

const aboutUsLists = [
  {
    id: crypto.randomUUID(),
    listItem:
      ' We specialize in connecting top talent with leading organizations',
  },
  {
    id: crypto.randomUUID(),
    listItem:
      ' We provide unparalleled recruitment services, delivering the right candidates at the right time and at an affordable price',
  },
  {
    id: crypto.randomUUID(),
    listItem:
      ' We take a personalized approach to each project, understanding the unique needs of every client',
  },
];

const whyChooseUsLists = [
  {
    id: crypto.randomUUID(),
    title: 'Leadership Training',
    description:
      'We provide leadership training programs to help your team grow and succeed',
    icon: FaHandshake,
  },
  {
    id: crypto.randomUUID(),
    title: 'Recruitment Solutions',
    description:
      'Our recruitment solutions are tailored to your needs, ensuring you find the right candidates every time',
    icon: FaChalkboardTeacher,
  },
  {
    id: crypto.randomUUID(),
    title: 'Career Development',
    description:
      'We offer career development services to help your employees reach their full potential',
    icon: RiGuideFill,
  },
  {
    id: crypto.randomUUID(),
    title: 'Employee Engagement',
    description:
      'Our employee engagement programs are designed to boost morale and productivity',
    icon: MdManageAccounts,
  },
  {
    id: crypto.randomUUID(),
    title: 'HR Consulting',
    description:
      'We provide HR consulting services to help you navigate complex HR issues',
    icon: GoCommentDiscussion,
  },
  {
    id: crypto.randomUUID(),
    title: 'Talent Acquisition',
    description:
      'We offer talent acquisition services to help you find the right candidates for your business',
    icon: GiSkills,
  },
];

export default function AboutPage() {
  return (
    <main className={'space-y-16'}>
      <AboutUs />
      {/* <section>
        <SectionWrapper>
          <div className={'space-y-16 py-8'}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
              <div className='relative w-full h-full aspect-square md:aspect-[3/2] col-span-full lg:col-span-1 order-last lg:order-1'>
                <Image
                  src='https://pagedone.io/asset/uploads/1702034769.png'
                  alt='About Us tailwind page'
                  className='object-cover w-full h-full rounded-md'
                  
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 592px'
                />
              </div>
              <div className='grid content-center order-1 gap-y-4 xl:gap-y-8 col-span-full lg:col-span-1 xl:order-last'>
                <SectionHeading>About Us</SectionHeading>
                <p className='text-sm font-normal leading-5 text-gray-500 md:text-lg lg:text-xl md:leading-6 lg:leading-8'>
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
                  right candidates but do so efficiently and effectively. We
                  take a personalized approach to each project, understanding
                  the unique needs of every client.
                </p>
                <p className='text-sm font-normal leading-5 text-gray-500 md:text-lg lg:text-xl md:leading-6 lg:leading-8'>
                  By leveraging advanced recruitment strategies and our
                  extensive network, we significantly enhance the quality and
                  speed of hiring. Our goal is to make the recruitment process
                  seamless, reducing time-to-hire and ensuring a perfect fit for
                  every role. With Consultero, you can trust that your
                  recruitment process will be handled with precision and care,
                  leading to improved outcomes and a stronger, more capable
                  workforce.
                </p>
              </div>
              <div className='relative w-full h-full aspect-square'>
                <Image
                  src='https://pagedone.io/asset/uploads/1702034785.png'
                  alt='About Us tailwind page'
                  className='object-cover w-full h-full rounded-md'
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 592px'
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section> */}

      <WhyChooseUs />

      <WhoWeAre />

      <AboutCTA />
    </main>
  );
}

function AboutUs() {
  return (
    <section className={'mt-8'}>
      <SectionWrapper>
        <div className={'grid grid-cols-3 gap-y-4 lg:gap-x-4'}>
          <div
            className={
              'col-span-full lg:col-span-1 relative p-4 aspect-square lg:aspect-auto'
            }>
            <Image
              src={'/about-us-bg.png'}
              fill
              alt={'About Us background'}
              className={'object-cover w-full h-full'}
              sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 592px'
              priority
            />
            <Image
              src={'/about-us-lady.png'}
              fill
              alt='About Us Person'
              className='object-contain w-full h-full lg:object-cover'
              sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 592px'
              priority
            />
          </div>
          <div
            className={
              'col-span-full lg:col-span-2 p-4 self-center grid gap-y-4'
            }>
            <SectionHeading>A New Experience in Human Resources</SectionHeading>
            <p className='text-sm font-normal leading-5 text-gray-500 md:text-lg lg:text-xl md:leading-6 lg:leading-8'>
              Consultero is a leading provider of HR recruitment solutions for
              software-based and corporate companies. Our team of experts
              specializes in connecting top talent with leading organizations,
              ensuring they find the perfect fit for their needs. Established in
              2016, Consultero has been committed to revolutionizing the
              recruitment process for our clients. Our expertise and dedication
              have consistently led to streamlined hiring procedures, ensuring
              that companies not only find the right candidates but do so
              efficiently and effectively.
            </p>

            <div>
              <ul>
                {aboutUsLists.map((list) => (
                  <li key={list.id} className='flex items-center gap-2 mt-4'>
                    <FaRegCircleCheck className='text-blue-900 size-4 lg:size-6' />
                    <span className='text-sm font-normal text-gray-500 md:text-base lg:text-lg'>
                      {list.listItem}
                    </span>
                  </li>
                ))}
              </ul>

              <p className='mt-4 text-sm font-normal leading-5 text-gray-500 md:text-lg lg:text-xl md:leading-6 lg:leading-8'>
                At Consultero, we understand the critical role that talent plays
                in the success of any business. That&apos;s why our mission is
                to provide unparalleled recruitment services, delivering the
                right candidates at the right time and at an affordable price.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section>
      <SectionWrapper>
        <div className={'space-y-6 xl:space-y-12'}>
          <SectionHeading center>
            Why Choose Consultero Services?
          </SectionHeading>

          <div
            className={
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'
            }>
            {whyChooseUsLists.map((list) => (
              <div
                className='flex items-center gap-4 p-4 transition-transform rounded-lg shadow-md cursor-pointer lg:gap-8 ring-1 ring-slate-300 transform-gpu hover:scale-105'
                key={list.id}>
                <div className={'bg-blue-500 rounded-full p-2 lg:p-4'}>
                  <list.icon className='text-white size-6 lg:size-12' />
                </div>
                <div>
                  <h3 className='text-base font-semibold text-gray-800 md:text-lg lg:text-xl'>
                    {list.title}
                  </h3>
                  <p className='text-sm font-normal text-gray-500 md:text-base'>
                    {list.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section>
      <SectionWrapper>
        <div
          className={
            'grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 aspect-[26/9]'
          }>
          <div
            className={
              'col-span-full lg:col-span-1 relative aspect-video lg:aspect-auto'
            }>
            <Image
              src={'/who-we-are.jpg'}
              fill
              alt={'About Us background'}
              className={'object-cover w-full h-full rounded-md'}
              sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 592px'
            />

            <div
              className={
                'absolute inline-grid place-items-center w-full h-full'
              }>
              <button
                className={
                  'bg-blue-200 p-8 rounded-full flex items-center gap-4 text-white font-medium animate-pingg'
                }>
                <span className={'animate-ping'}>
                  <FaRegCirclePlay
                    className={'fill-blue-800 stroke-white stroke-1 size-6'}
                  />
                </span>
                <span className={'sr-only'}>Watch Video</span>
              </button>
            </div>
          </div>
          <div className={'col-span-full lg:col-span-1 grid gap-y-4'}>
            <span
              className={
                'uppercase text-center lg:text-start text-slate-400 font-medium'
              }>
              Who we are
            </span>
            <SectionHeading>
              We Choose a Human Resources Services
            </SectionHeading>
            <h3>
              Train people quickly well with e-business.So they highly efficient
              manufactured products.
            </h3>
            <p>
              Our advisers provides a broad menu service that identifies the
              task your requirements in the organization job and designs the
              task description with skill requirements for the task.
            </p>

            <ul className={'grid gap-y-4'}>
              <li className={'flex items-center gap-x-4'}>
                <BsArrowUpRightSquare className={'size-4 lg:size-6'} />
                <span>Highly experienced Emphires employees</span>
              </li>
              <li className={'flex items-center gap-x-4'}>
                <BsArrowUpRightSquare className={'size-4 lg:size-6'} />
                <span>In easy way to train employees for clients</span>
              </li>
              <li className={'flex items-center gap-x-4'}>
                <BsArrowUpRightSquare className={'size-4 lg:size-6'} />
                <span>Our employees are expert and professional</span>
              </li>
            </ul>

            <Link
              href={'/contact-us'}
              className='px-4 py-2 text-sm font-medium text-white transition-transform rounded-full lg:px-8 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-500 lg:font-bold transform-gpu hover:-translate-y-1 hover:shadow-lg justify-self-start md:text-base lg:text-xl'>
              Contact Here!
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

function AboutCTA() {
  return (
    <section>
      <div
        className={
          'relative aspect-video sm:aspect-[24/9] md:aspect-[28/9] lg:aspect-[36/9]'
        }>
        <Image
          src={'/about-cta.jpg'}
          fill
          alt={'About Us background'}
          className={'object-cover w-full h-full'}
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 592px'
        />
        <div className={'absolute w-full h-full grid items-center'}>
          <SectionWrapper>
            <div
              className={
                'grid grid-cols-12 gap-y-4 sm:gap-y-6 xl:gap-y-0 w-full sspace-x-8'
              }>
              <div className={'hidden xl:block lg:col-span-2 self-center'}>
                <MdOutlineConnectWithoutContact
                  className={'text-white size-full'}
                />
              </div>

              <div
                className={
                  'col-span-full xl:col-span-8 grid gap-y-1 md:gap-y-2 lg:gap-y-4'
                }>
                <h4
                  className={
                    'text-white font-bold text-lg xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl'
                  }>
                  Would you like to know more about our services?
                </h4>
                <p
                  className={
                    'text-blue-600 font-bold text-lg xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl'
                  }>
                  +91 739-702-2565
                </p>
                <p
                  className={
                    'text-blue-600 font-bold text-lg xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl'
                  }>
                  marketingconsultero@gmail.com
                </p>
              </div>

              <div className={'col-span-full xl:col-span-2 self-center'}>
                <Link
                  className='px-6 py-2 min-w-[120px] text-center text-white border-none ring-1 ring-blue-600 rounded bg-blue-700 hover:bg-white hover:text-blue-600 active:bg-blue-500 focus:outline-none focus:ring'
                  href='/get-a-quote'>
                  Book a consultation
                </Link>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
