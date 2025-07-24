// constants.js

import { trainee1, trainee2 } from "../assets";

// Hero Section
export const HERO_CONTENT = {
  title: "Welcome to Rhythm Dance Studio",
  subtitle: "Where passion meets performance.",
  ctaText: "Book a Free Class",
};

// About Section
export const ABOUT_CONTENT = {
  heading: "About Us",
  description: `Aarambh Dance Studio is a vibrant community of dancers who believe in the power of movement.
  From classical to contemporary, we offer a wide range of styles taught by passionate instructors.`,
};

// Instructor Section
export const INSTRUCTORS = [
  {
    name: "Aisha Kapoor",
    image: trainee2, // add image in public/assets
    bio: "Contemporary & Ballet specialist with 10+ years of experience.",
  },
  {
    name: "Rahul Mehta",
    image: trainee1,
    bio: "Hip-Hop artist & choreographer featured on national TV.",
  },
];

// Classes Section
export const CLASSES = [
  {
    title: "Kids Ballet",
    ageGroup: "Ages 4-8",
    schedule: "Mon & Wed - 5:00 PM",
  },
  {
    title: "Hip-Hop Beginners",
    ageGroup: "Ages 10+",
    schedule: "Tue & Thu - 6:30 PM",
  },
  {
    title: "Contemporary Advanced",
    ageGroup: "Adults",
    schedule: "Sat - 10:00 AM",
  },
];

// Contact Section
export const CONTACT_INFO = {
  address: "123 Dance Lane, Mumbai, India",
  phone: "+91 98765 43210",
  email: "info@rhythmdance.in",
  googleMapsLink: "https://maps.google.com",
};

export const FOOTER_LINKS = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Classes", href: "#classes" },
  { name: "Contact", href: "#contact" },
  { name: "Instagram", href: "https://instagram.com/rhythmdance" },
];
