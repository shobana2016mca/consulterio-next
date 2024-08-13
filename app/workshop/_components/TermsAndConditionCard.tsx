import SectionWrapper from '@/app/_components/SectionWrapper';

export default function TermsAndConditionCard() {
  return (
    <section>
      <SectionWrapper>
        <div className='w-full shadow-lg rounded-lg p-6 bg-neutral-50'>
          <h3 className='font-title text-center font-bold text-xl mb-4'>
            Workshop Terms and Conditions
          </h3>
          <h4 className='text-base font-semibold mb-2'>1. No Refund Policy:</h4>
          <p className='mb-4 text-sm'>
            All payments made for the workshop are non-refundable under any
            circumstances.
          </p>
          <h2 className='text-base font-semibold mb-2'>
            2. Class Timing and Rescheduling:
          </h2>
          <p className='mb-4 text-sm'>
            Participants are expected to attend the workshop at the scheduled
            times.
          </p>
          <p className='mb-4 text-sm'>
            If a participant misses a class, we will offer one opportunity to
            join the next available slot for the missed session. This
            rescheduling option is available only once per participant.
          </p>
          <h2 className='text-base font-semibold mb-2'>3. Certification:</h2>
          <p className='mb-4 text-sm'>
            A certificate of completion will be awarded to participants who
            successfully complete the 5-day workshop. To be eligible for
            certification, participants must maintain a minimum attendance rate
            of 75%.
          </p>
          <h2 className='text-base font-semibold mb-2'>4. Recording Policy:</h2>
          <p className='mb-4 text-sm'>
            Recording of the workshop sessions is strictly prohibited. Any
            participant found recording will be subject to removal from the
            workshop without a refund.
          </p>
          <details className='mb-4 text-sm'>
            <summary className='text-base font-semibold mb-2'>
              User Comments
            </summary>
            <p className={'mb-4 text-sm'}>
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              Company Name does not filter, edit, publish or review Comments
              prior to their presence on the website. Comments do not reflect
              the views and opinions of Company Name, its agents and/or
              affiliates. Comments reflect the views and opinions of the person
              who post their views and opinions.
            </p>
          </details>
          <details className='mb-4'>
            <summary className='text-base font-semibold mb-2'>
              Content Liability
            </summary>
            <p className={'mb-4 text-sm'}>
              We shall not be hold responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that are rising on your Website. No link(s) should appear
              on any Website that may be interpreted as libelous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third party rights.
            </p>
          </details>
        </div>
      </SectionWrapper>
    </section>
  );
}
