export interface EstatePortfolioItem {
  id: string;
  title: string;
  location: string;
  summary: string;
  image: string;
  sourceUrl: string;
}

export type ProjectCategoryKey = 'estates' | 'rentals' | 'commercials' | 'luxury-homes';

export interface ServiceBlock {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface RentalLocation {
  id: string;
  name: string;
  location: string;
  houseTypes: string[];
  specification: string;
  videos: string[];
  galleryImages?: string[];
  mapUrl?: string | null;
}

export interface ProjectCategoryConfig {
  key: ProjectCategoryKey;
  title: string;
  route: string;
  sectionId: string;
  eyebrow: string;
  description: string;
  image?: string;
  highlights: string[];
  isEmpty?: boolean;
}

export const serviceStats = [
  { label: 'Home Owners', value: '4k' },
  { label: 'Estates Built', value: '20+' },
  { label: 'Years In Business', value: '26' },
] as const;

export const serviceBlocks: ServiceBlock[] = [
  {
    id: 'electrical-mechanical',
    title: 'Electrical / Mechanical Engineering',
    description:
      'Our electrical and mechanical services cover the planning, design, and supervision required for large-scale developments and building systems.',
    bullets: [
      'Feasibility and planning studies',
      'Design of main services for large developments',
      'Design and supervision of mechanical and electrical installations in buildings',
    ],
  },
  {
    id: 'quantity-surveying',
    title: 'Quantity Surveying',
    description:
      'Quantity surveying services focus on project budgeting, cost control, time control, fluctuation projections, and efficient resource allocation.',
    bullets: [
      'Project budgeting and cost control',
      'Time control and fluctuation projections',
      'Efficient resource allocation through delivery',
    ],
  },
  {
    id: 'engineering-architecture',
    title: 'Engineering / Architecture',
    description:
      'EFAB’s engineering and architectural scope spans residential, civic, infrastructure, and industrial briefs from concept to supervision.',
    bullets: [
      'Roads, bridges, water supply, and drainage',
      'Hospitals, schools, stadiums, dams, and channels',
      'Industrial and commercial projects with material specification support',
    ],
  },
  {
    id: 'planning',
    title: 'Planning',
    description:
      'The planning practice supports the creation of better environments for people to live and work in, across urban, regional, and conservation studies.',
    bullets: [
      'Regional, city, and urban studies',
      'Local plans and action area planning',
      'Conservation, rehabilitation, and recreation facilities',
    ],
  },
];

export const projectManagementStages = [
  {
    title: 'Define',
    summary: 'Set project objectives, skeletal brief, programme priorities, and the required level of client involvement.',
  },
  {
    title: 'Feasibility',
    summary: 'Examine the proposal, establish technical feasibility, prepare programme and budget, and coordinate approvals.',
  },
  {
    title: 'Pre-Construction',
    summary: 'Coordinate design development, contractor selection, approvals, and contract documentation.',
  },
  {
    title: 'Construction',
    summary: 'Monitor site progress, procurement, design coordination, reporting, payments, and quality through regular reviews.',
  },
  {
    title: 'Completion',
    summary: 'Drive pre-commissioning, final account close-out, defects monitoring, and maintenance planning.',
  },
] as const;

export const estatePortfolioItems: EstatePortfolioItem[] = [
  {
    id: 'covillea-residence',
    title: 'Covillea Residence',
    location: 'Guzape, Abuja',
    summary: 'This luxurious mini court is located at the exquisitely beautiful and choice part of Guzape, Abuja....',
    image: 'https://efabproperties.com/web/wp-content/uploads/2023/09/IMG_3043.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/covillea-residence/',
  },
  {
    id: 'efab-portharcourt-estate',
    title: 'Efab Portharcourt Estate',
    location: 'Portharcourt',
    summary: 'Efab Estate Portharcourt is located along presidential road off Abia road by federal staff quarters rivers state....',
    image: 'https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1780.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-portharcourt-estate/',
  },
  {
    id: 'efab-blue-fountain-awka',
    title: 'Efab Blue Fountain Awka',
    location: 'Amansea',
    summary: 'This beautiful estate is located in amansea in Awka North, in Anambra State, situated along Enugu Onitsha...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1864.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-blue-fountain-awka/',
  },
  {
    id: 'efab-estate-asaba',
    title: 'Efab Estate Asaba',
    location: 'Benin-Onitsha express way, Asaba',
    summary: 'Efab estate Asaba is located along benin-onitsha express way. This estate is about 5minute...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1773.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-estate-asaba/',
  },
  {
    id: 'efab-dinamite-kyami',
    title: 'Efab Dinamite Kyami',
    location: 'Kyami',
    summary: 'Efab Dinamite estate is developing estate which is found along airport road. This estate is in close...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1821.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-dinamite-kyami/',
  },
  {
    id: 'efab-raylight-estate',
    title: 'Efab Raylight Estate',
    location: 'Tasha',
    summary: 'Efab Raylight is strictly made up of 3 bedroom bungalows. This estate is located along airport road,...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1822.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-raylight-estate/',
  },
  {
    id: 'efab-estate-dawaki',
    title: 'Efab Estate Dawaki',
    location: 'Dawaki',
    summary: 'Efab Dawaki is a small 5 bedroom duplex estate located along Murtala Mohammed express way, opposite Rainoil...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1810.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-estate-dawaki/',
  },
  {
    id: 'efab-estate-dakwa',
    title: 'Efab Estate Dakwa',
    location: 'Dakwa',
    summary: 'Efab city estate Dakwa is situated between the borders of the federal capital territory and Niger state,...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1821.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-estate-dakwa/',
  },
  {
    id: 'efab-classic-estate',
    title: 'Efab Classic Estate',
    location: 'Apo',
    summary: 'Efab classic estate is located directly adjacent NEPA junction in Apo district. This estate consists of 39...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1801.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-classic-estate/',
  },
  {
    id: 'efab-sunshine-estate',
    title: 'Efab Sunshine Estate',
    location: 'apo',
    summary: 'Efab Sunshine is an exclusive 3 bedroom estate is along apo ShopRite road, after Apo mechanics village...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1820.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-sunshine-estate/',
  },
  {
    id: 'efab-crystal-estate',
    title: 'Efab Crystal Estate',
    location: 'Gwarimpa',
    summary: 'Efab Crystal Estate is located at mike okoronkwo close, off 36 road, 3rd avenue Gwarimpa’s Federal Housing...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1793.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-crystal-estate/',
  },
  {
    id: 'efab-city-estate-lokogoma',
    title: 'Efab City Estate Lokogoma',
    location: 'Lokogoma',
    summary: 'Efab lokogoma estate is found within an estate environment, surrounded by largest estates in the Federal Republic...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1892.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-city-estate-lokogoma/',
  },
  {
    id: 'efab-city-estate-mbora-i',
    title: 'Efab City Estate Mbora I',
    location: 'Mbora',
    summary: 'Efab City Estate is the pioneering estate of Efab properties, as its inception birth and paved a...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1847.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-city-estate-mbora-i/',
  },
  {
    id: 'efab-global-estate',
    title: 'Efab Global Estate',
    location: 'Mbora',
    summary: 'Efab Global Estate is located along Idu Karimo Expressway Off Jabi-Airport Road, sharing the same route that...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1866.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-global-estate/',
  },
  {
    id: 'efab-kado-estate',
    title: 'Efab Kado Estate',
    location: 'Nepa Quarters, Behind customs quarters, Kado Kuchi, Abuja.',
    summary: '👉🏻 Recently built 4-bedroom terrace in Kado Kuchi, Abuja. 👉🏻...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2023/09/IMG_3041.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-kado-estate/',
  },
  {
    id: 'efab-queens-court-estate',
    title: 'Efab Queens Court Estate',
    location: 'Mbora',
    summary: 'Efab Queens Court is small high-end estate with about 27 units of 5-bedroom duplex with penthouse. This...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1774.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-queens-court-estate/',
  },
  {
    id: 'efab-villa-court-estate',
    title: 'Efab Villa Court Estate',
    location: 'Lokogoma',
    summary: '[SOLD OUT] This Efab City estate currently known as Efab Mbora 5, is a small estate of...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1870.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-villa-court-estate/',
  },
  {
    id: 'efab-queens-estate',
    title: 'Efab Queens Estate',
    location: 'Karsana',
    summary: 'Efab Queens estate is found within the Karsana axis in Abuja, surrounded by Hall 7 Federal Housing...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1773.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-queens-estate/',
  },
  {
    id: 'efab-metropolis-estate',
    title: 'Efab Metropolis Estate',
    location: 'Karsana',
    summary: 'Efab Metropolis Estate formerly known as Blue Fountain Estate can be found in Karsana district along Murtala...',
    image: 'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1758.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-metropolis-estate/',
  },
  {
    id: 'efab-verizon-estate',
    title: 'Efab Verizon Estate',
    location: 'Karsana',
    summary: 'Efab Verizon estate is located in the Karsana district along with Efab Metropolis and Efab Queens estate....',
    image: 'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1780.jpg',
    sourceUrl: 'https://efabproperties.com/web/portfolio/efab-verizon-estate/',
  },
] as const;

export const rentalLocations: RentalLocation[] = [
  {
    id: 'efab-city-estate-lokogoma',
    name: 'Efab City Estate',
    location: 'Lokogoma',
    houseTypes: [
      '3 bedroom detached bungalow',
      '3 bedroom detached bungalow with BQ',
      '3 bedroom reached bungalow with fence',
      '3 bedroom semi detached bungalow',
      '2 bedroom semi detached bungalow',
      '1 bedroom terrace',
      '3 bedroom detached bungalow (carcass)',
    ],
    specification: 'bedroom, bathroom, kitchen, living room, and dining area.',
    videos: ['https://youtu.be/aRiRJArpa_E'],
    mapUrl: null,
  },
  {
    id: 'efab-city-estate-mbora',
    name: 'Efab City Estate',
    location: 'Mbora',
    houseTypes: ['4 bedroom detached duplex', '1 bedroom flat'],
    specification: 'bedroom, bathroom, kitchen, living room, and dining area.',
    videos: ['https://youtu.be/JoZe0I-4e4w'],
    mapUrl: null,
  },
  {
    id: 'efab-global-estate-rentals',
    name: 'Efab Global Estate',
    location: 'Mbora',
    houseTypes: [
      '4 bedroom detached bungalow',
      '4 bedroom detached bungalow',
      '2 bedroom detached bungalow with fence',
      '2 bedroom detached bungalow without fence',
      '3 bedroom detached bungalow (carcass)',
    ],
    specification: 'bedroom, bathroom, kitchen, living room, dining area',
    videos: ['https://youtu.be/rfQZx7h_l4I'],
    mapUrl: null,
  },
  {
    id: 'efab-sunshine-estate-rentals',
    name: 'Efab Sunshine Estate',
    location: 'Apo',
    houseTypes: ['3 bedroom detached bungalow', '3 bedroom detached bungalow (carcass)'],
    specification: 'bedroom, bathroom, kitchen, living room, dining area',
    videos: ['https://youtu.be/AwqcW9effhM'],
    mapUrl: null,
  },
  {
    id: 'efab-estate-kubwa-rentals',
    name: 'Efab Estate Kubwa',
    location: 'Beaje bridge near Kubwa train station',
    houseTypes: ['one bedroom bungalow'],
    specification: 'bedroom, bathroom, kitchen, living room',
    videos: ['https://youtu.be/37NOwb_2KUM'],
    mapUrl: null,
  },
  {
    id: 'efab-estate-life-camp',
    name: 'Efab Estate Life Camp',
    location: 'Near Angwa Cement',
    houseTypes: ['4 bedroom duplex', '3 bedroom bungalow', '1 bedroom flat', 'Self contain'],
    specification: 'bedroom, bathroom, living room, dining area and kitchen.',
    videos: ['https://youtu.be/37NOwb_2KUM'],
    mapUrl: null,
  },
  {
    id: 'efab-finance-quarters-life-camp',
    name: 'Efab Estate Finance Quarters Life Camp',
    location: 'Finance quarters, near life camp police station before fish market.',
    houseTypes: ['one bedroom bungalow'],
    specification: 'bedroom, bathroom, living room and kitchen.',
    videos: ['https://youtu.be/37NOwb_2KUM'],
    mapUrl: null,
  },
  {
    id: 'efab-verizon-estate-rentals',
    name: 'Efab Verizon Estate',
    location: 'Karsana District',
    houseTypes: ['3 bedroom bungalow'],
    specification: 'bedroom, bathroom, kitchen, living room, dining area',
    videos: [],
    galleryImages: [
      'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1778-1024x768.jpg',
      'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1784-1024x768.jpg',
      'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1783-1024x768.jpg',
      'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1782-1024x768.jpg',
      'https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1780-1024x768.jpg',
    ],
    mapUrl: null,
  },
] as const;

export const rentalHero = {
  eyebrow: 'Abuja',
  title: 'Rentals',
  description:
    'We have rentals options that offer flexibility and the ability to create a personalized living space across Nigeria.',
  sectionLabel: 'Rental Locations',
  introVideoUrl: 'https://youtu.be/37NOwb_2KUM',
  heroVideoId: '37NOwb_2KUM',
} as const;

export const projectCategories: ProjectCategoryConfig[] = [
  {
    key: 'estates',
    title: 'Estates',
    route: '/projects/estates',
    sectionId: 'estates',
    eyebrow: 'Portfolio',
    description: 'Live estate listings pulled from the four EFAB portfolio archive pages you specified.',
    image: estatePortfolioItems[0]?.image,
    highlights: [
      'Covillea Residence',
      'Efab Estate Dawaki',
      'Efab Metropolis Estate',
    ],
  },
  {
    key: 'rentals',
    title: 'Rentals',
    route: '/projects/rentals',
    sectionId: 'rentals',
    eyebrow: 'Rental Locations',
    description: 'Rental locations, house types, and YouTube videos pulled from the live EFAB rental locations page.',
    image: 'https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1797-1024x768.jpg',
    highlights: [
      'Efab City Estate / Lokogoma',
      'Efab Global Estate / Mbora',
      'Efab Verizon Estate / Karsana District',
    ],
  },
  {
    key: 'commercials',
    title: 'Commercials',
    route: '/projects/commercials',
    sectionId: 'commercials',
    eyebrow: 'Commercial',
    description: 'No Published Yet',
    highlights: [],
    isEmpty: true,
  },
  {
    key: 'luxury-homes',
    title: 'Luxury Homes',
    route: '/projects/luxury-homes',
    sectionId: 'luxury-homes',
    eyebrow: 'Luxury',
    description: 'No Published Yet',
    highlights: [],
    isEmpty: true,
  },
] as const;

export const mediaVideos = {
  featured: {
    provider: 'vimeo',
    embedUrl: 'https://player.vimeo.com/video/840629270?background=0&autoplay=0&loop=0&byline=0&title=0',
    title: 'Real Estate Innovators',
    description:
      'We collaborate with qualified professionals for project identification, development, design, evaluation, and delivery.',
  },
  library: [
    { id: 'DgEv1KuBGTI', title: 'EFAB Properties - Brand Film' },
    { id: '37NOwb_2KUM', title: 'EFAB Properties - About Us' },
    { id: 'j-IsbySkcLg', title: 'EFAB Properties - Community Development' },
  ],
} as const;

export const offerCards = [
  {
    title: 'Allocation Updates',
    description:
      'Track current EFAB release windows, allocation calls, and availability notices as new offers go live.',
  },
  {
    title: 'Flexible Payment Plans',
    description:
      'Use the offers channel to spotlight payment structures, staged settlement options, and buyer support packages.',
  },
  {
    title: 'Sales Support',
    description:
      'Keep a direct line open for sales enquiries, clarifications, and the latest promotional guidance from the EFAB team.',
  },
] as const;

export function getProjectCategoryConfig(category: ProjectCategoryKey) {
  return projectCategories.find((item) => item.key === category) ?? projectCategories[0];
}
