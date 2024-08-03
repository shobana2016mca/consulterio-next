/* eslint-disable camelcase */
import { createUser, updateUser } from '@/app/_lib/user.actions';
import { clerkClient, WebhookEvent } from '@clerk/nextjs/server';
import SendGrid from '@sendgrid/mail';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Webhook } from 'svix';

SendGrid.setApiKey(process.env.SENDGRID_API_KEY!);

// import { createUser, deleteUser, updateUser } from '@/lib/user.actions';
export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      'Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local'
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  console.log('payload', payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400,
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  // CREATE
  if (eventType === 'user.created') {
    const {
      id,
      email_addresses,
      image_url,
      first_name,
      last_name,
      username,
      has_image,
    } = evt.data;

    console.log('event', evt.data);

    const user = {
      clerkId: id,
      username: username,
      firstName: first_name,
      lastName: last_name,
      email: email_addresses[0]?.email_address,
      hasImage: has_image,
      avatar: image_url,
    };

    //  send the welcome mail
    // const msg = {
    //   to: email_addresses[0]?.email_address,
    //   from: 'akarmakar846@gmail.com',
    //   subject: 'Welcome to our platform',
    //   text: 'Welcome to our platform, ',
    //   html: '<h1>Welcome to our platform</h1>',
    // };

    // SendGrid.send(msg)
    //   .then(() => {
    //     console.log('Email sent');
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    // Create the user
    const newUser = await createUser(user as UserType);

    // Set public metadata
    if (newUser) {
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id,
        },
      });
    }

    // return NextResponse.json({ message: 'OK' });
    return NextResponse.json({ message: 'OK', user: newUser });
  }

  // UPDATE
  if (eventType === 'user.updated') {
    console.log(evt.data);
    // return NextResponse.json({ message: 'OK' });

    const { id, image_url, first_name, last_name, username, email_addresses } =
      evt.data;

    const user = {
      firstName: first_name,
      lastName: last_name,
      username: username!,
      avatar: image_url,
    };

    //  send the welcome mail
    // const msg = {
    //   to: email_addresses[0]?.email_address,
    //   from: 'akarmakar846@gmail.com',
    //   subject: 'Welcome to our platform',
    //   text: 'Welcome to our platform, ',
    //   html: '<h1>Welcome to our platform</h1>',
    // };

    // SendGrid.send(msg)
    //   .then(() => {
    //     console.log('Email sent in Update');
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    // Update the user
    const updatedUser = await updateUser(id, user as UserType);

    return NextResponse.json({ message: 'OK', user: updatedUser });
    // return NextResponse.json({ message: 'OK' });
  }

  // DELETE
  if (eventType === 'user.deleted') {
    console.log(evt.data);
    return NextResponse.json({ message: 'OK' });
    const { id } = evt.data;

    // const deletedUser = await deleteUser(id!);

    // return NextResponse.json({ message: 'OK', user: deletedUser });
  }

  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log('Webhook body:', body);

  return new Response('', { status: 200 });
}
