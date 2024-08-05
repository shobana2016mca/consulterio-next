import config from '@/tailwind.config';
import {
  Body,
  Button,
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

/*
id 82896017109
join_url https://us05web.zoom.us/j/6066143134?pwd=2ABOaDSerN1bQEtPIfFwoJfiRAabqC.1&omn=82896017109 
*/

MeetingLinkEmail.PreviewProps = {
  data: {
    username: 'Abhijit Kumar',
    email: 'jhon@example.com',
    meetingId: 82896017109,
    joinUrl:
      'https://us05web.zoom.us/j/6066143134?pwd=2ABOaDSerN1bQEtPIfFwoJfiRAabqC.1&omn=82896017109',
  },
};

export function MeetingLinkEmail({ data }: { data: MeetingLinkContent }) {
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
      <Preview> Your join url for Interview Mastery Workshop</Preview>
      <Tailwind config={config}>
        <Body style={main}>
          <Container style={container} className={'aspect-[16/9]'}>
            <Img
              src={`${baseUrl}/email-logo/email-logo.png`}
              width='100'
              height='100'
              alt='consultero logo'
              // style={logo}
              className={'w-full h-full'}
            />
            <Heading style={heading}>
              Hi, <br />
              {data.username}, <br /> Your join url for Interview Mastery
              Workshop
            </Heading>
            <Section style={buttonContainer}>
              <Button style={button} href={data.joinUrl} target='_blank'>
                Join to meeting
              </Button>
            </Section>
            <Text style={paragraph}>
              Use the below code to join the meeting on Zoom or click the above
              button to join directly. The meeting id is: {data.meetingId}.{' '}
              <br />
              If you have any questions, please contact us at{' '}
              <Link href='mailto:marketingconsultero@gmail.com' target='_blank'>
                Here
              </Link>
            </Text>
            <code style={code}>{data.meetingId}</code>
            <Hr style={hr} />
            <Link href={baseUrl} style={reportLink} target='_blank'>
              Consultero
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default MeetingLinkEmail;

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '560px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0',
};

const paragraph = {
  margin: '0 0 15px',
  fontSize: '15px',
  lineHeight: '1.4',
  color: '#3c4149',
};

const buttonContainer = {
  padding: '27px 0 27px',
};

const button = {
  backgroundColor: '#5e6ad2',
  borderRadius: '3px',
  fontWeight: '600',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '11px 23px',
};

const reportLink = {
  fontSize: '14px',
  color: '#b4becc',
};

const hr = {
  borderColor: '#dfe1e4',
  margin: '42px 0 26px',
};

const code = {
  fontFamily: 'monospace',
  fontWeight: '700',
  padding: '1px 4px',
  backgroundColor: '#dfe1e4',
  letterSpacing: '-0.3px',
  fontSize: '21px',
  borderRadius: '4px',
  color: '#3c4149',
};
