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

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const ContactUsEmail = ({ data }: { data: ContactUsDataContent }) => {
  //
  const formattedDate = new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'medium',
  }).format(data.updatedAt);

  return (
    <Html>
      <Head />
      <Preview>You updated the password for your Twitch account</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section style={logo}>
              <Img width={114} src={`${baseUrl}/invoice-logo.png`} />
            </Section>
            <Section style={sectionsBorders}>
              <Row>
                <Column style={sectionBorder} />
                <Column style={sectionCenter} />
                <Column style={sectionBorder} />
              </Row>
            </Section>
            <Section style={content}>
              <Text style={paragraph}>Hi {data.enquirerName},</Text>
              <Text style={paragraph}>
                Thank you for contacting us on {formattedDate}. We have received
                your query and will get back to you soon.
              </Text>
              {/* <Text style={paragraph}>
                However if you did NOT perform this password change, please{' '}
                <Link href='#' style={link}>
                  reset your account password
                </Link>{' '}
                immediately.
              </Text> */}
              {/* <Text style={paragraph}>
                Remember to use a password that is both strong and unique to
                your Twitch account. To learn more about how to create a strong
                and unique password,{' '}
                <Link href='#' style={link}>
                  click here.
                </Link>
              </Text> */}
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
            {/* <Row>
              <Column
                align='right'
                style={{ width: '50%', paddingRight: '8px' }}>
                <Img src={`${baseUrl}/twitch-icon-twitter.png`} />
              </Column>
              <Column align='left' style={{ width: '50%', paddingLeft: '8px' }}>
                <Img src={`${baseUrl}/twitch-icon-facebook.png`} />
              </Column>
            </Row> */}
            <Row>
              <Text style={{ textAlign: 'center', color: '#706a7b' }}>
                © {new Date().getFullYear()} Consultero, All Rights Reserved{' '}
                <br />
                {/* 350 Bush Street, 2nd Floor, San Francisco, CA, 94104 - USA */}
                Chennai, India
              </Text>
            </Row>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

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
