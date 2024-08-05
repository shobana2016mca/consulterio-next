import config from '@/tailwind.config';
import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_EMAIL_PUBLIC_SERVER_URL
    : process.env.NEXT_EMAIL_SERVER_URL;

ContactUsEmail.PreviewProps = {
  data: {
    enquirerName: 'Abhijit Kumar',
    message: 'I have a query regarding the services you provide.',
    updatedAt: new Date('June 23, 2022 4:06:00 pm UTC'),
  },
};

export function ContactUsEmail({ data }: { data: ContactUsDataContent }) {
  const formattedDate = new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'medium',
  }).format(data?.updatedAt || new Date());

  return (
    <Html lang='en'>
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
      <Preview>Contact us Preview</Preview>
      <Tailwind config={config}>
        <Body
          className={
            'bg-[#eeeff1] h-screen flex flex-col items-center justify-items-center'
          }>
          <Container style={container}>
            <Section style={logo}>
              <Img width={114} src={`${baseUrl}/email-logo/email-logo.png`} />
            </Section>
            <Section style={sectionsBorders}>
              <Row>
                <Column style={sectionBorder} />
                <Column style={sectionCenter} />
                <Column style={sectionBorder} />
              </Row>
            </Section>
            <Section style={content}>
              <Text style={paragraph}>Hi {data?.enquirerName},</Text>
              <Text style={paragraph}>
                Thank you for contacting us on {formattedDate}. We have received
                your query and will get back to you soon.
              </Text>

              <Text style={paragraph}>
                Still have questions? Please contact{' '}
                <Link href='#' style={link}>
                  Consultero Support
                </Link>
              </Text>

              <Text style={paragraph}>
                Regards,
                <br />
                Consultero Support Team.
              </Text>
            </Section>
          </Container>

          <Section style={footer}>
            <Row>
              <Text style={{ textAlign: 'center', color: '#706a7b' }}>
                © {new Date().getFullYear()} Consultero, All Rights Reserved{' '}
                <br />
                1/259, 1st St, Shekmaniyam, Porur, Chennai, Tamil Nadu 600116
              </Text>
            </Row>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}

// ContactUsEmail.PreviewProps = {
//   username: 'alanturing',
//   updatedDate: new Date('June 23, 2022 4:06:00 pm UTC'),
// } as ContactUsEmailProps;

export default ContactUsEmail;

const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';

const main = {
  backgroundColor: '#efeef1',
  fontFamily,
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  maxWidth: '580px',
  margin: '30px auto',
  backgroundColor: '#ffffff',
};

const footer = {
  maxWidth: '580px',
  margin: '0 auto',
};

const content = {
  padding: '5px 20px 10px 20px',
};

const logo = {
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
  padding: 30,
};

const sectionsBorders = {
  width: '100%',
  display: 'flex',
};

const sectionBorder = {
  borderBottom: '1px solid rgb(238,238,238)',
  width: '249px',
};

const sectionCenter = {
  borderBottom: '1px solid rgb(145,71,255)',
  width: '102px',
};

const link = {
  textDecoration: 'underline',
};
