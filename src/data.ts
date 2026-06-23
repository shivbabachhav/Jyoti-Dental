/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, FAQ, Review, GalleryItem, Appointment } from './types';

export const DOCTOR_INFO = {
  name: 'Dr. Rohit Mamude',
  credentials: 'BDS, Certified Implantologist & Cosmetic Dentist',
  experience: '10+ Years of Excellence',
  about: 'Dr. Rohit Mamude is a highly acclaimed dentist in Nashik with over a decade of clinical experience in advanced restorative, implant, and aesthetic dentistry. He is deeply committed to delivering personalized, state-of-the-art care in an ultra-comfortable, pain-free environment. His clinic, Jyoti Dental Clinic, combines a gentle human touch with cutting-edge global technology to redefine the dental experience for families and individuals alike in Satpur.',
  expertises: [
    'Laser & Microscopic Root Canal Therapy',
    'Premium Swiss & German Dental Implants',
    '3D Digital Smile Designing & Laminates',
    'Invisible Braces & Clear Aligners',
    'Conservative Cosmetic & Veneer Restorations',
    'Painless Full Mouth Rehabilitation'
  ],
  memberships: [
    'Indian Dental Association (IDA)',
    'International Congress of Oral Implantologists (ICOI)',
    'Indian Academy of Aesthetic & Cosmetic Dentistry'
  ],
  education: [
    'Bachelor of Dental Surgery (BDS) - Prestigious State University',
    'Fellowship in Oral Implantology (Switzerland)',
    'Advanced Residency in Micro-Endodontics & Esthetics'
  ],
  image: '/src/assets/images/doctor_portrait_1782243492576.jpg'
};

export const CLINIC_SERVICES: Service[] = [
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description: 'Painless, single-visit laser-assisted root canal procedures utilizing state-of-the-art rotary systems.',
    iconName: 'Activity',
    detailedDescription: 'Root Canal Treatment (RCT) is a highly precise dental procedure performed to save a severely damaged, decayed, or infected tooth. Dr. Rohit Mamude specializes in advanced Rotary Root Canal Treatment, which uses specialized mechanical instruments to make the process exceptionally smooth, quick, and virtually pain-free.',
    benefits: [
      'Relieves intense toothache and swelling',
      'Saves the natural tooth structure',
      'Single-visit precision in 90% of cases',
      'Virtually pain-free under modern local anesthesia'
    ],
    duration: '45 - 60 mins',
    suitability: 'Patients with deep decay, severe tooth sensitivity, or structural pulp damage.'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent, life-like tooth replacements using premium Swiss and German titanium implant technologies.',
    iconName: 'ShieldCheck',
    detailedDescription: 'Dental implants represent the gold standard in modern tooth replacement. They act as artificial tooth roots chemically fused to the jawbone, offering unparalleled stability, structural integrity, and a completely natural aesthetic for single teeth, multiple missing teeth, or implant-supported dentures.',
    benefits: [
      'Matches natural teeth in feel, look, and bite force',
      'Prevents bone loss and maintains facial contours',
      'Does not damage or rely on surrounding healthy teeth',
      'Designed to last a lifetime with proper hygiene'
    ],
    duration: '60 mins per implant',
    suitability: 'Adults with missing teeth who have adequate jawbone density and good oral hygiene.'
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Transform your smile with rapid, safe, in-office laser whitening giving up to 8 shades lighter results.',
    iconName: 'Sparkles',
    detailedDescription: 'Our medical-grade teeth whitening system gently dissolves stains caused by coffee, tea, smoking, and age. Utilizing a specialized cool-light laser combined with advanced dental gels, we deliver immediate, uniform, and sensitivity-free whitening in under an hour.',
    benefits: [
      'Up to 8 shades lighter in just 45 minutes',
      'Advanced formula prevents tooth or enamel damage',
      'Includes specialized desensitizing therapy',
      'Long-lasting confidence boost'
    ],
    duration: '45 mins',
    suitability: 'Anyone experiencing tooth discoloration, yellowing, or seeking a brighter smile for special occasions.'
  },
  {
    id: 'smile-designing',
    title: 'Smile Designing',
    description: 'Tailored cosmetic smile makeovers using state-of-the-art 3D digital imaging and custom veneers.',
    iconName: 'Smile',
    detailedDescription: 'A Smile Makeover is an artistic, comprehensive process that plans your perfect smile using facial proportions, lip lines, and structural symmetry. Combining digital photography with micro-veneers, we create a bespoke aesthetic blueprint before starting any treatment.',
    benefits: [
      'Bespoke visual simulation of your future smile',
      'Addresses gaps, crookedness, and discoloration at once',
      'Restores perfect facial balance and confidence',
      'Minimally invasive preparation techniques'
    ],
    duration: '2 - 3 sessions',
    suitability: 'Individuals wishing to completely upgrade their aesthetic smile alignment and overall facial harmony.'
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'High-end aesthetic veneers, metal-free laminates, and aesthetic bonding to perfect minor tooth anomalies.',
    iconName: 'Gem',
    detailedDescription: 'Cosmetic dentistry bridges the gap between dental science and art. We utilize premium glass-ceramic materials, composite bonding, and E-Max veneers to restore chipped, misaligned, or fractured teeth, transforming your smile with incredible natural translucency.',
    benefits: [
      'Incredibly natural-looking, light-transmitting materials',
      'Highly resistant to coffee and tea staining',
      'Quick repair for chipped or uneven edges',
      'Reinforces thin or worn enamel layers'
    ],
    duration: '1 - 2 sessions',
    suitability: 'Patients needing minor corrections, veneer veneers, dental bonding, or cosmetic enamel recontouring.'
  },
  {
    id: 'braces-aligners',
    title: 'Braces & Aligners',
    description: 'Invisible clear aligners and modern ceramic braces for comfortable, highly aesthetic teeth straightening.',
    iconName: 'Layers',
    detailedDescription: 'Straighten your teeth comfortably and discreetly. We offer standard orthodontic braces (metal and ceramic) alongside premium Clear Aligners. Aligners are removable, computer-designed transparent trays that correct crowding and gaps without wires or brackets.',
    benefits: [
      'Virtually invisible alignment with clear aligners',
      'No dietary restrictions (simply remove trays to eat)',
      'Significantly easier oral hygiene and brushing',
      'Shorter treatment duration and fewer clinic visits'
    ],
    duration: '6 - 18 months',
    suitability: 'Teens and adults looking to resolve spacing, crowding, overbites, or misaligned teeth seamlessly.'
  },
  {
    id: 'crowns-bridges',
    title: 'Crowns & Bridges',
    description: 'Ultra-durable, premium metal-free zirconia and ceramic restorations to protect and bridge gaps.',
    iconName: 'Award',
    detailedDescription: 'We provide top-tier, metal-free zirconia crowns and multi-unit porcelain bridges crafted with computer-guided CAD/CAM mills. This guarantees unmatched precision, perfect margins to prevent food lodgment, and lifelike beauty that blends with neighboring teeth.',
    benefits: [
      'CAD/CAM custom design for an absolutely precise fit',
      '100% metal-free, premium bio-compatible materials',
      'Prevents remaining teeth from shifting or tilting',
      'Restores chewing capacity and natural speech phonetics'
    ],
    duration: '2 visits',
    suitability: 'Teeth that are heavily filled, fractured, or post-root canal, or patients with localized missing teeth.'
  },
  {
    id: 'extraction',
    title: 'Tooth Extraction',
    description: 'Painless, minimally traumatic dental extractions including advanced wisdom tooth impactions.',
    iconName: 'Scissors',
    detailedDescription: 'When a tooth is non-restorable, we perform conservative, atraumatic extractions to preserve surrounding bone and gums. This is especially vital for impacted wisdom teeth, which are extracted surgically under comfortable conscious sedation or high-performance local anesthetics.',
    benefits: [
      'Aesthetic bone preservation for future implants',
      'Relieves chronic pain and facial pressure',
      'Fast recovery with modern healing membranes',
      'Extremely gentle, micro-surgical approach'
    ],
    duration: '30 - 45 mins',
    suitability: 'Severely decayed teeth, crowded orthodontic extractions, or painful impacted wisdom teeth.'
  },
  {
    id: 'dentures',
    title: 'Dentures',
    description: 'Ultra-lightweight, flexible, and implant-supported modern dentures for a comfortable lifestyle.',
    iconName: 'HeartHandshake',
    detailedDescription: 'Regain the freedom to eat and talk naturally. Gone are the days of loose, bulky dentures. We craft modern flexible dentures and implant-supported overdentures that click securely into place, ensuring maximum chewing stability and no slipping or messy glues.',
    benefits: [
      'Perfect chewing stability with implant-retained designs',
      'Premium lightweight materials prevent sore spots',
      'Restores youthful facial volume and prevents skin sagging',
      'Custom crafted teeth mapping for realistic beauty'
    ],
    duration: '3 - 4 visits',
    suitability: 'Patients with multiple missing teeth or full jaw dental loss seeking reliable, comfortable replacement.'
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Fun, gentle, and anxiety-free dental care for children to foster a lifetime of healthy dental habits.',
    iconName: 'Users',
    detailedDescription: 'We specialize in treating young smiles in a welcoming, playful, and completely reassuring setting. From protective dental sealants and fluoride applications to painless fillings, our specialized pediatric workflows ensure children look forward to dental visits.',
    benefits: [
      'Warm, friendly environment avoids childhood dental fear',
      'Fluoride applications and sealants prevent decay early',
      'Expert monitoring of erupting adult teeth alignment',
      'Interactive patient education for lifetime oral health'
    ],
    duration: '30 mins',
    suitability: 'Children from toddlers to teens requiring routine checkups, cleanings, or gentle dental restorations.'
  },
  {
    id: 'preventive',
    title: 'Preventive Dentistry',
    description: 'Comprehensive oral checkups, dental cleanings (scaling), and protective enamel sealants.',
    iconName: 'CheckCircle',
    detailedDescription: 'Prevention is better than cure. Our preventive suite includes highly advanced ultrasonic scaling, polishings to remove stubborn plaque/calculus, diagnostic digital x-rays, and customized home-care schedules to prevent decay, gum bleeding, and bad breath.',
    benefits: [
      'Eliminates bad breath and treats early gum disease',
      'Stops dental plaque from turning into painful cavities',
      'Early cancer screening and thorough tissue checkups',
      'Saves extensive costs and time by avoiding major treatments'
    ],
    duration: '30 mins',
    suitability: 'Every individual, required at least twice a year to keep teeth and gums in prime health.'
  },
  {
    id: 'rehabilitation',
    title: 'Full Mouth Rehabilitation',
    description: 'Complete restructuring of damaged or worn dentition to restore perfect function and beauty.',
    iconName: 'Briefcase',
    detailedDescription: 'Full Mouth Rehabilitation is a highly sophisticated, comprehensive dental rebuild. For patients with multiple missing, severely worn, or broken teeth, Dr. Rohit Mamude orchestrates a synchronized plan combining implants, crowns, and bite corrections to completely reconstruct the oral cavity.',
    benefits: [
      'Re-establishes correct, comfortable neuromuscular bite',
      'Combines implants, crowns, and cosmetic veneers',
      'Drastically improves overall nutrition and chewing safety',
      'Reverses decades of dental deterioration or wear'
    ],
    duration: 'Custom program',
    suitability: 'Patients with severe dental wear, extensive decay, missing teeth, or chronic TMJ jaw joint pain.'
  }
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: '1',
    reviewerName: 'Nikhil Bachhav',
    reviewerImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    content: 'Dr. Rohit Mamude is definitely the best dentist in Satpur Nashik! I underwent a root canal treatment and was extremely anxious, but the entire process was absolutely painless. The clinic is ultra-modern, very hygienic, and the staff is extremely caring. Highly recommended!',
    date: '1 week ago',
    source: 'google',
    highlight: true
  },
  {
    id: '2',
    reviewerName: 'Shrikant Patil',
    reviewerImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    content: 'I got dental implants done from Dr. Rohit. The 3D planning and surgery were so professional. He explained everything step-by-step. The results are amazing, and I can chew perfectly now. The clinic has a luxury feel and is extremely clean.',
    date: '3 weeks ago',
    source: 'google',
    highlight: true
  },
  {
    id: '3',
    reviewerName: 'Priyanka Shinde',
    reviewerImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    content: 'Excellent experience with Smile Designing! Dr. Rohit is highly skilled. He transformed my chipped and yellow teeth using premium veneers. Now I can smile confidently. The staff kept in touch with me throughout. Simply the best!',
    date: '1 month ago',
    source: 'google',
    highlight: false
  },
  {
    id: '4',
    reviewerName: 'Aniket More',
    reviewerImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    content: 'Jyoti Dental Clinic is near Madhur Sweets, Satpur. The location is very convenient. Dr. Rohit is very patient and polite. He does not recommend unnecessary treatments. Very honest practice and reasonable charges for premium quality dental work.',
    date: '2 months ago',
    source: 'google',
    highlight: false
  },
  {
    id: '5',
    reviewerName: 'Megha Deshmukh',
    reviewerImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    content: 'We take our 6-year-old daughter to Dr. Rohit Mamude. He has a brilliant way of interacting with kids. She sat through her tooth filling without crying. Very grateful for such an amazing family dentist in Nashik!',
    date: '3 months ago',
    source: 'google',
    highlight: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'exterior',
    imagePath: '/src/assets/images/clinic_hero_banner_1782243463561.jpg',
    title: 'Clinic Exterior & Grand Entrance',
    description: 'Modern elegant exterior signage and easily accessible storefront located at Satpur Colony, Nashik.'
  },
  {
    id: 'g2',
    category: 'reception',
    imagePath: '/src/assets/images/clinic_hero_banner_1782243463561.jpg',
    title: 'Luxury Waiting Lounge & Reception',
    description: 'Designed like a modern luxury boutique hotel, utilizing glassmorphism, soothing ambient lighting, and rich marble.'
  },
  {
    id: 'g3',
    category: 'treatment',
    imagePath: '/src/assets/images/treatment_room_1782243478234.jpg',
    title: 'Advanced Treatment Operatory 1',
    description: 'Fully automated medical dental chair equipped with high-resolution digital imaging and rotary systems.'
  },
  {
    id: 'g4',
    category: 'equipment',
    imagePath: '/src/assets/images/treatment_room_1782243478234.jpg',
    title: 'Modern Intraoral Digital Scanner & Dental Laser',
    description: 'Allows fast and seamless 3D mapping of your teeth, eliminating messy impressions.'
  },
  {
    id: 'g5',
    category: 'experience',
    imagePath: '/src/assets/images/cosmetic_dentistry_1782243508731.jpg',
    title: 'Aesthetic Dental Care Outcome',
    description: 'Our ultimate target is a pristine, radiant, and functional smile designed to build lifelong confidence.'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq1',
    question: 'How often should I visit a dentist?',
    answer: 'It is highly recommended to visit a dentist at least once every six months for a routine check-up and professional scaling/cleaning to prevent major issues.',
    category: 'General Dentistry'
  },
  {
    id: 'faq2',
    question: 'Is root canal treatment painful?',
    answer: 'With modern local anesthesia and high-precision rotary instruments at Jyoti Dental Clinic, Root Canal Treatment is virtually painless, feeling similar to a simple filling.',
    category: 'Root Canal'
  },
  {
    id: 'faq3',
    question: 'Do you provide dental implants?',
    answer: 'Yes, Dr. Rohit Mamude is a certified implantologist specializing in single-tooth to full-mouth dental implants with premium Swiss and German implant systems.',
    category: 'Implants'
  },
  {
    id: 'faq4',
    question: 'Do you offer teeth whitening?',
    answer: 'Yes, we offer both advanced in-office laser teeth whitening (giving results in just 45 minutes) and premium customized take-home whitening kits.',
    category: 'Cosmetic Dentistry'
  },
  {
    id: 'faq5',
    question: 'Do you treat children?',
    answer: 'Yes, we provide specialized pediatric dentistry in a warm, friendly, and anxiety-free environment to ensure positive early dental experiences.',
    category: 'Pediatric Dentistry'
  },
  {
    id: 'faq6',
    question: 'How long does braces treatment take?',
    answer: 'Depending on complexity, standard metal or ceramic braces take 12 to 24 months, whereas modern clear aligners (invisible braces) can yield results in 6 to 18 months.',
    category: 'Orthodontics'
  }
];

// Initial appointments for rich analytics dashboard state
export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-001',
    name: 'Nikhil Bachhav',
    phone: '+91 98234 56789',
    email: 'nikhil.bachhav@gmail.com',
    treatment: 'Root Canal Treatment',
    date: '2026-06-25',
    time: '11:00 AM',
    message: 'I have severe pain in my upper left molar when drinking cold water.',
    status: 'confirmed',
    createdAt: '2026-06-23T10:15:00.000Z'
  },
  {
    id: 'apt-002',
    name: 'Rohini Deshmukh',
    phone: '+91 94220 88371',
    email: 'rohini.d@outlook.com',
    treatment: 'Smile Designing',
    date: '2026-06-26',
    time: '04:30 PM',
    message: 'Interested in getting veneers for my front teeth before my wedding next month.',
    status: 'pending',
    createdAt: '2026-06-23T11:20:00.000Z'
  },
  {
    id: 'apt-003',
    name: 'Prashant Patil',
    phone: '+91 88881 23456',
    email: 'prashant.patil@yahoo.com',
    treatment: 'Dental Implants',
    date: '2026-06-27',
    time: '10:00 AM',
    message: 'Need consultation for replacing a missing lower premolar tooth.',
    status: 'confirmed',
    createdAt: '2026-06-22T09:40:00.000Z'
  },
  {
    id: 'apt-004',
    name: 'Suhas Kulkarni',
    phone: '+91 91560 99423',
    email: 'suhas.k@gmail.com',
    treatment: 'Preventive Dentistry',
    date: '2026-06-24',
    time: '02:00 PM',
    message: 'Routine checkup and general scaling cleaning.',
    status: 'completed',
    createdAt: '2026-06-21T08:00:00.000Z'
  },
  {
    id: 'apt-005',
    name: 'Vaishali Shinde',
    phone: '+91 99602 11455',
    email: 'vaishali.shinde@gmail.com',
    treatment: 'Braces & Aligners',
    date: '2026-06-28',
    time: '12:30 PM',
    message: 'Would like to know the cost estimate and duration for clear aligners.',
    status: 'pending',
    createdAt: '2026-06-23T06:05:00.000Z'
  }
];
