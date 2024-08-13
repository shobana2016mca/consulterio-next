import mongoose, { model, models, Schema } from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const studentSchema = new Schema<IStudent>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      default: 'N/A',
    },
    paymentId: {
      type: String,
      default: 'N/A',
    },
    paymentAmount: {
      type: Number,
      default: 0,
    },
    expectedSignature: {
      type: String,
      default: 'N/A',
    },
    razorpaySignature: {
      type: String,
      default: 'N/A',
    },
    transactionId: {
      type: ObjectId,
      ref: 'Transaction',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Student = models.Student || model<IStudent>('Student', studentSchema);

export default Student;
