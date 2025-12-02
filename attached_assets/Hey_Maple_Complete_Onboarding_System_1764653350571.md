# 🍁 Hey Maple: Complete Onboarding & Matching System
## Comprehensive Product Specification Document

---

## Table of Contents
1. [Executive Summary](#executive-summary)
2. [Core Philosophy](#core-philosophy)
3. [Account Type Selection](#account-type-selection)
4. [Student Onboarding Flow](#student-onboarding-flow)
5. [Mentor/Faculty Onboarding Flow](#mentorfaculty-onboarding-flow)
6. [Comprehensive Skills Taxonomy](#comprehensive-skills-taxonomy)
7. [AI Resume Parsing Implementation](#ai-resume-parsing-implementation)
8. [LinkedIn Import Implementation](#linkedin-import-implementation)
9. [Project DNA Framework](#project-dna-framework)
10. [Completion Style Framework](#completion-style-framework)
11. [Matching Algorithm](#matching-algorithm)
12. [Technical Architecture](#technical-architecture)
13. [User Interface Specifications](#user-interface-specifications)

---

## Executive Summary

**Hey Maple** is a student collaboration platform for USC that matches students, faculty, and mentors for project collaboration using:
- **Skills-based matching** (technical + soft skills)
- **Project DNA assessment** (inspired by Jen Kem's Unicorn Team framework)
- **Completion Style profiling** (from Finish That Thing framework)
- **AI-powered resume parsing** for frictionless onboarding
- **Cross-school collaboration** to break down USC's siloed structure

**Unique Value Proposition:**
Unlike Ship Together (global developers) or LinkedIn (professional networking), Hey Maple is purpose-built for USC campus collaboration with personality + completion style matching that ensures teams actually ship.

---

## Core Philosophy

### The Problem We Solve

**Current State:**
- USC has 20+ schools with incredible talent
- Students in Annenberg can't find Viterbi developers
- Marshall students need designers but don't know where to look
- Great ideas die because students can't find compatible collaborators
- Capstone projects fail due to team mismatches

**Hey Maple's Solution:**
1. **Discovery** - Find students with complementary skills across all schools
2. **Compatibility** - Match based on work style + completion patterns
3. **Trust** - @usc.edu verification ensures campus-only community
4. **Mentorship** - Connect with faculty and industry mentors
5. **Completion** - Team dynamics optimized for actually shipping projects

### Design Principles

1. **Reduce Friction** - Onboarding in under 5 minutes
2. **Show Value Fast** - See matches immediately after signup
3. **Build Trust** - Transparent matching with "why you match" explanations
4. **Respect Time** - Students are busy; make every interaction count
5. **Cross-School Magic** - Break down USC's school silos

---

## Account Type Selection

### Initial Landing (Before Onboarding)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    Welcome to Hey Maple! 🍁             │
│                                                         │
│         Find Your Perfect Project Partner at USC        │
│                                                         │
│  Connect with students, faculty, and mentors across     │
│  Marshall, Viterbi, Annenberg, and all USC schools      │
│                                                         │
│                   I am a:                               │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ● USC Student                                  │   │
│  │    Looking to collaborate on projects           │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ Faculty/Professor                            │   │
│  │    Offering mentorship or project advice        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ Industry Mentor                              │   │
│  │    USC alum or professional mentor              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ Graduate Student                             │   │
│  │    Available as mentor or collaborator          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│                  [Continue with USC Google] 🎓          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Logic:**
- Selection determines which onboarding flow to show
- All users authenticate via USC Google OAuth (@usc.edu)
- Account type stored in database for different matching algorithms

---

## Student Onboarding Flow

### Overview
**7 Steps | ~3-4 minutes | Progress bar visible**

```
Step Flow:
1. Basic Info (name, school, major, year)
2. Skills & Experience (with AI import options)
3. Project DNA (Dreamer/Planner/Builder)
4. Completion Style (5 finisher types)
5. Project Goals (what you're looking for)
6. Time & Collaboration (availability + style)
7. Dream Project (personality + icebreaker)
```

---

### STEP 1: Basic Info

```
┌─────────────────────────────────────────────────────────┐
│  Progress: ●○○○○○○  Step 1 of 7                        │
│                                                         │
│              Welcome to Hey Maple! 🍁                   │
│                                                         │
│         Let's start with the basics - tell us who       │
│                      you are                            │
│                                                         │
│  Profile photo is optional but helps others             │
│  recognize you                                          │
│                                                         │
│  ┌─────────────┐                                       │
│  │             │  [Upload Photo]                       │
│  │   [Photo]   │  or [Skip]                            │
│  │             │                                       │
│  └─────────────┘                                       │
│                                                         │
│  Full Name:                                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │ NaLonni Madden                                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  USC Email: (auto-filled from Google OAuth)            │
│  ┌─────────────────────────────────────────────────┐   │
│  │ nalonni@usc.edu                    ✓ Verified   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  School:                                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │ ▼ Annenberg School of Communication             │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Major/Program:                                        │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Digital Media Management                        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Year:                                                 │
│  ○ Freshman  ○ Sophomore  ○ Junior  ● Senior           │
│  ○ Graduate Student                                    │
│                                                         │
│                              [← Previous]  [Next →]    │
└─────────────────────────────────────────────────────────┘
```

**School Dropdown Options:**
- Annenberg School for Communication
- Marshall School of Business
- Viterbi School of Engineering
- Dornsife College of Letters, Arts and Sciences
- Roski School of Art and Design
- School of Cinematic Arts
- Thornton School of Music
- Gould School of Law
- Sol Price School of Public Policy
- Suzanne Dworak-Peck School of Social Work
- Keck School of Medicine
- School of Pharmacy
- School of Dramatic Arts
- School of Architecture
- Bovard College
- Other/Undeclared

---

### STEP 2: Skills & Experience (THE CRITICAL STEP)

```
┌─────────────────────────────────────────────────────────┐
│  Progress: ●●○○○○○  Step 2 of 7                        │
│                                                         │
│             What skills do you bring? 💪                │
│                                                         │
│         Select all that apply (or let AI help!)         │
│                                                         │
│  ⚡ Quick Import Options:                               │
│                                                         │
│  ┌─────────────────────────┐  ┌──────────────────────┐ │
│  │  📄 Upload Resume       │  │  💼 Import LinkedIn  │ │
│  │                         │  │                      │ │
│  │  AI extracts your       │  │  Auto-fill from      │ │
│  │  skills automatically   │  │  your profile        │ │
│  │                         │  │                      │ │
│  │  [Choose File]          │  │  [Connect]           │ │
│  └─────────────────────────┘  └──────────────────────┘ │
│                                                         │
│  OR manually select from categories:                    │
│                                                         │
│  🔍 Search skills...                                   │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [Type to search: "React", "Figma", etc...]      │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Browse by category:                                   │
│                                                         │
│  ▼ 💻 Development & Engineering                        │
│  ▼ 🎨 Design & Creative                                │
│  ▼ 📊 Business & Strategy                              │
│  ▼ 📝 Content & Communications                         │
│  ▼ 🔬 Research & Science                               │
│  ▼ 🎵 Arts & Entertainment                             │
│  ▼ ⚖️ Legal & Policy                                   │
│  ▼ 🏥 Health & Medicine                                │
│  ▼ 🎯 Soft Skills & Leadership                         │
│                                                         │
│  Selected Skills (5):                                  │
│  [React ×] [UI/UX Design ×] [Product Strategy ×]      │
│  [Figma ×] [Project Management ×]                      │
│                                                         │
│  💡 Tip: Select 5-10 skills you're comfortable with    │
│                                                         │
│                              [← Previous]  [Next →]    │
└─────────────────────────────────────────────────────────┘
```

**When Category is Expanded (Example: Development & Engineering):**

```
┌─────────────────────────────────────────────────────────┐
│  ▼ 💻 Development & Engineering                        │
│                                                         │
│  Frontend:                                             │
│  □ React  □ Vue  □ Angular  □ Next.js  □ TypeScript   │
│  □ JavaScript  □ HTML/CSS  □ Tailwind  □ Bootstrap     │
│  □ Svelte  □ jQuery  □ Webpack  □ Vite                │
│                                                         │
│  Backend:                                              │
│  □ Node.js  □ Python  □ Django  □ Flask  □ FastAPI    │
│  □ Ruby on Rails  □ Java  □ Spring Boot  □ PHP         │
│  □ Express.js  □ Go  □ C#  □ .NET  □ Rust             │
│                                                         │
│  Mobile:                                               │
│  □ React Native  □ Swift  □ SwiftUI  □ Kotlin          │
│  □ Flutter  □ iOS Development  □ Android Development   │
│  □ Xamarin  □ Ionic                                    │
│                                                         │
│  Database:                                             │
│  □ PostgreSQL  □ MongoDB  □ MySQL  □ Firebase          │
│  □ Supabase  □ Redis  □ DynamoDB  □ SQL  □ NoSQL      │
│  □ GraphQL  □ Prisma  □ Drizzle ORM                   │
│                                                         │
│  Infrastructure & DevOps:                              │
│  □ AWS  □ Google Cloud  □ Azure  □ Docker              │
│  □ Kubernetes  □ CI/CD  □ DevOps  □ Git                │
│  □ GitHub Actions  □ Jenkins  □ Terraform  □ Vercel    │
│  □ Netlify  □ Linux  □ Nginx                          │
│                                                         │
│  Data & AI:                                            │
│  □ Machine Learning  □ TensorFlow  □ PyTorch           │
│  □ Data Science  □ Pandas  □ NumPy  □ Jupyter          │
│  □ R  □ Data Visualization  □ NLP  □ Computer Vision   │
│  □ Deep Learning  □ Scikit-learn  □ OpenAI API         │
│  □ LangChain  □ Vector Databases  □ RAG                │
│                                                         │
│  Other:                                                │
│  □ API Development  □ REST APIs  □ WebSockets          │
│  □ Microservices  □ Testing  □ Jest  □ Cypress         │
│  □ Blockchain  □ Web3  □ Solidity  □ Smart Contracts   │
│                                                         │
│  [+ Add custom skill not listed]                       │
└─────────────────────────────────────────────────────────┘
```

---

### STEP 3: Project DNA Assessment

```
┌─────────────────────────────────────────────────────────┐
│  Progress: ●●●○○○○  Step 3 of 7                        │
│                                                         │
│         🧬 Discover Your Project DNA                    │
│                                                         │
│    Understanding how you work helps us find the         │
│           perfect collaborators for you                 │
│                                                         │
│  When starting a new project, I naturally...           │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ● 💡 Envision the big picture and get people   │   │
│  │       excited about the possibilities            │   │
│  │                                                  │   │
│  │       The Dreamer - Vision Energy                │   │
│  │                                                  │   │
│  │       You see what could be, inspire others,     │   │
│  │       and define the "why" behind projects       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ 📋 Create a plan and organize the steps      │   │
│  │       needed to succeed                          │   │
│  │                                                  │   │
│  │       The Planner - Strategy Energy              │   │
│  │                                                  │   │
│  │       You break down goals into actionable       │   │
│  │       steps and keep teams organized             │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ 🔨 Jump in and start building or making      │   │
│  │       things happen                              │   │
│  │                                                  │   │
│  │       The Builder - Build Energy                 │   │
│  │                                                  │   │
│  │       You execute, ship, and get things done.    │   │
│  │       Show you what to build and you'll make it  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  💡 There's no right answer - each type is valuable!   │
│                                                         │
│                              [← Previous]  [Next →]    │
└─────────────────────────────────────────────────────────┘
```

**Follow-up Question (Conditional based on selection):**

**If DREAMER selected:**
```
┌─────────────────────────────────────────────────────────┐
│  You're a Dreamer! ✨                                   │
│                                                         │
│  When your project faces challenges, you typically...  │
│                                                         │
│  ○ Pivot to explore a new exciting direction           │
│  ● Step back to analyze the root problem               │
│  ○ Push through and figure it out myself               │
│  ○ Ask for help from others                            │
└─────────────────────────────────────────────────────────┘
```

**If PLANNER selected:**
```
┌─────────────────────────────────────────────────────────┐
│  You're a Planner! 📊                                   │
│                                                         │
│  When working on projects, you prefer...               │
│                                                         │
│  ● Detailed timelines and clear milestones             │
│  ○ Flexible structure with regular check-ins           │
│  ○ Minimal planning - learn as you go                  │
│  ○ Very structured with extensive documentation        │
└─────────────────────────────────────────────────────────┘
```

**If BUILDER selected:**
```
┌─────────────────────────────────────────────────────────┐
│  You're a Builder! 🛠️                                   │
│                                                         │
│  You work best when...                                 │
│                                                         │
│  ● Given clear direction and autonomy to execute       │
│  ○ Collaborating closely on every decision             │
│  ○ Figuring out the vision as you build                │
│  ○ Working with detailed specifications                │
└─────────────────────────────────────────────────────────┘
```

---

### STEP 4: Completion Style Assessment

```
┌─────────────────────────────────────────────────────────┐
│  Progress: ●●●●○○○  Step 4 of 7                        │
│                                                         │
│          🎯 How do you finish projects?                 │
│                                                         │
│    This helps us match you with compatible work styles  │
│                                                         │
│  Which sounds most like you?                           │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ 🌟 The Serial Starter                        │   │
│  │                                                  │   │
│  │     "I have tons of ideas and love starting      │   │
│  │     things, but struggle to finish them"         │   │
│  │                                                  │   │
│  │     You get excited by new possibilities but     │   │
│  │     lose momentum before completion              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ 🎨 The Perfectionist                         │   │
│  │                                                  │   │
│  │     "I want everything to be perfect before      │   │
│  │     I ship, which sometimes means I never        │   │
│  │     finish"                                      │   │
│  │                                                  │   │
│  │     You get stuck refining details and have      │   │
│  │     high standards for completion                │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ● ⚡ The Finisher                              │   │
│  │                                                  │   │
│  │     "Once I start, I power through and finish.   │   │
│  │     Just give me clear direction!"               │   │
│  │                                                  │   │
│  │     You execute consistently and ship reliably   │   │
│  │     when you have a clear goal                   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ 😰 The Overwhelmed                           │   │
│  │                                                  │   │
│  │     "I take on too much at once and lose         │   │
│  │     focus on what matters"                       │   │
│  │                                                  │   │
│  │     You struggle with prioritization and         │   │
│  │     managing multiple commitments                │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ 🎯 The Distracted                            │   │
│  │                                                  │   │
│  │     "I get pulled in different directions        │   │
│  │     easily and lose momentum"                    │   │
│  │                                                  │   │
│  │     You're susceptible to interruptions and      │   │
│  │     context switching                            │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  💡 Honest self-assessment helps us find teammates     │
│     who balance your work style!                       │
│                                                         │
│                              [← Previous]  [Next →]    │
└─────────────────────────────────────────────────────────┘
```

---

### STEP 5: Project Goals

```
┌─────────────────────────────────────────────────────────┐
│  Progress: ●●●●●○○  Step 5 of 7                        │
│                                                         │
│         What brings you to Hey Maple? 🎓                │
│                                                         │
│              Select all that apply:                     │
│                                                         │
│  ☑ Find collaborators for my capstone project          │
│  ☐ Work on a passion project with other students       │
│  ☐ Join someone else's project                         │
│  ☑ Start a student startup                             │
│  ☐ Build my portfolio                                  │
│  ☐ Learn new skills from others                        │
│  ☐ Find a mentor for guidance                          │
│  ☐ Network with students in other schools              │
│                                                         │
│  Project type I'm focused on:                          │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ● Academic project                              │   │
│  │    (Capstone, thesis, research project)          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ Side project / Passion project                │   │
│  │    (Building something for fun or learning)      │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ Startup idea                                  │   │
│  │    (Building a business with potential to scale) │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ Open to anything!                             │   │
│  │    (Just want to collaborate and build)          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Project deadline: (optional)                          │
│  ┌────────────────────┐                                │
│  │ May 2025           │  ▼                             │
│  └────────────────────┘                                │
│                                                         │
│                              [← Previous]  [Next →]    │
└─────────────────────────────────────────────────────────┘
```

---

### STEP 6: Time & Collaboration Style

```
┌─────────────────────────────────────────────────────────┐
│  Progress: ●●●●●●○  Step 6 of 7                        │
│                                                         │
│        ⏰ Time & Collaboration Style                    │
│                                                         │
│  How many hours per week can you commit?               │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  5 hrs  [========|=============]  40+ hrs        │   │
│  │                                                  │   │
│  │         Currently: 10-15 hours/week              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  💡 Tip: Most successful student projects need         │
│     10+ hours/week                                     │
│                                                         │
│  ⚠️ Recommendation: Based on your "Academic project"   │
│     goal and May 2025 deadline, we recommend at        │
│     least 15 hours/week                                │
│                                                         │
│  Preferred collaboration style:                        │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ● Async-first                                   │   │
│  │    Slack, Discord, work on your own schedule     │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ Regular video meetings                        │   │
│  │    Zoom check-ins, real-time collaboration       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ Hybrid                                        │   │
│  │    Mix of async work + scheduled meetings        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ In-person on campus preferred                 │   │
│  │    Meet at Leavey Library, coffee shops, etc.    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Where do you like to work? (optional)                 │
│  ☐ Coffee shops on campus                              │
│  ☑ Leavey Library                                      │
│  ☐ My apartment / dorm                                 │
│  ☑ Anywhere - fully remote is fine                     │
│                                                         │
│  Best times for meetings: (optional)                   │
│  ☑ Weekday mornings  ☐ Weekday afternoons              │
│  ☑ Weekday evenings  ☐ Weekends                        │
│                                                         │
│                              [← Previous]  [Next →]    │
└─────────────────────────────────────────────────────────┘
```

---

### STEP 7: Dream Project (The Icebreaker)

```
┌─────────────────────────────────────────────────────────┐
│  Progress: ●●●●●●●  Step 7 of 7                        │
│                                                         │
│                💡 One last question!                    │
│                                                         │
│       This helps break the ice with future              │
│              building partners                          │
│                                                         │
│  What's your dream project at USC?                     │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ I want to build a platform that helps           │   │
│  │ students collaborate across different schools   │   │
│  │ at USC. Marshall students can find Viterbi      │   │
│  │ developers, Annenberg students can find         │   │
│  │ designers, etc. Breaking down the silos that    │   │
│  │ prevent amazing collaborations from happening.  │   │
│  │                                                  │   │
│  │                                                  │   │
│  │ (300 characters max)                            │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  💡 This is optional, but it really helps your         │
│     matches get to know you better!                    │
│                                                         │
│                      [← Previous]  [Complete Setup →]  │
└─────────────────────────────────────────────────────────┘
```

**After clicking "Complete Setup":**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                 🎉 Profile Complete!                    │
│                                                         │
│              Finding your perfect matches...            │
│                                                         │
│         [Animated gradient/loading animation]           │
│                                                         │
│              • Analyzing your profile...                │
│              • Finding compatible students...           │
│              • Calculating match scores...              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Then redirect to Discovery page with matches**

---

## Mentor/Faculty Onboarding Flow

### Overview
**5 Steps | ~3-4 minutes**

```
Step Flow:
1. Basic Info (name, department, title)
2. Expertise Areas (what you can advise on)
3. Availability & Mentorship Style
4. Project Interests (what you're looking for)
5. Profile & Bio (about you)
```

---

### MENTOR STEP 1: Basic Info

```
┌─────────────────────────────────────────────────────────┐
│  Progress: ●○○○○  Step 1 of 5                          │
│                                                         │
│           Welcome to Hey Maple, Professor! 👋           │
│                                                         │
│        Let's set up your mentor profile                 │
│                                                         │
│  ┌─────────────┐                                       │
│  │             │  [Upload Photo]                       │
│  │   [Photo]   │  or [Skip]                            │
│  │             │                                       │
│  └─────────────┘                                       │
│                                                         │
│  Full Name:                                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Dr. Sarah Chen                                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  USC Email: (auto-filled from Google OAuth)            │
│  ┌─────────────────────────────────────────────────┐   │
│  │ schen@usc.edu                      ✓ Verified   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Department/School:                                    │
│  ┌─────────────────────────────────────────────────┐   │
│  │ ▼ Viterbi School of Engineering                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Title/Position:                                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Assistant Professor of Computer Science         │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Office Location: (optional)                           │
│  ┌─────────────────────────────────────────────────┐   │
│  │ SAL 322                                         │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Office Hours: (optional)                              │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Tuesdays & Thursdays, 2-4pm                     │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│                              [← Previous]  [Next →]    │
└─────────────────────────────────────────────────────────┘
```

---

### MENTOR STEP 2: Expertise Areas

```
┌─────────────────────────────────────────────────────────┐
│  Progress: ●●○○○  Step 2 of 5                          │
│                                                         │
│        What areas can you advise on? 🎓                 │
│                                                         │
│    Your expertise helps us connect you with relevant    │
│                   student projects                      │
│                                                         │
│  Select all that apply:                                │
│                                                         │
│  ▼ Technical Expertise:                                │
│     ☑ Software Development                             │
│     ☑ Machine Learning / AI                            │
│     ☑ Data Science                                     │
│     ☐ Web Development                                  │
│     ☐ Mobile Development                               │
│     ☐ Cybersecurity                                    │
│     ☐ Systems Engineering                              │
│     ☐ Cloud Computing                                  │
│     ☐ Database Design                                  │
│     ☐ UI/UX Design                                     │
│                                                         │
│  ▼ Domain Expertise:                                   │
│     ☑ Healthcare Tech                                  │
│     ☐ FinTech                                          │
│     ☐ EdTech                                           │
│     ☑ Social Impact                                    │
│     ☐ Entertainment/Media                              │
│     ☐ E-commerce                                       │
│     ☐ SaaS Products                                    │
│     ☐ Gaming                                           │
│     ☐ IoT / Hardware                                   │
│                                                         │
│  ▼ General Guidance:                                   │
│     ☑ Product Strategy                                 │
│     ☑ Research Methods                                 │
│     ☐ Technical Writing                                │
│     ☑ Project Management                               │
│     ☐ Entrepreneurship                                 │
│     ☑ Career Advice                                    │
│     ☐ Fundraising                                      │
│     ☐ Team Building                                    │
│                                                         │
│  Add custom expertise:                                 │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [+ Add area of expertise]                       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Selected: 7 areas                                     │
│                                                         │
│                              [← Previous]  [Next →]    │
└─────────────────────────────────────────────────────────┘
```

---

### MENTOR STEP 3: Availability & Mentorship Style

```
┌─────────────────────────────────────────────────────────┐
│  Progress: ●●●○○  Step 3 of 5                          │
│                                                         │
│        How would you like to mentor? ⏰                 │
│                                                         │
│  Mentorship offerings:                                 │
│  ☑ 1-on-1 office hours                                 │
│  ☑ Group project reviews                               │
│  ☑ Email advice (async)                                │
│  ☐ Guest lectures / workshops                          │
│  ☑ Capstone advising                                   │
│  ☐ Portfolio reviews                                   │
│  ☐ Industry connections / networking                   │
│  ☐ Mock interviews                                     │
│                                                         │
│  Time commitment per month:                            │
│  ○ 1-2 hours per month                                 │
│  ● 3-5 hours per month                                 │
│  ○ 5-10 hours per month                                │
│  ○ 10+ hours per month                                 │
│  ○ Flexible / as needed                                │
│                                                         │
│  Maximum students you can mentor:                      │
│  ┌────────────────┐                                    │
│  │ 5 students     │  ▼                                 │
│  └────────────────┘                                    │
│                                                         │
│  Preferred meeting style:                              │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ● In-person on campus                           │   │
│  │    Office hours or campus meetings               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ Video calls (Zoom)                            │   │
│  │    Remote meetings preferred                     │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ Async (email / Slack)                         │   │
│  │    Written advice and feedback                   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○ Flexible - whatever works                     │   │
│  │    Adapt to student needs                        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Booking link: (optional)                              │
│  ┌─────────────────────────────────────────────────┐   │
│  │ calendly.com/sarahchen                          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│                              [← Previous]  [Next →]    │
└─────────────────────────────────────────────────────────┘
```

---

### MENTOR STEP 4: Project Interests

```
┌─────────────────────────────────────────────────────────┐
│  Progress: ●●●●○  Step 4 of 5                          │
│                                                         │
│      What student projects interest you? 🎯             │
│                                                         │
│       This helps us match you with relevant projects    │
│                                                         │
│  Project types:                                        │
│  ☑ Capstone projects                                   │
│  ☑ Research projects                                   │
│  ☑ Startup ideas                                       │
│  ☐ Passion projects                                    │
│  ☐ Open source contributions                           │
│  ☐ Competition entries (hackathons, etc.)              │
│                                                         │
│  Project stages you're most interested in:             │
│  ☐ Early ideation (helping shape the concept)          │
│  ☑ Active development (mid-project guidance)           │
│  ☑ Near completion (final review and polish)           │
│  ☐ Any stage                                           │
│                                                         │
│  Schools you'd like to work with:                      │
│  ☑ Viterbi (Engineering)                               │
│  ☑ Annenberg (Communication)                           │
│  ☐ Marshall (Business)                                 │
│  ☐ Dornsife (Liberal Arts)                             │
│  ☐ Roski (Art & Design)                                │
│  ☐ Any school                                          │
│                                                         │
│  I'm especially interested in projects involving:      │
│  ┌─────────────────────────────────────────────────┐   │
│  │ AI applications in healthcare, ethical AI       │   │
│  │ development, students building tools for        │   │
│  │ social good, and interdisciplinary projects     │   │
│  │ that combine technology with social impact.     │   │
│  │                                                  │   │
│  │ (300 characters max)                            │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  What I can help with specifically:                    │
│  ☑ Technical architecture review                       │
│  ☑ ML model selection and optimization                 │
│  ☑ Research methodology                                │
│  ☑ Code review and best practices                      │
│  ☑ Connecting students to industry                     │
│  ☐ Fundraising advice                                  │
│  ☐ Go-to-market strategy                               │
│                                                         │
│                              [← Previous]  [Next →]    │
└─────────────────────────────────────────────────────────┘
```

---

### MENTOR STEP 5: Profile & Bio

```
┌─────────────────────────────────────────────────────────┐
│  Progress: ●●●●●  Step 5 of 5                          │
│                                                         │
│         Tell students about yourself 📝                 │
│                                                         │
│  Short bio (250 characters):                           │
│  ┌─────────────────────────────────────────────────┐   │
│  │ CS professor specializing in ML/AI. Love        │   │
│  │ helping students turn research into real        │   │
│  │ products. 15 years in tech industry before      │   │
│  │ joining academia. Published 50+ papers on       │   │
│  │ ethical AI and healthcare applications.         │   │
│  │                                                  │   │
│  │ 147/250 characters                              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Key areas I can help with:                            │
│  • Technical architecture review                       │
│  • ML model selection and optimization                 │
│  • Research methodology and paper writing              │
│  • Connecting students to industry partners            │
│                                                         │
│  Professional links: (optional)                        │
│                                                         │
│  LinkedIn:                                             │
│  ┌─────────────────────────────────────────────────┐   │
│  │ linkedin.com/in/sarahchen                       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Personal website:                                     │
│  ┌─────────────────────────────────────────────────┐   │
│  │ sarahchen.usc.edu                               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Google Scholar:                                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │ scholar.google.com/citations?user=...           │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  GitHub:                                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │ github.com/sarahchen                            │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Notable achievements or publications: (optional)      │
│  ┌─────────────────────────────────────────────────┐   │
│  │ - Best Paper Award, AI Ethics Conference 2023   │   │
│  │ - Advisor for 3 startup exits                   │   │
│  │ - NSF CAREER Award recipient                    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│                      [← Previous]  [Complete Setup →]  │
└─────────────────────────────────────────────────────────┘
```

---

## Comprehensive Skills Taxonomy

### Complete Skills Database (All Categories)

#### 💻 Development & Engineering

**Frontend Development:**
- React, Vue.js, Angular, Svelte, Next.js, Nuxt.js, Gatsby
- TypeScript, JavaScript, HTML5, CSS3, SCSS, SASS
- Tailwind CSS, Bootstrap, Material-UI, Ant Design, Chakra UI
- jQuery, Redux, MobX, Zustand, Recoil
- Webpack, Vite, Rollup, Parcel
- Testing: Jest, Cypress, Testing Library, Playwright

**Backend Development:**
- Node.js, Express.js, Fastify, Koa
- Python: Django, Flask, FastAPI, Pyramid
- Ruby: Ruby on Rails, Sinatra
- Java: Spring Boot, Spring Framework, Hibernate
- PHP: Laravel, Symfony, CodeIgniter
- Go (Golang), Rust, C#, .NET, ASP.NET Core
- Elixir, Phoenix Framework
- GraphQL, REST APIs, WebSockets, gRPC

**Mobile Development:**
- React Native, Flutter, Ionic
- iOS: Swift, SwiftUI, UIKit, Objective-C
- Android: Kotlin, Java, Jetpack Compose
- Xamarin, Cordova, PhoneGap

**Database & Data:**
- SQL: PostgreSQL, MySQL, SQLite, MariaDB
- NoSQL: MongoDB, Firebase, CouchDB, Cassandra
- Cloud: DynamoDB, CosmosDB, Firestore
- In-memory: Redis, Memcached
- Graph: Neo4j, ArangoDB
- ORMs: Prisma, Drizzle, TypeORM, Sequelize, SQLAlchemy
- GraphQL, Apollo Client/Server

**Infrastructure & DevOps:**
- Cloud Platforms: AWS, Google Cloud (GCP), Microsoft Azure, DigitalOcean, Linode
- Containers: Docker, Kubernetes, Docker Compose
- CI/CD: GitHub Actions, GitLab CI, Jenkins, CircleCI, Travis CI
- Infrastructure as Code: Terraform, CloudFormation, Pulumi
- Monitoring: Prometheus, Grafana, New Relic, Datadog
- Version Control: Git, GitHub, GitLab, Bitbucket
- Web Servers: Nginx, Apache, Caddy
- Operating Systems: Linux, Unix, Windows Server

**Data Science & AI:**
- Machine Learning: TensorFlow, PyTorch, Keras, Scikit-learn
- Deep Learning, Neural Networks, CNNs, RNNs, Transformers
- NLP: Natural Language Processing, spaCy, NLTK, Hugging Face
- Computer Vision: OpenCV, YOLO, Image Recognition
- Data Analysis: Pandas, NumPy, SciPy, Matplotlib, Seaborn
- Jupyter Notebooks, Google Colab
- R Programming, MATLAB, Stata
- Data Visualization: Tableau, Power BI, D3.js, Plotly
- Big Data: Apache Spark, Hadoop, Kafka
- MLOps, Model Deployment
- OpenAI API, Claude API, LangChain, Vector Databases
- RAG (Retrieval Augmented Generation), Fine-tuning

**Other Development:**
- Blockchain: Solidity, Web3.js, Ethereum, Smart Contracts
- Game Development: Unity, Unreal Engine, Godot, C++
- Desktop Apps: Electron, Tauri, Qt
- Automation: Selenium, Puppeteer, Playwright
- API Development, Microservices, Serverless
- Testing & QA: Unit Testing, Integration Testing, E2E Testing
- Agile/Scrum, Kanban, Jira, Asana
- Technical Documentation, API Documentation

---

#### 🎨 Design & Creative

**UI/UX Design:**
- Figma, Adobe XD, Sketch, InVision, Framer
- Prototyping, Wireframing, Mockups
- User Research, User Testing, Usability Testing
- Information Architecture, User Flows
- Interaction Design, Motion Design
- Design Systems, Component Libraries
- Accessibility (WCAG), Inclusive Design
- Mobile-first Design, Responsive Design
- Design Thinking, Human-Centered Design

**Graphic Design:**
- Adobe Creative Suite: Photoshop, Illustrator, InDesign
- Canva, Affinity Designer, CorelDRAW
- Branding, Logo Design, Visual Identity
- Typography, Color Theory, Layout Design
- Print Design, Packaging Design
- Social Media Graphics, Marketing Materials
- Icon Design, Illustration
- Image Editing, Photo Manipulation

**Video & Animation:**
- Video Editing: Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve
- Motion Graphics: After Effects, Motion
- 3D Animation: Blender, Cinema 4D, Maya, 3ds Max
- Color Grading, Color Correction
- Sound Design, Audio Editing
- Compositing, VFX (Visual Effects)
- Stop Motion, 2D Animation
- Video Production, Storyboarding

**Photography & Media:**
- Photography (Portrait, Product, Event, Street)
- Photo Editing: Lightroom, Capture One
- Videography, Cinematography
- Lighting, Camera Operation
- Drone Photography/Videography
- Product Photography, Food Photography

---

#### 📊 Business & Strategy

**Product Management:**
- Product Strategy, Product Roadmapping
- User Stories, Product Requirements Documents (PRDs)
- Agile/Scrum, Sprint Planning
- Product Analytics: Mixpanel, Amplitude, Google Analytics
- A/B Testing, Feature Experimentation
- Market Research, Competitive Analysis
- Customer Discovery, User Interviews
- Product-Market Fit, Go-to-Market Strategy
- Prioritization Frameworks (RICE, MoSCoW, Kano)

**Marketing:**
- Digital Marketing Strategy
- Social Media Marketing (Instagram, TikTok, LinkedIn, Twitter/X)
- Content Marketing, Content Strategy
- SEO (Search Engine Optimization)
- SEM (Search Engine Marketing), Google Ads
- Email Marketing, Marketing Automation
- Growth Hacking, Growth Marketing
- Influencer Marketing
- Marketing Analytics, Google Analytics 4
- Brand Marketing, Brand Strategy
- Performance Marketing, PPC
- Copywriting, Marketing Copy

**Business Strategy:**
- Business Strategy, Strategic Planning
- Financial Modeling, Financial Analysis
- Excel, Google Sheets, Financial Projections
- Business Analysis, SWOT Analysis
- Operations Management, Process Optimization
- Consulting, Management Consulting
- Entrepreneurship, Startup Operations
- Business Development, Partnerships
- Pitch Decks, Investor Relations
- Fundraising, Venture Capital
- Unit Economics, Business Metrics

**Sales & CRM:**
- Sales Strategy, Sales Operations
- CRM: Salesforce, HubSpot, Pipedrive
- Lead Generation, Cold Outreach
- Sales Presentations, Demo Skills
- B2B Sales, B2C Sales
- Account Management, Customer Success
- Negotiation Skills
- Sales Analytics, Sales Forecasting

**Finance & Accounting:**
- Accounting, Bookkeeping, Financial Reporting
- QuickBooks, Xero, FreshBooks
- Budgeting, Forecasting
- Investment Analysis, Valuation
- Corporate Finance, Financial Planning

---

#### 📝 Content & Communications

**Writing & Content:**
- Copywriting, Creative Copywriting
- Content Strategy, Content Marketing
- Technical Writing, Documentation
- Creative Writing, Fiction Writing
- Journalism, News Writing
- Blogging, Blog Writing
- Editing, Proofreading, Copy Editing
- Storytelling, Narrative Design
- Scriptwriting, Screenplay Writing
- Grant Writing, Proposal Writing
- Academic Writing, Research Writing

**Public Relations:**
- PR Strategy, Public Relations
- Media Relations, Press Relations
- Crisis Communication, Crisis Management
- Press Releases, Media Kits
- Event Planning, Event Management
- Brand Management, Reputation Management
- Corporate Communications
- Internal Communications

**Social Media:**
- Social Media Management
- Community Management, Community Building
- Instagram Marketing, TikTok Marketing
- LinkedIn Strategy, Twitter/X Strategy
- Content Creation, Content Calendar
- Social Media Analytics
- Influencer Outreach, Influencer Marketing
- Social Media Advertising

---

#### 🔬 Research & Science

**Research Methods:**
- Research Design, Experimental Design
- Qualitative Research Methods
- Quantitative Research Methods
- Survey Design, Questionnaire Design
- Data Collection, Field Research
- Literature Review, Systematic Review
- Academic Writing, Research Writing
- Statistical Analysis, Hypothesis Testing
- IRB Applications, Research Ethics

**Statistical Software:**
- SPSS, SAS, Stata, R
- Data Analysis, Statistical Modeling
- Regression Analysis, Time Series
- Factor Analysis, Cluster Analysis

**Sciences:**
- Biology, Molecular Biology, Genetics
- Chemistry, Organic Chemistry, Biochemistry
- Physics, Quantum Physics
- Neuroscience, Cognitive Science
- Psychology, Behavioral Psychology
- Environmental Science, Ecology
- Lab Skills, Laboratory Techniques
- Scientific Computing, Computational Biology
- MATLAB, Mathematica

---

#### 🎵 Arts & Entertainment

**Music:**
- Music Production, Audio Production
- Audio Engineering, Sound Engineering
- DAWs: Ableton Live, Logic Pro, FL Studio, Pro Tools
- Sound Design, Foley
- Mixing, Mastering
- Music Composition, Songwriting
- Music Theory, Arranging
- MIDI Programming, Synthesis
- Podcast Production, Audio Editing

**Performance & Theater:**
- Acting, Theater Performance
- Directing, Stage Direction
- Screenwriting, Playwriting
- Stage Management, Production Management
- Production Design, Set Design
- Costume Design, Wardrobe
- Lighting Design, Technical Theater
- Choreography, Dance

---

#### ⚖️ Legal & Policy

**Legal:**
- Legal Research, Legal Writing
- Contract Review, Contract Drafting
- Intellectual Property, IP Law
- Compliance, Regulatory Compliance
- Corporate Law, Business Law
- Negotiations, Mediation
- Legal Analysis, Case Analysis

**Public Policy:**
- Policy Analysis, Policy Research
- Policy Writing, Policy Briefs
- Legislative Analysis, Bill Analysis
- Urban Planning, City Planning
- International Relations, Diplomacy
- Public Administration
- Advocacy, Lobbying
- Nonprofit Management

---

#### 🏥 Health & Medicine

**Healthcare:**
- Healthcare Analytics, Health Informatics
- Clinical Research, Medical Research
- Public Health, Epidemiology
- Health Policy, Healthcare Policy
- Patient Care, Clinical Skills
- Medical Writing, Healthcare Writing
- Electronic Health Records (EHR)
- HIPAA Compliance
- Healthcare Administration

**Social Impact:**
- Community Organizing, Grassroots Organizing
- Nonprofit Management, NGO Management
- Grant Writing, Fundraising
- Program Evaluation, Impact Assessment
- Social Justice, Equity & Inclusion
- Advocacy, Policy Advocacy
- Volunteer Management
- Community Development

---

#### 🎯 Soft Skills & Leadership

**Leadership & Management:**
- Team Leadership, People Management
- Project Management, Program Management
- Change Management
- Stakeholder Management
- Conflict Resolution, Mediation
- Mentorship, Coaching
- Strategic Thinking, Strategic Planning
- Decision Making, Problem Solving

**Communication & Collaboration:**
- Communication Skills, Verbal Communication
- Written Communication, Business Writing
- Presentation Skills, Public Speaking
- Active Listening, Empathy
- Collaboration, Teamwork
- Cross-functional Collaboration
- Remote Collaboration, Async Communication
- Meeting Facilitation, Workshop Facilitation

**Personal Effectiveness:**
- Organization, Time Management
- Productivity, Task Management
- Critical Thinking, Analytical Thinking
- Creativity, Creative Problem Solving
- Adaptability, Flexibility, Resilience
- Self-motivation, Self-discipline
- Learning Agility, Continuous Learning
- Attention to Detail, Quality Focus

**Other Professional Skills:**
- Negotiation, Persuasion
- Customer Service, Client Relations
- Networking, Relationship Building
- Emotional Intelligence (EQ)
- Cultural Competency, DEI (Diversity, Equity, Inclusion)
- Teaching, Training, Facilitation

---

## AI Resume Parsing Implementation

### Technical Architecture

```javascript
// Technology Stack
- Frontend: React + TypeScript
- File Upload: React Dropzone
- PDF Parsing: pdf-parse (Node.js) or PDF.js (client-side)
- DOCX Parsing: mammoth.js
- AI Processing: OpenAI GPT-4o API
- Backend: Supabase Edge Functions
- Storage: Supabase Storage (for uploaded resumes)
```

### User Flow

```
1. User clicks "Upload Resume" button
2. File selector opens (or drag & drop)
3. User selects PDF or DOCX file
4. Frontend validates file (type, size < 5MB)
5. File uploads to Supabase Storage
6. Extract text from PDF/DOCX
7. Send text to OpenAI API with structured prompt
8. AI returns structured JSON with extracted data
9. Frontend pre-fills form fields
10. User reviews and edits before confirming
11. Save to database
```

### Frontend Component

```typescript
// components/ResumeUploader.tsx
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';

interface ExtractedData {
  skills: string[];
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  education: {
    school: string;
    degree: string;
    major: string;
    year: string;
  };
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
  }>;
}

export function ResumeUploader({ onDataExtracted }: { onDataExtracted: (data: ExtractedData) => void }) {
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    
    if (!file) return;

    // Validate file type
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a PDF or DOCX file');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    try {
      setIsUploading(true);
      setError(null);

      // Upload to Supabase Storage
      const formData = new FormData();
      formData.append('file', file);

      const uploadResponse = await fetch('/api/upload-resume', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) throw new Error('Upload failed');

      const { fileUrl } = await uploadResponse.json();

      setIsUploading(false);
      setIsProcessing(true);

      // Parse resume with AI
      const parseResponse = await fetch('/api/parse-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileUrl }),
      });

      if (!parseResponse.ok) throw new Error('Parsing failed');

      const extractedData: ExtractedData = await parseResponse.json();

      setIsProcessing(false);
      setSuccess(true);
      onDataExtracted(extractedData);

    } catch (err) {
      setError(err.message || 'Something went wrong');
      setIsUploading(false);
      setIsProcessing(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: false,
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          transition-colors duration-200
          ${isDragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-400'}
          ${isUploading || isProcessing ? 'pointer-events-none opacity-50' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        {!isUploading && !isProcessing && !success && (
          <>
            <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            {isDragActive ? (
              <p className="text-purple-600 font-medium">Drop your resume here...</p>
            ) : (
              <>
                <p className="text-gray-700 font-medium mb-2">
                  Drag & drop your resume here, or click to browse
                </p>
                <p className="text-sm text-gray-500">
                  Supported formats: PDF, DOCX (Max 5MB)
                </p>
              </>
            )}
          </>
        )}

        {isUploading && (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mb-4" />
            <p className="text-gray-700 font-medium">Uploading resume...</p>
          </div>
        )}

        {isProcessing && (
          <div className="flex flex-col items-center">
            <FileText className="w-12 h-12 mb-4 text-purple-500 animate-pulse" />
            <p className="text-gray-700 font-medium mb-2">AI is reading your resume...</p>
            <p className="text-sm text-gray-500">Extracting skills, experience, and projects</p>
          </div>
        )}

        {success && (
          <div className="flex flex-col items-center">
            <CheckCircle className="w-12 h-12 mb-4 text-green-500" />
            <p className="text-green-700 font-medium">Resume parsed successfully!</p>
            <p className="text-sm text-gray-500 mt-2">Review and edit the extracted data below</p>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
}
```

### Backend API - File Upload

```typescript
// supabase/functions/upload-resume/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

serve(async (req) => {
  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    // Get authenticated user
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();

    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Parse multipart form data
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return new Response(JSON.stringify({ error: 'No file provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}/${Date.now()}.${fileExt}`;

    // Upload to Supabase Storage
    const { data, error } = await supabaseClient.storage
      .from('resumes')
      .upload(fileName, file, {
        contentType: file.type,
        upsert: false,
      });

    if (error) throw error;

    // Get public URL
    const {
      data: { publicUrl },
    } = supabaseClient.storage.from('resumes').getPublicUrl(fileName);

    return new Response(
      JSON.stringify({
        fileUrl: publicUrl,
        fileName: fileName,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
```

### Backend API - Resume Parsing with AI

```typescript
// supabase/functions/parse-resume/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import PdfParse from 'npm:pdf-parse@1.1.1';
import mammoth from 'npm:mammoth@1.6.0';

serve(async (req) => {
  try {
    const { fileUrl } = await req.json();

    // Download the file
    const fileResponse = await fetch(fileUrl);
    const fileBuffer = await fileResponse.arrayBuffer();

    // Determine file type and extract text
    let resumeText = '';
    
    if (fileUrl.endsWith('.pdf')) {
      // Parse PDF
      const pdfData = await PdfParse(Buffer.from(fileBuffer));
      resumeText = pdfData.text;
    } else if (fileUrl.endsWith('.docx')) {
      // Parse DOCX
      const result = await mammoth.extractRawText({ buffer: Buffer.from(fileBuffer) });
      resumeText = result.value;
    } else {
      throw new Error('Unsupported file format');
    }

    // Call OpenAI API to extract structured data
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are an expert resume parser. Extract structured information from resumes and return it as JSON.

IMPORTANT GUIDELINES:
1. Skills: Extract ALL technical skills, soft skills, tools, languages, frameworks
2. Experience: Include job title, company, dates, and key responsibilities
3. Education: Include school name, degree, major, graduation year
4. Projects: Extract personal/academic projects with descriptions and technologies used
5. Be comprehensive - extract as much relevant information as possible
6. If information is not present, use empty arrays or null values

Return ONLY valid JSON with this structure:
{
  "skills": ["skill1", "skill2", ...],
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "duration": "Jan 2020 - Present",
      "description": "Brief description of role and achievements"
    }
  ],
  "education": {
    "school": "University Name",
    "degree": "Bachelor's/Master's/PhD",
    "major": "Major/Field",
    "year": "2024"
  },
  "projects": [
    {
      "name": "Project Name",
      "description": "What the project does",
      "technologies": ["tech1", "tech2"]
    }
  ]
}`
          },
          {
            role: 'user',
            content: `Parse this resume and extract structured data:\n\n${resumeText}`
          }
        ],
        temperature: 0.3,
        response_format: { type: "json_object" }
      }),
    });

    if (!openaiResponse.ok) {
      throw new Error(`OpenAI API error: ${openaiResponse.statusText}`);
    }

    const openaiData = await openaiResponse.json();
    const extractedData = JSON.parse(openaiData.choices[0].message.content);

    // Post-process: Deduplicate skills, clean up text
    extractedData.skills = [...new Set(extractedData.skills)];

    return new Response(JSON.stringify(extractedData), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Parse error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to parse resume' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
});
```

### Integration into Onboarding Form

```typescript
// pages/onboarding/Step2Skills.tsx
import React, { useState } from 'react';
import { ResumeUploader } from '@/components/ResumeUploader';
import { SkillsSelector } from '@/components/SkillsSelector';

export function Step2Skills() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [resumeData, setResumeData] = useState(null);

  const handleResumeDataExtracted = (data) => {
    setResumeData(data);
    
    // Pre-populate skills from resume
    setSelectedSkills([...new Set([...selectedSkills, ...data.skills])]);
    
    // Show success message
    toast.success('Resume parsed! Review and edit your skills below.');
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">What skills do you bring? 💪</h2>
        <p className="text-gray-600">Select all that apply (or let AI help!)</p>
      </div>

      {/* Resume Upload */}
      <div>
        <h3 className="text-lg font-semibold mb-4">⚡ Quick Import Options:</h3>
        <ResumeUploader onDataExtracted={handleResumeDataExtracted} />
      </div>

      <div className="text-center text-gray-500 font-medium">OR</div>

      {/* Manual Skills Selection */}
      <SkillsSelector 
        selectedSkills={selectedSkills}
        onSkillsChange={setSelectedSkills}
      />

      {/* Show extracted experience/projects for context */}
      {resumeData && (
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-4">
            📄 We also found these from your resume:
          </h3>
          
          {resumeData.experience?.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-blue-800 mb-2">Experience:</h4>
              {resumeData.experience.map((exp, i) => (
                <div key={i} className="mb-2">
                  <p className="font-medium">{exp.title} at {exp.company}</p>
                  <p className="text-sm text-gray-600">{exp.duration}</p>
                </div>
              ))}
            </div>
          )}

          {resumeData.projects?.length > 0 && (
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Projects:</h4>
              {resumeData.projects.map((proj, i) => (
                <div key={i} className="mb-2">
                  <p className="font-medium">{proj.name}</p>
                  <p className="text-sm text-gray-600">{proj.description}</p>
                </div>
              ))}
            </div>
          )}

          <p className="text-sm text-blue-700 mt-4">
            💡 This information will be visible on your profile
          </p>
        </div>
      )}
    </div>
  );
}
```

### Database Schema for Resume Data

```sql
-- Add columns to profiles table for resume data
ALTER TABLE profiles ADD COLUMN resume_url TEXT;
ALTER TABLE profiles ADD COLUMN resume_parsed_at TIMESTAMP WITH TIME ZONE;

-- Create table for experience
CREATE TABLE user_experience (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  duration TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for projects
CREATE TABLE user_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  technologies TEXT[], -- Array of technology names
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_user_experience_user_id ON user_experience(user_id);
CREATE INDEX idx_user_projects_user_id ON user_projects(user_id);
```

### Error Handling & Edge Cases

```typescript
// Error scenarios to handle:

1. **File Upload Fails**
   - Show error message: "Upload failed. Please try again."
   - Allow retry

2. **PDF/DOCX Parsing Fails**
   - Fallback: Ask user to manually enter skills
   - Log error for debugging

3. **OpenAI API Fails**
   - Fallback: Extract text without AI parsing
   - Show raw text, ask user to manually select skills

4. **Invalid JSON from OpenAI**
   - Retry with error handling
   - Fallback to manual entry

5. **Resume Format is Non-Standard**
   - AI will do its best to extract
   - User can review and correct

6. **User Uploads Wrong File (e.g., image)**
   - Validate file type before upload
   - Show error: "Please upload PDF or DOCX"

7. **File Too Large**
   - Validate size < 5MB
   - Show error: "File must be less than 5MB"

8. **No Skills Extracted**
   - Show message: "We couldn't find any skills in your resume. Please select them manually."
```

---

## LinkedIn Import Implementation

### OAuth Flow

```typescript
// LinkedIn OAuth Configuration
const LINKEDIN_CLIENT_ID = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID;
const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const LINKEDIN_REDIRECT_URI = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/linkedin/callback`;

// Scopes needed
const LINKEDIN_SCOPES = [
  'openid',
  'profile',
  'email',
  'w_member_social' // For reading profile data
];
```

### Frontend: LinkedIn Connect Button

```typescript
// components/LinkedInImporter.tsx
import React from 'react';
import { Linkedin } from 'lucide-react';

export function LinkedInImporter() {
  const handleLinkedInConnect = () => {
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?` +
      `response_type=code&` +
      `client_id=${LINKEDIN_CLIENT_ID}&` +
      `redirect_uri=${encodeURIComponent(LINKEDIN_REDIRECT_URI)}&` +
      `scope=${encodeURIComponent(LINKEDIN_SCOPES.join(' '))}`;
    
    // Open LinkedIn OAuth in popup
    const width = 600;
    const height = 700;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    
    window.open(
      authUrl,
      'LinkedIn Login',
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  return (
    <button
      onClick={handleLinkedInConnect}
      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors"
    >
      <Linkedin className="w-5 h-5" />
      Connect LinkedIn
    </button>
  );
}
```

### Backend: LinkedIn OAuth Callback

```typescript
// supabase/functions/linkedin-callback/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

serve(async (req) => {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get('code');
    const error = url.searchParams.get('error');

    if (error) {
      return new Response(JSON.stringify({ error: 'LinkedIn auth failed' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Exchange code for access token
    const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code!,
        client_id: Deno.env.get('LINKEDIN_CLIENT_ID')!,
        client_secret: Deno.env.get('LINKEDIN_CLIENT_SECRET')!,
        redirect_uri: Deno.env.get('LINKEDIN_REDIRECT_URI')!,
      }),
    });

    const { access_token } = await tokenResponse.json();

    // Fetch user profile data
    const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'LinkedIn-Version': '202401'
      },
    });

    const profile = await profileResponse.json();

    // Fetch skills (requires specific endpoint)
    const skillsResponse = await fetch('https://api.linkedin.com/v2/skills?person=' + profile.id, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

    const skills = await skillsResponse.json();

    // Fetch positions (work experience)
    const positionsResponse = await fetch(
      `https://api.linkedin.com/v2/positions?person=${profile.id}`,
      {
        headers: { 'Authorization': `Bearer ${access_token}` },
      }
    );

    const positions = await positionsResponse.json();

    // Structure the data
    const extractedData = {
      name: `${profile.localizedFirstName} ${profile.localizedLastName}`,
      headline: profile.headline,
      skills: skills.elements?.map(s => s.name) || [],
      experience: positions.elements?.map(pos => ({
        title: pos.title,
        company: pos.companyName,
        duration: `${pos.startDate?.year} - ${pos.endDate ? pos.endDate.year : 'Present'}`,
        description: pos.description,
      })) || [],
    };

    return new Response(JSON.stringify(extractedData), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
```

### Alternative: LinkedIn Scraping (Without Official API)

**Note:** LinkedIn's official API has very limited access. Most apps use scraping services.

```typescript
// Using RapidAPI LinkedIn Profile Scraper
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

async function scrapeLinkedInProfile(profileUrl: string) {
  const response = await fetch('https://linkedin-data-scraper.p.rapidapi.com/person', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'linkedin-data-scraper.p.rapidapi.com'
    },
    body: JSON.stringify({
      link: profileUrl
    })
  });

  const data = await response.json();
  
  return {
    skills: data.skills || [],
    experience: data.experience?.map(exp => ({
      title: exp.title,
      company: exp.company,
      duration: exp.duration,
      description: exp.description
    })) || [],
    education: {
      school: data.education?.[0]?.school,
      degree: data.education?.[0]?.degree,
      major: data.education?.[0]?.field_of_study,
    }
  };
}
```

**Privacy & Security Note:**
- Make it clear to users what data is being imported
- Never post to LinkedIn on user's behalf
- Store LinkedIn access tokens securely (encrypted)
- Allow users to disconnect LinkedIn anytime

---

## Project DNA Framework

### Theoretical Foundation

**Based on Jen Kem's Unicorn Team framework but adapted for students:**

Jen Kem's model identifies 3 core energies every high-performing team needs:
1. **Visionizer** - Vision, inspiration, sees possibilities
2. **Strategizer** - Planning, analysis, creates roadmaps
3. **Mobilizer** - Execution, building, ships products

For student projects, we've simplified and reframed:
1. **Dreamer** 💡 (Vision Energy) - Sees what could be
2. **Planner** 🎯 (Strategy Energy) - Organizes how to get there
3. **Builder** 🔨 (Build Energy) - Makes it happen

### Assessment Methodology

**Primary Question:**
"When starting a new project, I naturally..."
- Option 1: Dreamer (envision big picture)
- Option 2: Planner (create plan and steps)
- Option 3: Builder (jump in and build)

**Secondary Question (conditional):**
Asks follow-up based on primary selection to determine secondary traits

**Scoring:**
- Primary DNA: User's main selection
- Secondary DNA: Determined by follow-up question
- Stored as: `project_dna: 'dreamer'` and `project_dna_secondary: 'planner'`

### Compatibility Logic

```typescript
// Compatibility matrix
const DNA_COMPATIBILITY = {
  dreamer: {
    perfectMatch: ['builder'],      // 95-100% compatibility
    goodMatch: ['planner'],          // 85-94% compatibility
    okayMatch: ['dreamer'],          // 70-84% compatibility
    warning: "Works best with Builders who execute your vision"
  },
  planner: {
    perfectMatch: ['builder'],
    goodMatch: ['dreamer'],
    okayMatch: ['planner'],
    warning: "Works best with Builders who execute your plans"
  },
  builder: {
    perfectMatch: ['dreamer', 'planner'],
    goodMatch: ['builder'],
    okayMatch: [],
    warning: "Works best with Dreamers or Planners who provide direction"
  }
};

function calculateDNACompatibility(user1DNA: string, user2DNA: string): number {
  if (DNA_COMPATIBILITY[user1DNA].perfectMatch.includes(user2DNA)) {
    return 98; // Perfect complementarity
  } else if (DNA_COMPATIBILITY[user1DNA].goodMatch.includes(user2DNA)) {
    return 88; // Good match
  } else if (DNA_COMPATIBILITY[user1DNA].okayMatch.includes(user2DNA)) {
    return 75; // Okay but not ideal
  } else {
    return 60; // Potential issues
  }
}
```

### Database Schema

```sql
ALTER TABLE profiles ADD COLUMN project_dna VARCHAR(20); -- 'dreamer', 'planner', 'builder'
ALTER TABLE profiles ADD COLUMN project_dna_secondary VARCHAR(20); -- Secondary trait
ALTER TABLE profiles ADD COLUMN dna_confidence INTEGER; -- 0-100, how confident in this assessment

-- Enum for DNA types
CREATE TYPE project_dna_type AS ENUM ('dreamer', 'planner', 'builder');
```

---

## Completion Style Framework

### Theoretical Foundation

**Based on the Finish That Thing framework:**

Research shows people struggle to complete projects for 5 main reasons:
1. **Serial Starter** - Too many ideas, not enough follow-through
2. **Perfectionist** - Gets stuck in endless refinement
3. **Overwhelmed** - Takes on too much, loses focus
4. **Procrastinator** - Avoids starting despite knowing what to do
5. **Distracted** - Constantly pulled off-task

### Assessment Methodology

**Single Question with 5 Options:**
"Which sounds most like you?"
- Each option describes a completion pattern
- User selects ONE that resonates most
- Honest self-assessment encouraged

**Scoring:**
- Direct 1:1 mapping to finisher type
- Stored as: `completion_style: 'serial_starter'`

### Compatibility Logic

```typescript
// Completion style compatibility matrix
const COMPLETION_COMPATIBILITY = {
  serial_starter: {
    perfectMatch: ['finisher'],
    goodMatch: ['perfectionist'], // Balance each other
    avoid: ['serial_starter', 'overwhelmed'],
    warning: "You need someone who finishes what you start"
  },
  perfectionist: {
    perfectMatch: ['finisher'],
    goodMatch: ['serial_starter'], // They push you to ship
    avoid: ['perfectionist'],
    warning: "Another perfectionist means nothing ships"
  },
  finisher: {
    perfectMatch: ['serial_starter', 'perfectionist', 'overwhelmed', 'distracted'],
    goodMatch: ['finisher'],
    avoid: [],
    warning: "You're valuable to ANY team!"
  },
  overwhelmed: {
    perfectMatch: ['finisher'],
    goodMatch: ['planner'],
    avoid: ['overwhelmed', 'distracted'],
    warning: "You need someone who helps you focus and prioritize"
  },
  distracted: {
    perfectMatch: ['finisher'],
    goodMatch: ['planner'],
    avoid: ['distracted', 'overwhelmed'],
    warning: "You need someone who keeps you on track"
  }
};

function calculateCompletionCompatibility(user1: string, user2: string): number {
  if (COMPLETION_COMPATIBILITY[user1].perfectMatch.includes(user2)) {
    return 98;
  } else if (COMPLETION_COMPATIBILITY[user1].goodMatch.includes(user2)) {
    return 88;
  } else if (COMPLETION_COMPATIBILITY[user1].avoid.includes(user2)) {
    return 55; // Warning
  } else {
    return 75; // Neutral
  }
}
```

### Database Schema

```sql
ALTER TABLE profiles ADD COLUMN completion_style VARCHAR(30); 
-- Values: 'serial_starter', 'perfectionist', 'finisher', 'overwhelmed', 'distracted'

-- Enum for completion styles
CREATE TYPE completion_style_type AS ENUM (
  'serial_starter',
  'perfectionist',
  'finisher',
  'overwhelmed',
  'distracted'
);
```

---

## Matching Algorithm

### Complete Matching System

```typescript
interface MatchingFactors {
  skillsMatch: number;        // 0-100 (40% weight)
  dnaMatch: number;           // 0-100 (25% weight)
  completionMatch: number;    // 0-100 (20% weight)
  availabilityMatch: number;  // 0-100 (10% weight)
  styleMatch: number;         // 0-100 (5% weight)
}

function calculateOverallMatch(
  currentUser: Profile,
  potentialMatch: Profile | Project
): number {
  const factors: MatchingFactors = {
    skillsMatch: calculateSkillsMatch(currentUser, potentialMatch),
    dnaMatch: calculateDNACompatibility(
      currentUser.project_dna,
      potentialMatch.creator_dna || potentialMatch.project_dna
    ),
    completionMatch: calculateCompletionCompatibility(
      currentUser.completion_style,
      potentialMatch.completion_style
    ),
    availabilityMatch: calculateAvailabilityMatch(
      currentUser.hours_per_week,
      potentialMatch.hours_per_week
    ),
    styleMatch: calculateStyleMatch(
      currentUser.collaboration_style,
      potentialMatch.collaboration_style
    )
  };

  // Weighted average
  const overallScore = 
    (factors.skillsMatch * 0.40) +
    (factors.dnaMatch * 0.25) +
    (factors.completionMatch * 0.20) +
    (factors.availabilityMatch * 0.10) +
    (factors.styleMatch * 0.05);

  return Math.round(overallScore);
}

function calculateSkillsMatch(user: Profile, target: Profile | Project): number {
  const neededSkills = target.skills_needed || [];
  const userSkills = user.skills || [];
  
  if (neededSkills.length === 0) return 50; // Neutral if no skills specified
  
  const matchedSkills = neededSkills.filter(skill => 
    userSkills.includes(skill)
  );
  
  const matchPercentage = (matchedSkills.length / neededSkills.length) * 100;
  
  // Bonus for having additional relevant skills
  const extraRelevantSkills = userSkills.filter(skill =>
    !neededSkills.includes(skill) && isRelevantSkill(skill, target)
  );
  
  const bonus = Math.min(extraRelevantSkills.length * 2, 10);
  
  return Math.min(matchPercentage + bonus, 100);
}

function calculateAvailabilityMatch(userHours: number, targetHours: number): number {
  const difference = Math.abs(userHours - targetHours);
  
  if (difference === 0) return 100;
  if (difference <= 5) return 90;
  if (difference <= 10) return 75;
  if (difference <= 15) return 60;
  return 50;
}

function calculateStyleMatch(userStyle: string, targetStyle: string): number {
  const styleCompatibility = {
    'async': ['async', 'hybrid'],
    'video_meetings': ['video_meetings', 'hybrid'],
    'hybrid': ['async', 'video_meetings', 'hybrid'],
    'in_person': ['in_person', 'hybrid']
  };
  
  if (userStyle === targetStyle) return 100;
  if (styleCompatibility[userStyle]?.includes(targetStyle)) return 85;
  return 60;
}
```

### Match Insights Generation

```typescript
function generateMatchInsights(
  currentUser: Profile,
  match: Profile,
  score: number
): MatchInsight[] {
  const insights: MatchInsight[] = [];
  
  // DNA compatibility insight
  if (DNA_COMPATIBILITY[currentUser.project_dna].perfectMatch.includes(match.project_dna)) {
    insights.push({
      type: 'positive',
      icon: '✅',
      text: `Perfect complement: You're a ${currentUser.project_dna}, they're a ${match.project_dna}`
    });
  }
  
  // Completion style insight
  if (COMPLETION_COMPATIBILITY[currentUser.completion_style].perfectMatch.includes(match.completion_style)) {
    insights.push({
      type: 'positive',
      icon: '✅',
      text: `They'll help you finish: You ${currentUser.completion_style}, they ${match.completion_style}`
    });
  } else if (COMPLETION_COMPATIBILITY[currentUser.completion_style].avoid.includes(match.completion_style)) {
    insights.push({
      type: 'warning',
      icon: '⚠️',
      text: `Completion style concern: Both ${currentUser.completion_style} - projects may stall`
    });
  }
  
  // Skills insight
  const matchedSkills = currentUser.skills.filter(s => match.skills_needed?.includes(s));
  if (matchedSkills.length > 0) {
    insights.push({
      type: 'positive',
      icon: '✅',
      text: `You have exactly what they need: ${matchedSkills.slice(0, 3).join(', ')}`
    });
  }
  
  // Time commitment insight
  const hoursDiff = Math.abs(currentUser.hours_per_week - match.hours_per_week);
  if (hoursDiff <= 5) {
    insights.push({
      type: 'positive',
      icon: '✅',
      text: `Similar availability: Both can commit ${currentUser.hours_per_week}hrs/week`
    });
  } else if (hoursDiff > 15) {
    insights.push({
      type: 'warning',
      icon: '⚠️',
      text: `Availability mismatch: You ${currentUser.hours_per_week}hrs, they ${match.hours_per_week}hrs`
    });
  }
  
  // Communication style insight
  if (currentUser.collaboration_style === match.collaboration_style) {
    insights.push({
      type: 'positive',
      icon: '✅',
      text: `Same work style: Both prefer ${currentUser.collaboration_style}`
    });
  } else if (
    (currentUser.collaboration_style === 'async' && match.collaboration_style === 'video_meetings') ||
    (currentUser.collaboration_style === 'video_meetings' && match.collaboration_style === 'async')
  ) {
    insights.push({
      type: 'tip',
      icon: '💡',
      text: `Different comm styles: Try weekly video + daily async updates`
    });
  }
  
  return insights;
}
```

### SQL Query for Finding Matches

```sql
-- Find best matches for a user
WITH user_profile AS (
  SELECT * FROM profiles WHERE id = $1
),
skill_matches AS (
  SELECT 
    p.id,
    p.full_name,
    p.skills,
    p.project_dna,
    p.completion_style,
    ARRAY(
      SELECT UNNEST(p.skills)
      INTERSECT
      SELECT UNNEST((SELECT skills FROM user_profile))
    ) AS matched_skills
  FROM profiles p
  WHERE p.id != $1
    AND p.account_type = 'student'
)
SELECT 
  sm.*,
  CARDINALITY(sm.matched_skills) AS skill_match_count,
  -- Calculate match scores (simplified for SQL)
  CASE 
    WHEN up.project_dna = 'dreamer' AND sm.project_dna = 'builder' THEN 98
    WHEN up.project_dna = 'planner' AND sm.project_dna = 'builder' THEN 98
    WHEN up.project_dna = 'builder' AND sm.project_dna IN ('dreamer', 'planner') THEN 98
    ELSE 75
  END AS dna_match_score
FROM skill_matches sm
CROSS JOIN user_profile up
WHERE CARDINALITY(sm.matched_skills) > 0
ORDER BY 
  dna_match_score DESC,
  skill_match_count DESC
LIMIT 20;
```

---

## Technical Architecture

### Tech Stack

```yaml
Frontend:
  - React 18
  - TypeScript
  - Tailwind CSS
  - React Router
  - React Query (TanStack Query)
  - Zustand (state management)
  - React Hook Form (forms)
  - React Dropzone (file uploads)

Backend:
  - Supabase (PostgreSQL database)
  - Supabase Auth (authentication)
  - Supabase Storage (file uploads)
  - Supabase Edge Functions (serverless API)

External Services:
  - OpenAI API (resume parsing, AI features)
  - LinkedIn OAuth (optional profile import)
  - Google OAuth (USC email authentication)

Development:
  - Vite (build tool)
  - ESLint + Prettier
  - Husky (git hooks)
```

### Database Schema (Complete)

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Account types enum
CREATE TYPE account_type AS ENUM ('student', 'faculty', 'industry_mentor', 'graduate_student');

-- Project DNA enum
CREATE TYPE project_dna_type AS ENUM ('dreamer', 'planner', 'builder');

-- Completion style enum
CREATE TYPE completion_style_type AS ENUM ('serial_starter', 'perfectionist', 'finisher', 'overwhelmed', 'distracted');

-- Collaboration style enum
CREATE TYPE collaboration_style_type AS ENUM ('async', 'video_meetings', 'hybrid', 'in_person');

-- Profiles table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Basic Info
  full_name TEXT NOT NULL,
  username TEXT UNIQUE,
  email TEXT NOT NULL,
  avatar_url TEXT,
  
  -- Account Type
  account_type account_type NOT NULL DEFAULT 'student',
  
  -- Student-specific
  school TEXT,
  major TEXT,
  year TEXT,
  graduation_date DATE,
  
  -- Faculty-specific
  department TEXT,
  title TEXT,
  office_location TEXT,
  office_hours TEXT,
  
  -- Skills & Experience
  skills TEXT[], -- Array of skill names
  bio TEXT,
  resume_url TEXT,
  resume_parsed_at TIMESTAMP WITH TIME ZONE,
  
  -- Project DNA & Completion Style
  project_dna project_dna_type,
  project_dna_secondary project_dna_type,
  completion_style completion_style_type,
  
  -- Project Preferences
  project_goals TEXT[], -- What they're looking for
  project_type TEXT, -- 'academic', 'side_project', 'startup', 'open_to_anything'
  project_deadline DATE,
  
  -- Availability
  hours_per_week INTEGER,
  collaboration_style collaboration_style_type,
  preferred_work_locations TEXT[],
  meeting_times TEXT[],
  
  -- Mentor-specific
  expertise_areas TEXT[],
  mentorship_offerings TEXT[],
  max_mentees INTEGER,
  time_commitment_monthly INTEGER,
  booking_link TEXT,
  
  -- Links
  linkedin_url TEXT,
  github_url TEXT,
  portfolio_url TEXT,
  personal_website TEXT,
  google_scholar_url TEXT,
  
  -- Metadata
  onboarding_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  creator_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Project Info
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  project_type TEXT NOT NULL, -- 'academic', 'startup', 'side_project'
  
  -- Requirements
  skills_needed TEXT[],
  roles_needed TEXT[], -- 'Frontend Developer', 'Designer', etc.
  team_size_target INTEGER,
  
  -- Timeline
  deadline DATE,
  duration_weeks INTEGER,
  hours_per_week_required INTEGER,
  
  -- Project DNA needs
  dna_needs project_dna_type[],
  
  -- Status
  status TEXT DEFAULT 'open', -- 'open', 'in_progress', 'completed', 'closed'
  current_team_size INTEGER DEFAULT 1,
  
  -- Visibility
  is_public BOOLEAN DEFAULT TRUE,
  schools TEXT[], -- Which schools this project is relevant to
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project members
CREATE TABLE project_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT, -- Their role in the project
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'active', -- 'active', 'left', 'removed'
  
  UNIQUE(project_id, user_id)
);

-- User experience
CREATE TABLE user_experience (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  duration TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User projects (portfolio projects)
CREATE TABLE user_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  technologies TEXT[],
  url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Connections (matches)
CREATE TABLE connections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  from_user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  to_user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  
  status TEXT DEFAULT 'pending', -- 'pending', 'accepted', 'rejected'
  message TEXT,
  
  -- Match data
  match_score INTEGER, -- 0-100
  match_factors JSONB, -- Detailed breakdown of match
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  responded_at TIMESTAMP WITH TIME ZONE,
  
  UNIQUE(from_user_id, to_user_id, project_id)
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id UUID NOT NULL,
  sender_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Conversations
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  participant_ids UUID[], -- Array of user IDs
  project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  last_message_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Mentor relationships
CREATE TABLE mentorships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  mentor_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  mentee_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  
  status TEXT DEFAULT 'active', -- 'active', 'completed', 'paused'
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  
  UNIQUE(mentor_id, mentee_id)
);

-- Indexes for performance
CREATE INDEX idx_profiles_account_type ON profiles(account_type);
CREATE INDEX idx_profiles_school ON profiles(school);
CREATE INDEX idx_profiles_project_dna ON profiles(project_dna);
CREATE INDEX idx_profiles_completion_style ON profiles(completion_style);
CREATE INDEX idx_profiles_skills ON profiles USING GIN(skills);

CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_creator_id ON projects(creator_id);
CREATE INDEX idx_projects_skills_needed ON projects USING GIN(skills_needed);

CREATE INDEX idx_connections_from_user ON connections(from_user_id);
CREATE INDEX idx_connections_to_user ON connections(to_user_id);
CREATE INDEX idx_connections_status ON connections(status);

CREATE INDEX idx_messages_conversation ON messages(conversation_id);
CREATE INDEX idx_messages_sender ON messages(sender_id);

-- RLS (Row Level Security) Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read all profiles, update only their own
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Projects: Public projects viewable by all, creators can manage their own
CREATE POLICY "Public projects are viewable by everyone"
  ON projects FOR SELECT
  USING (is_public = true OR creator_id = auth.uid());

CREATE POLICY "Users can create projects"
  ON projects FOR INSERT
  WITH CHECK (auth.uid() = creator_id);

CREATE POLICY "Creators can update their projects"
  ON projects FOR UPDATE
  USING (auth.uid() = creator_id);

-- Connections: Users can see connections where they're involved
CREATE POLICY "Users can see their connections"
  ON connections FOR SELECT
  USING (auth.uid() = from_user_id OR auth.uid() = to_user_id);

CREATE POLICY "Users can create connections"
  ON connections FOR INSERT
  WITH CHECK (auth.uid() = from_user_id);

-- Messages: Users can only see messages in their conversations
CREATE POLICY "Users can see messages in their conversations"
  ON messages FOR SELECT
  USING (
    sender_id = auth.uid() OR
    conversation_id IN (
      SELECT id FROM conversations
      WHERE auth.uid() = ANY(participant_ids)
    )
  );
```

---

## User Interface Specifications

### Design System

**Colors:**
```css
/* Hey Maple Brand Colors */
--maple-primary: #D97706;      /* Orange-600 (maple leaf) */
--maple-secondary: #7C3AED;    /* Purple-600 (USC influence) */
--maple-accent: #059669;       /* Green-600 (growth/connection) */

/* Backgrounds */
--bg-primary: #FFFFFF;
--bg-secondary: #F9FAFB;
--bg-accent: #FEF3C7;          /* Amber-100 (warm) */

/* Text */
--text-primary: #111827;       /* Gray-900 */
--text-secondary: #6B7280;     /* Gray-500 */
--text-muted: #9CA3AF;         /* Gray-400 */

/* Borders */
--border-light: #E5E7EB;       /* Gray-200 */
--border-medium: #D1D5DB;      /* Gray-300 */
```

**Typography:**
```css
/* Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Sizes */
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;    /* 16px */
--text-lg: 1.125rem;  /* 18px */
--text-xl: 1.25rem;   /* 20px */
--text-2xl: 1.5rem;   /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem;  /* 36px */

/* Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

**Spacing:**
```css
/* Based on 4px scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

**Border Radius:**
```css
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-full: 9999px;  /* Pills/circles */
```

**Shadows:**
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
```

### Component Library

**Button Variants:**
```tsx
// Primary (main CTAs)
<button className="bg-maple-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
  Complete Setup
</button>

// Secondary (less emphasis)
<button className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50">
  Previous
</button>

// Ghost (minimal)
<button className="text-maple-primary px-4 py-2 rounded-lg font-medium hover:bg-orange-50">
  Skip
</button>
```

**Input Fields:**
```tsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">
    Full Name
  </label>
  <input
    type="text"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maple-primary focus:border-transparent"
    placeholder="Your name"
  />
</div>
```

**Cards:**
```tsx
<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
  {/* Card content */}
</div>
```

**Match Cards:**
```tsx
<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-all">
  {/* Match percentage badge */}
  <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-white">
    <span className="font-bold">96% Match</span>
  </div>
  
  {/* Profile info */}
  <div className="p-6">
    <div className="flex items-start gap-4">
      <img src={avatar} className="w-16 h-16 rounded-full" />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">Jake Rodriguez</h3>
        <p className="text-sm text-gray-600">CS Senior • Viterbi</p>
      </div>
    </div>
    
    {/* DNA badge */}
    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
      🔨 Builder
    </div>
    
    {/* Why you match */}
    <div className="mt-4 space-y-2">
      <p className="text-sm font-medium text-gray-700">Why you'll work great together:</p>
      <ul className="space-y-1 text-sm text-gray-600">
        <li>✓ Perfect complement: You're a Dreamer, he's a Builder</li>
        <li>✓ Has exact skills you need (React, Node.js)</li>
        <li>✓ Similar availability (10-15 hrs/week)</li>
      </ul>
    </div>
    
    {/* Actions */}
    <div className="mt-6 flex gap-3">
      <button className="flex-1 bg-maple-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700">
        Invite to Project
      </button>
      <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50">
        Message
      </button>
    </div>
  </div>
</div>
```

---

## Summary & Next Steps

### What We've Built

This comprehensive specification document includes:

1. ✅ **Complete onboarding flows** for students, faculty, and mentors
2. ✅ **Comprehensive skills taxonomy** covering all USC schools
3. ✅ **AI resume parsing** with full implementation details
4. ✅ **LinkedIn import** capability (OAuth + scraping fallback)
5. ✅ **Project DNA framework** (Dreamer/Planner/Builder)
6. ✅ **Completion Style framework** (5 finisher types)
7. ✅ **Advanced matching algorithm** with multi-factor scoring
8. ✅ **Complete database schema** with indexes and RLS
9. ✅ **Technical architecture** and tech stack
10. ✅ **UI specifications** and design system

### Implementation Roadmap

**Week 1-2: Foundation**
- [ ] Set up Supabase project
- [ ] Implement database schema
- [ ] Build authentication (USC Google OAuth)
- [ ] Create basic routing structure

**Week 3-4: Onboarding**
- [ ] Build student onboarding flow (7 steps)
- [ ] Build mentor onboarding flow (5 steps)
- [ ] Implement resume upload + parsing
- [ ] Test and refine onboarding UX

**Week 5-6: Matching Engine**
- [ ] Implement matching algorithm
- [ ] Build discovery feed
- [ ] Create match cards with insights
- [ ] Test matching accuracy

**Week 7-8: Core Features**
- [ ] Connection requests system
- [ ] Messaging functionality
- [ ] Profile pages
- [ ] Project creation

**Week 9-10: Polish & Launch**
- [ ] UI refinements
- [ ] Performance optimization
- [ ] Beta testing with USC students
- [ ] Soft launch

### Key Differentiators

**vs. Ship Together:**
- ✅ Campus-specific (@usc.edu only)
- ✅ Cross-school discovery
- ✅ Personality + completion style matching
- ✅ Academic project support
- ✅ Faculty mentorship integration

**vs. LinkedIn:**
- ✅ Project-focused (not jobs)
- ✅ Student-to-student collaboration
- ✅ Personality compatibility scoring
- ✅ Video pitches (not just text profiles)
- ✅ Built for completing projects together

**vs. Handshake:**
- ✅ Peer collaboration (not just internships)
- ✅ Project DNA matching
- ✅ Real-time matching algorithm
- ✅ Completion style compatibility

---

## File Manifest

This document contains the complete specification for:
- Account type selection and routing
- Student onboarding (7 steps with all questions)
- Mentor/Faculty onboarding (5 steps)
- Complete skills taxonomy (500+ skills across 9 categories)
- AI resume parsing (full implementation)
- LinkedIn import (OAuth + scraping)
- Project DNA framework (Dreamer/Planner/Builder)
- Completion Style framework (5 types)
- Advanced matching algorithm (multi-factor)
- Complete database schema (SQL)
- Technical architecture
- UI/UX specifications
- Design system and component library

**Total Pages: ~75 pages of comprehensive documentation**

**Ready for development handoff to engineering team.**

---

*Document Version: 1.0*  
*Last Updated: October 25, 2025*  
*Created by: NaLonni Madden*  
*For: Hey Maple - USC Student Collaboration Platform*
