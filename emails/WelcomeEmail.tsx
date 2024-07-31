import config from '@/tailwind.config';
import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_EMAIL_PUBLIC_SERVER_URL
    : process.env.NEXT_EMAIL_SERVER_URL;

WelcomeMail.PreviewProps = {
  firstName: 'Abhijit',
  lastName: 'Kumar',
  email: 'marketingconsultero@gmail.com',
  getStartedUrl: 'https://consulterio.vercel.app',
} satisfies WelcomeEmailContent;

export default function WelcomeMail({
  data,
}: {
  data: WelcomeEmailContent;
  // firstName: string;
  // lastName: string;
  // email: string;
  // getStartedUrl: string;
}) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily='Roboto'
          fallbackFontFamily='Verdana'
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle='normal'
        />
      </Head>
      <Preview>Welcome to Consultero</Preview>
      <Tailwind config={config}>
        <Body className={'relative'}>
          <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[576px]'>
            <Section className='aspect-[30/9]'>
              <Img
                // src={`/invoice-logo.png`}
                src={`${baseUrl}/invoice-logo.png`}
                width='200'
                height='80'
                alt='Consultero Logo'
                className='object-top object-cover w-full h-full'
              />
            </Section>
            <Section className='mt-[32px]'>
              <Heading as='h1' className='text-base font-sans'>
                Dear <strong>{data?.firstName}</strong>, <br /> Welcome to
                Interview Mastery!
              </Heading>

              <Text className={'text-sm font-sans font-medium'}>
                We are delighted to have you on board for our comprehensive
                program designed to help you ace your next job interview. Our
                goal is to equip you with the skills, confidence, and strategies
                needed to succeed in today&apos;s competitive job market.
              </Text>
            </Section>
            <Hr className='border border-solid border-[#eaeaea] my-[26px] mx-0 w-full' />
            <Section>
              <Text className='text-lg font-semibold font-sans'>
                What to Expect:
              </Text>
              <ul className={'font-sans'}>
                <li>
                  <span className={'text-sm font-semibold'}>
                    Expert Guidance:&nbsp;
                  </span>
                  <span className={'text-sm'}>
                    Learn from seasoned professionals with extensive experience
                    in recruitment and hiring.
                  </span>
                </li>
                <li>
                  <span className={'text-sm font-semibold'}>
                    Practical Techniques:&nbsp;
                  </span>
                  <span className={'text-sm'}>
                    Gain valuable insights into interview techniques, from
                    crafting the perfect resume to mastering behavioral
                    questions.
                  </span>
                </li>
                <li>
                  <span className={'text-sm font-semibold'}>
                    Mock Interviews:&nbsp;
                  </span>
                  <span className={'text-sm'}>
                    Participate in simulated interviews to practice and receive
                    constructive feedback.
                  </span>
                </li>
                <li>
                  <span className={'text-sm font-semibold'}>
                    Tailored Advice:&nbsp;
                  </span>
                  <span className={'text-sm'}>
                    Get personalized tips and strategies based on your unique
                    career goals and industry.
                  </span>
                </li>
              </ul>
              <Hr className='border border-solid border-[#eaeaea] my-[26px] mx-0 w-full' />
              <Text className='text-lg font-semibold font-sans'>
                Next Steps:
              </Text>
              <ul>
                <li>
                  <span className={'text-sm font-semibold'}>
                    Orientation Session:&nbsp;
                  </span>
                  <span className={'text-sm'}>
                    Join us for an introductory session on [Date] at [Time]. We
                    will provide an overview of the program and answer any
                    questions you may have.
                  </span>
                </li>
                <li>
                  <span className={'text-sm font-semibold'}>
                    Resource Access:&nbsp;
                  </span>
                  <span className={'text-sm'}>
                    You will receive access to our exclusive online resources,
                    including video tutorials, e-books, and practice materials.
                  </span>
                </li>
                <li>
                  <span className={'text-sm font-semibold'}>
                    Schedule Your Sessions:&nbsp;
                  </span>
                  <span className={'text-sm'}>
                    Book your personalized coaching sessions with our experts at
                    your convenience.
                  </span>
                </li>
              </ul>
            </Section>
            <Hr className='border border-solid border-[#eaeaea] my-[26px] mx-0 w-full' />

            <Section>
              <Text className='text-sm font-semibold font-sans'>
                We are excited to help you unlock your full potential and
                achieve your career aspirations. If you have any questions or
                need assistance, please do not hesitate to contact us at{' '}
                <Link href={data.email}>here.</Link> Let&apos;s embark on this
                journey to interview success together! Best regards,{' '}
                {data.firstName}
                . <br />
                <strong>Interview Mastery Team </strong>
              </Text>
            </Section>

            <Hr className='border border-solid border-[#eaeaea] my-[26px] mx-0 w-full' />
            <Section>
              <Text className='font-sans'>
                Best,
                <br />
                The <strong>Consultero</strong> Team.
              </Text>
            </Section>
            <Hr className='border border-solid border-[#eaeaea] my-[26px] mx-0 w-full' />

            <Text className='text-[12px] leading-[24px] font-sans'>
              This email was sent to{' '}
              <strong>
                <span
                  className={
                    'font-sans text-xs bg-blue-600 text-white px-2 py-1 rounded-full'
                  }>
                  {data.email}
                </span>
              </strong>{' '}
              because you signed up for our program. If you did not sign up,
              please disregard this email.
            </Text>
            <Text className='text-[#666666] text-[12px] leading-[24px] font-sans'>
              If you have any questions, please contact us at{' '}
              <Link href={`mailto:skyviewgeosolutions@gmail.com`}>here.</Link>.
            </Text>
            <Text
              className={
                'font-sans font-medium text-center text-xs text-black'
              }>
              <Link
                href='https://www.skyviewgeosolutions.com/'
                className={'text-black'}>
                Consultero.in
                <span className={''}>&rarr;</span>
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
