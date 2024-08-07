// Description: This file is used to send email using nodemailer.
import ContactUsEmail from '@/emails/ContactUsEmail';
import QuoteReceiptEmail from '@/emails/QuoteReceiptEmail';
import WelcomeEmail from '@/emails/WelcomeEmail';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { actionResponse } from '../utils';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function sendMail(
  emailContent: EmailContent,
  sendTo: SendTo,
  emailData: any,
  type: 'contact' | 'quote' | 'enquiry' | 'welcome'
) {
  try {
    let emailHtml;

    if (type === 'contact') {
      emailHtml = render(<ContactUsEmail data={emailData} />);
    }
    if (type === 'quote') {
      emailHtml = render(<QuoteReceiptEmail data={emailData} />);
    }
    if (type === 'enquiry') {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: `${process.env.EMAIL_ADDRESS}`, // sender address company mail
        to: `${process.env.EMAIL_ADDRESS}, ${sendTo}`, // list of receivers
        subject: emailContent.subject, // Subject line
        text: `${emailContent.text} user was contact us`, // plain text body
        html: emailContent.html, // html body
      });
      console.log('Email Sent...📨');
      return actionResponse('success', 'Message sent', null);
    }

    if (type === 'welcome') {
      emailHtml = render(<WelcomeEmail data={emailData} />);
      // send mail with defined transport object
      // const info = await transporter.sendMail({
      //   from: `${process.env.EMAIL_ADDRESS}`, // sender address company mail
      //   to: `${process.env.EMAIL_ADDRESS}, ${sendTo}`, // list of receivers
      //   subject: emailContent.subject, // Subject line
      //   text: `${emailContent.text} user was contact us`, // plain text body
      //   html: emailContent.html, // html body
      // });
      // console.log('Email Sent...📨');
      return actionResponse('success', 'Message sent', null);
    }

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `${process.env.EMAIL_ADDRESS}`, // sender address company mail
      to: `${process.env.EMAIL_ADDRESS}, ${sendTo}`, // list of receivers
      subject: emailContent.subject, // Subject line
      text: `${emailContent.text} user was contact us`, // plain text body
      html: emailHtml, // html body
    });

    // console.log('Message sent: %s', info.messageId);
    console.log('Email Sent...📨');
    return actionResponse('success', 'Message sent', null);
  } catch (err: any) {
    return actionResponse('fail', err.message, null);
  }
}

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Maddison Foo Koch 👻" ${process.env.USER_EMAIL}`, // sender address
    // to: 'bar@example.com, baz@example.com', // list of receivers
    to: 'userEmail', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
