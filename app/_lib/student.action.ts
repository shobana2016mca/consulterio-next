'use server';

import { connectDB } from './connectDB';
import Student from './models/Student.model';

export async function createStudent(formData: FormData) {
  if (!formData) {
    throw new Error('No form data found');
  }

  await connectDB();

  const name = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const contact = formData.get('phone') as string;

  const student = await Student.create({
    name,
    email,
    contact,
  });

  if (!student) {
    throw new Error('Student not created');
  }

  return JSON.parse(JSON.stringify(student));
}

export async function updateStudent(formData: FormData) {
  if (!formData) {
    throw new Error('No form data found');
  }

  await connectDB();

  const {
    contact,
    orderId,
    paymentId,
    paymentAmount,
    expectedSignature,
    razorpaySignature,
  } = Object.fromEntries(formData.entries());

  const existingStudent = await Student.findOne({ contact: contact });

  if (!existingStudent) {
    throw new Error('Student not found');
  }

  const updateStudent = await Student.findOneAndUpdate(
    {
      contact: contact.toString().replace('-', ''),
    },
    {
      $set: {
        orderId: orderId,
        paymentId: paymentId,
        paymentAmount: paymentAmount,
        expectedSignature: expectedSignature,
        razorpaySignature: razorpaySignature,
      },
    },
    { new: true }
  );

  // console.log('Existing student', existingStudent);

  if (!updateStudent) {
    throw new Error('Student not updated');
  }

  return JSON.parse(JSON.stringify(updateStudent));
}

export async function updateWithTransaction({
  studentId,
  transactionId,
}: {
  studentId: string;
  transactionId: string;
}) {
  if (!studentId || !transactionId) {
    throw new Error('No contact or transaction id found');
  }

  await connectDB();

  const existingStudent = await Student.findOne({ _id: studentId });

  if (!existingStudent) {
    throw new Error('Student not found with this id');
  }

  const updateStudent = await Student.findOneAndUpdate(
    {
      _id: studentId,
    },
    {
      $set: {
        transactionId: transactionId,
      },
    },
    { new: true }
  );

  if (!updateStudent) {
    throw new Error('Student not updated with transaction');
  }

  return JSON.parse(JSON.stringify(updateStudent));
}

// create a regular expression to match the student contact number exclude the country code
export async function matchStudentContact(contact: string) {
  if (!contact) {
    throw new Error('No contact found');
  }

  return contact.match(/(\d{10})/);
}
