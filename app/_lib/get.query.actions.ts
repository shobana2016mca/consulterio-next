'use server';

import Quote from '@/app/_lib/models/Quote.model';
import User from '@/app/_lib/models/User.model';

import { currentUser } from '@clerk/nextjs/server';

import { connectDB } from './connectDB';
import { sendMail } from './nodemailer';
import { actionResponse } from './utils';

type FormdataType = {
  enquiryName: string;
  companyName: string;
  email: string;
  phoneNo: string;
  location: string;
  jobRole: string;
  monthlySalary: number;
  annualSalary: number;
  noOfEmployees: string;
  about: string;
  beforeMonthlySalary: string;
  totalMonthlyTax: string;
  monthlyCGST: string;
  monthlySGST: string;
  afterMonthlysalary: string;
  beforeAnnualSalary: string;
  totalAnnuallyTax: string;
  annualCGST: string;
  annualSGST: string;
  afterAnnualSalary: string;
  beforePayCommission: string;
  commission: string;
  afterPayCommission: string;
  nettSalary: string;
};

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
      // ) as Record<string, string>;
    ) as QuoteDataContent;

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
    // await sendMail(emailContent, data.email, emailContentData, 'quote');
    const quoteMail = await sendMail({
      type: 'quote',
      sendTo: data.email,
      subject: `${
        data.enquirerName
      }, Your Quote Request. Ref: ${newQuote._id.toString()}`,
      quoteData: {
        enquirerName: `${data.enquirerName}`,
        companyName: data.companyName,
        email: data.email,
        phoneNo: data.phoneNo,
        location: data.location,
        jobRole: data.jobRole,
        afterMonthlysalary: data.afterMonthlysalary,
        beforeMonthlySalary: data.beforeMonthlySalary,
        totalMonthlyTax: data.totalMonthlyTax,
        monthlyCGST: data.monthlyCGST,
        monthlySGST: data.monthlySGST,
        afterAnnualSalary: data.afterAnnualSalary,
        beforeAnnualSalary: data.beforeAnnualSalary,
        totalAnnuallyTax: data.totalAnnuallyTax,
        annualCGST: data.annualCGST,
        annualSGST: data.annualSGST,
        afterPayCommission: data.afterPayCommission,
        beforePayCommission: data.beforePayCommission,
        commission: data.commission,
        nettSalary: data.nettSalary,
        userId: user.id,
        quoteId: newQuote._id.toString(),
      },
    });

    // console.log('Quote Message sent...📨', quoteMail);

    return actionResponse('success', 'Successfully get quote', null);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      return actionResponse('error', err.message, null);
    }
    return actionResponse('fail', 'Failed to get a quote', null);
  }
}
