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
  // Optional: only the "detailed" universities (USC/UCLA) ship a full school +
  // major catalog. Curated brand-only schools (see SCHOOL_BRANDS) omit this.
  schools?: USCSchool[];
}

// Lightweight brand record for schools we theme by email domain but don't (yet)
// have a full school/major catalog for. Used purely to switch the color palette.
export interface SchoolBrand {
  id: string;
  name: string;
  emailDomain: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

// USC SCHOOLS AND MAJORS
export const USC_SCHOOLS: USCSchool[] = [
  {
    id: "usc-dornsife",
    name: "USC Dornsife College of Letters, Arts and Sciences",
    abbreviation: "Dornsife",
    majors: [
      "American Studies and Ethnicity",
      "Anthropology",
      "Archaeology",
      "Art History",
      "Astronomy",
      "Biochemistry",
      "Biological Sciences",
      "Biophysics",
      "Chemistry",
      "Classics",
      "Cognitive Science",
      "Comparative Literature",
      "Computational Neuroscience",
      "Earth Sciences",
      "East Asian Languages and Cultures",
      "Economics",
      "English",
      "Environmental Studies",
      "French",
      "Gender and Sexuality Studies",
      "Geographic Information Science and Technology",
      "Geology",
      "Global Studies",
      "Health and Human Sciences",
      "History",
      "Human Biology",
      "Human Security and Geospatial Intelligence",
      "International Relations",
      "Italian",
      "Japanese",
      "Latin American and Iberian Cultures",
      "Linguistics",
      "Mathematics",
      "Middle East Studies",
      "Neuroscience",
      "Philosophy",
      "Physics",
      "Political Science",
      "Psychology",
      "Quantitative Biology",
      "Religion",
      "Sociology",
      "Spanish",
      "Spatial Sciences",
      "Thematic Option",
    ]
  },
  {
    id: "usc-marshall",
    name: "USC Marshall School of Business",
    abbreviation: "Marshall",
    majors: [
      "Accounting",
      "Business Administration",
      "Business Administration (Cinematic Arts)",
      "Business Administration (International Relations)",
      "Business Administration (Real Estate Finance)",
      "Business Analytics",
      "Business Taxation",
      "Entrepreneurship and Innovation",
      "Finance",
      "Food Industry Leadership",
      "Global Supply Chain Management",
      "Human Resources Management",
      "Library and Information Science",
      "Management and Organization",
      "Marketing",
      "Social Entrepreneurship",
      "Strategy",
    ]
  },
  {
    id: "usc-viterbi",
    name: "USC Viterbi School of Engineering",
    abbreviation: "Viterbi",
    majors: [
      "Aerospace Engineering",
      "Applied Data Science",
      "Astronautical Engineering",
      "Biomedical Engineering",
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Engineering",
      "Computer Science",
      "Computer Science (Games)",
      "Cyber Security Engineering",
      "Electrical Engineering",
      "Environmental Engineering",
      "Financial Engineering",
      "Green Technologies",
      "Industrial and Systems Engineering",
      "Mechanical Engineering",
      "Petroleum Engineering",
      "Product Development Engineering",
      "Systems Architecting and Engineering",
    ]
  },
  {
    id: "usc-annenberg",
    name: "USC Annenberg School for Communication and Journalism",
    abbreviation: "Annenberg",
    majors: [
      "Communication",
      "Communication Data Science",
      "Communication Management",
      "Digital Media Management",
      "Digital Social Media",
      "Global Communication",
      "Journalism",
      "Public Diplomacy",
      "Public Relations",
      "Public Relations Innovation, Strategy and Management",
      "Strategic Public Relations",
    ]
  },
  {
    id: "usc-sca",
    name: "USC School of Cinematic Arts",
    abbreviation: "SCA",
    majors: [
      "Animation and Digital Arts",
      "Cinema and Media Studies",
      "Film and Television Production",
      "Interactive Media and Games",
      "Media Arts and Practice",
      "Producing",
      "Writing for Screen and Television",
    ]
  },
  {
    id: "usc-roski",
    name: "USC Roski School of Art and Design",
    abbreviation: "Roski",
    majors: [
      "Art",
      "Curatorial Practices and the Public Sphere",
      "Design",
      "Fine Arts",
    ]
  },
  {
    id: "usc-thornton",
    name: "USC Thornton School of Music",
    abbreviation: "Thornton",
    majors: [
      "Arts Leadership",
      "Choral Music",
      "Classical Guitar",
      "Composition",
      "Early Music",
      "Jazz Studies",
      "Music Industry",
      "Music Production",
      "Music Teaching and Learning",
      "Musicology",
      "Organ",
      "Piano",
      "Popular Music Performance",
      "Screen Scoring",
      "Strings",
      "Vocal Arts",
      "Winds and Percussion",
    ]
  },
  {
    id: "usc-architecture",
    name: "USC School of Architecture",
    abbreviation: "Architecture",
    majors: [
      "Architecture",
      "Building Science",
      "Heritage Conservation",
      "Landscape Architecture",
    ]
  },
  {
    id: "usc-iovine-young",
    name: "USC Iovine and Young Academy",
    abbreviation: "Iovine & Young",
    majors: [
      "Arts, Technology and the Business of Innovation",
      "Integrated Design, Business and Technology",
      "Product Innovation",
    ]
  },
  {
    id: "usc-kaufman",
    name: "USC Glorya Kaufman School of Dance",
    abbreviation: "Kaufman",
    majors: [
      "Dance",
      "Choreography",
    ]
  },
  {
    id: "usc-drama",
    name: "USC School of Dramatic Arts",
    abbreviation: "Dramatic Arts",
    majors: [
      "Acting",
      "Applied Theatre Arts",
      "Design",
      "Dramatic Writing",
      "Production",
      "Sound Design",
      "Stage Management",
      "Technical Direction",
      "Visual and Performing Arts Studies",
    ]
  },
  {
    id: "usc-law",
    name: "USC Gould School of Law",
    abbreviation: "Gould Law",
    majors: [
      "Business Law",
      "Compliance",
      "Entertainment Law and Industry",
      "Health Care Compliance",
      "Human Resources Law",
      "International Trade Law and Economics",
      "Law (JD)",
      "Master of Laws (LLM)",
      "Privacy Law and Cybersecurity",
    ]
  },
  {
    id: "usc-medicine",
    name: "Keck School of Medicine of USC",
    abbreviation: "Keck Medicine",
    majors: [
      "Biochemistry and Molecular Medicine",
      "Global Medicine",
      "Health Promotion and Disease Prevention Studies",
      "Medicine (MD)",
      "Molecular Microbiology and Immunology",
      "Neurobiology",
      "Pain Medicine",
      "Pathology",
      "Physician Assistant Practice",
      "Public Health",
      "Stem Cell Biology and Regenerative Medicine",
      "Translational Biomedical Informatics",
    ]
  },
  {
    id: "usc-pharmacy",
    name: "USC Alfred E. Mann School of Pharmacy and Pharmaceutical Sciences",
    abbreviation: "Mann Pharmacy",
    majors: [
      "Biopharmaceutical Marketing",
      "Clinical and Experimental Therapeutics",
      "Health Economics",
      "Healthcare Decision Analysis",
      "Management of Drug Development",
      "Medical Product Quality",
      "Pharmaceutical Sciences",
      "Pharmacology and Drug Development",
      "Pharmacy (PharmD)",
      "Regulatory Science",
    ]
  },
  {
    id: "usc-socialwork",
    name: "USC Suzanne Dworak-Peck School of Social Work",
    abbreviation: "Social Work",
    majors: [
      "Nursing",
      "Social Work (MSW)",
      "Social Work (DSW)",
      "Social Change and Innovation",
    ]
  },
  {
    id: "usc-rossier",
    name: "USC Rossier School of Education",
    abbreviation: "Rossier",
    majors: [
      "Educational Counseling",
      "Educational Leadership",
      "Enrollment Management and Policy",
      "Learning Design and Technology",
      "Organizational Change and Leadership",
      "School Counseling",
      "School Leadership",
      "Teaching (MAT)",
      "Teaching English to Speakers of Other Languages (TESOL)",
    ]
  },
  {
    id: "usc-price",
    name: "USC Sol Price School of Public Policy",
    abbreviation: "Price",
    majors: [
      "Health Administration",
      "Nonprofit Leadership and Management",
      "Public Administration",
      "Public Policy",
      "Real Estate Development",
      "Urban Planning",
    ]
  },
  {
    id: "usc-gerontology",
    name: "USC Leonard Davis School of Gerontology",
    abbreviation: "Gerontology",
    majors: [
      "Aging Services Management",
      "Gerontology",
      "Lifespan Health",
      "Long Term Care Administration",
      "Medical Gerontology",
      "Nutrition, Healthspan and Longevity",
      "Senior Living Hospitality",
    ]
  },
  {
    id: "usc-dentistry",
    name: "Herman Ostrow School of Dentistry of USC",
    abbreviation: "Ostrow Dentistry",
    majors: [
      "Community Oral Health",
      "Dental Hygiene",
      "Dentistry (DDS)",
      "Geriatric Dentistry",
      "Orofacial Pain and Oral Medicine",
    ]
  },
  {
    id: "usc-biokinesiology",
    name: "USC Division of Biokinesiology and Physical Therapy",
    abbreviation: "Biokinesiology & PT",
    majors: [
      "Biokinesiology",
      "Physical Therapy (DPT)",
    ]
  },
  {
    id: "usc-ot",
    name: "USC Chan Division of Occupational Science and Occupational Therapy",
    abbreviation: "Occupational Therapy",
    majors: [
      "Occupational Science",
      "Occupational Therapy",
    ]
  },
  {
    id: "usc-bovard",
    name: "USC Bovard College",
    abbreviation: "Bovard",
    majors: [
      "Criminal Justice",
      "Hospitality and Tourism",
      "Human Resource Management",
      "Project Management",
    ]
  }
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
      "Social Welfare",
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
      primary: "#990000", // USC Cardinal Red
      secondary: "#FFC72C", // USC Gold
      accent: "#ffffff", // White
    },
    schools: USC_SCHOOLS,
  },
  {
    id: "ucla",
    name: "University of California, Los Angeles",
    emailDomain: "@ucla.edu",
    colors: {
      primary: "#2D68C4", // UCLA Blue
      secondary: "#F2A900", // UCLA Gold
      accent: "#ffffff", // White
    },
    schools: UCLA_SCHOOLS,
  },
];

// Curated brand colors for additional universities. These theme the app (via the
// --primary CSS variable) when a student signs up with a recognized email domain.
// Any domain not listed here (and not in UNIVERSITIES) falls back to the default
// Hey Maple palette. Primary is the school's most recognizable brand color;
// secondary is informational for now (the theme only consumes primary).
export const SCHOOL_BRANDS: SchoolBrand[] = [
  { id: "umich", name: "University of Michigan", emailDomain: "@umich.edu", colors: { primary: "#00274C", secondary: "#FFCB05" } },
  { id: "berkeley", name: "UC Berkeley", emailDomain: "@berkeley.edu", colors: { primary: "#003262", secondary: "#FDB515" } },
  { id: "stanford", name: "Stanford University", emailDomain: "@stanford.edu", colors: { primary: "#8C1515", secondary: "#2E2D29" } },
  { id: "harvard", name: "Harvard University", emailDomain: "@harvard.edu", colors: { primary: "#A51C30", secondary: "#1E1E1E" } },
  { id: "mit", name: "MIT", emailDomain: "@mit.edu", colors: { primary: "#A31F34", secondary: "#8A8B8C" } },
  { id: "yale", name: "Yale University", emailDomain: "@yale.edu", colors: { primary: "#00356B", secondary: "#BD5319" } },
  { id: "princeton", name: "Princeton University", emailDomain: "@princeton.edu", colors: { primary: "#E77500", secondary: "#000000" } },
  { id: "columbia", name: "Columbia University", emailDomain: "@columbia.edu", colors: { primary: "#1D4F91", secondary: "#B9D9EB" } },
  { id: "cornell", name: "Cornell University", emailDomain: "@cornell.edu", colors: { primary: "#B31B1B", secondary: "#222222" } },
  { id: "upenn", name: "University of Pennsylvania", emailDomain: "@upenn.edu", colors: { primary: "#011F5B", secondary: "#990000" } },
  { id: "brown", name: "Brown University", emailDomain: "@brown.edu", colors: { primary: "#4E3629", secondary: "#ED1C24" } },
  { id: "dartmouth", name: "Dartmouth College", emailDomain: "@dartmouth.edu", colors: { primary: "#00693E", secondary: "#12312B" } },
  { id: "duke", name: "Duke University", emailDomain: "@duke.edu", colors: { primary: "#00539B", secondary: "#012169" } },
  { id: "northwestern", name: "Northwestern University", emailDomain: "@northwestern.edu", colors: { primary: "#4E2A84", secondary: "#716C6B" } },
  { id: "nyu", name: "New York University", emailDomain: "@nyu.edu", colors: { primary: "#57068C", secondary: "#000000" } },
  { id: "utexas", name: "University of Texas at Austin", emailDomain: "@utexas.edu", colors: { primary: "#BF5700", secondary: "#333F48" } },
  { id: "tamu", name: "Texas A&M University", emailDomain: "@tamu.edu", colors: { primary: "#500000", secondary: "#5B6236" } },
  { id: "ufl", name: "University of Florida", emailDomain: "@ufl.edu", colors: { primary: "#0021A5", secondary: "#FA4616" } },
  { id: "uga", name: "University of Georgia", emailDomain: "@uga.edu", colors: { primary: "#BA0C2F", secondary: "#000000" } },
  { id: "osu", name: "Ohio State University", emailDomain: "@osu.edu", colors: { primary: "#BB0000", secondary: "#666666" } },
  { id: "psu", name: "Penn State University", emailDomain: "@psu.edu", colors: { primary: "#041E42", secondary: "#1E407C" } },
  { id: "wisc", name: "University of Wisconsin–Madison", emailDomain: "@wisc.edu", colors: { primary: "#C5050C", secondary: "#333333" } },
  { id: "uw", name: "University of Washington", emailDomain: "@uw.edu", colors: { primary: "#4B2E83", secondary: "#85754D" } },
  { id: "uoregon", name: "University of Oregon", emailDomain: "@uoregon.edu", colors: { primary: "#154733", secondary: "#FEE123" } },
  { id: "asu", name: "Arizona State University", emailDomain: "@asu.edu", colors: { primary: "#8C1D40", secondary: "#FFC627" } },
  { id: "arizona", name: "University of Arizona", emailDomain: "@arizona.edu", colors: { primary: "#AB0520", secondary: "#0C234B" } },
  { id: "nd", name: "University of Notre Dame", emailDomain: "@nd.edu", colors: { primary: "#0C2340", secondary: "#C99700" } },
  { id: "umn", name: "University of Minnesota", emailDomain: "@umn.edu", colors: { primary: "#7A0019", secondary: "#FFCC33" } },
  { id: "illinois", name: "University of Illinois Urbana-Champaign", emailDomain: "@illinois.edu", colors: { primary: "#13294B", secondary: "#E84A27" } },
  { id: "purdue", name: "Purdue University", emailDomain: "@purdue.edu", colors: { primary: "#000000", secondary: "#CEB888" } },
  { id: "msu", name: "Michigan State University", emailDomain: "@msu.edu", colors: { primary: "#18453B", secondary: "#97A1A9" } },
  { id: "unc", name: "University of North Carolina", emailDomain: "@unc.edu", colors: { primary: "#13294B", secondary: "#4B9CD3" } },
  { id: "virginia", name: "University of Virginia", emailDomain: "@virginia.edu", colors: { primary: "#232D4B", secondary: "#E57200" } },
  { id: "gatech", name: "Georgia Institute of Technology", emailDomain: "@gatech.edu", colors: { primary: "#003057", secondary: "#B3A369" } },
  { id: "miami", name: "University of Miami", emailDomain: "@miami.edu", colors: { primary: "#005030", secondary: "#F47321" } },
  { id: "bu", name: "Boston University", emailDomain: "@bu.edu", colors: { primary: "#CC0000", secondary: "#000000" } },
  { id: "rutgers", name: "Rutgers University", emailDomain: "@rutgers.edu", colors: { primary: "#CC0033", secondary: "#000000" } },
  { id: "umd", name: "University of Maryland", emailDomain: "@umd.edu", colors: { primary: "#E21833", secondary: "#FFD200" } },
];

export const DEGREE_OPTIONS = [
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Professional Degree (MD, JD, DDS, DPT, PharmD, DSW)",
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
    description: "Designing and testing an educational intervention",
    level: "Graduate",
    category: "Education-Specific Projects"
  }
];

export const GRADUATION_YEARS = [
  2024, 2025, 2026, 2027, 2028, 2029, 2030
];

// Helper function to get majors for a school
export function getMajorsForSchool(schoolId: string, universityId: string): string[] {
  const university = UNIVERSITIES.find(u => u.id === universityId);
  if (!university) return [];

  const school = university.schools?.find(s => s.id === schoolId);
  return school ? school.majors.sort() : [];
}

// Helper function to find university from email.
// Checks the detailed universities first (USC/UCLA, with full catalogs), then the
// curated brand-only list. Returns undefined for any unrecognized domain, which
// causes the theme to fall back to the default Hey Maple palette.
export function getUniversityFromEmail(email: string): UniversityData | undefined {
  if (!email || !email.includes("@")) return undefined;
  const domain = email.slice(email.lastIndexOf("@")).toLowerCase();

  const detailed = UNIVERSITIES.find(u => u.emailDomain.toLowerCase() === domain);
  if (detailed) return detailed;

  const brand = SCHOOL_BRANDS.find(b => b.emailDomain.toLowerCase() === domain);
  if (brand) {
    return {
      id: brand.id,
      name: brand.name,
      emailDomain: brand.emailDomain,
      colors: { ...brand.colors, accent: "#ffffff" },
    };
  }

  return undefined;
}

export function searchSchools(query: string, universityId: string): USCSchool[] {
  const university = UNIVERSITIES.find(u => u.id === universityId);
  const schools = university?.schools ?? [];

  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return schools;

  return schools.filter(school =>
    school.name.toLowerCase().includes(lowerQuery) ||
    school.abbreviation.toLowerCase().includes(lowerQuery)
  );
}
