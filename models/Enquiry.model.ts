import { model, models, Schema } from 'mongoose';

interface IEnquiry {
  fullName: string;
  companyName: string;
  email: string;
  phoneNo: string;
}

const enquirySchema = new Schema<IEnquiry>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNo: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Enquiry = models.Enquiry || model<IEnquiry>('Enquiry', enquirySchema);

export default Enquiry;
