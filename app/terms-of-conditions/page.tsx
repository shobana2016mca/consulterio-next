import SectionWrapper from '../_components/SectionWrapper';

export default function TermsOfConditionsPage() {
  return (
    <main id='content'>
      <section>
        <SectionWrapper>
          {/* <!-- Heading --> */}
          <div className='pt-24 pb-6 text-center'>
            <h1 className='mb-2 text-2xl font-bold md:text-4xl'>
              Terms &amp; Conditions
            </h1>
            <p className='text-gray-700'>
              Last updated:{' '}
              {new Intl.DateTimeFormat('en-IN', {
                month: 'long',
                year: 'numeric',
                day: '2-digit',
              }).format(new Date())}
            </p>
          </div>
          {/* <!-- End Heading --> */}

          {/* <!-- Content --> */}
          <div className='pb-12 md:pt-6 sm:pb-20'>
            <div className='grid gap-4 md:gap-8'>
              <div>
                <p className='mb-8 text-xl'>
                  These Terms and Conditions (&quot;Terms&quot;) govern your use
                  of the services provided by Consultero (&quot;us&quot;,
                  &quot;we&quot;, or &quot;our&quot;). By signing up for our
                  services, you agree to comply with these Terms.
                </p>

                <h2 className='mb-2 text-lg font-semibold'>
                  1. Agreement Initiation:
                </h2>
                <p className='mb-5'>
                  By signing up for our services, you agree to enter into a
                  binding agreement with Consultero to receive our recruitment
                  services.
                </p>

                <h2 className='mb-2 text-lg font-semibold'>2. Services:</h2>
                <p className='mb-5'>
                  We provide recruitment services to help you find suitable
                  candidates for your organization. Our services include but are
                  not limited to sourcing candidates, scheduling interviews, and
                  providing replacement support.
                </p>

                <h2 className='mb-2 text-lg font-semibold'>3. Fees:</h2>
                <p className='mb-5'>
                  You agree to pay the fees associated with our services as
                  outlined in the agreement. Fees may vary depending on the
                  scope of services provided.
                </p>

                <h2 className='mb-2 text-lg font-semibold'>
                  4. Confidentiality:
                </h2>
                <p className='mb-5'>
                  We will treat all information shared with us during the
                  recruitment process as confidential. This includes but is not
                  limited to candidate resumes, company information, and hiring
                  criteria.
                </p>

                <h2 className='mb-2 text-lg font-semibold'>
                  5. Intellectual Property:
                </h2>
                <p className='mb-5'>
                  All intellectual property rights related to our services,
                  including but not limited to software, logos, and content,
                  belong to Consultero. You agree not to use, reproduce, or
                  distribute our intellectual property without prior written
                  consent.
                </p>

                <h2 className='mb-2 text-lg font-semibold'>
                  6. Limitation of Liability:
                </h2>
                <p className='mb-5'>
                  We make every effort to provide accurate and reliable
                  services, but we cannot guarantee the suitability or
                  performance of candidates. We are not liable for any damages,
                  losses, or expenses incurred as a result of using our
                  services.
                </p>

                <h2 className='mb-2 text-lg font-semibold'>7. Termination:</h2>
                <p className='mb-5'>
                  Either party may terminate the agreement with written notice
                  if the other party breaches these Terms. Upon termination, any
                  outstanding fees are due and payable.
                </p>

                <h2 className='mb-2 text-lg font-semibold'>
                  8. Governing Law:*
                </h2>
                <p className='mb-5'>
                  These Terms are governed by the laws of [your jurisdiction].
                  Any disputes arising out of or related to these Terms will be
                  resolved through arbitration in accordance with the rules of
                  [your arbitration organization].
                </p>

                <h2 className='mb-2 text-lg font-semibold'>9. Amendments:</h2>
                <p className='mb-5'>
                  We reserve the right to update or modify these Terms at any
                  time. Any changes will be effective upon posting on our
                  website. Your continued use of our services after the changes
                  constitute acceptance of the updated Terms.
                </p>

                <h2 className='mb-2 text-lg font-semibold'>10. Contact Us:</h2>
                <p className='mb-5'>
                  If you have any questions or concerns about these Terms,
                  please contact us at [contact email or address].
                </p>
              </div>
              <p className='mb-5'>
                By signing up for our services, you acknowledge that you have
                read, understood, and agree to these Terms and Conditions.
              </p>
            </div>
          </div>
          {/* <!-- End Content --> */}
        </SectionWrapper>
      </section>
    </main>
  );
}
