import { render } from '@react-email/render';
import nodemailer from 'nodemailer';

import ContactUsEmail from '@/emails/ContactUsEmail';
import MeetingLinkEmail from '@/emails/MeetingLinkEmail';
import PaymentConfirmationEmail from '@/emails/PaymentConfirmation';
import QuoteReceiptEmail from '@/emails/QuoteReceiptEmail';
import WelcomeEmail from '@/emails/WelcomeEmail';

import { actionResponse } from '../utils';

type TemplateType =
  | 'welcome'
  | 'contact'
  | 'quote'
  | 'enquiry'
  | 'payment_confirmation'
  | 'meeting_link';

type sendMailPropsTypes = {
  type: TemplateType;
  sendTo: string;
  subject: string;
  user?: UserType;
  contactUsData?: ContactUsDataContent;
  quoteData?: QuoteDataContent;
  workshopData?: PaymentConfirmationContent;
  meetingData?: MeetingLinkContent;
};

const EMAIL_FROM = process.env.EMAIL_FROM;

function newTransport() {
  if (process.env.NODE_ENV === 'development') {
    return nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: parseInt(process.env.MAILTRAP_PORT!),
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
  }

  // Sendgrid
  return nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD,
    },
  });
}

export async function sendMail(emailContent: sendMailPropsTypes) {
  try {
    switch (emailContent.type) {
      case 'welcome':
        // send mail with defined transport object
        const welcomeHtml = render(
          <WelcomeEmail
            data={{
              firstName:
                emailContent?.user?.firstName ||
                emailContent?.user?.username ||
                '',
              lastName: emailContent?.user?.lastName || '',
              email: emailContent.user ? emailContent.user.email : '',
              getStartedUrl: 'https://consulterio.vercel.app',
            }}
          />
        );
        const email = await newTransport().sendMail({
          from: `${EMAIL_FROM}`, // sender address company mail
          to: `${emailContent.sendTo}`, // list of receivers
          subject: emailContent.subject, // Subject line
          text: render(
            <WelcomeEmail
              data={{
                firstName:
                  emailContent?.user?.firstName ||
                  emailContent?.user?.username ||
                  '',
                lastName: emailContent?.user?.lastName || '',
                email: emailContent.user ? emailContent.user.email : '',
                getStartedUrl: 'https://consulterio.vercel.app',
              }}
            />,
            { plainText: true }
          ), // plain text body
          html: welcomeHtml, // html body
        });

        console.log('Welcome Message sent...📨', email.messageId);

        console.log('Welcome Email Sent...📨');
        break;

      case 'contact':
        const contactHtml = render(
          <ContactUsEmail
            data={{
              enquirerName: emailContent.contactUsData
                ? emailContent.contactUsData.enquirerName
                : '',
              message: emailContent.contactUsData
                ? emailContent.contactUsData.message
                : '',
              updatedAt: emailContent.contactUsData
                ? emailContent.contactUsData.updatedAt
                : new Date(),
            }}
          />
        );

        const contactEmail = await newTransport().sendMail({
          from: `${EMAIL_FROM}`, // sender address company mail
          to: `${EMAIL_FROM}, ${emailContent.sendTo}`, // list of receivers
          subject: emailContent.subject, // Subject line
          text: render(
            <ContactUsEmail
              data={{
                enquirerName: emailContent.contactUsData
                  ? emailContent.contactUsData.enquirerName
                  : '',
                message: emailContent.contactUsData
                  ? emailContent.contactUsData.message
                  : '',
                updatedAt: emailContent.contactUsData
                  ? emailContent.contactUsData.updatedAt
                  : new Date(),
              }}
            />,
            { plainText: true }
          ), // plain text body
          html: contactHtml, // html body
        });

        console.log('Contact Message sent...📨', contactEmail.messageId);
        console.log('Contact Email Sent...📨');
        break;

      case 'quote':
        const quoteHtml = render(
          <QuoteReceiptEmail
            data={{
              enquirerName: emailContent.contactUsData?.enquirerName || '',
              companyName: emailContent.quoteData?.companyName || '',
              email: emailContent.sendTo,
              phoneNo: emailContent.quoteData?.phoneNo || '',
              location: emailContent.quoteData?.location || '',
              jobRole: emailContent.quoteData?.jobRole || '',
              afterMonthlysalary:
                emailContent.quoteData?.afterMonthlysalary || '',
              beforeMonthlySalary:
                emailContent.quoteData?.beforeMonthlySalary || '',
              totalMonthlyTax: emailContent.quoteData?.totalMonthlyTax || '',
              monthlyCGST: emailContent.quoteData?.monthlyCGST || '',
              monthlySGST: emailContent.quoteData?.monthlySGST || '',
              afterAnnualSalary:
                emailContent.quoteData?.afterAnnualSalary || '',
              beforeAnnualSalary:
                emailContent.quoteData?.beforeAnnualSalary || '',
              totalAnnuallyTax: emailContent.quoteData?.totalAnnuallyTax || '',
              annualCGST: emailContent.quoteData?.annualCGST || '',
              annualSGST: emailContent.quoteData?.annualSGST || '',
              afterPayCommission:
                emailContent.quoteData?.afterPayCommission || '',
              beforePayCommission:
                emailContent.quoteData?.beforePayCommission || '',
              commission: emailContent.quoteData?.commission || '',
              nettSalary: emailContent.quoteData?.nettSalary || '',
              userId: emailContent.quoteData?.userId || '',
              quoteId: emailContent.quoteData?.quoteId || '',
            }}
          />
        );

        const quoteEmail = await newTransport().sendMail({
          from: `${EMAIL_FROM}`, // sender address company mail
          to: `${EMAIL_FROM}, ${emailContent.sendTo}`, // list of receivers
          subject: emailContent.subject, // Subject line
          text: render(
            <QuoteReceiptEmail
              data={{
                enquirerName: emailContent.contactUsData?.enquirerName || '',
                companyName: emailContent.quoteData?.companyName || '',
                email: emailContent.sendTo,
                phoneNo: emailContent.quoteData?.phoneNo || '',
                location: emailContent.quoteData?.location || '',
                jobRole: emailContent.quoteData?.jobRole || '',
                afterMonthlysalary:
                  emailContent.quoteData?.afterMonthlysalary || '',
                beforeMonthlySalary:
                  emailContent.quoteData?.beforeMonthlySalary || '',
                totalMonthlyTax: emailContent.quoteData?.totalMonthlyTax || '',
                monthlyCGST: emailContent.quoteData?.monthlyCGST || '',
                monthlySGST: emailContent.quoteData?.monthlySGST || '',
                afterAnnualSalary:
                  emailContent.quoteData?.afterAnnualSalary || '',
                beforeAnnualSalary:
                  emailContent.quoteData?.beforeAnnualSalary || '',
                totalAnnuallyTax:
                  emailContent.quoteData?.totalAnnuallyTax || '',
                annualCGST: emailContent.quoteData?.annualCGST || '',
                annualSGST: emailContent.quoteData?.annualSGST || '',
                afterPayCommission:
                  emailContent.quoteData?.afterPayCommission || '',
                beforePayCommission:
                  emailContent.quoteData?.beforePayCommission || '',
                commission: emailContent.quoteData?.commission || '',
                nettSalary: emailContent.quoteData?.nettSalary || '',
                userId: emailContent.quoteData?.userId || '',
                quoteId: emailContent.quoteData?.quoteId || '',
              }}
            />,
            { plainText: true }
          ), // plain text body
          html: quoteHtml, // html body
        });

        console.log('Quote Message sent...📨', quoteEmail.messageId);
        console.log('Quote Email Sent...📨');

        break;

      case 'enquiry':
        // render(<ContactUsEmail />);
        break;

      case 'payment_confirmation':
        const paymentConfirmationHtml = render(
          <PaymentConfirmationEmail
            data={{
              userFirstname: emailContent.workshopData?.userFirstname || '',
              meetingLink: emailContent.workshopData?.meetingLink || '',
            }}
          />
        );

        const paymentConfirmationEmail = await newTransport().sendMail({
          from: `${EMAIL_FROM}`, // sender address company mail
          to: `${emailContent.sendTo}`, // list of receivers
          subject: emailContent.subject, // Subject line
          text: render(
            <PaymentConfirmationEmail
              data={{
                userFirstname: emailContent.workshopData?.userFirstname || '',
                meetingLink: emailContent.workshopData?.meetingLink || '',
              }}
            />,
            { plainText: true }
          ), // plain text body
          html: paymentConfirmationHtml, // html body
        });

        console.log(
          'Payment Confirmation Message sent...📨',
          paymentConfirmationEmail.messageId
        );
        console.log('Payment Confirmation Email Sent...📨');
        break;

      case 'meeting_link':
        const meetingLinkHtml = render(
          <MeetingLinkEmail
            data={{
              username: emailContent.meetingData?.username || '',
              email: emailContent.meetingData?.email || '',
              meetingId: emailContent.meetingData?.meetingId || 0,
              joinUrl: emailContent.meetingData?.joinUrl || '',
            }}
          />
        );

        const meetingLinkEmail = await newTransport().sendMail({
          from: `${EMAIL_FROM}`, // sender address company mail
          to: ` ${emailContent.sendTo}`, // list of receivers
          subject: emailContent.subject, // Subject line
          text: render(
            <MeetingLinkEmail
              data={{
                username: emailContent.meetingData?.username || '',
                email: emailContent.meetingData?.email || '',
                meetingId: emailContent.meetingData?.meetingId || 0,
                joinUrl: emailContent.meetingData?.joinUrl || '',
              }}
            />,
            { plainText: true }
          ), // plain text body
          html: meetingLinkHtml, // html body
        });

        console.log(
          'Meeting Link Message sent...📨',
          meetingLinkEmail.messageId
        );

        console.log('Meeting Link Email Sent...📨');

        break;

      default:
        throw new Error('Invalid template type');
    }
    // console.log('Message sent: %s', info.messageId);
    // console.log('Email Sent...📨');
    return actionResponse('success', 'Message sent', null);
  } catch (err: any) {
    return actionResponse('fail', err.message, null);
  }
}
