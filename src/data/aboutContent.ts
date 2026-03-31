import type { PageHeroMenuItem } from '../components/PageHeroMenu';

export function getAboutHeroItems(current: 'about' | 'team' | 'csr' | 'faq' | 'contact'): PageHeroMenuItem[] {
  return [
    { label: 'About Us', to: '/about', current: current === 'about' },
    { label: 'Team', to: '/about/team', current: current === 'team' },
    { label: 'CSR', to: '/about/csr', current: current === 'csr' },
    { label: 'FAQ', to: '/about/faq', current: current === 'faq' },
    { label: 'Contact', to: '/contact', current: current === 'contact' },
  ];
}

export const ABOUT_HERO_IMAGE = 'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1764.jpg';
export const ABOUT_MISSION_IMAGE = 'https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1797.jpg';
export const TEAM_HERO_IMAGE = 'https://efabproperties.com/web/wp-content/uploads/2023/06/office.jpg';
export const TEAM_FOUNDER_IMAGE = 'https://efabproperties.com/web/wp-content/uploads/2023/09/fabian.jpg';
export const CSR_HERO_IMAGE = 'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1765.jpg';
export const CONTACT_HERO_IMAGE = 'https://efabproperties.com/web/wp-content/uploads/2023/06/office.jpg';

export const aboutNarrative = [
  'Efab Properties was born in 1997 with a simple dream, to solve housing needs. We are committed to investing in our community and citizens by providing homes. We are a leading real estate developer and construction company dedicated to the belief of “A family, A roof”.',
  'Efab Properties is a leading real estate developer and construction company dedicated to the belief of “A family, A roof”. We were founded on the principle that everyone should have the opportunity to own a home. Our deep commitment is reflected in our business, community partnership and philanthropy. We are on a mission to invest in the community by creating a new approach to urban development that includes affordable housing.',
  'EFAB Properties has also contributed to the socio-political and economic drive of our community with our turnkey operations in mass housing, which has allowed EFAB to provide for a diverse market share in strategic locations.',
  'We recognise we live in a knowledge-based world now more than ever. As a result, Efab’s team is led by skilled and experienced professionals, who for many years, have successfully constructed a range of new building schemes to meet our community needs by providing quality structures and investments to our stakeholders.',
];

export const aboutMission =
  'Our corporate mission in construction and estate development is to enhance the integrity and credibility of our profession, either by providing services in areas of our expertise or collaborating with qualified professionals for project identification, development, design, evaluation, and delivery.';

export interface TeamMemberProfile {
  role: string;
  name: string;
  details: string[];
  image?: string;
}

export const teamProfiles: TeamMemberProfile[] = [
  {
    role: 'Founder / CEO',
    name: 'Chief (Dr.) Fabian Nwaora (OON)',
    image: TEAM_FOUNDER_IMAGE,
    details: [
      'The man with a vision and deep commitment to create change in real estate and affordable homes for all in Nigeria’s real estate market.',
      'With over 26 years of experience in real estate and over 48 years in business and management.',
      'Assisted by the executive director - Evelyn Nwaora and three other directors Henry Nwaora, Edith Obiukwu and Fabian Nwaora Jnr.',
    ],
  },
  {
    role: 'Executive Director',
    name: 'Evelyn Nwaora',
    details: [
      'Experience: Over 30 years of experience in business and management',
      'Responsibility: Finance and accounting',
      'Specialisation: Accounting',
    ],
  },
  {
    role: 'Director',
    name: 'Henry Nwaora',
    details: [
      'Experience: 10 years of experience in residential, commercial and infrastructural construction and management',
      'Specialisation: Construction and management',
    ],
  },
  {
    role: 'Director',
    name: 'Edith Obiukwu',
    details: [
      'Experience: 6 years of experience in banking with a focus on customer relations and business development and 2 years of experience in real estate development.',
    ],
  },
  {
    role: 'Director',
    name: 'Fabian Nwaora Jnr',
    details: [
      'Experience: 5 years in business and management',
      'Responsibility: Research and development',
      'Specialisation: Marketing',
    ],
  },
  {
    role: 'General Manager',
    name: 'Segun Adeleke',
    details: [
      'Experience: 26 years of experience in sales and business management',
      'Responsible: Monitors daily operations of the organisation',
      'Specialisation: Management',
    ],
  },
  {
    role: 'Senior Finance Officer',
    name: 'Yakubu Ibrahim',
    details: [
      'Experience: Over 28 Years of Professional Experience in Finance and Accounting.',
      'Responsible: Senior Accountant',
      'Specialisation: Finance, Accounting and Tax',
    ],
  },
  {
    role: 'Procurement Officer',
    name: 'Edward Orisakwe',
    details: [
      'Experience: Over 19 Years in Procurement.',
      'Responsible: Procurement, Marketing and Survey',
      'Specialisation: Procurement',
    ],
  },
  {
    role: 'Human Resource Manager',
    name: 'Sandra Ndukwe',
    details: [
      'Experience: Over 7 Years in Human Resource Management',
      'Responsible: Develops and Implements Human Resource Management Strategies and Administration.',
      'Specialisation: People/Operations/Business/Project Management, Document Control/Archiving, Contract Process Mastery, Employee and Client Relations.',
    ],
  },
  {
    role: 'Company Secretary',
    name: 'Barrister Obinna Ajuko (SAN)',
    details: [
      'Experience: Over 18 Years in Law',
      'Responsible: Legal Adviser',
      'Specialisation: Law',
    ],
  },
];

export const csrParagraphs = [
  'Efab Properties is deeply rooted in the service to our community. Therefore, we are committed to catering for the need of orphans by building homes and providing scholarship opportunities for the members in our community.',
  'Every year, we donate food and clothing to families in need; and build worship centres in various locations in our communities. Furthermore, we provide infrastructures like roads, schools, electricity, and hospitals in our estates and in other communities.',
];

export const csrFocusAreas = [
  'Homes and scholarships for orphans',
  'Food and clothing support for families',
  'Worship centres in community locations',
  'Roads, schools, electricity, and hospitals',
];

export interface FaqEntry {
  question: string;
  answer: string[];
}

export const faqEntries: FaqEntry[] = [
  {
    question: 'Why Choose EFAB Properties?',
    answer: ['Efab’s properties are built with the intention to deliver value to our stakeholders.'],
  },
  {
    question: 'Does EFAB have properties outside Abuja?',
    answer: ['Yes. EFAB Properties has properties in Asaba, Awka, Lagos and Portharcourt.'],
  },
  {
    question: 'Does EFAB have any payment plan?',
    answer: [
      'YES!',
      'Outright',
      '70% deposit with 30% spread over 90 days',
      'Mortgage, visit First Generation Mortgage Bank for more details',
    ],
  },
  {
    question: 'How to enquire about a property?',
    answer: [
      'Visit our office to speak with the sales department on enquiry',
      'Check for availability at your desired location',
      'Check for availability of your house type',
      'Confirm the price of the property you want to purchase',
    ],
  },
  {
    question: 'How to buy a property?',
    answer: ['Site inspection and reservation on site', 'Purchase a developer’s form', 'Make payment'],
  },
  {
    question: 'What documents do I need to buy a home?',
    answer: [
      'Photocopies of a valid identification',
      'Passport photographs',
      'Completed developer’s form',
      'Evidence of payment',
    ],
  },
  {
    question: 'What document do I receive after deposit?',
    answer: ['Provisional letter of allocation and official receipts'],
  },
  {
    question: 'Who manages the estate?',
    answer: ['A facility manager'],
  },
  {
    question: 'Who do I contact if I have an issue?',
    answer: ['Get in touch or visit our office'],
  },
  {
    question: 'How to file for change of ownership?',
    answer: [
      'Identify desired property',
      'Authorization letter from the property owner',
      'Apply for search',
      'Obtain search report',
      'File legal documentation on the conclusion of transaction',
    ],
  },
];

export const contactDetails = {
  address: '23 Lord Lugard St, Asokoro 900247, Abuja, Federal Capital Territory, Abuja, Nigeria.',
  phones: ['09088559026', '08131293215'],
  email: 'info@efabproperties.com',
  website: 'www.efabproperties.com',
  intro: 'Your email address will not be published. Required fields are marked *',
};
