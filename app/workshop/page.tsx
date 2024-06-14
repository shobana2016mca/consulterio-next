import SectionWrapper from '@/components/SectionWrapper';
import { faqs } from '@/constants';
import Accordion from './_components/Accordion';
import CourseBenifits from './_components/CourseBenifits';
import CourseCurriculam from './_components/CourseCurriculam';
import CourseOverview from './_components/CourseOverview';
import InstructorProfileCard from './_components/InstructorProfileCard';
import SectionBanner from './_components/SectionBanner';

const faq = [
  {
    title: 'What are the advantages of your service?',
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title:
      'Are there any fees or commissions in addition to the monthly subscription?',
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: "You really don't charge per user? Why not?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: 'What happens when I go over my monthly active limit?',
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: true,
  },
  {
    title: 'Can your service help me understand how to work with my product?',
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: 'Which third-party application do you integrate with?',
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: 'I have another question!',
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
];

export default function WorkshopPage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  return (
    <main className={'space-y-16'}>
      <section className={'relative'}>
        <SectionBanner />

        <SectionWrapper>
          <div
            className={
              'absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-sky-950'
            }>
            <div className={'grid items-center justify-items-center h-full'}>
              <h1 className={'text-stone-100 text-5xl font-bold text-center'}>
                Interview Mastery: Ace Your Next Job Interview
              </h1>
            </div>
          </div>
        </SectionWrapper>
      </section>

      <section>
        <SectionWrapper>
          <div className={'grid grid-cols-1 lg:grid-cols-8 gap-x-8'}>
            <div
              className={
                'col-span-full lg:col-span-6 grid gap-y-6 w-full h-full p-8'
              }>
              {/* overview */}
              <CourseOverview />

              {/* benifits */}
              <CourseBenifits />

              {/* curriculam */}
              <CourseCurriculam />
            </div>
            <div className={'col-span-full lg:col-span-2 w-full h-full'}>
              <InstructorProfileCard />
            </div>
          </div>
        </SectionWrapper>
      </section>

      <section>
        <SectionWrapper>
          <div className='w-full max-w-5xl mx-auto px-4 md:px-6 py-24'>
            <h1 className='text-2xl text-center font-bold text-slate-900 mb-4'>
              FAQs
            </h1>

            <div className='divide-y divide-slate-200'>
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  question={faq.question}
                  id={`faqs-${index}`}
                  active={faq.active}>
                  {faq.answer}
                </Accordion>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </section>

      <section>
        <SectionWrapper>
          <h1 className='text-2xl text-center font-bold text-slate-900 mb-4'>
            What Our Students Say
          </h1>
          <div
            className={
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2'
            }>
            {Array.from({ length: 3 }).map((_, index) => (
              <div className='text-left shadow-lg p-4 rounded-md' key={index}>
                <div className='mb-4 text-black'>
                  <svg
                    height='35px'
                    className='mb-2'
                    fill='#5a67d8'
                    version='1.1'
                    id='Capa_1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    x='0px'
                    y='0px'
                    viewBox='0 0 32 32'
                    xmlSpace='preserve'>
                    <g>
                      <g id='right_x5F_quote'>
                        <g>
                          <path d='M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z'></path>
                          <path d='M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z'></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p className='mt-2 text-base leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <div className='text-sm mt-5'>
                    <a
                      href='#'
                      className='font-medium leading-none text-indigo-600 hover:text-black transition duration-500 ease-in-out'>
                      Jonathan Reinink
                    </a>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      <section>
        <SectionWrapper>
          <div className={'py-20'}>
            <h2 className={'text-2xl font-bold text-stone-400 text-center'}>
              Our Workshop
            </h2>
            <p className={'text-center text-stone-400 text-lg mt-4'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus, turpis et ultricies ultricies, felis elit malesuada nunc,
              nec ultricies elit nunc nec sapien. Sed auctor, ligula in
              scelerisque aliquam, elit urna ultricies urna, nec vestibulum
              turpis elit nec metus.
            </p>
          </div>
        </SectionWrapper>
      </section>

      <section>
        <SectionWrapper>
          <div className={'grid grid-cols-1 md:grid-cols-2 gap-8'}>
            <div>
              <h3 className={'text-2xl font-bold text-stone-400'}>
                Workshop Schedule
              </h3>
              <p className={'text-stone-400 mt-4'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                luctus, turpis et ultricies ultricies, felis elit malesuada
                nunc, nec ultricies elit nunc nec sapien. Sed auctor, ligula in
                scelerisque aliquam, elit urna ultricies urna, nec vestibulum
                turpis elit nec metus.
              </p>
            </div>
            <div>
              <h3 className={'text-2xl font-bold text-stone-400'}>Location</h3>
              <p className={'text-stone-400 mt-4'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                luctus, turpis et ultricies ultricies, felis elit malesuada
                nunc, nec ultricies elit nunc nec sapien. Sed auctor, ligula in
                scelerisque aliquam, elit urna ultricies urna, nec vestibulum
                turpis elit nec metus.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </section>
    </main>
  );
}
