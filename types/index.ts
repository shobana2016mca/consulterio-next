export type QuoteFormInputsType = {
  enquirerName: string;
  companyName: string;
  email: string;
  location: string;
  jobRole: string;
  monthlySalary: number;
  annualSalary: number;
  peopleCount: string;
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
