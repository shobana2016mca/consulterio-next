import { ServiceCardIcon3 } from '@/assets/icons';
import { BiAnalyse } from 'react-icons/bi';
import { BsCalendar2CheckFill } from 'react-icons/bs';
import {
  FaCalculator,
  FaCalendarAlt,
  FaUsers,
  FaWpforms,
} from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa6';
import { GiTrophy } from 'react-icons/gi';
import { GrUserManager } from 'react-icons/gr';
import {
  MdDeveloperBoard,
  MdHighQuality,
  MdSupportAgent,
} from 'react-icons/md';

export const resultInNumber = [
  {
    id: crypto.randomUUID(),
    number: '100%',
    title: 'Achieve 100% Growth with the Right Talent!',
    description1:
      "At Consultero, we understand that the key to your company's exponential growth lies in hiring the right candidates. Our dedicated team ensures that we match you with professionals who not only meet your requirements but also drive your success.",
    description2:
      "Partner with us and experience the difference as we help fuel your company's journey to 100% growth. Together, we're not just filling positions - we're building the future.",
    description3: 'Discover how we can contribute to your success today!',
    description4: '',
  },
  {
    id: crypto.randomUUID(),
    number: '175+',
    title: 'Trusted by Over 175 Companies for Exceptional Talent Solutions!',
    description1:
      "At Consultero, we've had the privilege of partnering with over 175 companies, including leading corporates and MNCs like TCS and Capgemini. Our expertise in sourcing the right candidates has consistently driven success and growth for our clients.",
    description2:
      "Join the ranks of successful companies that have already benefited from our tailored hiring solutions. Let's work together to achieve your business goals.",
    description3:
      'We believe in the power of the right talent to transform businesses. By understanding your unique needs, we ensure that you get professionals who not only fit but excel. With our support, witness the difference in productivity and growth.',
    description4: 'Discover the Consultero advantage today!',
  },
  {
    id: crypto.randomUUID(),
    number: '200+',
    title: 'Over 200 Recruitment Projects Successfully Delivered!',
    description1:
      "At Consultero, our track record speaks for itself. We've successfully delivered over 200 recruitment projects, helping businesses find the perfect candidates to drive their success.",
    description2:
      'Our experienced team is dedicated to understanding your unique needs and providing tailored hiring solutions that ensure the best fit for your company. With each project, we bring our commitment to excellence and our passion for connecting top talent with leading companies.',
    description3:
      'Experience the Consultero difference and let us help you build a team that propels your business forward. Trust us to deliver the results you need, every time.',
    description4:
      'Contact us today to learn more about how we can support your recruitment needs!',
  },
];

export const services = [
  {
    id: crypto.randomUUID(),
    title: 'Recruitment Process',
    details:
      'We manage the entire recruitment process, from understanding your requirements to sourcing the perfect candidates. Our thorough approach ensures that you receive only the most qualified and suitable candidates for your roles.',
    icon: FaUsers,
  },
  {
    id: crypto.randomUUID(),
    title: 'Scheduling Candidates',
    details:
      'Our team handles the scheduling of candidates for interviews, coordinating with both the candidates and your team to find the most convenient times. We ensure a seamless and organized scheduling process, saving you time and effort.',
    icon: FaCalendarAlt,
  },
  {
    id: crypto.randomUUID(),
    title: 'Conducting Interviews',
    details:
      'We conduct initial interviews to screen and assess candidates, ensuring they meet your specific criteria. This helps streamline your hiring process by presenting you with only the best-fit candidates for further evaluation.',
    icon: BsCalendar2CheckFill,
  },
  {
    id: crypto.randomUUID(),
    title: 'Following Up Till Joining',
    details:
      "Our support doesn't end with the offer letter. We stay in touch with candidates throughout the entire process, ensuring a smooth transition from offer acceptance to joining your organization. We address any concerns and provide continuous support to both you and the candidates.",
    icon: FaWpforms,
  },
  {
    id: crypto.randomUUID(),
    title: 'Replacement Support for 2 Months',
    details:
      'To ensure your complete satisfaction, we offer replacement support for up to two months. If a hired candidate leaves or does not meet your expectations within this period, we will find a suitable replacement at no additional cost.',
    icon: MdSupportAgent,
  },
];

export const serviceCardData = [
  {
    id: crypto.randomUUID(),
    icon: GrUserManager,
    title: ' Product manager',
    details: '',
    bgClasses: 'bg-indigo-50 group-hover:bg-indigo-600',
    iconClasses:
      'stroke-indigo-600 transition-all duration-500 group-hover:stroke-white',
  },
  {
    id: crypto.randomUUID(),
    icon: MdDeveloperBoard,
    title: 'Software Developer ',
    details: '',
    bgClasses: 'bg-pink-50 group-hover:bg-pink-600',
    iconClasses:
      'text-pink-600 transition-all duration-500 group-hover:text-white',
  },

  {
    id: crypto.randomUUID(),
    icon: MdHighQuality,
    title: 'Quality analyst',
    details: '',
    bgClasses: 'bg-orange-50 group-hover:bg-orange-600',
    iconClasses:
      'text-orange-600 transition-all duration-500 group-hover:text-white',
  },
  {
    id: crypto.randomUUID(),
    icon: GiTrophy,
    title: ' Customer Success ',
    details: '',
    bgClasses: 'bg-teal-50 group-hover:bg-teal-600',
    iconClasses:
      'text-teal-600 transition-all duration-500 group-hover:text-white',
  },
  {
    id: crypto.randomUUID(),
    icon: BiAnalyse,
    title: 'Business analyst',
    details: '',
    bgClasses: 'bg-indigo-50 group-hover:bg-indigo-600',
    iconClasses:
      'text-indigo-600 transition-all duration-500 group-hover:text-white',
  },
  {
    id: crypto.randomUUID(),
    icon: ServiceCardIcon3,
    title: 'Sales and marketing ',
    details: '',
    bgClasses: 'bg-pink-50 group-hover:bg-pink-600',
    iconClasses:
      'stroke-pink-600 transition-all duration-500 group-hover:stroke-white',
  },
  {
    id: crypto.randomUUID(),
    icon: FaCalculator,
    title: 'Finance and accountant',
    details: '',
    bgClasses: 'bg-orange-50 group-hover:bg-orange-600',
    iconClasses:
      'text-orange-600 transition-all duration-500 group-hover:text-white',
  },
  {
    id: crypto.randomUUID(),
    icon: FaUserTie,
    title: 'Human resources',
    details: '',
    bgClasses: 'bg-teal-50 group-hover:bg-teal-600',
    iconClasses:
      'text-teal-600 transition-all duration-500 group-hover:text-white',
  },
];

export const approaches = [
  {
    id: 1,
    title: 'Understanding Your Needs',
    description:
      "We start by gaining a deep understanding of your company's culture, values, and specific hiring requirements. This helps us identify candidates who not only have the right skills but also fit seamlessly into your organization.",
  },
  {
    id: 2,
    title: 'Customized Recruitment Strategy',
    description:
      'Based on your requirements, we develop a tailored recruitment strategy. This includes sourcing candidates from various channels, leveraging our extensive network, and utilizing advanced recruitment tools to find the perfect match.',
  },
  {
    id: 3,
    title: 'Thorough Screening Process',
    description:
      'Our team conducts a rigorous screening process to evaluate candidates. We assess their skills, experience, and compatibility with your company culture. This ensures that only the most suitable candidates move forward.',
  },
  {
    id: 4,
    title: 'Coordinated Interviews',
    description:
      'We manage the scheduling and coordination of interviews, ensuring a smooth and efficient process. Our goal is to minimize disruptions to your workflow while providing you with the best candidates for consideration.',
  },
  {
    id: 5,
    title: 'Continuous Support',
    description:
      "From the initial contact to the candidate's first day, we provide continuous support. We follow up with both you and the candidate to ensure a smooth transition and address any concerns promptly.",
  },
  {
    id: 6,
    title: 'Post-Hire Assurance',
    description:
      "Our commitment doesn't end with the candidate's joining. We offer replacement support for up to two months to ensure your complete satisfaction. If a hired candidate leaves or does not meet your expectations within this period, we will find a suitable replacement at no additional cost.",
  },
];

export const benifits = [
  {
    title: 'Confidence Boost',
    description: 'Gain the confidence to tackle any interview situation.',
  },
  {
    title: 'Skill Enhancement',
    description:
      'Learn techniques to articulate your skills and experiences effectively.',
  },
  {
    title: 'Personalized Feedback',
    description:
      'Receive tailored advice and feedback from experienced instructors.',
  },
  {
    title: 'Networking Opportunities',
    description:
      'Connect with peers and professionals in the field. - Preparation for Success: Equip yourself with the tools needed to make a lasting impression.',
  },
  {
    title: 'Preparation for Success',
    description:
      'Equip yourself with the tools needed to make a lasting impression.',
  },
];

export const curriculums = [
  {
    title: 'Day 1: Understanding the Interview Process',
    description: [
      'Overview of different types of interviews',
      'Researching the company and role',
      'Crafting your personal pitch',
    ],
  },
  {
    title: 'Day 2: Mastering Common Interview Questions',
    description: [
      'Techniques for answering common questions',
      'STAR method for behavioral questions',
      'Handling tricky questions with ease',
    ],
  },
  {
    title: 'Day 3: Effective Communication Skills',
    description: [
      'Verbal and non-verbal communication',
      'Building rapport with the interviewer',
      'Active listening and thoughtful responses',
    ],
  },
  {
    title: 'Day 4: Showcasing Your Skills and Experience',
    description: [
      'Highlighting relevant skills and achievements',
      'Using examples to demonstrate your value',
      'Preparing your resume and portfolio',
    ],
  },
  {
    title: 'Day 5: Psychology benefits , Mock Interviews and Feedback',
    description: [
      'Participating in mock interviews',
      'Receiving constructive feedback',
      'Tips for post-interview follow-up',
    ],
  },
];

export const instructor = {
  name: 'Mr. Krishnan',
  designation: 'Recruitment Consultant',
  company: 'XYZ Corp',
  experience: '10 years',
  profileImage: 'https://avatar.iran.liara.run/public/boy',
  education: [
    {
      degree: 'B.Tech',
      institution: 'SRM University',
    },
    {
      degree: 'Postgraduate Degree',
      institution: 'Indian Institute of Management (IIM)',
    },
  ],
  professionalExperience: [
    {
      title: 'Recruitment Consulting',
      description:
        'Over 10 years of hands-on experience in the recruitment industry, helping numerous companies streamline their hiring processes and secure top talent.',
    },
    {
      title: 'Candidate Guidance',
      description:
        'Provided mentorship and support to countless candidates, aiding them in navigating the competitive job market and securing their desired positions.',
    },
    {
      title: 'Corporate Training Programs',
      description:
        'Conducted numerous corporate training programs focused on recruitment, enhancing the skills of HR teams and improving their recruitment strategies.',
    },
  ],
  expertise:
    'Mr. Krishnan’s comprehensive knowledge in recruitment strategies, candidate assessment, and corporate training makes him a valuable asset for any organization looking to optimize its hiring process.',
  philosophy:
    'Committed to fostering growth and excellence, Mr. Krishnan believes in personalized guidance and strategic planning to ensure both candidates and companies achieve their goals effectively.',
};

export const testimonials = [
  {
    id: crypto.randomUUID(),
    name: 'John Doe',
    designation: 'Software Engineer',
    company: 'ABC Corp',
    content:
      '``The Interview Mastery course was a game-changer for me. The practical tips and mock interviews helped me feel prepared and confident. I landed my dream job within a month of completing the course!``',
  },
  {
    id: crypto.randomUUID(),
    name: 'Jane Smith',
    designation: 'Marketing Manager',
    company: 'DEF Corp',
    content:
      '``I cannot recommend the Interview Mastery course enough. The instructors were knowledgeable and supportive, and the course content was incredibly valuable. I aced my interviews and received multiple job offers!``',
  },
  {
    id: crypto.randomUUID(),
    name: 'David Johnson',
    designation: 'Business Analyst',
    company: 'GHI Corp',
    content:
      '``The Interview Mastery course exceeded my expectations. The instructors were engaging and insightful, and the practical exercises helped me refine my interview skills. I am now more confident and prepared for any interview situation.``',
  },
  {
    id: crypto.randomUUID(),
    name: 'Sarah Williams',
    designation: 'Project Manager',
    company: 'JKL Corp',
    content:
      '``I am so grateful for the Interview Mastery course. The instructors were professional and supportive, and the course content was relevant and practical. I learned valuable skills that have helped me secure a promotion and advance my career.``',
  },
  {
    id: crypto.randomUUID(),
    name: 'Michael Brown',
    designation: 'Sales Executive',
    company: 'MNO Corp',
    content:
      '``The Interview Mastery course was a game-changer for me. The practical tips and mock interviews helped me feel prepared and confident. I landed my dream job within a month of completing the course!``',
  },
  {
    id: crypto.randomUUID(),
    name: 'Emily Davis',
    designation: 'HR Manager',
    company: 'PQR Corp',
    content:
      '``I cannot recommend the Interview Mastery course enough. The instructors were knowledgeable and supportive, and the course content was incredibly valuable. I aced my interviews and received multiple job offers!``',
  },
  {
    id: crypto.randomUUID(),
    name: 'Daniel Wilson',
    designation: 'Finance Analyst',
    company: 'STU Corp',
    content:
      '``The Interview Mastery course exceeded my expectations. The instructors were engaging and insightful, and the practical exercises helped me refine my interview skills. I am now more confident and prepared for any interview situation.``',
  },
  {
    id: crypto.randomUUID(),
    name: 'Olivia Martinez',
    designation: 'Operations Manager',
    company: 'VWX Corp',
    content:
      '``I am so grateful for the Interview Mastery course. The instructors were professional and supportive, and the course content was relevant and practical. I learned valuable skills that have helped me secure a promotion and advance my career.``',
  },
];

export const faqs = [
  {
    id: crypto.randomUUID(),
    question: 'Who is this course for?',
    answer:
      'This course is for anyone looking to improve their interview skills, from fresh graduates to experienced professionals seeking career advancement.',
    active: false,
  },
  {
    id: crypto.randomUUID(),
    question: 'How long is the course?',
    answer: 'The course runs for 5 days, with each session lasting 1 hour.',
    active: false,
  },
  {
    id: crypto.randomUUID(),
    question: 'What do I need to participate in the course?',
    answer:
      'You will need a computer or mobile device with internet access to join the Zoom sessions.',
    active: false,
  },
  {
    id: crypto.randomUUID(),
    question: 'Will I receive any course materials?',
    answer:
      'Yes, participants will receive course materials, including worksheets and reference guides, to support their learning.',
    active: false,
  },
  {
    id: crypto.randomUUID(),
    question: 'Is there any support available after the course ends?',
    answer:
      'Yes, participants can join our alumni network for ongoing support and networking opportunities.',
    active: false,
  },
];

export const batchDetails = {
  weekday: {
    time: '9:30pm to 10:30pm',
    days: 'Monday to Friday',
    minStudents: 5,
    maxStudents: 30,
  },
  weekend: {
    time: '2:00pm to 4:30pm',
    days: 'Saturday to Sunday',
    minStudents: 5,
    maxStudents: 30,
  },
  duration: '3 months',
  startDate: '15th August 2022',
  endDate: '15th November 2022',
  fees: 10000,
  discount: 2000,
  finalFees: 8000,
  registrationLink: '/enroll',
};

export const workshopBenefits = [
  {
    id: crypto.randomUUID(),
    title: 'Exclusive Certificates',
    description:
      'Earn a Certificate of Professional Development and a Certificate of Achievement in Communication and Presentation Skills upon completion.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Proven Results',
    description:
      'Participants have reported an average salary hike of up to 20% after applying the skills learned in our workshop.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Increased Success Rate',
    description:
      'Enhance your chances of clearing interviews by up to 70% with our comprehensive training and personalized feedback.',
  },
];
