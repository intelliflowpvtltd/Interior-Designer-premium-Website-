export interface Project {
  id: number;
  title: string;
  slug: string;
  category: 'Residential' | 'Commercial' | 'Hospitality';
  location: string;
  city: string;
  style: string[];
  spaceType: string;
  image: string;
  images: string[];
  description: string;
  year: number;
  squareFeet: number;
  timeline: string;
  featured: boolean;
  clientBrief?: string;
  designApproach?: string;
  keyFeatures?: string[];
  testimonial?: {
    quote: string;
    client: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Contemporary Villa',
    slug: 'contemporary-villa-bangalore',
    category: 'Residential',
    location: 'Whitefield',
    city: 'Bangalore',
    style: ['Contemporary', 'Minimalist'],
    spaceType: 'Villa',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    ],
    description: 'A stunning contemporary villa that seamlessly blends modern luxury with traditional Indian craftsmanship.',
    year: 2024,
    squareFeet: 8500,
    timeline: '14 months',
    featured: true,
    clientBrief: 'The clients, a young entrepreneur family, sought a home that reflected their modern lifestyle while honoring traditional values. They wanted open, flowing spaces filled with natural light.',
    designApproach: 'We created a design language that celebrates clean lines and natural materials, incorporating sustainable elements throughout. Custom-designed furniture pieces add unique character to each space.',
    keyFeatures: [
      'Floor-to-ceiling windows maximizing natural light',
      'Custom Italian marble flooring',
      'Smart home automation system',
      'Handcrafted wooden ceiling features',
      'Curated art collection integration',
      'Sustainable material selection'
    ],
    testimonial: {
      quote: 'The team transformed our vision into reality beyond what we imagined. Every detail reflects our personality and lifestyle.',
      client: 'Anand & Priya Sharma'
    }
  },
  {
    id: 2,
    title: 'Luxury Penthouse',
    slug: 'luxury-penthouse-mumbai',
    category: 'Residential',
    location: 'Bandra West',
    city: 'Mumbai',
    style: ['Contemporary', 'Transitional'],
    spaceType: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    ],
    description: 'Panoramic elegance with bespoke interiors overlooking the Arabian Sea.',
    year: 2024,
    squareFeet: 6200,
    timeline: '10 months',
    featured: true,
    clientBrief: 'A C-suite executive wanted a sophisticated sanctuary that served both as private retreat and entertainment space for high-profile gatherings.',
    designApproach: 'We designed flowing spaces that maximize the spectacular views while creating intimate zones for various functions. Premium materials and custom pieces throughout.',
    keyFeatures: [
      'Panoramic sea views from all rooms',
      'Custom entertainment and bar area',
      'Premium imported fixtures',
      'Integrated lighting design',
      'Private home office suite',
      'Temperature-controlled wine cellar'
    ]
  },
  {
    id: 3,
    title: 'Executive Corporate Office',
    slug: 'executive-office-delhi',
    category: 'Commercial',
    location: 'Connaught Place',
    city: 'Delhi',
    style: ['Contemporary', 'Minimalist'],
    spaceType: 'Office',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
    ],
    description: 'Sophisticated workspace design that enhances productivity and reflects corporate excellence.',
    year: 2023,
    squareFeet: 12000,
    timeline: '8 months',
    featured: true,
    keyFeatures: [
      'Flexible collaborative spaces',
      'Executive boardroom with AV integration',
      'Acoustic treatment for privacy',
      'Biophilic design elements',
      'Integrated technology infrastructure'
    ]
  },
  {
    id: 4,
    title: 'Heritage Bungalow Restoration',
    slug: 'heritage-bungalow-chennai',
    category: 'Residential',
    location: 'Boat Club',
    city: 'Chennai',
    style: ['Classical', 'Transitional'],
    spaceType: 'Bungalow',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop',
    ],
    description: 'Sensitive restoration honoring heritage while introducing modern comfort.',
    year: 2023,
    squareFeet: 7800,
    timeline: '16 months',
    featured: true,
    keyFeatures: [
      'Heritage facade restoration',
      'Modern interior systems',
      'Period-appropriate fixtures',
      'Courtyard garden redesign',
      'Climate control integration'
    ]
  },
  {
    id: 5,
    title: 'Modern Apartment',
    slug: 'modern-apartment-pune',
    category: 'Residential',
    location: 'Koregaon Park',
    city: 'Pune',
    style: ['Contemporary', 'Minimalist'],
    spaceType: 'Apartment',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    ],
    description: 'Efficient luxury in a compact urban setting.',
    year: 2024,
    squareFeet: 2400,
    timeline: '6 months',
    featured: false,
    keyFeatures: [
      'Space-optimized layout',
      'Custom storage solutions',
      'Multi-functional furniture',
      'Smart lighting system'
    ]
  },
  {
    id: 6,
    title: 'Boutique Hotel Suite',
    slug: 'boutique-hotel-goa',
    category: 'Hospitality',
    location: 'Candolim',
    city: 'Goa',
    style: ['Fusion', 'Contemporary'],
    spaceType: 'Hotel',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    ],
    description: 'Coastal luxury with Portuguese-Indian fusion design.',
    year: 2023,
    squareFeet: 3500,
    timeline: '12 months',
    featured: false,
    keyFeatures: [
      'Ocean-view balconies',
      'Local material integration',
      'Artisan collaboration',
      'Sustainable design practices'
    ]
  },
  {
    id: 7,
    title: 'Luxury Villa',
    slug: 'luxury-villa-hyderabad',
    category: 'Residential',
    location: 'Jubilee Hills',
    city: 'Hyderabad',
    style: ['Classical', 'Fusion'],
    spaceType: 'Villa',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop',
    ],
    description: 'Regal elegance inspired by Nizami heritage.',
    year: 2024,
    squareFeet: 9500,
    timeline: '15 months',
    featured: false,
    keyFeatures: [
      'Grand entrance foyer',
      'Heritage-inspired details',
      'Custom chandelier designs',
      'Landscaped courtyards'
    ]
  },
  {
    id: 8,
    title: 'Tech Startup Office',
    slug: 'tech-office-bangalore',
    category: 'Commercial',
    location: 'Koramangala',
    city: 'Bangalore',
    style: ['Contemporary', 'Minimalist'],
    spaceType: 'Office',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
    ],
    description: 'Vibrant, creative workspace for innovation.',
    year: 2024,
    squareFeet: 8000,
    timeline: '7 months',
    featured: false,
    keyFeatures: [
      'Collaborative zones',
      'Recreational spaces',
      'Flexible workstations',
      'Creative meeting rooms'
    ]
  }
];

export const categories = ['All', 'Residential', 'Commercial', 'Hospitality'] as const;
export const cities = ['All', 'Mumbai', 'Bangalore', 'Delhi', 'Chennai', 'Pune', 'Hyderabad', 'Goa'] as const;
export const styles = ['All', 'Contemporary', 'Classical', 'Transitional', 'Fusion', 'Minimalist'] as const;
export const spaceTypes = ['All', 'Villa', 'Penthouse', 'Apartment', 'Bungalow', 'Office', 'Hotel'] as const;
