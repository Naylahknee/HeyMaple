import { CollaborationMode, ModeDefinition, Question, User, Message, Connection, Notification } from './types';
import avatar1 from '@assets/generated_images/college-age_female_student_portrait.png';
import avatar2 from '@assets/generated_images/college-age_male_student_portrait.png';
import avatar3 from '@assets/generated_images/college-age_diverse_female_student.png';
import avatar4 from '@assets/generated_images/college-age_male_student_portrait_b46c59e3.png';
import avatar5 from '@assets/generated_images/college-age_female_student_portrait_25cb67df.png';

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
    avatar: avatar1,
    mode: "Architect",
    secondaryMode: "Builder",
    modeConfidence: 85,
    skills: ["System Design", "React", "Python", "AWS"],
    bio: "I love building scalable systems and thinking about the big picture. Looking for builders to help execute a new fintech idea.",
    verification: { emailVerified: true, studentIdVerified: true },
    reviews: [
      { authorName: "Alex Rivera", authorMode: "Builder", rating: 5, text: "Sarah's vision was crystal clear and kept us aligned. Perfect collaboration.", projectName: "PayFlow App", date: "2 months ago" }
    ]
  },
  {
    id: "u2",
    name: "Marcus Johnson",
    major: "Business Admin",
    year: 2024,
    avatar: avatar2,
    mode: "Coordinator",
    secondaryMode: "Catalyst",
    modeConfidence: 90,
    skills: ["Project Management", "Notion", "Agile", "Public Speaking"],
    bio: "Obsessed with keeping teams organized and moving forward. I turn chaos into clear action items.",
    verification: { emailVerified: true, studentIdVerified: true },
    reviews: [
      { authorName: "Sarah Chen", authorMode: "Architect", rating: 5, text: "Marcus organized us flawlessly. Every sprint was on track.", projectName: "PayFlow App", date: "2 months ago" }
    ]
  },
  {
    id: "u3",
    name: "Emily Davis",
    major: "Interaction Design",
    year: 2025,
    avatar: avatar3,
    mode: "Refiner",
    secondaryMode: "Architect",
    modeConfidence: 75,
    skills: ["Figma", "User Testing", "Accessibility", "CSS"],
    bio: "Good design is invisible. I love taking rough prototypes and polishing them into professional products.",
    verification: { emailVerified: true, studentIdVerified: false },
    reviews: [
      { authorName: "Marcus Johnson", authorMode: "Coordinator", rating: 5, text: "Emily's attention to detail elevated the entire product. Users loved the polish.", projectName: "PayFlow App", date: "2 months ago" }
    ]
  },
  {
    id: "u4",
    name: "Alex Rivera",
    major: "Electrical Engineering",
    year: 2026,
    avatar: avatar4,
    mode: "Builder",
    secondaryMode: "Refiner",
    modeConfidence: 80,
    skills: ["C++", "Embedded Systems", "Circuit Design", "Prototyping"],
    bio: "Just let me build. I love hackathons and shipping real hardware/software solutions quickly.",
    verification: { emailVerified: true, studentIdVerified: true },
    reviews: [
      { authorName: "Emily Davis", authorMode: "Refiner", rating: 5, text: "Shipped features faster than anyone I've worked with. Zero technical debt.", projectName: "PayFlow App", date: "2 months ago" }
    ]
  },
  {
    id: "u5",
    name: "Jordan Lee",
    major: "Marketing",
    year: 2024,
    avatar: avatar5,
    mode: "Catalyst",
    secondaryMode: "Coordinator",
    modeConfidence: 88,
    skills: ["Growth Hacking", "Networking", "Social Media", "Fundraising"],
    bio: "I connect the dots. If you need funding, users, or connections for your project, I'm your person.",
    verification: { emailVerified: true, studentIdVerified: true },
    reviews: [
      { authorName: "Sarah Chen", authorMode: "Architect", rating: 5, text: "Jordan got us 5K beta users in 2 weeks. Game changer for validation.", projectName: "PayFlow App", date: "2 months ago" }
    ]
  }
];

export const MOCK_MESSAGES: Message[] = [
  { id: "m1", senderId: "u1", senderName: "Sarah Chen", senderAvatar: avatar1, text: "Hey! I saw you're a builder. I'm working on a fintech project and need someone who can execute quickly.", timestamp: new Date(Date.now() - 3600000) },
  { id: "m2", senderId: "me", senderName: "You", senderAvatar: avatar1, text: "That sounds perfect! I love shipping fast. What's the main challenge?", timestamp: new Date(Date.now() - 3000000) },
  { id: "m3", senderId: "u1", senderName: "Sarah Chen", senderAvatar: avatar1, text: "We need to build the payment processing layer and API integration by end of month. Think you can handle it?", timestamp: new Date(Date.now() - 2400000) },
  { id: "m4", senderId: "me", senderName: "You", senderAvatar: avatar1, text: "Absolutely. I've done similar integrations before. Let's jump on a call?", timestamp: new Date(Date.now() - 1800000) },
];

export const MOCK_CONNECTIONS: Connection[] = [
  { id: "c1", userId: "me", matchId: "u1", status: "connected", introMessage: "Love your vision for fintech!", createdAt: new Date(Date.now() - 86400000) },
  { id: "c2", userId: "me", matchId: "u2", status: "pending", introMessage: "Your org skills would help us stay on track", createdAt: new Date(Date.now() - 43200000) },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: "n1", type: "connection_request", title: "Sarah Chen wants to connect", description: "Love your vision for fintech!", relatedUserId: "u1", read: false, createdAt: new Date(Date.now() - 3600000) },
  { id: "n2", type: "message", title: "New message from Sarah Chen", description: "That sounds perfect! I love shipping fast...", relatedUserId: "u1", read: false, createdAt: new Date(Date.now() - 1800000) },
  { id: "n3", type: "profile_viewed", title: "Marcus Johnson viewed your profile", description: "", relatedUserId: "u2", read: true, createdAt: new Date(Date.now() - 7200000) },
];
