export const USC_SCHOOLS = [
  {
    id: "viterbi",
    name: "Viterbi School of Engineering",
    abbreviation: "Viterbi",
  },
  {
    id: "marshall",
    name: "Marshall School of Business",
    abbreviation: "Marshall",
  },
  {
    id: "annenberg",
    name: "Annenberg School for Communication and Journalism",
    abbreviation: "Annenberg",
  },
  {
    id: "artssciences",
    name: "College of Letters, Arts and Sciences",
    abbreviation: "CAS",
  },
  {
    id: "dornsife",
    name: "USC Dornsife College of Letters, Arts and Sciences",
    abbreviation: "Dornsife",
  },
  {
    id: "cinematic",
    name: "School of Cinematic Arts",
    abbreviation: "SCA",
  },
  {
    id: "socialwork",
    name: "School of Social Work",
    abbreviation: "Social Work",
  },
  {
    id: "pharmacy",
    name: "School of Pharmacy",
    abbreviation: "Pharmacy",
  },
  {
    id: "occupational",
    name: "Chan Division of Occupational Science and Occupational Therapy",
    abbreviation: "OT",
  },
  {
    id: "geriatrics",
    name: "Leonard Davis School of Gerontology",
    abbreviation: "Gerontology",
  },
];

export const DEGREE_OPTIONS = [
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Certificate Program",
  "Diploma",
];

export const PROJECT_TYPES = [
  {
    id: "capstone",
    name: "Capstone Project",
    description: "Final comprehensive project for degree completion",
  },
  {
    id: "thesis",
    name: "Master's Thesis",
    description: "Original research and thesis work",
  },
  {
    id: "senior-seminar",
    name: "Senior Seminar",
    description: "Advanced seminar course with project component",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    description: "Building a professional portfolio",
  },
  {
    id: "creative",
    name: "Creative Project",
    description: "Creative or artistic project",
  },
  {
    id: "comprehensive",
    name: "Comprehensive Exams",
    description: "Preparing for and executing comprehensive exams",
  },
  {
    id: "coursework",
    name: "Additional Coursework",
    description: "Collaborative coursework or group assignments",
  },
  {
    id: "internship",
    name: "Internships",
    description: "Internship project or group internship prep",
  },
  {
    id: "undecided",
    name: "Undecided",
    description: "Still exploring options",
  },
];

export const GRADUATION_YEARS = Array.from({ length: 8 }, (_, i) => {
  const year = new Date().getFullYear() + i;
  return year;
});
