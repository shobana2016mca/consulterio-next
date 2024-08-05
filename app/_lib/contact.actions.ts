'use server';

import Contact from '@/app/_lib/models/Contact.model';
import User from '@/app/_lib/models/User.model';
import { currentUser } from '@clerk/nextjs/server';
import { connectDB } from './connectDB';
// import { sendMail } from './nodemailer';
import { sendMail } from './nodemailer';
import { actionResponse } from './utils';

export async function createContact(formData: FormData) {
  try {
    // console.log(Object.fromEntries(formData.entries()));

    await connectDB();

    const user = await currentUser();

    if (!formData) {
      return actionResponse('fail', 'There is no data to send a query', null);
    }

    const { fullName, email, phoneNo, communicationMethod, message } =
      Object.fromEntries(formData.entries());

    // check the email already exists
    const existingContact = await Contact.findOne({ email: email as string });
    if (existingContact) {
      return actionResponse(
        'fail',
        'Your mail already exists in our end. Please wait for our response.',
        null
      );
    }

    //save to database
    const newContact = await Contact.create({
      fullName: fullName as string,
      email: email as string,
      phone: phoneNo as string,
      communicationMethod: communicationMethod as string,
      message: message as string,
      user: user?.id,
    });

    // if user is logged in, update the query with the user id
    // if (user) {
    //   await Contact.updateOne(
    //     { email: email as string },
    //     {
    //       $set: {
    //         user: user.id,
    //       },
    //     },
    //     { upsert: true}
    //   );
    // }
    if (user) {
      // await Contact.updateOne(
      //   { email: email as string },
      //   {
      //     $set: {
      //       user: user.id,
      //     },
      //   },
      //   { upsert: true}
      // );
      await User.findOneAndUpdate(
        { clerkId: user.id },
        {
          $push: {
            queries: newContact._id,
          },
        },
        { new: true }
      );
    }

    // send email
    const contactEmail = await sendMail({
      type: 'contact',
      sendTo: email as string,
      subject: 'New Contact Us Query 🎉',
      contactUsData: {
        enquirerName: fullName as string,
        message: message as string,
        updatedAt: new Date(),
      },
    });

    // console.log('Contact Message sent...📨', contactEmail);

    return actionResponse('success', 'Successfully sent your query.', null);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return actionResponse('error', err.message, null);
    }
    return actionResponse('fail', 'Failed to send your query.', null);
  }
}
