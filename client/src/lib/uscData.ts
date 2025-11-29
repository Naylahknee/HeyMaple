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
  // Undergraduate-Level Projects
  {
    id: "ug-capstone",
    name: "Capstone Project (Undergrad)",
    description: "Applied, practical, or research-based final project",
    level: "Undergraduate"
  },
  {
    id: "ug-senior-thesis",
    name: "Senior Thesis",
    description: "Long-form academic research paper",
    level: "Undergraduate"
  },
  {
    id: "ug-senior-project",
    name: "Senior Project",
    description: "Creative or professional project (film, design, engineering build, etc.)",
    level: "Undergraduate"
  },
  {
    id: "ug-portfolio",
    name: "Portfolio (Undergrad)",
    description: "Collection of work demonstrating competency (arts, design, communications)",
    level: "Undergraduate"
  },
  {
    id: "ug-practicum",
    name: "Practicum",
    description: "Hands-on professional experience with reflective analysis",
    level: "Undergraduate"
  },
  {
    id: "ug-internship",
    name: "Internship + Final Report",
    description: "Work placement combined with a written evaluation or presentation",
    level: "Undergraduate"
  },
  {
    id: "ug-research",
    name: "Research Project",
    description: "Independent or faculty-supervised study",
    level: "Undergraduate"
  },
  {
    id: "ug-group-project",
    name: "Group/Team Project",
    description: "Collaborative project often tied to a capstone course",
    level: "Undergraduate"
  },
  {
    id: "ug-applied-project",
    name: "Applied Project",
    description: "Solving a real-world problem for an organization or industry partner",
    level: "Undergraduate"
  },
  {
    id: "ug-clinical",
    name: "Clinical Experience",
    description: "Required in fields like nursing, education, counseling",
    level: "Undergraduate"
  },
  {
    id: "ug-fieldwork",
    name: "Field Study/Fieldwork",
    description: "Data collection or observational research done on-site",
    level: "Undergraduate"
  },
  {
    id: "ug-performance",
    name: "Performance or Production Project",
    description: "Theater, film, dance, music programs",
    level: "Undergraduate"
  },
  {
    id: "ug-design",
    name: "Design Project",
    description: "Engineering, architecture, UX, product design",
    level: "Undergraduate"
  },
  {
    id: "ug-service-learning",
    name: "Service-Learning Project",
    description: "Community-based project with academic integration",
    level: "Undergraduate"
  },
  {
    id: "ug-comprehensive-exam",
    name: "Comprehensive Exam (Undergrad)",
    description: "Used in some majors instead of a project",
    level: "Undergraduate"
  },

  // Graduate-Level Projects
  {
    id: "grad-thesis",
    name: "Master's Thesis",
    description: "Research-based, original academic contribution",
    level: "Graduate"
  },
  {
    id: "grad-dissertation",
    name: "PhD Dissertation",
    description: "Large-scale, original research advancing a field",
    level: "Graduate"
  },
  {
    id: "grad-capstone",
    name: "Capstone (Graduate)",
    description: "Applied professional project demonstrating mastery",
    level: "Graduate"
  },
  {
    id: "grad-arp",
    name: "Applied Research Project (ARP)",
    description: "Common in public admin, education, social work",
    level: "Graduate"
  },
  {
    id: "grad-professional",
    name: "Professional Project",
    description: "Industry-oriented deliverable (business plan, campaign, product build)",
    level: "Graduate"
  },
  {
    id: "grad-portfolio",
    name: "Portfolio (Graduate)",
    description: "Curated body of advanced work; common in arts, design, education",
    level: "Graduate"
  },
  {
    id: "grad-clinical",
    name: "Clinical Practicum",
    description: "Required in counseling, psychology, social work, medical fields",
    level: "Graduate"
  },
  {
    id: "grad-residency",
    name: "Residency Project",
    description: "Medicine, PA, NP, and some arts MFA programs",
    level: "Graduate"
  },
  {
    id: "grad-case-study",
    name: "Case Study Analysis",
    description: "MBA, MPA, policy, and applied social sciences",
    level: "Graduate"
  },
  {
    id: "grad-action-research",
    name: "Action Research Project",
    description: "Especially in education and organizational leadership programs",
    level: "Graduate"
  },
  {
    id: "grad-comprehensive-exam",
    name: "Comprehensive Exam (Graduate)",
    description: "Sometimes required instead of or in addition to a thesis",
    level: "Graduate"
  },
  {
    id: "grad-qualifying-exam",
    name: "Qualifying Exam",
    description: "Doctoral-level test required before dissertation research",
    level: "Graduate"
  },
  {
    id: "grad-field-research",
    name: "Field Research / Fieldwork Report",
    description: "Anthropology, environmental science, journalism",
    level: "Graduate"
  },
  {
    id: "grad-creative-dissertation",
    name: "Creative Dissertation",
    description: "MFA programs (novel, screenplay, poetry collection)",
    level: "Graduate"
  },
  {
    id: "grad-studio-project",
    name: "Studio Project",
    description: "Architecture, urban planning, fine arts",
    level: "Graduate"
  },
  {
    id: "grad-lab-research",
    name: "Lab-Based Research Project",
    description: "STEM and biomedical fields",
    level: "Graduate"
  },
  {
    id: "grad-internship-analysis",
    name: "Internship + Graduate-Level Analysis",
    description: "Required for MBA, MPP, MPA, etc.",
    level: "Graduate"
  },
  {
    id: "grad-teaching-practicum",
    name: "Teaching Practicum",
    description: "Required for doctoral candidates who teach",
    level: "Graduate"
  },
  {
    id: "grad-policy-analysis",
    name: "Policy Analysis Project",
    description: "Public policy and social science programs",
    level: "Graduate"
  },
  {
    id: "grad-product-prototype",
    name: "Product Prototype + Documentation",
    description: "Engineering, HCI, design, media innovation",
    level: "Graduate"
  },
  {
    id: "grad-symposium",
    name: "Roundtable or Symposium Presentation",
    description: "Required in some professional programs",
    level: "Graduate"
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
