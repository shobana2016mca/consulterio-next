'use server';

import Enquiry from '@/app/_lib/models/Enquiry.model';
import { sendMail } from './nodemailer';
import { actionResponse } from './utils';

export async function createEnquiry(formData: FormData) {
  try {
    // console.log(Object.fromEntries(formData.entries()));

    if (!formData) {
      return actionResponse('fail', 'Invalid form data', null);
    }

    const data = Object.fromEntries(formData.entries());

    const newEnquiry = await Enquiry.create({
      fullName: data.fullName,
      companyName: data.companyName,
      email: data.email,
      phoneNo: data.phoneNo,
    });

    const emailContent = {
      subject: 'New Contact Us Query',
      text: `
        Hello ${data.fullName},

        Thank you for contacting us. We have received your query and will get back to you soon.

        Regards,
        Support Team.

        Full Name: ${data.fullName}
        Email: ${data.email}
        Phone No: ${data.phoneNo}
      `,
      html: `
        <p>Hello ${data.fullName},</p>
        <p>Thank you for contacting us. We have received your query and will get back to you soon.</p>
        <p>Regards,</p>
        <p>Support Team</p>
        <hr />
        <br />
        <hr />
        <p>Full Name: ${data.fullName}</p>
        <p>Email: ${data.email}</p>
        <p>Phone No: ${data.phoneNo}</p>
      `,
    };

    await sendMail(emailContent, data.email as string, data, 'enquiry');

    return actionResponse('success', 'Enquiry sent successfully', null);
  } catch (err) {
    if (err instanceof Error) {
      return actionResponse('error', err.message, null);
    }
    return actionResponse('fail', 'An error occurred', null);
  }
}

export async function addToCart(prevState: any, queryData: any) {
  const itemID = queryData.get('itemID');
  if (itemID === '1') {
    return 'Added to cart';
  } else {
    return "Couldn't add to cart: the item is sold out.";
  }
}
