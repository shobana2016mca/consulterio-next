import crypto from 'crypto';

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
