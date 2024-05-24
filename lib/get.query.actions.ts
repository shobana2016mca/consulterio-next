'use server';

import { GenerateEmailContent } from '@/types';

import Quote from '@/models/Quote.model';
import User from '@/models/User.model';

import { currentUser } from '@clerk/nextjs/server';

import { connectDB } from './connectDB';
import { sendMail } from './nodemailer';
import { actionResponse } from './utils';

function generateEmailContent(data: GenerateEmailContent) {
  // console.log('data:', data);

  return {
    subject: 'New Quote Request',
    text: ' New Quote Request from ' + data.enquirerName,
    html: `
      <h1>New Quote Request</h1>
      <hr />

      <p>Enquirer Name: ${data.enquirerName}</p>
      <p>Company Name: ${data.companyName}</p>
      <p>Email: ${data.email}</p>
      <p>Phone No: ${data.phoneNo}</p>
      <p>Location: ${data.location}</p>
      <p>Job Role: ${data.jobRole}</p>
      <p>No of Employees: ${data.noOfEmployees}</p>
      <p>About: ${data?.about}</p>
      <hr />
      <p>Monthly Salary: ${data.beforeMonthlySalary}</p>
      <p>Total Monthly Tax: ${data.totalMonthlyTax}</p>
      <p>Monthly CGST: ${data.monthlyCGST}</p>
      <p>Monthly SGST: ${data.monthlySGST}</p>
      <p>After Monthly Salary: ${data.afterMonthlysalary}</p>
      <hr />
      <p>Before Annual Salary: ${data.beforeAnnualSalary}</p>
      <p>Total Annually Tax: ${data.totalAnnuallyTax}</p>
      <p>Annual CGST: ${data.annualCGST}</p>
      <p>Annual SGST: ${data.annualSGST}</p>
      <p>After Annual Salary: ${data.afterAnnualSalary}</p>
      <hr />
      <p>Before pay commission: ${data.beforePayCommission}</p>
      <p>Commission: ${data.commission}</p>
      <p>After pay commission: ${data.afterPayCommission}</p>
      <p>Nett Salary: ${data.nettSalary}</p>
      `,
  };
}

export async function createQuote(formData: FormData) {
  try {
    // Connect to DB
    await connectDB();

    const user = await currentUser();
    if (!formData) {
      return actionResponse('fail', 'No form data found', null);
    }

    if (user === null) {
      return actionResponse('fail', 'No user found', null);
    }

    // console.log(Object.fromEntries(formData.entries()));
    // console.log('emailContent:', emailContent);
    // console.log('user:', user);

    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as GenerateEmailContent;

    const emailContentData = {
      ...data,
      // userId: existingUser?._id,
      userId: user.id,
    };

    // Generate email content
    const emailContent = generateEmailContent(data);

    // Create new quote
    const newQuote = await Quote.create({
      ...data,
      user: user.id,
    });

    // update user with new quote
    await User.findOneAndUpdate(
      { clerkId: user.id },
      {
        $push: { quotes: newQuote._id },
      },
      { new: true }
    );

    // Send email to user with quote
    await sendMail(emailContent, data.email, emailContentData);
    return actionResponse('success', 'Successfully get quote', null);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      return actionResponse('error', err.message, null);
    }
    return actionResponse('fail', 'Failed to get a quote', null);
  }
}
