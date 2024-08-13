'use server';

import { connectDB } from './connectDB';
import Transaction from './models/Transaction.model';

export async function createTransaction(transactionData: ITransaction) {
  await connectDB();

  const transaction = await Transaction.create({
    ...transactionData,
  });

  // console.log('Transaction', transaction);

  if (!transaction) {
    throw new Error('Transaction not created');
  }

  return JSON.parse(JSON.stringify(transaction));
}
