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
  // 1. Research-Based Projects
  {
    id: "ug-research",
    name: "Undergraduate Research Project",
    description: "Independent or faculty-supervised study",
    level: "Undergraduate",
    category: "Research-Based Projects"
  },
  {
    id: "ug-senior-thesis",
    name: "Senior Thesis",
    description: "Long-form academic research paper",
    level: "Undergraduate",
    category: "Research-Based Projects"
  },
  {
    id: "grad-thesis",
    name: "Master's Thesis",
    description: "Research-based, original academic contribution",
    level: "Graduate",
    category: "Research-Based Projects"
  },
  {
    id: "grad-dissertation",
    name: "PhD Dissertation",
    description: "Large-scale, original research advancing a field",
    level: "Graduate",
    category: "Research-Based Projects"
  },
  {
    id: "grad-action-research",
    name: "Action Research Project",
    description: "Especially in education and organizational leadership programs",
    level: "Graduate",
    category: "Research-Based Projects"
  },
  {
    id: "grad-arp",
    name: "Applied Research Project (ARP)",
    description: "Common in public admin, education, social work",
    level: "Graduate",
    category: "Research-Based Projects"
  },
  {
    id: "grad-field-research",
    name: "Field Research / Fieldwork Report",
    description: "Anthropology, environmental science, journalism",
    level: "Graduate",
    category: "Research-Based Projects"
  },
  {
    id: "grad-lab-research",
    name: "Lab-Based Research Project",
    description: "STEM and biomedical fields",
    level: "Graduate",
    category: "Research-Based Projects"
  },
  {
    id: "grad-case-study",
    name: "Case Study Analysis",
    description: "MBA, MPA, policy, and applied social sciences",
    level: "Graduate",
    category: "Research-Based Projects"
  },
  {
    id: "grad-policy-analysis",
    name: "Policy Analysis Project",
    description: "Public policy and social science programs",
    level: "Graduate",
    category: "Research-Based Projects"
  },
  {
    id: "grad-qualifying-exam",
    name: "Qualifying Exam (Doctoral)",
    description: "Doctoral-level test required before dissertation research",
    level: "Graduate",
    category: "Research-Based Projects"
  },
  {
    id: "comprehensive-exam",
    name: "Comprehensive Exam",
    description: "Used in some majors instead of a project",
    level: "All",
    category: "Research-Based Projects"
  },

  // 2. Applied / Professional Projects
  {
    id: "ug-capstone",
    name: "Undergraduate Capstone",
    description: "Applied, practical, or research-based final project",
    level: "Undergraduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "grad-capstone",
    name: "Graduate Capstone",
    description: "Applied professional project demonstrating mastery",
    level: "Graduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "ug-senior-project",
    name: "Senior Project (Applied)",
    description: "Creative or professional project (film, design, engineering build, etc.)",
    level: "Undergraduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "ug-applied-project",
    name: "Applied Project (Problem-Solving)",
    description: "Solving a real-world problem for an organization or industry partner",
    level: "Undergraduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "grad-professional",
    name: "Professional Project (Industry Deliverable)",
    description: "Industry-oriented deliverable (business plan, campaign, product build)",
    level: "Graduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "grad-product-prototype",
    name: "Product Prototype + Documentation",
    description: "Engineering, HCI, design, media innovation",
    level: "Graduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "grad-studio-project",
    name: "Studio Project",
    description: "Architecture, urban planning, fine arts",
    level: "Graduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "grad-residency",
    name: "Residency Project",
    description: "Medicine, PA, NP, and some arts MFA programs",
    level: "Graduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "grad-clinical",
    name: "Clinical Practicum",
    description: "Required in counseling, psychology, social work, medical fields",
    level: "Graduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "grad-teaching-practicum",
    name: "Teaching Practicum",
    description: "Required for doctoral candidates who teach",
    level: "Graduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "ug-practicum",
    name: "Practicum (non-clinical)",
    description: "Hands-on professional experience with reflective analysis",
    level: "Undergraduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "ug-internship",
    name: "Internship + Final Report",
    description: "Work placement combined with a written evaluation or presentation",
    level: "Undergraduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "grad-internship-analysis",
    name: "Internship + Graduate-Level Analysis",
    description: "Required for MBA, MPP, MPA, etc.",
    level: "Graduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "ug-service-learning",
    name: "Service-Learning Project",
    description: "Community-based project with academic integration",
    level: "Undergraduate",
    category: "Applied / Professional Projects"
  },
  {
    id: "ug-design",
    name: "Design Project",
    description: "Engineering, architecture, UX, product design",
    level: "Undergraduate",
    category: "Applied / Professional Projects"
  },

  // 3. Creative / Performance Projects
  {
    id: "ug-performance",
    name: "Performance or Production Project",
    description: "Theater, film, dance, music programs",
    level: "Undergraduate",
    category: "Creative / Performance Projects"
  },
  {
    id: "grad-creative-dissertation",
    name: "Creative Dissertation",
    description: "MFA programs (novel, screenplay, poetry collection)",
    level: "Graduate",
    category: "Creative / Performance Projects"
  },
  {
    id: "studio-art",
    name: "Studio Art Project",
    description: "Fine arts, sculpture, painting, etc.",
    level: "All",
    category: "Creative / Performance Projects"
  },
  {
    id: "media-production",
    name: "Media Production Project",
    description: "Film, digital media, multimedia",
    level: "All",
    category: "Creative / Performance Projects"
  },
  {
    id: "ug-portfolio",
    name: "Portfolio (Undergrad)",
    description: "Collection of work demonstrating competency (arts, design, communications)",
    level: "Undergraduate",
    category: "Creative / Performance Projects"
  },
  {
    id: "grad-portfolio",
    name: "Graduate Portfolio (MFA, MEd, Design)",
    description: "Curated body of advanced work; common in arts, design, education",
    level: "Graduate",
    category: "Creative / Performance Projects"
  },

  // 4. Collaborative / Team-Based Projects
  {
    id: "ug-group-project",
    name: "Group/Team Project",
    description: "Collaborative project often tied to a capstone course",
    level: "All",
    category: "Collaborative / Team-Based Projects"
  },
  {
    id: "multi-disciplinary-capstone",
    name: "Multi-Disciplinary Capstone",
    description: "Project involving students from different majors",
    level: "All",
    category: "Collaborative / Team-Based Projects"
  },
  {
    id: "industry-partner",
    name: "Industry Partner Project",
    description: "Project sponsored by an external company or organization",
    level: "All",
    category: "Collaborative / Team-Based Projects"
  },
  {
    id: "design-sprint",
    name: "Cross-Functional Design Sprint",
    description: "Intensive, time-boxed design challenge",
    level: "All",
    category: "Collaborative / Team-Based Projects"
  },
  {
    id: "grad-symposium",
    name: "Roundtable or Symposium Presentation",
    description: "Required in some professional programs",
    level: "Graduate",
    category: "Collaborative / Team-Based Projects"
  },

  // 5. Clinical, Medical, and Licensing-Track Projects
  {
    id: "ug-clinical",
    name: "Clinical Experience",
    description: "Required in fields like nursing, education, counseling",
    level: "Undergraduate",
    category: "Clinical, Medical, and Licensing-Track Projects"
  },
  {
    id: "supervised-hours",
    name: "Supervised Hours Documentation",
    description: "Tracking hours for licensure",
    level: "Graduate",
    category: "Clinical, Medical, and Licensing-Track Projects"
  },
  {
    id: "case-formulation",
    name: "Case Formulation",
    description: "Psychology and counseling case analysis",
    level: "Graduate",
    category: "Clinical, Medical, and Licensing-Track Projects"
  },
  {
    id: "treatment-plan",
    name: "Treatment Plan & Outcome Study",
    description: "Behavioral health intervention and assessment",
    level: "Graduate",
    category: "Clinical, Medical, and Licensing-Track Projects"
  },

  // 6. Education-Specific Projects
  {
    id: "student-teaching",
    name: "Teaching Practicum / Student Teaching",
    description: "Classroom teaching experience",
    level: "All",
    category: "Education-Specific Projects"
  },
  {
    id: "curriculum-design",
    name: "Curriculum Design Project",
    description: "Developing educational materials and plans",
    level: "All",
    category: "Education-Specific Projects"
  },
  {
    id: "learning-assessment",
    name: "Learning Assessment Study",
    description: "Evaluating student learning outcomes",
    level: "All",
    category: "Education-Specific Projects"
  },
  {
    id: "educational-intervention",
    name: "Educational Intervention Project",
    description: "Implementing and testing an educational strategy",
    level: "All",
    category: "Education-Specific Projects"
  },

  // 7. Policy, Social Science, and Public Administration Projects
  {
    id: "program-evaluation",
    name: "Program Evaluation Report",
    description: "Assessing the effectiveness of a program",
    level: "Graduate",
    category: "Policy, Social Science, and Public Administration Projects"
  },
  {
    id: "community-field-study",
    name: "Community-Based Field Study",
    description: "Research conducted within a community setting",
    level: "All",
    category: "Policy, Social Science, and Public Administration Projects"
  },
  {
    id: "public-management-capstone",
    name: "Public Management Capstone",
    description: "Capstone for MPA/MPP programs",
    level: "Graduate",
    category: "Policy, Social Science, and Public Administration Projects"
  },
  {
    id: "social-impact-assessment",
    name: "Social Impact Assessment",
    description: "Evaluating the social effects of a project or policy",
    level: "All",
    category: "Policy, Social Science, and Public Administration Projects"
  },

  // 8. STEM-Specific Projects
  {
    id: "engineering-capstone",
    name: "Engineering Capstone",
    description: "Major design experience for engineering students",
    level: "Undergraduate",
    category: "STEM-Specific Projects"
  },
  {
    id: "senior-design",
    name: "Senior Design Project",
    description: "Culminating design project for engineering/tech majors",
    level: "Undergraduate",
    category: "STEM-Specific Projects"
  },
  {
    id: "prototype-build",
    name: "Prototype Build + Technical Report",
    description: "Creating a physical or digital prototype with documentation",
    level: "All",
    category: "STEM-Specific Projects"
  },
  {
    id: "stem-fieldwork",
    name: "STEM Fieldwork Study",
    description: "Data collection in the field (biology, geology, etc.)",
    level: "All",
    category: "STEM-Specific Projects"
  },
  {
    id: "data-analysis",
    name: "Data Analysis Project",
    description: "Statistical or computational analysis of data",
    level: "All",
    category: "STEM-Specific Projects"
  },
  {
    id: "computational-model",
    name: "Computational Model Project",
    description: "Simulating systems using computer models",
    level: "All",
    category: "STEM-Specific Projects"
  },

  // 9. Arts, Media, and Creative Technologies Projects
  {
    id: "media-campaign",
    name: "Media Campaign Capstone",
    description: "Strategic media or advertising campaign",
    level: "All",
    category: "Arts, Media, and Creative Technologies Projects"
  },
  {
    id: "interactive-media",
    name: "Interactive Media Prototype",
    description: "Game, app, or interactive installation",
    level: "All",
    category: "Arts, Media, and Creative Technologies Projects"
  },
  {
    id: "art-installation",
    name: "Art Installation / Exhibition",
    description: "Public display of artistic work",
    level: "All",
    category: "Arts, Media, and Creative Technologies Projects"
  },

  // 10. Business, Entrepreneurship, and Communications Projects
  {
    id: "business-plan",
    name: "Business Plan Project",
    description: "Comprehensive plan for a new business venture",
    level: "All",
    category: "Business, Entrepreneurship, and Communications Projects"
  },
  {
    id: "startup-incubator",
    name: "Startup Incubator Capstone",
    description: "Developing a startup within an academic incubator",
    level: "All",
    category: "Business, Entrepreneurship, and Communications Projects"
  },
  {
    id: "market-analysis",
    name: "Market Analysis Project",
    description: "Researching market trends and opportunities",
    level: "All",
    category: "Business, Entrepreneurship, and Communications Projects"
  },
  {
    id: "communications-campaign",
    name: "Communications Campaign",
    description: "Strategic communication plan for a client or cause",
    level: "All",
    category: "Business, Entrepreneurship, and Communications Projects"
  },
  {
    id: "consulting-project",
    name: "Consulting Project (MBA/MPP)",
    description: "Advising a real-world client on a business problem",
    level: "Graduate",
    category: "Business, Entrepreneurship, and Communications Projects"
  },
  {
    id: "entrepreneurship-capstone",
    name: "Entrepreneurship Capstone",
    description: "Launching or pitching a new venture",
    level: "All",
    category: "Business, Entrepreneurship, and Communications Projects"
  },
  {
    id: "brand-strategy",
    name: "Brand or Media Strategy Project",
    description: "Developing a brand identity and strategy",
    level: "All",
    category: "Business, Entrepreneurship, and Communications Projects"
  }
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
