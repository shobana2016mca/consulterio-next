'use server';

import { EmailContent, SendTo } from '@/types';
import { sendMail } from './nodemailer';
import { actionResponse } from './utils';

export async function createQuote({
  emailContent,
  user,
}: {
  emailContent: EmailContent;
  user: SendTo;
}) {
  try {
    await sendMail(emailContent, user);
    return actionResponse('success', 'Successfully get quote', null);
  } catch (err) {
    if (err instanceof Error) {
      return actionResponse('error', err.message, null);
    }
    return actionResponse('fail', 'Failed to get a quote', null);
  }
}
