'use server';

import SendGrid from '@sendgrid/mail';
import { revalidatePath } from 'next/cache';

import User from '@/app/_lib/models/User.model';
import { connectDB } from './connectDB';
// import { sendMail } from './nodemailer';
import { actionResponse } from './utils';

SendGrid.setApiKey(process.env.SENDGRID_API_KEY!);

// console.log('SendGrid', SendGrid);
console.log('im here in user.actions.ts');

export async function createUser(user: UserType) {
  try {
    await connectDB();

    const newUser = await User.create(user);

    // send welcome email
    // const emailContent = {
    //   subject: 'Welcome to Consultero - Your Partner in Recruitment Excellence',
    //   text: `Hello Dear, ${user.firstName},`,
    //   html: `<h2>Hello ${user.firstName},</h2>`,
    // };

    // const welcome = await sendMail(emailContent, user.email, user, 'welcome');
    // console.log('welcome mail', welcome);

    const msg = {
      to: user.email,
      from: 'akarmakar846@gmail.com',
      subject: 'Welcome to our platform',
      text: 'Welcome to our platform, ',
      html: '<h1>Welcome to our platform</h1>',
    };

    SendGrid.send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    if (error instanceof Error) {
      return actionResponse('error', error.message, null);
    }
    return actionResponse('fail', 'Failed to create user', null);
  }
}

export async function updateUser(clerkId: string, user: UserType) {
  try {
    await connectDB();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    // send profile update email
    // const emailContent = {
    //   subject: 'Profile Update',
    //   text: 'Your profile has been updated',
    //   html: '<h1>Your profile has been updated</h1>',
    // };

    // const profileUpdate = await sendMail(
    //   emailContent,
    //   user.email,
    //   user,
    //   'welcome'
    // );
    // console.log('profileupdate', profileUpdate);

    if (!updatedUser) {
      throw new Error('User update failed');
    }

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    if (error instanceof Error) {
      return actionResponse('error', error.message, null);
    }
    return actionResponse('fail', 'Failed to update user', null);
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectDB();

    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error('User not found');
    }

    const deletedUser = await User.findByIdAndDelete({ clerkId });
    revalidatePath('/');

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    if (error instanceof Error) {
      return actionResponse('error', error.message, null);
    }
    return actionResponse('fail', 'Failed to delete user', null);
  }
}

// export async function updateUser(user: IUser) {
//   try {
//     // connect db
//     await connectDB();

//     // check user is already exist or not
//     const existingUser = await User.findOne({ clerkId: user.id }).lean();

//     if (existingUser) {
//       console.log('User already exist 🫵');
//       // update the user in the database
//       await User.findOneAndUpdate(
//         { clerkId: user.id },
//         {
//           username: user.username,
//           firstName: user.firstName,
//           lastName: user.lastName,
//           email: user?.emailAddresses[0]?.emailAddress,
//           hasImage: user.hasImage,
//           avatar: user.imageUrl,
//         },
//         { new: true }
//       );
//       // update the user in clerk
//       // await clerkClient.users.updateUser(existingUser.clerkId, {
//       //   publicMetadata: { role: role },
//       // });
//       // revalidatePath(`/${role}`);
//       revalidatePath(`/`);
//     } else {
//       // create a new user
//       await User.create({
//         clerkId: user.id,
//         username: user.username,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user?.emailAddresses[0]?.emailAddress,
//         hasImage: user.hasImage,
//         avatar: user.imageUrl,
//       });
//     }
//   } catch (err) {
//     if (err instanceof Error) {
//       console.log('error', err.message);
//       return actionResponse('error', err.message, null);
//     }
//     return actionResponse('fail', 'Failed to create/update user', null);
//   }
// }

// 'use server';

// import User from '@/models/User.model';
// import { revalidatePath } from 'next/cache';
// import { connectDB } from './connectDB';
// import { sendMail } from './nodemailer';
// import { actionResponse } from './utils';

// type UserType = {
//   clerkId: string;
//   username: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   email: string;
//   hasImage: boolean;
//   avatar: string;
// };

// export async function createUser(user: UserType) {
//   try {
//     console.log(user);

//     await connectDB();

//     //  Generate welcome mail
//     const emailContent = {
//       subject:
//         'Subject: Welcome to Consultero - Your Partner in Recruitment Excellence',
//       text: `
//         Hello Dear, ${user.firstName},

//         Thank you for reaching out to Consultero. We are delighted to receive your enquiry and excited about the opportunity to assist you with your recruitment needs.

//         At Consultero, we pride ourselves on our commitment to providing exceptional recruitment solutions tailored to your unique business requirements. Our approach is built on several important parameters:

//         Regards,
//         Support Team.
//       `,
//       html: `
//         <h2>Hello ${user.firstName},</h2>
//         <p>Thank you for reaching out to Consultero. We are delighted to receive your enquiry and excited about the opportunity to assist you with your recruitment needs.</p>
//         <p>At Consultero, we pride ourselves on our commitment to providing exceptional recruitment solutions tailored to your unique business requirements. Our approach is built on several important parameters:</p>
//         <br />
//         <hr />
//         <br />
//         <ul class='list-disc'>
//           <li>
//             <span class='text-base font-semibold'>Understanding Your Needs: </span>
//             <span class='text-base font-normal'>We take the time to understand your company’s culture, values, and specific hiring needs to ensure we find the perfect fit.</span>
//           </li>
//           <li>
//             <span class='text-base font-semibold'>Customized Strategy: </span>
//             <span class='text-base font-normal'>We develop a tailored recruitment strategy to source candidates who meet your criteria and align with your organizational goals.</span>
//           </li>
//           <li>
//             <span class='text-base font-semibold'>Rigorous Screening: </span>
//             <span class='text-base font-normal'>Our thorough screening process ensures that only the most qualified and compatible candidates are presented to you.</span>
//           </li>
//           <li>
//             <span class='text-base font-semibold'>Efficient Coordination: </span>
//             <span class='text-base font-normal'>We manage the scheduling and coordination of interviews to ensure a seamless process with minimal disruption to your workflow.</span>
//           </li>
//           <li>
//             <span class='text-base font-semibold'>Continuous Support: </span>
//             <span class='text-base font-normal'>From initial contact to the candidate’s first day, we provide ongoing support to ensure a smooth transition and address any concerns.</span>
//           </li>
//           <li>
//             <span class='text-base font-semibold'>Post-Hire Assurance: </span>
//             <span class='text-base font-normal'>We offer replacement support for up to two months to guarantee your satisfaction with our services.</span>
//           </li>
//         </ul>
//         <br />
//         <hr />
//         <br />
//         <p>We look forward to the opportunity to discuss your needs in more detail and demonstrate how Consultero can add value to your organization. Please let us know a convenient time for a follow-up call or meeting.</p>
//         <br />
//         <p>Thank you again for considering Consultero. We are eager to work with you and help you build a team that drives success.</p>
//         <br />
//         <br/>
//         <p>Best regards,</p>
//         <p>Support Team</p>
//         <hr />
//         <br />
//         <hr />
//         <p>Gokul Krishna</p>
//         <p>Project Manager of Consultero</p>
//         <h6 class='text-lg font-semibold'>Consultero</h6>
//         <p>Phone: +91 1234567890</p>
//         <br/>
//         <link href='https://www.consultero.in' target='_blank'>Website here</link>
//       `,
//     };

//     const newUser = await User.create(user);
//     console.log('User created successfully 🎉');
//     console.log(newUser);

//     await sendMail(emailContent, user.email, user, 'welcome');

//     return JSON.parse(JSON.stringify(newUser));
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log('error', error.message);
//       return actionResponse('error', error.message, null);
//     }
//     return actionResponse('fail', 'Failed to create user', null);
//   }
// }

// type UpdateUserType = {
//   clerkId: string;
//   username: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   email: string;
//   hasImage: boolean;
//   avatar: string;
// };

// export async function updateUser(id: string, user: UpdateUserType) {
//   try {
//     // connect db
//     await connectDB();

//     // check user is already exist or not
//     const existingUser = await User.findOne({ clerkId: id }).lean();

//     if (existingUser) {
//       console.log('User already exist 🫵');
//       // update the user in the database
//       await User.findOneAndUpdate(
//         { clerkId: id },
//         {
//           username: user.username,
//           firstName: user.firstName,
//           lastName: user.lastName,
//           email: user.email,
//           hasImage: user.hasImage,
//           avatar: user.avatar,
//         },
//         { new: true }
//       );
//       // update the user in clerk
//       // await clerkClient.users.updateUser(existingUser.clerkId, {
//       //   publicMetadata: { role: role },
//       // });
//       // revalidatePath(`/${role}`);
//       revalidatePath(`/`);
//     } else {
//       // create a new user
//       await User.create({
//         clerkId: id,
//         username: user.username,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         hasImage: user.hasImage,
//         avatar: user.avatar,
//       });
//     }
//   } catch (err) {
//     if (err instanceof Error) {
//       console.log('error', err.message);
//       return actionResponse('error', err.message, null);
//     }
//     return actionResponse('fail', 'Failed to create/update user', null);
//   }
// }
