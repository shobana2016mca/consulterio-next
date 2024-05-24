export type QuoteFormInputsType = {
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
};

export type CalculationsType = {
  afterTaxMonthly: number;
  monthlyCGST: number;
  monthlySGST: number;
  totalMonthlyTax: number;
  afterTaxAnnually: number;
  annualCGST: number;
  annualSGST: number;
  totalAnnuallyTax: number;
  beforePayCommission: number;
  commission: number;
  afterPayCommission: number;
  nettSalary: number;
};

export type InvoivePDFPropType = {
  data: QuoteFormInputsType;
  calculations: CalculationsType;
};

export type Brand = {
  id: number;
  name: string;
  href: string;
  image: string;
  imageLight?: string;
  featureLogo: string;
};

export type EmailContent = {
  subject: string;
  text: string;
  html: string;
};

export type SendTo = string | string[];

export type GenerateEmailContent = {
  enquirerName: string;
  companyName: string;
  email: string;
  phoneNo: string;
  location: string;
  jobRole: string;
  noOfEmployees: string;
  about?: string;

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
};

export type EmailDataContent = {
  enquirerName: string;
  companyName: string;
  email: string;
  phoneNo: string;
  location: string;
  jobRole: string;
  noOfEmployees: string;
  about?: string;

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
  userId: string;
};
