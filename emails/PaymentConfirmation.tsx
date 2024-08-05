import config from '@/tailwind.config';
import {
  Body,
  Button,
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

PaymentConfirmationEmail.PreviewProps = {
  data: { userFirstname: 'Alan', meetingLink: '#' },
};

export function PaymentConfirmationEmail({
  data,
}: {
  data: PaymentConfirmationContent;
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
      <Preview>Payment confirmation email Preview</Preview>
      <Tailwind config={config}>
        <Body style={main}>
          <Container style={container}>
            <Img
              src={`${baseUrl}/email-logo/email-logo.png`}
              width='114'
              height='33'
              alt='Dropbox'
            />
            <Section>
              <Text style={text}>Hi {data.userFirstname},</Text>
              <Text style={text}>
                You have recently purchased a Interview Mastery course. Your
                payment has been confirmed.
              </Text>
              <Button style={button} href={data.meetingLink}>
                Join to the Course
              </Button>
              <Text style={text}>
                If you have any questions, please feel free to contact us at{' '}
                <Link
                  style={anchor}
                  href='mailto:marketingconsultero@gmail.com'>
                  Here
                </Link>
              </Text>
              <Text style={text}>
                Thank you for choosing Interview Mastery. We are excited to have
                you on board!
                <br />
                Best, Regards,
                <br />
                Hope you enjoy your learning experience with The Consultero
                Team.
                <br />
                <br />
              </Text>
              <Text style={text} className={'text-center'}>
                Happy Learning! 🥳
              </Text>
              <Row className={'w-full'}>
                <Column className={'flex items-center justify-center gap-4'}>
                  <Link style={anchor} href={`${baseUrl}/privacy-policy`}>
                    Privacy Policy
                  </Link>
                  <Link style={anchor} href={`${baseUrl}/terms-of-conditions`}>
                    Terms of Service
                  </Link>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default PaymentConfirmationEmail;

const main = {
  backgroundColor: '#f6f9fc',
  padding: '10px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '45px',
};

const text = {
  fontSize: '16px',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
};

const button = {
  backgroundColor: '#007ee6',
  borderRadius: '4px',
  color: '#fff',
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '210px',
  padding: '14px 7px',
};

const anchor = {
  textDecoration: 'underline',
};
