'use server';

import { cookies } from 'next/headers';
import qs from 'query-string';
import { sendMail } from './nodemailer';
import { endDate, startDate } from './utils';

const isDev = process.env.NODE_ENV === 'development';

export async function getToken() {
  const cookie = cookies();
  const url = process.env.ZOOM_OAUTH_ENDPOINT!;

  const query = qs.stringify({
    grant_type: 'account_credentials',
    account_id: process.env.ZOOM_ACCOUNT_ID!,
  });

  // console.log('query', query);

  try {
    const res = await fetch(
      `${url}?account_id=${process.env
        .ZOOM_ACCOUNT_ID!}&grant_type=account_credentials`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(
            `${process.env.ZOOM_CLIENT_ID!}:${process.env.ZOOM_CLIENT_SECRET!}`
          ).toString('base64')}`,
        },
      }
    );

    if (!res.ok) {
      console.log('not ok', res.status, res.statusText);
      throw new Error('Failed to generate token');
    }

    const { access_token, token_type, expires_in, scope } = await res.json();

    // console.log('token', access_token);
    cookies().set({
      name: 'zoom_token',
      value: access_token,
      // httpOnly: true,
      // path: '/',
      // secure: true,
      // sameSite: 'strict',
      expires: new Date(Date.now() + 3599 * 1000),
      // priority: 'medium',
      httpOnly: isDev ? false : true,
      secure: isDev ? false : true,
      sameSite: isDev ? 'lax' : 'strict',
      // path:
    });

    // await createMeeting();

    return { access_token, expires_in };
    // return null;
  } catch (error) {
    if (error instanceof Error) {
      console.log('token_gen_error', error.message);
      // redirect('/');
      throw new Error(error.message);
      // return error.message;
    }
    console.log('Other Error', error);
    // return error;
    throw new Error('Something went wrong while generating token');

    // redirect('/');
  }
}

// polling for the generate token
// setTimeout(async () => {
//   const cookie = cookies();
//   const { access_token: token, expires_in } = await getToken();
//   console.log('polling', token);

//   const expiryTime = expires_in;

//   console.log('expiryTime', expiryTime);

//   if (token) {
//     cookie.set('zoom_token', token.access_token, {
//       maxAge: token.expires_in,
//       secure: true,
//       sameSite: 'strict',
//       httpOnly: true,
//       expires: new Date(token.expires_in),
//     });
//   }
// }, 3599 * 1000);

export async function createMeeting() {
  const cookie = cookies();

  const access_token = cookie.get('zoom_token')?.value;
  // console.log('access_token', access_token);

  if (!access_token) {
    throw new Error('Token not found');
  }

  const res = await fetch(
    'https://api.zoom.us/v2/users/me/meetings',
    // 'https://api.zoom.us/v2/users/marketingconsultero@gmail.com/meetings',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        agenda: 'My Meeting 3',
        default_password: false,
        duration: 60,
        recurrence: {
          // end_date_time: '2024-07-12T22:30:00.638Z',
          end_date_time: endDate(new Date()),
          end_times: 7,
          monthly_day: 1,
          monthly_week: 1,
          monthly_week_day: 2,
          repeat_interval: 1,
          type: 2,
          weekly_days: '2',
        },
        schedule_for: 'marketingconsultero@gmail.com',
        settings: {
          approval_type: 2,
          audio: 'both',
          calendar_type: 1,
          contact_email: 'marketingconsultero@gmail.com',
          contact_name: 'Consultero',
          email_notification: true,
          host_video: true,
          participant_video: true,
          show_share_button: false,
          use_pmi: true,
          waiting_room: true,
          continuous_meeting_chat: {
            enable: true,
            auto_add_invited_external_users: true,
          },
          push_change_to_calendar: true,
          registration_type: 1,
        },
        // start_time: '2024-07-05T21:30:00.638Z',
        start_time: startDate(new Date()),
        timezone: 'Asia/Kolkata',
        topic: 'My Meeting 3',
        type: 3,
      }),
    }
  );

  if (!res.ok) {
    console.log('not ok', res.status, res.statusText);
    throw new Error('Failed to create meeting');
  }

  if (res.status === 401) {
    throw new Error('Unauthorized');
  }

  if (res.status === 201) {
    const data = await res.json();
    // console.log('id', data.id);
    // console.log('join_url', data.join_url);
    // console.log('zoom-meeting response', data);

    return data;
  }
}

export async function generateMeetingLink(username: string, email: string) {
  await getToken();

  // console.log('token', token);

  const cookie = cookies();
  const token = cookie.get('zoom_token')?.value;

  if (!token) {
    throw new Error('Token not found');
  }

  if (!username || !email) {
    throw new Error('Credentials not found');
  }

  // create meeting
  const data = await createMeeting();

  // send email
  await sendMail({
    type: 'meeting_link',
    sendTo: email,
    subject: `${username}, Your join url for Interview Mastery Workshop`,
    meetingData: {
      username: username,
      email: email,
      meetingId: data.id,
      joinUrl: data.join_url,
    },
  });
}

export async function fixDate() {
  const start = startDate(new Date());
  console.log('startDate', start);
  const furuteDate = endDate(new Date());
  console.log('furuteDate', furuteDate);
}
