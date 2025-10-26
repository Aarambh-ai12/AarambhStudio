import Images from "../assets/images";

export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "classes", label: "Classes" },
  { id: "schedule", label: "Schedule" },
  { id: "pricing", label: "Pricing" },
  { id: "gallery", label: "Gallery" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const CLASSES = [
  {
    title: "Dance Classes",
    image: Images.DanceClasses,
    description:
      "Groove to the beat with our energetic and fun dance sessions.",
    details: ["Hip Hop", "Bollywood", "Freestyle", "Kids Batch"],
  },
  {
    title: "Yoga Classes",
    image: Images.YogaClasses,
    description: "Find balance and peace through guided yoga sessions.",
    details: ["Morning Batches", "Power Yoga", "Hatha Yoga", "Meditation"],
  },
  {
    title: "Zumba Classes",
    image: Images.ZumbaClasses,
    description:
      "Burn calories while dancing to the rhythm of your favorite tracks.",
    details: [
      "High Energy",
      "Full Body Workout",
      "Group Sessions",
      "Certified Trainers",
    ],
  },
  {
    title: "Fitness Classes",
    image: Images.FitnessClasses,
    description:
      "Build strength and stamina with our curated fitness programs.",
    details: ["HIIT", "Strength Training", "Core Workout", "Stretch & Relax"],
  },
];

export const SCHEDULE = [
  {
    day: "Monday",
    dance: "6 PM - 7 PM",
    yoga: "7 AM - 8 AM",
    zumba: "5 PM - 6 PM",
  },
  {
    day: "Tuesday",
    dance: "5 PM - 6 PM",
    yoga: "6 AM - 7 AM",
    zumba: "6 PM - 7 PM",
  },
  {
    day: "Wednesday",
    dance: "6 PM - 7 PM",
    yoga: "7 AM - 8 AM",
    zumba: "5 PM - 6 PM",
  },
  {
    day: "Thursday",
    dance: "5 PM - 6 PM",
    yoga: "6 AM - 7 AM",
    zumba: "6 PM - 7 PM",
  },
  {
    day: "Friday",
    dance: "6 PM - 7 PM",
    yoga: "7 AM - 8 AM",
    zumba: "5 PM - 6 PM",
  },
  {
    day: "Saturday",
    dance: "Evening Batch",
    yoga: "Morning Session",
    zumba: "Evening Batch",
  },
];

export const PRICING = [
  {
    title: "Dance (4 days/week)",
    price: "₹700",
    features: [
      "4 classes per week",
      "Professional instructors",
      "Beginner friendly",
    ],
  },
  {
    title: "Dance (6 days/week)",
    price: "₹1000",
    features: [
      "6 classes per week",
      "Professional instructors",
      "Advanced training available",
    ],
  },
  {
    title: "Zumba (3 days/week)",
    price: "₹1000",
    features: [
      "3 classes per week",
      "High energy sessions",
      "Fun & fitness combined",
    ],
  },
  {
    title: "Yoga (6 days/week)",
    price: "₹1000",
    features: [
      "6 classes per week",
      "Certified yoga instructors",
      "Beginner to advanced levels",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    text: "The instructors are amazing! Dance classes are full of energy and fun!",
  },
  {
    name: "Rohit Mehta",
    text: "I love the yoga sessions — calm, focused, and refreshing!",
  },
  {
    name: "Aisha Khan",
    text: "Zumba is my favorite! Great workout with music and laughter!",
  },
];

export const CONTACT_INFO = {
  location: "Krrish Arya Heights, Shop No.5, Behind St. Mary School, Mumbra Devi Colony, Diva (E), Thane, Maharashtra 400612",
  phone: "+91 77387 06975",
  email: "aarambhfitandflow@gmail.com",
};

export const SOCIAL_MEDIA = {
  whatsapp: "https://wa.me/7738706975",
  instagram: "https://www.instagram.com/aarambh_fit_and_flow/",
  facebook: "https://www.facebook.com/aarambhfitflow",
  twitter: "https://twitter.com/aarambhfitflow",
  linkedin: "https://www.linkedin.com/company/aarambhfitflow",
  youtube: "https://www.youtube.com/channel/UC_x5XG1OV2P6Vwbg_MRn1jA",
  tiktok: "https://www.tiktok.com/@aarambhfitflow",
  pinterest: "https://www.pinterest.com/aarambhfitflow",
  reddit: "https://www.reddit.com/r/aarambhfitflow",
  website: "https://aarambhstudio.vercel.app/",
};

export const GALLERY = [
  {
    image: Images.DanceClasses,
    alt: "Dance Class",
  },
  {
    image: Images.YogaClasses,
    alt: "Yoga Class",
  },
  {
    image: Images.ZumbaClasses,
    alt: "Zumba Class",
  },
  {
    image: Images.FitnessClasses,
    alt: "Fitness Class",
  },
];
