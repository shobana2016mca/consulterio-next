'use server';

import User from '@/models/User.model';
import { User as IUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { connectDB } from './connectDB';
import { actionResponse } from './utils';

export async function updateUser(user: IUser) {
  try {
    // connect db
    await connectDB();

    // check user is already exist or not
    const existingUser = await User.findOne({ clerkId: user.id }).lean();

    if (existingUser) {
      console.log('User already exist 🫵');
      // update the user in the database
      await User.findOneAndUpdate(
        { clerkId: user.id },
        {
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user?.emailAddresses[0]?.emailAddress,
          hasImage: user.hasImage,
          avatar: user.imageUrl,
        },
        { new: true }
      );
      // update the user in clerk
      // await clerkClient.users.updateUser(existingUser.clerkId, {
      //   publicMetadata: { role: role },
      // });
      // revalidatePath(`/${role}`);
      revalidatePath(`/`);
    } else {
      // create a new user
      await User.create({
        clerkId: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user?.emailAddresses[0]?.emailAddress,
        hasImage: user.hasImage,
        avatar: user.imageUrl,
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log('error', err.message);
      return actionResponse('error', err.message, null);
    }
    return actionResponse('fail', 'Failed to create/update user', null);
  }
}
