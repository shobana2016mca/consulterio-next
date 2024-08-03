import WelcomeEmail from '@/emails/WelcomeEmail';
import { render } from '@react-email/render';
// import { readFile } from 'fs/promises';
import nodemailer from 'nodemailer';
// import { join } from 'path';
import { actionResponse } from '../utils';

type TemplateType = 'welcome' | 'contact' | 'quote' | 'enquiry';

class Email {
  to: string;
  from: string;
  url: string;

  firstName: string;
  lastName: string;
  email: string;
  getStartedUrl: string;

  constructor(user: UserType, url: string) {
    this.to = user.email;
    this.from = `Consultero <${process.env.EMAIL_FROM!}>`;
    this.url = url;
    this.firstName = user.firstName || user.username;
    this.lastName = user.lastName || '';
    this.email = user.email;
    this.getStartedUrl = url;
  }

  isDev = process.env.NODE_ENV === 'development';

  newTransport() {
    if (this.isDev) {
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

  // Send the actual email
  async send(template: TemplateType, subject: string) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      // html,
      // text: htmlToText.fromString(html),
    };

    switch (template) {
      case 'welcome':
        // await this.sendWelcome(subject);
        render(
          <WelcomeEmail
            data={{
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              getStartedUrl: this.url,
            }}
          />
        );
        break;

      case 'contact':
        // render(<ContactUsEmail data={this.url} />);
        break;

      case 'quote':
        // render(<QuoteReceiptEmail data={this.url} />);
        break;

      case 'enquiry':
        break;

      default:
        throw new Error('Invalid template type');
    }

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to Consultero');
  }

  async sendContact() {
    await this.send('contact', 'Thank you for contacting us');
  }

  async sendQuote() {
    await this.send('quote', 'Thank you for your quote request');
  }
}

// const transporter = nodemailer.createTransport({
//   // service: 'gmail',
//   // auth: {
//   //   user: process.env.EMAIL_ADDRESS,
//   //   pass: process.env.EMAIL_PASSWORD,
//   // },
//   // tls: {
//   //   rejectUnauthorized: false,
//   // },
// });

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

type sendMailPropsTypes = {
  type: string;
  sendTo: string;
  subject: string;
  data: UserType;
};

export async function sendMail(emailContent: sendMailPropsTypes) {
  try {
    switch (emailContent.type) {
      case 'welcome':
        // send mail with defined transport object
        const html = render(
          <WelcomeEmail
            data={{
              firstName:
                emailContent.data.firstName || emailContent.data.username,
              lastName: emailContent.data.lastName || '',
              email: emailContent.data.email,
              getStartedUrl: 'https://consulterio.vercel.app',
            }}
          />
        );
        const email = await newTransport().sendMail({
          from: `${process.env.EMAIL_ADDRESS}`, // sender address company mail
          to: `${process.env.EMAIL_ADDRESS}, ${emailContent.sendTo}`, // list of receivers
          subject: emailContent.subject, // Subject line
          text: render(
            <WelcomeEmail
              data={{
                firstName:
                  emailContent.data.firstName || emailContent.data.username,
                lastName: emailContent.data.lastName || '',
                email: emailContent.data.email,
                getStartedUrl: 'https://consulterio.vercel.app',
              }}
            />,
            { plainText: true }
          ), // plain text body
          html: html, // html body
        });

        console.log('Welcome Message sent...📨', email.messageId);

        console.log('Welcome Email Sent...📨');
        break;

      case 'contact':
        // render(<ContactUsEmail />);
        break;

      case 'quote':
        // render(<QuoteReceiptEmail />);
        break;

      case 'enquiry':
        // render(<ContactUsEmail />);
        break;

      default:
        throw new Error('Invalid template type');
    }
    // console.log('Message sent: %s', info.messageId);
    console.log('Email Sent...📨');
    return actionResponse('success', 'Message sent', null);
  } catch (err: any) {
    return actionResponse('fail', err.message, null);
  }
}
