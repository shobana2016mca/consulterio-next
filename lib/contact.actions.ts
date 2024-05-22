'use server';

import { sendMail } from './nodemailer';
import { actionResponse } from './utils';

export async function createContact(formData: FormData) {
  try {
    // console.log(Object.fromEntries(formData.entries()));

    if (!formData) {
      return actionResponse('fail', 'There is no data to send a query', null);
    }

    const { fullName, email, phoneNo, communicationMethod, message } =
      Object.fromEntries(formData.entries());

    const emailContent = {
      subject: 'New Contact Us Query',
      text: `
        Hello ${fullName},

        Thank you for contacting us. We have received your query and will get back to you soon.

        Regards,
        Support Team.

        Full Name: ${fullName}
        Email: ${email}
        Phone No: ${phoneNo}
        Communication Method: ${communicationMethod}
        Message: ${message}
      `,
      html: `
        <p>Hello ${fullName},</p>
        <p>Thank you for contacting us. We have received your query and will get back to you soon.</p>
        <p>Regards,</p>
        <p>Support Team</p>
        <hr />
        <br />
        <hr />
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Phone No: ${phoneNo}</p>
        <p>Communication Method: ${communicationMethod}</p>
        <p>Message: ${message}</p>
      `,
    };

    //save to database

    // send email
    await sendMail(emailContent, email as string);

    return actionResponse('success', 'Successfully sent your query.', null);
  } catch (err) {
    if (err instanceof Error) {
      return actionResponse('error', err.message, null);
    }
    return actionResponse('fail', 'Failed to send your query.', null);
  }
}
