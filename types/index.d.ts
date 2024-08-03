declare type JobOpeningProps = {
  title: string;
  location: string;
  salary: string;
  description: string;
  bgColor: string;
};

declare type ServiceCardType = {
  icon: React.ReactNode;
  title: string;
  details: string;
};

declare type ServiceSectionCardPropsType = {
  id: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  details: string;
  bgClasses: string;
  iconClasses: string;
};

declare type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

declare type FormError = { error: string | undefined };

declare type QuoteFormInputsType = {
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

declare type CalculationsType = {
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

declare type EnquiryFormInputType = {
  fullName: string;
  companyName: string;
  email: string;
  phoneNo: string;
};

declare type InvoivePDFPropType = {
  data: QuoteFormInputsType;
  calculations: CalculationsType;
};

declare type ContactInputType = {
  fullName: string;
  email: string;
  phoneNo: string;
  communicationMethod: string;
  message: string;
};

declare type CardProps = {
  id: string;
  title: string;
  description: string;
};

declare type Brand = {
  id: number;
  name: string;
  href: string;
  image: string;
  imageLight?: string;
  featureLogo: string;
};

declare type EmailContent = {
  subject: string;
  text: string;
  html: string;
};

declare type SendTo = string | string[];

declare type GenerateEmailContent = {
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

declare type QuoteDataContent = {
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

declare type ContactUsDataContent = {
  enquirerName: string;
  email: string;
  phoneNo: string;
  communicationMethod: string;
  message: string;
  updatedAt: Date;
};

declare type WelcomeEmailContent = {
  firstName: string;
  lastName: string;
  email: string;
  getStartedUrl?: string;
};

declare type AccordionProps = {
  children: React.ReactNode;
  question: string;
  id: string;
  active: boolean;
};

declare type EnrollmentInputs = {
  fullName: string;
  phone: string;
  email: string;
  batch: string;
  amount: number;
};

declare type SectionSubHeadingProps = {
  children: React.ReactNode;
  iconLeft: React.ReactNode;
  iconRight: React.ReactNode;
};

declare type checkoutType = {
  orderId: string;
  formData: FormData;
  amount: number;
  currency: string;
  notes: {
    workshop: string;
  };
  referenceId: string;
};

declare type IdType =
  | 'customer'
  | 'order'
  | 'payment'
  | 'refund'
  | 'item'
  | 'invoice';

declare type ChildrenPropType = {
  children: React.ReactNode;
};

declare type UserType = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: string;
};

declare type QuoteServicesProps = {
  content: {
    id: string;
    title: string;
    description: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  };
};
