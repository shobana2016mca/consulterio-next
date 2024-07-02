import { model, models, Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

interface IContact {
  fullName: string;
  email: string;
  phone: string;
  communicationMethod: string;
  message: string;
  user?: string;
}

const contactSchema = new Schema<IContact>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    communicationMethod: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      ref: 'User',
      default: 'N/A',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Contact = models.Contact || model<IContact>('Contact', contactSchema);

export default Contact;
