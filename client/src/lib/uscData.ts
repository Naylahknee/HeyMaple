export interface USCSchool {
  id: string;
  name: string;
  abbreviation: string;
  majors: string[];
}

export interface UniversityData {
  id: string;
  name: string;
  emailDomain: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  schools: USCSchool[];
}

// USC SCHOOLS AND MAJORS
export const USC_SCHOOLS: USCSchool[] = [
  {
    id: "usc-viterbi",
    name: "Viterbi School of Engineering",
    abbreviation: "Viterbi",
    majors: [
      "Aerospace Engineering",
      "Biomedical Engineering",
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Engineering",
      "Computer Science",
      "Data Science",
      "Electrical Engineering",
      "Environmental Engineering",
      "Industrial and Systems Engineering",
      "Mechanical Engineering",
      "Petroleum Engineering",
      "Architectural Engineering",
      "Engineering Management",
      "Astronautical Engineering",
    ]
  },
  {
    id: "usc-marshall",
    name: "Marshall School of Business",
    abbreviation: "Marshall",
    majors: [
      "Accounting",
      "Business Administration",
      "Finance",
      "Management",
      "Marketing",
      "International Business",
      "Real Estate Development",
      "Business Analytics",
      "Entrepreneurship",
      "Management of Organizations",
      "Supply Chain Management",
      "Information Systems",
    ]
  },
  {
    id: "usc-annenberg",
    name: "Annenberg School for Communication and Journalism",
    abbreviation: "Annenberg",
    majors: [
      "Journalism",
      "Communication",
      "Public Relations",
      "Digital Journalism",
      "Broadcasting",
      "Media Studies",
      "Integrated Media",
      "Documentary Studies",
      "Strategic Communications",
    ]
  },
  {
    id: "usc-dornsife",
    name: "USC Dornsife College of Letters, Arts and Sciences",
    abbreviation: "Dornsife",
    majors: [
      "American Studies",
      "Anthropology",
      "Art History",
      "Biochemistry",
      "Biology",
      "Chemistry",
      "Classics",
      "Dance",
      "Drama",
      "Economics",
      "East Asian Languages and Cultures",
      "English",
      "Environmental Science",
      "French",
      "Gender Studies",
      "Geology",
      "German",
      "History",
      "International Relations",
      "Italian",
      "Japanese",
      "Latin American Studies",
      "Mathematics",
      "Medieval and Byzantine Studies",
      "Middle Eastern Studies",
      "Music",
      "Neuroscience",
      "Philosophy",
      "Physics",
      "Political Science",
      "Psychology",
      "Public Diplomacy",
      "Religious Studies",
      "Sociology",
      "Spanish",
      "Statistics",
      "Theatre",
      "Urban Studies",
      "Women's and Gender Studies",
      "World Languages",
    ]
  },
  {
    id: "usc-sca",
    name: "School of Cinematic Arts",
    abbreviation: "SCA",
    majors: [
      "Animation and Digital Arts",
      "Critical Studies",
      "Directing",
      "Documentary",
      "Film and Television Production",
      "Interactive Media and Games",
      "Production",
      "Producing",
      "Screenwriting",
      "Sound Design",
      "Visual Effects",
    ]
  },
  {
    id: "usc-socialwork",
    name: "School of Social Work",
    abbreviation: "Social Work",
    majors: [
      "Social Work",
      "Clinical Social Work",
      "Community Practice",
      "School Social Work",
      "Healthcare Social Work",
    ]
  },
  {
    id: "usc-pharmacy",
    name: "School of Pharmacy",
    abbreviation: "Pharmacy",
    majors: [
      "Pharmacy",
      "Pharmaceutical Sciences",
      "Clinical and Administrative Pharmacy",
      "Health Outcomes and Pharmacy Practice",
    ]
  },
  {
    id: "usc-occupational",
    name: "Chan Division of Occupational Science and Occupational Therapy",
    abbreviation: "OT",
    majors: [
      "Occupational Science",
      "Occupational Therapy",
    ]
  },
  {
    id: "usc-roski",
    name: "Roski School of Art and Design",
    abbreviation: "Roski",
    majors: [
      "Fine Arts",
      "Graphic Design",
      "Illustration",
      "Art Direction",
      "Digital Arts",
      "Sculpture",
      "Painting",
      "Printmaking",
      "Photography",
    ]
  },
  {
    id: "usc-rossier",
    name: "Rossier School of Education",
    abbreviation: "Rossier",
    majors: [
      "Education",
      "Teaching",
      "School Leadership",
      "Higher Education Administration",
      "Educational Psychology",
      "Curriculum and Instruction",
      "Learning Design and Technologies",
    ]
  },
  {
    id: "usc-gerontology",
    name: "Leonard Davis School of Gerontology",
    abbreviation: "Gerontology",
    majors: [
      "Gerontology",
      "Applied Gerontology",
      "Geriatric Medicine",
    ]
  },
  {
    id: "usc-keck",
    name: "Keck School of Medicine",
    abbreviation: "Keck Medicine",
    majors: [
      "Medicine",
      "Biomedical Sciences",
      "Clinical Research",
      "Molecular Pharmacology",
      "Pathology",
    ]
  },
  {
    id: "usc-law",
    name: "Gould School of Law",
    abbreviation: "Law",
    majors: [
      "Juris Doctor",
      "Corporate Law",
      "Environmental Law",
      "Entertainment Law",
      "International Law",
      "Public Interest Law",
    ]
  },
  {
    id: "usc-dentistry",
    name: "School of Dentistry",
    abbreviation: "Dentistry",
    majors: [
      "Doctor of Dental Medicine",
      "Dental Hygiene",
      "Prosthodontics",
      "Orthodontics",
      "Periodontics",
      "Oral Surgery",
    ]
  },
  {
    id: "usc-price",
    name: "Sol Price School of Public Policy",
    abbreviation: "Price",
    majors: [
      "Public Administration",
      "Public Policy",
      "Urban Planning",
      "Public Affairs",
      "Policy Analysis",
      "Environmental Policy",
    ]
  },
];

// UCLA SCHOOLS AND MAJORS
export const UCLA_SCHOOLS: USCSchool[] = [
  {
    id: "ucla-engineering",
    name: "Henry Samueli School of Engineering and Applied Science",
    abbreviation: "Engineering",
    majors: [
      "Aerospace Engineering",
      "Bioengineering",
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Engineering",
      "Computer Science",
      "Electrical Engineering",
      "Environmental Engineering",
      "Materials Engineering",
      "Mechanical Engineering",
      "Data Science",
    ]
  },
  {
    id: "ucla-anderson",
    name: "Anderson School of Management",
    abbreviation: "Anderson",
    majors: [
      "Business Administration",
      "Accounting",
      "Finance",
      "Marketing",
      "Management",
      "International Business",
      "Entrepreneurship",
      "Management Information Systems",
    ]
  },
  {
    id: "ucla-communications",
    name: "School of the Arts and Architecture",
    abbreviation: "Arts & Architecture",
    majors: [
      "Architecture",
      "Film & Television",
      "Theater",
      "Dance",
      "Interactive Media & Games",
      "Art",
      "Design Media Arts",
      "Urban Design",
    ]
  },
  {
    id: "ucla-college",
    name: "UCLA College of Letters and Science",
    abbreviation: "College L&S",
    majors: [
      "African American Studies",
      "American Studies",
      "Anthropology",
      "Applied Mathematics",
      "Art History",
      "Astronomy",
      "Astrophysics",
      "Atmospheric Sciences",
      "Biochemistry",
      "Biology",
      "Chemistry",
      "Chicana & Chicano Studies",
      "Classical Civilization",
      "Classics",
      "Cognitive Science",
      "Dance",
      "East Asian Studies",
      "Ecology & Evolutionary Biology",
      "Economics",
      "English",
      "Environmental Science",
      "European Studies",
      "Ethnomusicology",
      "French",
      "Geography",
      "Geology",
      "German",
      "Global Studies",
      "Greek",
      "History",
      "History of Science",
      "Italian",
      "Japanese",
      "Linguistics",
      "Mathematics",
      "Microbiology, Immunology & Molecular Genetics",
      "Middle Eastern Studies",
      "Molecular, Cell & Developmental Biology",
      "Music",
      "Music History",
      "Neuroscience",
      "Philosophy",
      "Physics",
      "Planetary Sciences",
      "Political Science",
      "Portuguese",
      "Psychology",
      "Religious Studies",
      "Russian",
      "Scandinavian Studies",
      "Sociology",
      "Spanish",
      "Statistics",
      "Theater",
      "Women's Studies",
    ]
  },
  {
    id: "ucla-education",
    name: "Graduate School of Education and Information Studies",
    abbreviation: "Education",
    majors: [
      "Education",
      "Teaching & Learning",
      "Educational Leadership",
      "Library & Information Science",
      "Information Systems Management",
      "Learning Analytics",
    ]
  },
  {
    id: "ucla-law",
    name: "School of Law",
    abbreviation: "Law",
    majors: [
      "Juris Doctor",
      "Entertainment Law",
      "Environmental Law",
      "International Law",
      "Public Interest Law",
      "Tax Law",
    ]
  },
  {
    id: "ucla-medicine",
    name: "David Geffen School of Medicine",
    abbreviation: "Medicine",
    majors: [
      "Medicine",
      "Biomedical Sciences",
      "Molecular & Medical Pharmacology",
      "Pathology & Laboratory Medicine",
      "Neurobiology",
    ]
  },
  {
    id: "ucla-nursing",
    name: "School of Nursing",
    abbreviation: "Nursing",
    majors: [
      "Nursing",
      "Registered Nursing (RN)",
      "Nursing Science",
      "Clinical Nursing Leadership",
    ]
  },
  {
    id: "ucla-publicaffairs",
    name: "Luskin School of Public Affairs",
    abbreviation: "Public Affairs",
    majors: [
      "Public Policy & Management",
      "Urban Planning",
      "Public Administration",
      "Social Welfare",
      "Community Development",
    ]
  },
  {
    id: "ucla-dentistry",
    name: "School of Dentistry",
    abbreviation: "Dentistry",
    majors: [
      "Doctor of Dental Medicine",
      "Dental Hygiene",
      "Advanced General Dentistry",
      "Orthodontics",
      "Periodontics",
    ]
  },
];

// UNIVERSITY CONFIGURATIONS WITH BRANDING
export const UNIVERSITIES: UniversityData[] = [
  {
    id: "usc",
    name: "University of Southern California",
    emailDomain: "@usc.edu",
    colors: {
      primary: "#cc0000", // USC Cardinal Red
      secondary: "#ffb81c", // USC Gold
      accent: "#ffffff", // White
    },
    schools: USC_SCHOOLS,
  },
  {
    id: "ucla",
    name: "University of California, Los Angeles",
    emailDomain: "@ucla.edu",
    colors: {
      primary: "#2e5090", // UCLA Blue
      secondary: "#ffc52f", // UCLA Gold
      accent: "#ffffff", // White
    },
    schools: UCLA_SCHOOLS,
  },
];

export const DEGREE_OPTIONS = [
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Professional Degree (MD, JD, DDS, DPT)",
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
    id: "research",
    name: "Research Project",
    description: "Academic or independent research",
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

// Helper functions
export const getUniversityFromEmail = (email: string): UniversityData | null => {
  return UNIVERSITIES.find(uni => email.includes(uni.emailDomain)) || null;
};

export const searchSchools = (query: string, universityId: string): USCSchool[] => {
  const university = UNIVERSITIES.find(u => u.id === universityId);
  if (!university) return [];
  
  if (!query.trim()) return university.schools;
  
  const lowerQuery = query.toLowerCase();
  return university.schools.filter(school =>
    school.name.toLowerCase().includes(lowerQuery) ||
    school.abbreviation.toLowerCase().includes(lowerQuery)
  );
};

export const getMajorsForSchool = (schoolId: string, universityId: string): string[] => {
  const university = UNIVERSITIES.find(u => u.id === universityId);
  if (!university) return [];
  
  const school = university.schools.find(s => s.id === schoolId);
  return school?.majors || [];
};

export const getUniversityById = (universityId: string): UniversityData | null => {
  return UNIVERSITIES.find(u => u.id === universityId) || null;
};
