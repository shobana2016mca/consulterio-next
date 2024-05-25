'use server';

import User from '@/models/User.model';
import { User as IUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { connectDB } from './connectDB';
import { actionResponse } from './utils';

type UserType = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  photo: string;
};

export async function createUser(user: UserType) {
  try {
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    if (error instanceof Error) {
      return actionResponse('error', error.message, null);
    }
    return actionResponse('fail', 'Failed to create user', null);
  }
}

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
