import {
  Body,
  Column,
  Container,
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

// declare type ContactUsDataContent = {
//   enquirerName: string;
//   email: string;
//   phoneNo: string;
//   communicationMethod: string;
//   message: string;
//   updatedAt: Date;
// };

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_EMAIL_PUBLIC_SERVER_URL
    : process.env.NEXT_EMAIL_SERVER_URL;

ContactUsEmail.PreviewProps = {
  enquirerName: 'Abhijit Kumar',
  email: 'abhijitkumar@gmail.com',
  phoneNo: '1234567890',
  communicationMethod: 'Email',
  message: 'I have a query regarding the services you provide.',
  updatedAt: new Date('June 23, 2022 4:06:00 pm UTC'),
} as ContactUsDataContent;

export function ContactUsEmail({
  data,
  enquirerName,
  email,
}: {
  data: ContactUsDataContent;
  enquirerName: string;
  email: string;
  phoneNo: string;
  communicationMethod: string;
  message: string;
  updatedAt: Date;
}) {
  //
  const formattedDate = new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'medium',
  }).format(data?.updatedAt || new Date());

  return (
    <Html>
      <Head />
      <Preview>You updated the password for your Twitch account</Preview>
      <Tailwind>
        <Body style={main}>
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
              <Text style={paragraph}>
                Hi {data?.enquirerName || enquirerName},
              </Text>
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
              {/* <Text style={paragraph}>
              Thanks,
              <br />
              Consultero Support Team
            </Text> */}
              <Text style={paragraph}>
                Regards,
                <br />
                Support Team.
              </Text>
            </Section>
          </Container>

          <Section style={footer}>
            <Row>
              <Text style={{ textAlign: 'center', color: '#706a7b' }}>
                © {new Date().getFullYear()} Consultero, All Rights Reserved{' '}
                <br />
                Chennai, India
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
