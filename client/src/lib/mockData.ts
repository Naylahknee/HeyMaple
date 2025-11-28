import { CollaborationMode, ModeDefinition, Question, User } from './types';

export const MODES: Record<CollaborationMode, ModeDefinition> = {
  Architect: {
    id: 'Architect',
    tagline: "I see the big picture and love designing systems",
    description: "Architects excel at strategic planning and vision articulation. They think in frameworks and abstractions, needing collaborators who can execute their vision.",
    strengths: ["Vision clarity", "Strategic thinking", "System design", "Big picture perspective"],
    weaknesses: ["Can get stuck planning", "May over-engineer", "Frustrated by details"],
    bestPairedWith: ['Builder', 'Coordinator'],
    avoidPairingWith: ['Architect'],
    color: "bg-blue-500",
    icon: "Box"
  },
  Builder: {
    id: 'Builder',
    tagline: "Give me a clear goal and I'll make it happen",
    description: "Builders prefer action over planning. They learn by building and are happiest when shipping features with clear requirements.",
    strengths: ["Rapid execution", "High productivity", "Practical problem-solving", "Gets things done"],
    weaknesses: ["May build too fast", "Can create technical debt", "Dislikes planning"],
    bestPairedWith: ['Architect', 'Coordinator'],
    avoidPairingWith: ['Builder'],
    color: "bg-orange-500",
    icon: "Hammer"
  },
  Coordinator: {
    id: 'Coordinator',
    tagline: "I keep everyone organized and on track",
    description: "Coordinators are natural project managers who facilitate communication, track progress, and keep the team aligned.",
    strengths: ["Project management", "Communication", "Deadline management", "Team cohesion"],
    weaknesses: ["Can over-structure", "Focuses on process over product", "Struggles solo"],
    bestPairedWith: ['Catalyst', 'Builder', 'Architect'],
    avoidPairingWith: ['Coordinator'],
    color: "bg-purple-500",
    icon: "ClipboardList"
  },
  Refiner: {
    id: 'Refiner',
    tagline: "I make good things great through iteration",
    description: "Refiners focus on quality, polish, and user experience. They spot edge cases and obsessively iterate on details.",
    strengths: ["Quality assurance", "Attention to detail", "UX thinking", "Polishing"],
    weaknesses: ["Perfectionism spiral", "Slows down velocity", "Struggles with 0-to-1"],
    bestPairedWith: ['Builder', 'Coordinator'],
    avoidPairingWith: ['Refiner'],
    color: "bg-teal-500",
    icon: "Diamond"
  },
  Catalyst: {
    id: 'Catalyst',
    tagline: "I connect people, ideas, and resources",
    description: "Catalysts naturally network, bring energy, and connect the team with mentors and resources. They excel at partnerships.",
    strengths: ["Networking", "Resource acquisition", "Team morale", "Creative ideation"],
    weaknesses: ["Scattered focus", "May over-promise", "Struggles with execution"],
    bestPairedWith: ['Coordinator', 'Builder'],
    avoidPairingWith: ['Catalyst'],
    color: "bg-yellow-500",
    icon: "Zap"
  }
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Your team just got assigned a semester-long capstone project. What's your first instinct?",
    options: [
      { label: "Map out the entire project architecture and create a technical roadmap", mode: "Architect" },
      { label: "Ask what specifically needs to be built and start setting up the development environment", mode: "Builder" },
      { label: "Create a shared document with timeline, milestones, and task assignments", mode: "Coordinator" },
      { label: "Review the project requirements to identify potential quality issues and edge cases", mode: "Refiner" },
      { label: "Reach out to professors/alumni who've done similar projects for advice", mode: "Catalyst" }
    ]
  },
  {
    id: 2,
    text: "It's week 6 of 12, and you realize your original plan won't work. What do you do?",
    options: [
      { label: "Redesign the system architecture with lessons learned", mode: "Architect" },
      { label: "Pivot quickly and start building the new solution immediately", mode: "Builder" },
      { label: "Call an emergency team meeting to replan and redistribute tasks", mode: "Coordinator" },
      { label: "Analyze what went wrong and how to avoid similar issues", mode: "Refiner" },
      { label: "Tap your network for advice from people who've faced similar challenges", mode: "Catalyst" }
    ]
  },
  {
    id: 3,
    text: "Two teammates are arguing about the direction of the project. How do you respond?",
    options: [
      { label: "Present a strategic framework showing how both ideas could fit together", mode: "Architect" },
      { label: "Suggest building quick prototypes of both approaches to test", mode: "Builder" },
      { label: "Facilitate a structured discussion to reach consensus and move forward", mode: "Coordinator" },
      { label: "Evaluate both options against quality and user experience criteria", mode: "Refiner" },
      { label: "Bring in an external advisor or mentor to provide perspective", mode: "Catalyst" }
    ]
  },
  {
    id: 4,
    text: "Your demo is in 2 weeks but the product isn't ready. What's your priority?",
    options: [
      { label: "Ensure the core concept is clearly communicated even if incomplete", mode: "Architect" },
      { label: "Work overtime to ship as many features as possible", mode: "Builder" },
      { label: "Triage ruthlessly: finish what we can, cut what we can't", mode: "Coordinator" },
      { label: "Polish the features we have to make a great impression", mode: "Refiner" },
      { label: "Leverage network to get feedback and generate buzz", mode: "Catalyst" }
    ]
  },
  {
    id: 5,
    text: "You have an idea but no team yet. What's your first move?",
    options: [
      { label: "Flesh out the complete vision and create a pitch deck", mode: "Architect" },
      { label: "Build a rough prototype to show what's possible", mode: "Builder" },
      { label: "Make a list of needed roles and start recruiting", mode: "Coordinator" },
      { label: "Research similar products to understand the competitive landscape", mode: "Refiner" },
      { label: "Share the idea widely to find collaborators and advisors", mode: "Catalyst" }
    ]
  },
  {
    id: 6,
    text: "You present your work and get critical feedback. How do you react?",
    options: [
      { label: "Think about how feedback fits into the bigger vision", mode: "Architect" },
      { label: "Start implementing the changes immediately", mode: "Builder" },
      { label: "Document feedback and create action items for the team", mode: "Coordinator" },
      { label: "Dig deeper into the criticism to fully understand the issues", mode: "Refiner" },
      { label: "Ask follow-up questions and seek additional perspectives", mode: "Catalyst" }
    ]
  },
  {
    id: 7,
    text: "You have 4 hours to work on the project. How do you spend it?",
    options: [
      { label: "Design the next major feature or system component", mode: "Architect" },
      { label: "Code, build, or create tangible deliverables", mode: "Builder" },
      { label: "Update documentation, track progress, plan next steps", mode: "Coordinator" },
      { label: "Test, debug, and improve existing work", mode: "Refiner" },
      { label: "Attend networking events, coffee chats, or partnership meetings", mode: "Catalyst" }
    ]
  },
  {
    id: 8,
    text: "On your dream project, you'd love to be the person who...",
    options: [
      { label: "Sets the strategic direction and overall vision", mode: "Architect" },
      { label: "Builds the core product and ships features", mode: "Builder" },
      { label: "Keeps everyone aligned and on schedule", mode: "Coordinator" },
      { label: "Ensures everything meets high quality standards", mode: "Refiner" },
      { label: "Brings in resources, partnerships, and visibility", mode: "Catalyst" }
    ]
  },
  {
    id: 9,
    text: "In team meetings, you're usually the one who...",
    options: [
      { label: "Presents the big picture and long-term strategy", mode: "Architect" },
      { label: "Gives updates on what you've built and next tasks", mode: "Builder" },
      { label: "Runs the meeting and ensures everyone contributes", mode: "Coordinator" },
      { label: "Points out potential issues and areas for improvement", mode: "Refiner" },
      { label: "Shares exciting opportunities and connections", mode: "Catalyst" }
    ]
  },
  {
    id: 10,
    text: "You feel most accomplished when...",
    options: [
      { label: "The team understands and aligns on your vision", mode: "Architect" },
      { label: "You ship a working feature or product", mode: "Builder" },
      { label: "The team operates smoothly without conflicts", mode: "Coordinator" },
      { label: "Users praise the quality and polish of your work", mode: "Refiner" },
      { label: "You make a valuable connection that helps the team", mode: "Catalyst" }
    ]
  }
];

export const MOCK_USERS: User[] = [
  {
    id: "u1",
    name: "Sarah Chen",
    major: "Computer Science",
    year: 2025,
    avatar: "https://i.pravatar.cc/150?u=u1",
    mode: "Architect",
    secondaryMode: "Builder",
    modeConfidence: 85,
    skills: ["System Design", "React", "Python", "AWS"],
    bio: "I love building scalable systems and thinking about the big picture. Looking for builders to help execute a new fintech idea."
  },
  {
    id: "u2",
    name: "Marcus Johnson",
    major: "Business Admin",
    year: 2024,
    avatar: "https://i.pravatar.cc/150?u=u2",
    mode: "Coordinator",
    secondaryMode: "Catalyst",
    modeConfidence: 90,
    skills: ["Project Management", "Notion", "Agile", "Public Speaking"],
    bio: "Obsessed with keeping teams organized and moving forward. I turn chaos into clear action items."
  },
  {
    id: "u3",
    name: "Emily Davis",
    major: "Interaction Design",
    year: 2025,
    avatar: "https://i.pravatar.cc/150?u=u3",
    mode: "Refiner",
    secondaryMode: "Architect",
    modeConfidence: 75,
    skills: ["Figma", "User Testing", "Accessibility", "CSS"],
    bio: "Good design is invisible. I love taking rough prototypes and polishing them into professional products."
  },
  {
    id: "u4",
    name: "Alex Rivera",
    major: "Electrical Engineering",
    year: 2026,
    avatar: "https://i.pravatar.cc/150?u=u4",
    mode: "Builder",
    secondaryMode: "Refiner",
    modeConfidence: 80,
    skills: ["C++", "Embedded Systems", "Circuit Design", "Prototyping"],
    bio: "Just let me build. I love hackathons and shipping real hardware/software solutions quickly."
  },
  {
    id: "u5",
    name: "Jordan Lee",
    major: "Marketing",
    year: 2024,
    avatar: "https://i.pravatar.cc/150?u=u5",
    mode: "Catalyst",
    secondaryMode: "Coordinator",
    modeConfidence: 88,
    skills: ["Growth Hacking", "Networking", "Social Media", "Fundraising"],
    bio: "I connect the dots. If you need funding, users, or connections for your project, I'm your person."
  }
];
