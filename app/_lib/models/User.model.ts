import { model, models, Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

interface IUser {
  clerkId: string;
  username: string;
  firstName: string;
  lastName?: string;
  email: string;
  hasImage: boolean;
  avatar: string;
  queries: (typeof Schema.Types.ObjectId)[];
  quotes: (typeof Schema.Types.ObjectId)[];
}

const userSchema = new Schema<IUser>(
  {
    clerkId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    hasImage: {
      type: Boolean,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    queries: {
      type: [ObjectId],
      ref: 'Contact',
    },
    quotes: {
      type: [ObjectId],
      ref: 'Quote',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = models.User || model<IUser>('User', userSchema);

export default User;
