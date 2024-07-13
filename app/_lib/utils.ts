import crypto from 'crypto';
import { addDays } from 'date-fns';
import { format, toZonedTime } from 'date-fns-tz';

export function calcDate(date = new Date()) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format();
}

export function actionResponse(
  status: 'success' | 'fail' | 'error',
  message: string,
  data: string | null
) {
  return {
    status,
    message,
    data,
  };
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function generateId(type: IdType) {
  if (type === 'customer') {
    const randomBytes = crypto.randomBytes(6).toString('hex');
    const customerId = `cust_${randomBytes}`;
    return customerId;
  }

  if (type === 'order') {
    const randomBytes = crypto.randomBytes(6).toString('hex');
    const orderId = `order_${randomBytes}`;
    return orderId;
  }

  if (type === 'payment') {
    const randomBytes = crypto.randomBytes(6).toString('hex');
    const paymentId = `pay_${randomBytes}`;
    return paymentId;
  }

  if (type === 'refund') {
    const randomBytes = crypto.randomBytes(6).toString('hex');
    const refundId = `refund_${randomBytes}`;
    return refundId;
  }

  if (type === 'item') {
    const randomBytes = crypto.randomBytes(6).toString('hex');
    const itemId = `item_${randomBytes}`;
    return itemId;
  }

  if (type === 'invoice') {
    const randomBytes = crypto.randomBytes(6).toString('hex');
    const invoiceId = `invoice_${randomBytes}`;
    return invoiceId;
  }

  return null;
}

export function generateSignature(payload: string, secret: string): string {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const signature = hmac.digest('hex');
  return signature;
}

export function calcStartDate(date: Date): string {
  // Convert the input date to the "Asia/Kolkata" timezone
  const zonedDate = toZonedTime(date, 'Asia/Kolkata');

  // Set the time to 9:30 PM
  zonedDate.setHours(21, 30, 0, 0);

  // Format and return the date as an ISO string in the "Asia/Kolkata" timezone
  return format(zonedDate, "yyyy-MM-dd'T'HH:mm:ssXXX", {
    // locale: 'en-IN',
    timeZone: 'Asia/Kolkata',
  });
}

export function calcFutureDateTime(date: Date): string {
  // Add 7 days to the date
  const futureDate = addDays(date, 7);

  // Convert the future date to the "Asia/Kolkata" timezone
  const zonedDate = toZonedTime(futureDate, 'Asia/Kolkata');

  // Set the time to 10:30 PM
  zonedDate.setHours(21, 30, 0, 0);

  // Format and return the future date as an ISO string in the "Asia/Kolkata" timezone
  return format(zonedDate, "yyyy-MM-dd'T'HH:mm:ssXXX", {
    timeZone: 'Asia/Kolkata',
  });
}

function addDayss(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function generateDateTimeRange(startDateStr: string): {
  start_time: string;
  end_date_time: string;
} {
  // Parse the start date string to a Date object
  const startDate = new Date(startDateStr);

  // Adjust the start date by subtracting one day to match the requirement
  const adjustedStartDate = addDayss(startDate, -1);

  // Adjust the end date by adding 6 days to the adjusted start date
  const endDate = addDayss(adjustedStartDate, 7);

  // Adjust the end time by adding 1 hour to the end date
  endDate.setHours(endDate.getHours() + 1);

  // Format the dates to the required string format with milliseconds
  const start_time = adjustedStartDate.toISOString().replace('.000', '.638');
  const end_date_time = endDate.toISOString().replace('.000', '.638');

  return { start_time, end_date_time };
}

export function startDate(date: Date) {
  const currentDate = new Date(date);
  const meetingDate = new Date(
    Date.UTC(
      currentDate.getUTCFullYear(),
      currentDate.getUTCMonth(),
      currentDate.getUTCDate(),
      21, // Hour set to 21 for 9:30 PM
      30, // Minute set to 30
      0, // Second set to 0
      638 // Millisecond set to 638
    )
  );

  return meetingDate.toISOString();
}

export function endDate(date: Date) {
  // Get the current date
  const currentDate = new Date(date);

  // Calculate the end date by adding 7 days to the current date
  const endDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Create a new Date object for the end date, setting the time to 22:30:00.638 UTC
  const endDateTime = new Date(
    Date.UTC(
      endDate.getUTCFullYear(),
      endDate.getUTCMonth(),
      endDate.getUTCDate(),
      21, // Hour set to 22 for 10:30 PM
      30, // Minute set to 30
      0, // Second set to 0
      638 // Millisecond set to 638
    )
  );

  // Return the ISO string representation of the end date
  return endDateTime.toISOString();
}

// console.log('start date', startDate(new Date()));
// console.log('end date', endDate(new Date()));
