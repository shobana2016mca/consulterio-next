import { calcDate } from '@/app/_lib/utils';
import config from '@/tailwind.config';
// import crypto from 'crypto';

import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Hr,
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

QuoteReceiptEmail.PreviewProps = {
  data: {
    enquirerName: 'John Doe',
    companyName: 'XYZ Company',
    email: 'xyz@gmail.com',
    phoneNo: '9999911111',
    location: 'San Francisco, CA 94123',
    jobRole: 'Software Engineer',
    afterMonthlysalary: '8474.58',
    beforeMonthlySalary: '10000.00',
    totalMonthlyTax: '1525.00',
    monthlyCGST: '762.71',
    monthlySGST: '762.71',
    afterAnnualSalary: '101694.92',
    beforeAnnualSalary: '120000.00',
    totalAnnuallyTax: '18305.08',
    annualCGST: '9152.54',
    annualSGST: '9152.54',
    afterPayCommission: '93,875.12',
    beforePayCommission: '101694.92',
    commission: '7819.80',
    nettSalary: '93,875.12',
    userId: '1234567890',
    quoteId: '66ghsdfghjkl',
  },
};

export function QuoteReceiptEmail({ data }: { data: QuoteDataContent }) {
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
      <Preview>Quote Receipt</Preview>

      <Tailwind config={config}>
        <Body className={'bg-slate-100'}>
          <Container style={container} className={'bg-white'}>
            <Section className={'px-2'}>
              <Row>
                <Column
                  style={{
                    width: '15rem',
                    height: '5rem',
                    aspectRatio: '16/9',
                  }}>
                  <Img
                    src={`${baseUrl}/invoice-logo.png`}
                    width='100%'
                    height='100%'
                    alt='Consultero Logo'
                  />
                </Column>

                <Column align='right' style={tableCell}>
                  <Text style={heading}>Receipt</Text>
                </Column>
              </Row>
            </Section>
            <Section>
              <Text style={cupomText}>
                Hello {data.enquirerName}, Thank you for reaching us. We have
                received your Quotation. <br /> We&apos;ll get back to you soon.
              </Text>
            </Section>
            <Section style={informationTable}>
              <Row style={informationTableRow}>
                <Column colSpan={2}>
                  <Section>
                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>UNIQUE ID</Text>
                        <Link
                          style={{
                            ...informationTableValue,
                            color: '#15c',
                            textDecoration: 'underline',
                          }}>
                          {data.userId}
                        </Link>
                      </Column>
                    </Row>

                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>INVOICE DATE</Text>
                        <Text style={informationTableValue}>
                          {calcDate(new Date())}
                        </Text>
                      </Column>
                    </Row>

                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>QUOTE ID</Text>
                        <Link
                          style={{
                            ...informationTableValue,
                            color: '#15c',
                            textDecoration: 'underline',
                          }}>
                          {data.quoteId}
                        </Link>
                      </Column>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>DOCUMENT NO.</Text>
                        <Text style={informationTableValue}>
                          {crypto.randomUUID()}
                        </Text>
                      </Column>
                    </Row>
                  </Section>
                </Column>
                <Column style={informationTableColumn} colSpan={2}>
                  <Text style={informationTableLabel}>BILLED TO</Text>
                  <Text style={informationTableValue}>{data.enquirerName}</Text>
                  <Text style={informationTableValue}>{data.companyName}</Text>
                  <Text style={informationTableValue}>{data.email}</Text>
                  <Text style={informationTableValue}>{data.phoneNo}</Text>
                  <Text style={informationTableValue}>{data.location}</Text>
                  <Text style={informationTableValue}>{data.jobRole}</Text>
                </Column>
              </Row>
            </Section>
            <Section style={productTitleTable}>
              <Text className={'text-sm font-semibold text-center'}>
                Quote Information
              </Text>
            </Section>
            <Section>
              <Row>
                <Column
                  style={{ paddingLeft: '22px' }}
                  className={'grid gap-y-2'}>
                  <Text style={productTitle}>Monthly Salary</Text>
                  <Text style={productDescription}>
                    Basic: {data.afterMonthlysalary}
                  </Text>
                  <Text style={productDescription}>
                    CGST: {data.monthlyCGST}
                  </Text>
                  <Text style={productDescription}>
                    SGST: {data.monthlySGST}
                  </Text>
                </Column>
                <Column style={productPriceWrapper} align='right'>
                  <Text style={productPrice}>
                    &#8377; {data.beforeMonthlySalary}
                  </Text>
                </Column>
              </Row>
              <Hr style={productPriceLine} />
              <Row>
                <Column
                  style={{ paddingLeft: '22px' }}
                  className={'grid gap-y-2'}>
                  <Text style={productTitle}>Annual Salary</Text>
                  <Text style={productDescription}>
                    Basic: {data.afterAnnualSalary}
                  </Text>
                  <Text style={productDescription}>
                    CGST: {data.annualCGST}
                  </Text>
                  <Text style={productDescription}>
                    SGST: {data.annualSGST}
                  </Text>
                </Column>
                <Column style={productPriceWrapper} align='right'>
                  <Text style={productPrice}>
                    &#8377; {data.beforeAnnualSalary}
                  </Text>
                </Column>
              </Row>
              <Hr style={productPriceLine} />
              <Row>
                <Column
                  style={{ paddingLeft: '22px' }}
                  className={'grid gap-y-2'}>
                  <Text style={productTitle}>Commission</Text>
                  <Text style={productDescription}>
                    Basic: {data.afterPayCommission}
                  </Text>
                  <Text style={productDescription}>
                    Commission Amt.: {data.commission}
                  </Text>
                </Column>
                <Column style={productPriceWrapper} align='right'>
                  <Text style={productPrice}>
                    &#8377; {data.beforePayCommission}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Hr style={productPriceLine} />
            <Section align='right'>
              <Row>
                <Column style={tableCell} align='right'>
                  <Text style={productPriceTotal}>TOTAL</Text>
                </Column>
                <Column style={productPriceVerticalLine}></Column>
                <Column style={productPriceLargeWrapper}>
                  <Text style={productPriceLarge}>
                    &#8377; {data.nettSalary}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Hr style={productPriceLineBottom} />

            <Section>
              <Row className='w-48 h-20 aspect-video'>
                <Column
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '20px 0 0 0',
                    width: '12rem',
                  }}>
                  <Img
                    src={`${baseUrl}/invoice-logo.png`}
                    width='100%'
                    height='100%'
                    alt='Consultero Logo'
                  />
                </Column>
              </Row>
            </Section>
            <Text style={footerLinksWrapper}>
              <Link href={`${baseUrl}/terms-of-conditions`} target='_blank'>
                Terms and Conditions
              </Link>{' '}
              •{' '}
              <Link href={`${baseUrl}/privacy-policy`} target='_blank'>
                Privacy Policy{' '}
              </Link>
            </Text>
            <Text style={footerCopyright}>
              Copyright © {new Date().getFullYear()} <br />{' '}
              <Link href='#'>All rights reserved</Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default QuoteReceiptEmail;

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: '#ffffff',
};

const resetText = {
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '680px',
  maxWidth: '100%',
};

const tableCell = { display: 'table-cell' };

const heading = {
  fontSize: '32px',
  fontWeight: '300',
  color: '#888888',
};

const cupomText = {
  textAlign: 'center' as const,
  margin: '36px 0 40px 0',
  fontSize: '14px',
  fontWeight: '500',
  color: '#111111',
};

const supStyle = {
  fontWeight: '300',
};

const informationTable = {
  borderCollapse: 'collapse' as const,
  borderSpacing: '0px',
  color: 'rgb(51,51,51)',
  backgroundColor: 'rgb(250,250,250)',
  borderRadius: '3px',
  fontSize: '12px',
};

const informationTableRow = {
  height: '46px',
};

const informationTableColumn = {
  paddingLeft: '20px',
  borderStyle: 'solid',
  borderColor: 'white',
  borderWidth: '0px 1px 1px 0px',
  height: '44px',
};

const informationTableLabel = {
  ...resetText,
  color: 'rgb(102,102,102)',
  fontSize: '10px',
};

const informationTableValue = {
  fontSize: '12px',
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
};

const productTitleTable = {
  ...informationTable,
  margin: '30px 0 15px 0',
  height: '24px',
};

const productsTitle = {
  background: '#fafafa',
  paddingLeft: '10px',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
};

const productIcon = {
  margin: '0 0 0 20px',
  borderRadius: '14px',
  border: '1px solid rgba(128,128,128,0.2)',
};

const productTitle = { fontSize: '16px', fontWeight: '600', ...resetText };

const productDescription = {
  fontSize: '15px',
  color: 'rgb(102,102,102)',
  ...resetText,
};

const productLink = {
  fontSize: '12px',
  color: 'rgb(0,112,201)',
  textDecoration: 'none',
};

const divisor = {
  marginLeft: '4px',
  marginRight: '4px',
  color: 'rgb(51,51,51)',
  fontWeight: 200,
};

const productPriceTotal = {
  margin: '0',
  color: 'rgb(102,102,102)',
  fontSize: '14px',
  fontWeight: '600',
  padding: '0px 30px 0px 0px',
  textAlign: 'right' as const,
};

const productPrice = {
  fontSize: '16px',
  fontWeight: '600',
  margin: '0',
};

const productPriceLarge = {
  margin: '0px 20px 0px 0px',
  fontSize: '16px',
  fontWeight: '600',
  whiteSpace: 'nowrap' as const,
  textAlign: 'right' as const,
};

const productPriceWrapper = {
  display: 'table-cell',
  padding: '0px 20px 0px 0px',
  width: '100px',
  verticalAlign: 'top',
};

const productPriceLine = { margin: '30px 0 0 0' };

const productPriceVerticalLine = {
  height: '48px',
  borderLeft: '1px solid',
  borderColor: 'rgb(238,238,238)',
};

const productPriceLargeWrapper = { display: 'table-cell', width: '90px' };

const productPriceLineBottom = { margin: '0 0 75px 0' };

const block = { display: 'block' };

const ctaTitle = {
  display: 'block',
  margin: '15px 0 0 0',
};

const ctaText = { fontSize: '24px', fontWeight: '500' };

const walletWrapper = { display: 'table-cell', margin: '10px 0 0 0' };

const walletLink = { color: 'rgb(0,126,255)', textDecoration: 'none' };

const walletImage = {
  display: 'inherit',
  paddingRight: '8px',
  verticalAlign: 'middle',
};

const walletBottomLine = { margin: '65px 0 20px 0' };

const footerText = {
  fontSize: '12px',
  color: 'rgb(102,102,102)',
  margin: '0',
  lineHeight: 'auto',
  marginBottom: '16px',
};

const footerTextCenter = {
  fontSize: '12px',
  color: 'rgb(102,102,102)',
  margin: '20px 0',
  lineHeight: 'auto',
  textAlign: 'center' as const,
};

const footerLink = { color: 'rgb(0,115,255)' };

const footerContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 0 0 0',
};

const footerIcon = {
  width: '12rem',
  height: '8rem',
};

const footerLinksWrapper = {
  margin: '8px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: 'rgb(102,102,102)',
};

const footerCopyright = {
  margin: '25px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: 'rgb(102,102,102)',
};

const walletLinkText = {
  fontSize: '14px',
  fontWeight: '400',
  textDecoration: 'none',
};
