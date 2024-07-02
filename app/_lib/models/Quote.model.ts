import { model, models, Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

interface IQuote {
  enquirerName: string;
  companyName: string;
  email: string;
  phoneNo: string;
  location: string;
  jobRole: string;
  monthlySalary: number;
  annualSalary: number;
  noOfEmployees: string;
  about: string;
  beforeMonthlySalary: string;
  totalMonthlyTax: string;
  monthlyCGST: string;
  monthlySGST: string;
  afterMonthlysalary: string;
  beforeAnnualSalary: string;
  totalAnnuallyTax: string;
  annualCGST: string;
  annualSGST: string;
  afterAnnualSalary: string;
  beforePayCommission: string;
  commission: string;
  afterPayCommission: string;
  nettSalary: string;
  user: string;
}

const quoteSchema = new Schema<IQuote>(
  {
    enquirerName: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobRole: {
      type: String,
      required: true,
    },
    monthlySalary: {
      type: Number,
      required: true,
    },
    annualSalary: {
      type: Number,
      required: true,
    },
    noOfEmployees: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      default: 'No information provided',
    },
    beforeMonthlySalary: {
      type: String,
      required: true,
    },
    totalMonthlyTax: {
      type: String,
      required: true,
    },
    monthlyCGST: {
      type: String,
      required: true,
    },
    monthlySGST: {
      type: String,
      required: true,
    },
    afterMonthlysalary: {
      type: String,
      required: true,
    },
    beforeAnnualSalary: {
      type: String,
      required: true,
    },
    totalAnnuallyTax: {
      type: String,
      required: true,
    },
    annualCGST: {
      type: String,
      required: true,
    },
    annualSGST: {
      type: String,
      required: true,
    },
    afterAnnualSalary: {
      type: String,
      required: true,
    },
    beforePayCommission: {
      type: String,
      required: true,
    },
    commission: {
      type: String,
      required: true,
    },
    afterPayCommission: {
      type: String,
      required: true,
    },
    nettSalary: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      ref: 'User',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Quote = models.Quote || model<IQuote>('Quote', quoteSchema);

export default Quote;
