export interface USCSchool {
  id: string;
  name: string;
  abbreviation: string;
  majors: string[];
}

export const USC_SCHOOLS: USCSchool[] = [
  {
    id: "viterbi",
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
    id: "marshall",
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
    id: "annenberg",
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
    id: "dornsife",
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
    id: "sca",
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
    id: "socialwork",
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
    id: "pharmacy",
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
    id: "occupational",
    name: "Chan Division of Occupational Science and Occupational Therapy",
    abbreviation: "OT",
    majors: [
      "Occupational Science",
      "Occupational Therapy",
    ]
  },
  {
    id: "roski",
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
    id: "rossier",
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
    id: "gerontology",
    name: "Leonard Davis School of Gerontology",
    abbreviation: "Gerontology",
    majors: [
      "Gerontology",
      "Applied Gerontology",
      "Geriatric Medicine",
    ]
  },
  {
    id: "keck",
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
    id: "law",
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
    id: "dentistry",
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
    id: "policy",
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

// Helper function for school search
export const searchSchools = (query: string): USCSchool[] => {
  if (!query.trim()) return USC_SCHOOLS;
  
  const lowerQuery = query.toLowerCase();
  return USC_SCHOOLS.filter(school =>
    school.name.toLowerCase().includes(lowerQuery) ||
    school.abbreviation.toLowerCase().includes(lowerQuery)
  );
};

// Helper function to get majors for a school
export const getMajorsForSchool = (schoolId: string): string[] => {
  const school = USC_SCHOOLS.find(s => s.id === schoolId);
  return school?.majors || [];
};
