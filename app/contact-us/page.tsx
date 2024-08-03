import ContactForm from '@/app/contact-us/_components/ContactForm';
import ContactFormMap from '@/app/contact-us/_components/ContactFormMap';
import { Metadata } from 'next';
import SectionHeading from '../_components/SectionHeading';
import SectionWrapper from '../_components/SectionWrapper';
import ContactInfoCard from './_components/ContactInfoCard';

export const metadata: Metadata = {
  title: 'Consultero | Contact Us',
  description: 'Contact us for any inquiries or support',
};

export default function ContactUsPage() {
  return (
    <main>
      <section className='py-12'>
        <SectionWrapper>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='mb-10 lg:mb-0'>
              <div className='w-full h-full group'>
                <div className='relative w-full h-full aspect-square'>
                  {/* <Image
                  src='https://pagedone.io/asset/uploads/1696488602.png'
                  alt='ContactUs tailwind section'
                  className='w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply'
                  width={500}
                  height={500}
                  priority
                /> */}

                  <ContactFormMap />

                  {/* heading */}
                  {/* <h1 className='absolute text-4xl font-bold leading-10 text-white font-manrope top-11 left-11'>
                    Contact us
                  </h1> */}
                  {/* info card */}
                  <ContactInfoCard />
                </div>
              </div>
            </div>

            {/* CONTACT ME */}
            <div className='p-4 space-y-8 bg-gray-50 md:p-8 lg:p-12 lg:rounded-r-2xl rounded-2xl'>
              <SectionHeading>Send Us A Message</SectionHeading>
              <ContactForm />
            </div>
          </div>
        </SectionWrapper>
      </section>
    </main>
  );
}
