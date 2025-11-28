# HeyMaple Algorithm Behavior Document v1.0

## Document Overview

**Purpose:** Define the complete matching algorithm, compatibility scoring, and personalized experience logic for HeyMaple - the student collaboration platform.

**Scope:** This document covers the psychology-based matching system that differentiates HeyMaple from generic skill-matching platforms.

**Version:** 1.0 - Complete Algorithm Specification  
**Date:** October 25, 2025  
**Status:** Ready for Technical Implementation

---

## Table of Contents

1. Assessment & Personality Framework
2. Compatibility Scoring Algorithm
3. Matching Engine Logic
4. Personalized Experience Flows
5. Premium Features & Gating
6. Learning & Optimization

---

## 1. ASSESSMENT & PERSONALITY FRAMEWORK

### 1.1 The Five Collaboration Modes

**Core Philosophy:** Students fail at collaboration not because of skill mismatches, but because of incompatible working styles. HeyMaple identifies HOW students work, not just WHAT they know.

**The Five Modes:**

#### 🏗️ The Architect
**Tagline:** "I see the big picture and love designing systems"

**Core Behaviors:**
- Starts with end goal and works backward
- Draws system diagrams before writing code
- Excels at strategic planning and vision articulation
- Thinks in frameworks and abstractions
- Needs collaborators who can execute their vision

**Strengths:**
- Vision clarity and strategic thinking
- System design and architecture planning
- Big picture perspective
- Innovation and conceptual breakthroughs

**Weaknesses:**
- Can get stuck in planning without execution
- May over-engineer solutions
- Frustrated when execution doesn't match vision
- Struggles with mundane implementation details

**Needs from Teammates:**
- Builders who can bring vision to life
- Coordinators to manage the execution process
- Patience with iteration and refinement

**Warning Signs:**
- "I spent three weeks designing the perfect architecture but haven't written a single line of code"
- Multiple pivot documents with no MVP
- Frustrated that team "doesn't get the vision"

**Best Paired With:** Builders (5/5), Coordinators (4/5)  
**Avoid Pairing With:** Other Architects (2/5), Catalysts without grounding (2/5)

---

#### 🔨 The Builder
**Tagline:** "Give me a clear goal and I'll make it happen"

**Core Behaviors:**
- Prefers action over planning
- Asks "what needs to be built by when?"
- Happiest when shipping features
- Learns by building, not by reading
- Needs clear requirements and deadlines

**Strengths:**
- Rapid execution and implementation
- High productivity and output
- Practical problem-solving
- Gets things done reliably
- Thrives under clear direction

**Weaknesses:**
- May build before fully understanding requirements
- Can create technical debt from rushing
- Frustrated by "too much planning"
- Needs external direction for prioritization

**Needs from Teammates:**
- Architects to provide vision and direction
- Coordinators to prioritize tasks
- Clear, actionable requirements

**Warning Signs:**
- "I built three features but we never decided which one we needed"
- Shipping fast but without strategy
- Frustrated by meetings and planning sessions

**Best Paired With:** Architects (5/5), Coordinators (4/5)  
**Avoid Pairing With:** Other Builders without leadership (2/5), Refiners too early (2/5)

---

#### 📋 The Coordinator
**Tagline:** "I keep everyone organized and on track"

**Core Behaviors:**
- Creates project timelines and task lists immediately
- Natural project manager
- Facilitates communication between teammates
- Tracks progress and identifies blockers
- Excels at keeping teams aligned

**Strengths:**
- Project management and organization
- Communication facilitation
- Deadline management
- Process optimization
- Team cohesion and morale

**Weaknesses:**
- Can over-structure simple projects
- May focus on process over product
- Frustrated when team ignores structure
- Needs a team to coordinate (struggles solo)

**Needs from Teammates:**
- Multi-person teams (minimum 3 people)
- Both vision (Architects) and execution (Builders)
- Buy-in on processes and structure

**Warning Signs:**
- "I made the most beautiful Gantt chart but we still don't know what we're building"
- More time spent on project management tools than actual work
- Frustrated team members feeling "over-managed"

**Best Paired With:** Architects (4/5), Builders (4/5), Catalysts (5/5)  
**Avoid Pairing With:** Solo projects (1/5), other Coordinators (3/5)

---

#### 🎨 The Refiner
**Tagline:** "I make good things great through iteration"

**Core Behaviors:**
- Focuses on quality, polish, and user experience
- Spots edge cases and potential issues
- Iterates obsessively on details
- Asks "how can we make this better?"
- Needs working prototypes to improve

**Strengths:**
- Quality assurance and attention to detail
- User experience and design thinking
- Bug identification and edge case handling
- Making products production-ready
- Elevating good work to excellent

**Weaknesses:**
- Can perfectionism-spiral (never "done enough")
- Frustrated when team wants to ship "good enough"
- Struggles with 0-to-1 building (needs something to refine)
- May slow down shipping velocity

**Needs from Teammates:**
- Builders to create initial versions
- Clear "definition of done" criteria
- Permission to ship imperfect v1s

**Warning Signs:**
- "I spent three weeks perfecting the color scheme but we never launched"
- Endless revision cycles
- Team frustrated by constant change requests

**Best Paired With:** Builders (4/5), Coordinators (4/5)  
**Avoid Pairing With:** Other Refiners (2/5), early-stage projects (2/5), Architects without execution (1/5)

---

#### ⚡ The Catalyst
**Tagline:** "I connect people, ideas, and resources"

**Core Behaviors:**
- Naturally networks and builds relationships
- Brings energy and enthusiasm to teams
- Connects team with mentors, resources, advisors
- Generates ideas and opportunities
- Excels at partnerships and visibility

**Strengths:**
- Networking and relationship building
- Resource acquisition (funding, space, tools)
- Team morale and motivation
- External visibility and promotion
- Creative ideation and brainstorming

**Weaknesses:**
- Can be scattered across too many initiatives
- May over-promise or overhype
- Struggles with execution and follow-through
- Needs grounded teammates to channel energy

**Needs from Teammates:**
- Builders and Coordinators to execute ideas
- Structure to focus scattered energy
- Appreciation for non-technical contributions

**Warning Signs:**
- "I introduced our team to five advisors and got us meeting space, but didn't write a single line of code"
- Too many projects started, none finished
- Team frustrated by lack of tangible contributions

**Best Paired With:** Coordinators (5/5), Builders (4/5), Architects (3/5)  
**Avoid Pairing With:** Other Catalysts (1/5), solo projects (2/5)

---

### 1.2 Collaboration Mode Compatibility Matrix

**How different modes work together:**

```
                ARCHITECT  BUILDER  COORDINATOR  REFINER  CATALYST
ARCHITECT          2         5          4          3        3
BUILDER            5         2          4          4        4
COORDINATOR        4         4          3          4        5
REFINER            3         4          4          2        3
CATALYST           3         4          5          3        1

Legend:
5 = Perfect pairing (complementary strengths)
4 = Strong pairing (works well together)
3 = Good pairing (can work with clear roles)
2 = Challenging pairing (needs third person)
1 = Avoid pairing (likely to clash)
```

**Pairing Explanations:**

**Architect + Builder (5/5) - "The Dream Team"**
- Architect provides vision, Builder executes
- Natural division of labor
- Architect designs, Builder implements
- Both respect each other's strengths
- Example: Steve Jobs (Architect) + Steve Wozniak (Builder)

**Architect + Architect (2/5) - "Vision Clash"**
- Competing visions cause friction
- Too much planning, not enough execution
- Both want control of direction
- Works only with clear domain separation
- Example: Two founders arguing over product direction for months

**Builder + Builder (2/5) - "Leaderless Execution"**
- Both need direction, no one provides it
- May build conflicting solutions
- Lacks strategic coherence
- Works only with external Product Manager
- Example: Two developers building different features without coordination

**Coordinator + Catalyst (5/5) - "Organized Chaos"**
- Coordinator channels Catalyst's energy
- Catalyst brings opportunities, Coordinator delivers
- Perfect balance of creativity and execution
- Catalyst networks, Coordinator tracks commitments
- Example: Energetic founder + operational COO

**Refiner + Refiner (2/5) - "Perfectionism Paralysis"**
- Both want to improve, nothing ships
- Competing quality standards
- No one to say "this is good enough"
- Product never launches
- Example: Two designers endlessly iterating on mockups

**Coordinator + Coordinator (3/5) - "Too Many Cooks"**
- Competing organizational systems
- One should lead, one should contribute
- Can work if managing different domains
- Example: Two project managers with different methodologies

---

### 1.3 Assessment Design

**Goal:** Identify user's primary and secondary collaboration modes in 3 minutes through behavioral scenarios.

**Format:** 10 multiple-choice questions with situation-based responses

**Question Structure:**

Each question presents a common collaboration scenario with 5 response options (one per mode). Users select the response that most closely matches their natural behavior.

**Sample Assessment Questions:**

**Question 1: Project Kickoff**
*"Your team just got assigned a semester-long capstone project. What's your first instinct?"*

A. Map out the entire project architecture and create a technical roadmap [Architect]
B. Ask what specifically needs to be built and start setting up the development environment [Builder]
C. Create a shared document with timeline, milestones, and task assignments [Coordinator]
D. Review the project requirements to identify potential quality issues and edge cases [Refiner]
E. Reach out to professors/alumni who've done similar projects for advice [Catalyst]

**Question 2: Mid-Project Crisis**
*"It's week 6 of 12, and you realize your original plan won't work. What do you do?"*

A. Redesign the system architecture with lessons learned [Architect]
B. Pivot quickly and start building the new solution immediately [Builder]
C. Call an emergency team meeting to replan and redistribute tasks [Coordinator]
D. Analyze what went wrong and how to avoid similar issues [Refiner]
E. Tap your network for advice from people who've faced similar challenges [Catalyst]

**Question 3: Team Conflict**
*"Two teammates are arguing about the direction of the project. How do you respond?"*

A. Present a strategic framework showing how both ideas could fit together [Architect]
B. Suggest building quick prototypes of both approaches to test [Builder]
C. Facilitate a structured discussion to reach consensus and move forward [Coordinator]
D. Evaluate both options against quality and user experience criteria [Refiner]
E. Bring in an external advisor or mentor to provide perspective [Catalyst]

**Question 4: Demo Day Approaching**
*"Your demo is in 2 weeks but the product isn't ready. What's your priority?"*

A. Ensure the core concept is clearly communicated even if incomplete [Architect]
B. Work overtime to ship as many features as possible [Builder]
C. Triage ruthlessly: finish what we can, cut what we can't [Coordinator]
D. Polish the features we have to make a great impression [Refiner]
E. Leverage network to get feedback and generate buzz [Catalyst]

**Question 5: Starting from Zero**
*"You have an idea but no team yet. What's your first move?"*

A. Flesh out the complete vision and create a pitch deck [Architect]
B. Build a rough prototype to show what's possible [Builder]
C. Make a list of needed roles and start recruiting [Coordinator]
D. Research similar products to understand the competitive landscape [Refiner]
E. Share the idea widely to find collaborators and advisors [Catalyst]

**Question 6: Feedback Response**
*"You present your work and get critical feedback. How do you react?"*

A. Think about how feedback fits into the bigger vision [Architect]
B. Start implementing the changes immediately [Builder]
C. Document feedback and create action items for the team [Coordinator]
D. Dig deeper into the criticism to fully understand the issues [Refiner]
E. Ask follow-up questions and seek additional perspectives [Catalyst]

**Question 7: Working Session**
*"You have 4 hours to work on the project. How do you spend it?"*

A. Design the next major feature or system component [Architect]
B. Code, build, or create tangible deliverables [Builder]
C. Update documentation, track progress, plan next steps [Coordinator]
D. Test, debug, and improve existing work [Refiner]
E. Attend networking events, coffee chats, or partnership meetings [Catalyst]

**Question 8: Role Preference**
*"On your dream project, you'd love to be the person who..."*

A. Sets the strategic direction and overall vision [Architect]
B. Builds the core product and ships features [Builder]
C. Keeps everyone aligned and on schedule [Coordinator]
D. Ensures everything meets high quality standards [Refiner]
E. Brings in resources, partnerships, and visibility [Catalyst]

**Question 9: Meeting Style**
*"In team meetings, you're usually the one who..."*

A. Presents the big picture and long-term strategy [Architect]
B. Gives updates on what you've built and next tasks [Builder]
C. Runs the meeting and ensures everyone contributes [Coordinator]
D. Points out potential issues and areas for improvement [Refiner]
E. Shares exciting opportunities and connections [Catalyst]

**Question 10: Success Feeling**
*"You feel most accomplished when..."*

A. The team understands and aligns on your vision [Architect]
B. You ship a working feature or product [Builder]
C. The team operates smoothly without conflicts [Coordinator]
D. Users praise the quality and polish of your work [Refiner]
E. You make a valuable connection that helps the team [Catalyst]

**Scoring Logic:**

```typescript
interface AssessmentResult {
  primary: CollaborationMode;
  secondary: CollaborationMode;
  confidence: number; // 0-100%
  scores: {
    architect: number;
    builder: number;
    coordinator: number;
    refiner: number;
    catalyst: number;
  };
}

function calculateMode(responses: string[]): AssessmentResult {
  const scores = {
    architect: 0,
    builder: 0,
    coordinator: 0,
    refiner: 0,
    catalyst: 0
  };
  
  // Count responses for each mode
  responses.forEach(response => {
    scores[response]++;
  });
  
  // Find primary (highest score)
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primary = sorted[0][0];
  const secondary = sorted[1][0];
  
  // Calculate confidence based on score separation
  const totalResponses = responses.length;
  const primaryScore = sorted[0][1];
  const secondaryScore = sorted[1][1];
  
  // High confidence if primary is clearly dominant
  const confidence = Math.min(100, (primaryScore / totalResponses) * 100 + 
                                   (primaryScore - secondaryScore) * 10);
  
  return {
    primary,
    secondary,
    confidence,
    scores
  };
}
```

**Result Presentation:**

```
┌─────────────────────────────────────────────────────┐
│  You're an Architect! 🏗️                            │
│                                                      │
│  Primary Mode: Architect (70% confidence)           │
│  Secondary Mode: Coordinator (20%)                  │
│                                                      │
│  What this means:                                   │
│  You excel at vision and system design. You see     │
│  the big picture and love creating strategic        │
│  frameworks. You work best when paired with         │
│  Builders who can execute your vision and           │
│  Coordinators who can organize the team.            │
│                                                      │
│  Your strengths:                                    │
│  ✓ Strategic thinking                               │
│  ✓ System design                                    │
│  ✓ Vision articulation                              │
│                                                      │
│  Watch out for:                                     │
│  ⚠️  Over-planning without execution                │
│  ⚠️  Frustration when vision isn't understood       │
│                                                      │
│  Based on 1,247 USC collaborations:                │
│  • Architect + Builder = 94% success rate           │
│  • Architect + Coordinator = 87% success rate       │
│                                                      │
│  [Continue to Find Matches]                         │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

### 1.4 Data Structure

**User Profile Schema:**

```typescript
interface UserProfile {
  // Basic Info
  userId: string;
  email: string;
  name: string;
  school: string; // "Viterbi", "Marshall", "Annenberg", etc.
  major: string;
  graduationYear: number;
  
  // Collaboration Mode
  collaborationMode: {
    primary: 'architect' | 'builder' | 'coordinator' | 'refiner' | 'catalyst';
    secondary: 'architect' | 'builder' | 'coordinator' | 'refiner' | 'catalyst';
    confidence: number; // 0-100
    assessmentDate: Date;
    rawScores: {
      architect: number;
      builder: number;
      coordinator: number;
      refiner: number;
      catalyst: number;
    };
  };
  
  // Skills & Experience
  skills: {
    technical: string[]; // ["React", "Python", "Figma"]
    domain: string[]; // ["UX Design", "Marketing", "Data Analysis"]
    soft: string[]; // ["Communication", "Leadership"]
  };
  
  // Availability
  availability: {
    hoursPerWeek: number; // 5, 10, 15, 20+
    timeframe: 'semester' | 'quarter' | 'summer' | 'year';
    schedule: 'flexible' | 'weekdays' | 'weekends' | 'evenings';
  };
  
  // Goals & Preferences
  goals: {
    primary: 'portfolio' | 'learning' | 'startup' | 'research' | 'social_impact';
    secondary?: string;
    description: string; // Free text
  };
  
  // Communication Style
  communication: {
    preferred: 'sync' | 'async' | 'hybrid';
    meetingFrequency: 'daily' | 'weekly' | 'biweekly' | 'monthly';
    responseTime: 'immediate' | 'same_day' | 'within_48hrs';
  };
  
  // Profile Content
  bio: string;
  videoPitchUrl?: string;
  portfolioLinks: string[];
  
  // Trust & History
  verification: {
    emailVerified: boolean;
    studentIdVerified: boolean;
    facultyEndorsed: boolean;
  };
  
  history: {
    projectsCompleted: number;
    projectsActive: number;
    averageRating: number; // 1-5 stars
    successRate: number; // % of completed projects
    responseTime: number; // avg hours to respond
  };
}
```

---

## 2. COMPATIBILITY SCORING ALGORITHM

### 2.1 The Five Dimensions

**Each dimension scored 1-5 points, total 25 points possible**

#### Dimension 1: Collaboration Chemistry (1-5 points)

**What it measures:** Do their working styles complement each other?

**Scoring Logic:**

```typescript
function calculateChemistryScore(
  user1Mode: CollaborationMode,
  user2Mode: CollaborationMode
): number {
  // Use compatibility matrix
  const compatibilityMatrix = {
    'architect-builder': 5,
    'architect-architect': 2,
    'architect-coordinator': 4,
    'architect-refiner': 3,
    'architect-catalyst': 3,
    
    'builder-builder': 2,
    'builder-coordinator': 4,
    'builder-refiner': 4,
    'builder-catalyst': 4,
    
    'coordinator-coordinator': 3,
    'coordinator-refiner': 4,
    'coordinator-catalyst': 5,
    
    'refiner-refiner': 2,
    'refiner-catalyst': 3,
    
    'catalyst-catalyst': 1
  };
  
  const key = [user1Mode, user2Mode].sort().join('-');
  return compatibilityMatrix[key] || 3; // Default to 3 if not found
}
```

**Chemistry Scoring Examples:**

- **Architect + Builder = 5/5** - Perfect complementary strengths
- **Coordinator + Catalyst = 5/5** - Catalyst generates, Coordinator delivers
- **Builder + Refiner = 4/5** - Builder ships, Refiner polishes
- **Architect + Coordinator = 4/5** - Vision meets organization
- **Architect + Architect = 2/5** - Competing visions
- **Builder + Builder = 2/5** - No strategic direction
- **Refiner + Refiner = 2/5** - Perfectionism paralysis
- **Catalyst + Catalyst = 1/5** - Too scattered, nothing ships

---

#### Dimension 2: Skills Alignment (1-5 points)

**What it measures:** Do their skills complement or overlap?

**Scoring Logic:**

```typescript
function calculateSkillsScore(
  user1Skills: string[],
  user2Skills: string[]
): number {
  const allSkills = new Set([...user1Skills, ...user2Skills]);
  const overlap = user1Skills.filter(s => user2Skills.includes(s));
  
  const overlapRatio = overlap.length / user1Skills.length;
  const complementarySkills = allSkills.size - overlap.length;
  
  // Perfect: High complementarity, low overlap
  // Good: Some overlap for collaboration, some complementarity
  // Poor: Complete overlap or no common ground
  
  if (overlapRatio < 0.2 && complementarySkills >= 5) {
    return 5; // Highly complementary (e.g., React dev + Designer)
  } else if (overlapRatio < 0.4 && complementarySkills >= 3) {
    return 4; // Good balance (e.g., Frontend + Backend dev)
  } else if (overlapRatio < 0.6) {
    return 3; // Some overlap, can still work together
  } else if (overlapRatio < 0.8) {
    return 2; // High overlap, limited complementarity
  } else {
    return 1; // Nearly identical skills, limited value add
  }
}
```

**Skills Scoring Examples:**

- **React Developer + UX Designer = 5/5** - Perfectly complementary
- **Frontend + Backend Developer = 4/5** - Different specialties, same domain
- **Marketing + Business Strategy = 3/5** - Some overlap, still useful
- **Marketing + Marketing = 2/5** - High overlap, limited complementarity
- **Two identical CS majors, same skills = 1/5** - No differentiation

**Special Cases:**

```typescript
// Project-specific skill matching
function calculateProjectSkillMatch(
  userSkills: string[],
  projectNeeds: string[]
): number {
  const matchedSkills = userSkills.filter(s => 
    projectNeeds.some(need => s.toLowerCase().includes(need.toLowerCase()))
  );
  
  const matchRatio = matchedSkills.length / projectNeeds.length;
  
  if (matchRatio >= 0.8) return 5; // Has 80%+ of needed skills
  if (matchRatio >= 0.6) return 4; // Has 60%+ of needed skills
  if (matchRatio >= 0.4) return 3; // Has 40%+ of needed skills
  if (matchRatio >= 0.2) return 2; // Has 20%+ of needed skills
  return 1; // Has <20% of needed skills
}
```

---

#### Dimension 3: Availability Match (1-5 points)

**What it measures:** Can they actually work together given time constraints?

**Scoring Logic:**

```typescript
function calculateAvailabilityScore(
  user1: UserProfile,
  user2: UserProfile
): number {
  let score = 0;
  
  // Hours per week match (0-2 points)
  const hoursDiff = Math.abs(user1.availability.hoursPerWeek - 
                             user2.availability.hoursPerWeek);
  
  if (hoursDiff <= 2) {
    score += 2; // Nearly identical commitment
  } else if (hoursDiff <= 5) {
    score += 1.5; // Close enough
  } else if (hoursDiff <= 10) {
    score += 1; // Workable but imbalanced
  } else {
    score += 0.5; // Significantly different commitment levels
  }
  
  // Timeframe match (0-2 points)
  if (user1.availability.timeframe === user2.availability.timeframe) {
    score += 2; // Same timeframe (e.g., both "semester")
  } else if (timeframesOverlap(user1.availability.timeframe, 
                                user2.availability.timeframe)) {
    score += 1; // Overlapping timeframes
  } else {
    score += 0; // Non-overlapping timeframes
  }
  
  // Schedule compatibility (0-1 point)
  if (user1.availability.schedule === user2.availability.schedule) {
    score += 1; // Same schedule preferences
  } else if (user1.availability.schedule === 'flexible' || 
             user2.availability.schedule === 'flexible') {
    score += 0.5; // One person is flexible
  } else {
    score += 0; // Incompatible schedules
  }
  
  return Math.round(score); // Round to 1-5
}
```

**Availability Scoring Examples:**

- **Both 15 hrs/week, same semester, flexible = 5/5** - Perfect alignment
- **15 vs 10 hrs/week, same semester, weekdays = 4/5** - Close enough
- **20 vs 10 hrs/week, same timeframe, different schedules = 3/5** - Workable
- **15 vs 5 hrs/week, overlapping timeframe = 2/5** - Challenging
- **20 vs 5 hrs/week, non-overlapping timeframe = 1/5** - Won't work

---

#### Dimension 4: Goal Alignment (1-5 points)

**What it measures:** Do they want the same outcomes from collaboration?

**Scoring Logic:**

```typescript
function calculateGoalScore(
  user1Goals: Goals,
  user2Goals: Goals
): number {
  // Primary goal match (0-3 points)
  let score = 0;
  
  if (user1Goals.primary === user2Goals.primary) {
    score += 3; // Identical primary goals
  } else if (goalsCompatible(user1Goals.primary, user2Goals.primary)) {
    score += 2; // Compatible goals (e.g., portfolio + learning)
  } else {
    score += 1; // Different but not conflicting goals
  }
  
  // Goal description semantic similarity (0-2 points)
  const descriptionSimilarity = calculateTextSimilarity(
    user1Goals.description,
    user2Goals.description
  );
  
  if (descriptionSimilarity > 0.7) {
    score += 2; // Very similar specific goals
  } else if (descriptionSimilarity > 0.4) {
    score += 1; // Somewhat similar goals
  } else {
    score += 0; // Different specific goals
  }
  
  return Math.min(5, score); // Cap at 5
}

function goalsCompatible(goal1: string, goal2: string): boolean {
  const compatiblePairs = [
    ['portfolio', 'learning'],
    ['portfolio', 'startup'],
    ['learning', 'research'],
    ['startup', 'portfolio'],
    ['social_impact', 'portfolio']
  ];
  
  return compatiblePairs.some(pair => 
    (pair[0] === goal1 && pair[1] === goal2) ||
    (pair[1] === goal1 && pair[0] === goal2)
  );
}
```

**Goal Scoring Examples:**

- **Both "portfolio for jobs" = 5/5** - Identical motivation
- **Portfolio + Learning = 4/5** - Compatible goals
- **Startup + Portfolio = 4/5** - Aligned (startup helps portfolio)
- **Learning casually + Startup (high stakes) = 2/5** - Mismatched commitment
- **Research + Social impact, different topics = 3/5** - Different but respectful

---

#### Dimension 5: Communication Fit (1-5 points)

**What it measures:** Do their communication styles mesh?

**Scoring Logic:**

```typescript
function calculateCommunicationScore(
  user1: UserProfile,
  user2: UserProfile
): number {
  let score = 0;
  
  // Preferred communication style (0-2 points)
  const comm1 = user1.communication.preferred;
  const comm2 = user2.communication.preferred;
  
  if (comm1 === comm2) {
    score += 2; // Identical preferences (e.g., both async)
  } else if (comm1 === 'hybrid' || comm2 === 'hybrid') {
    score += 1.5; // One is flexible
  } else {
    score += 1; // Different but manageable (e.g., sync vs async)
  }
  
  // Meeting frequency match (0-2 points)
  const meetingDiff = Math.abs(
    meetingFrequencyToNumber(user1.communication.meetingFrequency) -
    meetingFrequencyToNumber(user2.communication.meetingFrequency)
  );
  
  if (meetingDiff === 0) {
    score += 2; // Same meeting frequency
  } else if (meetingDiff === 1) {
    score += 1.5; // Close (e.g., daily vs weekly)
  } else if (meetingDiff === 2) {
    score += 1; // Moderate difference
  } else {
    score += 0.5; // Significant difference
  }
  
  // Response time compatibility (0-1 point)
  if (user1.communication.responseTime === user2.communication.responseTime) {
    score += 1;
  } else if (responseTimesCompatible(user1, user2)) {
    score += 0.5;
  }
  
  return Math.round(score); // Round to 1-5
}
```

**Communication Scoring Examples:**

- **Both prefer async, weekly meetings, 48hr response = 5/5** - Perfect match
- **Sync + Hybrid, daily + weekly meetings = 4/5** - One is flexible
- **Async + Sync, weekly + biweekly meetings = 3/5** - Manageable difference
- **Daily meetings + Monthly meetings = 2/5** - Significant mismatch
- **Immediate response expected + 48hr response time = 2/5** - Frustration likely

---

### 2.2 Total Compatibility Score

**Calculation:**

```typescript
interface CompatibilityScore {
  chemistry: number; // 1-5
  skills: number; // 1-5
  availability: number; // 1-5
  goals: number; // 1-5
  communication: number; // 1-5
  total: number; // 5-25
  rating: 'Perfect' | 'Strong' | 'Good' | 'Moderate' | 'Weak';
}

function calculateTotalCompatibility(
  user1: UserProfile,
  user2: UserProfile,
  context: 'discovery' | 'project' = 'discovery'
): CompatibilityScore {
  
  // Calculate individual dimensions
  const chemistry = calculateChemistryScore(
    user1.collaborationMode.primary,
    user2.collaborationMode.primary
  );
  
  const skills = calculateSkillsScore(
    user1.skills.technical.concat(user1.skills.domain),
    user2.skills.technical.concat(user2.skills.domain)
  );
  
  const availability = calculateAvailabilityScore(user1, user2);
  
  const goals = calculateGoalScore(user1.goals, user2.goals);
  
  const communication = calculateCommunicationScore(user1, user2);
  
  // Sum up total score
  const total = chemistry + skills + availability + goals + communication;
  
  // Determine rating
  let rating: string;
  if (total >= 22) rating = 'Perfect';
  else if (total >= 18) rating = 'Strong';
  else if (total >= 14) rating = 'Good';
  else if (total >= 10) rating = 'Moderate';
  else rating = 'Weak';
  
  return {
    chemistry,
    skills,
    availability,
    goals,
    communication,
    total,
    rating
  };
}
```

---

### 2.3 Bullseye Visualization

**Visual representation of compatibility:**

```
Perfect Match (22-25): ⭐⭐⭐⭐⭐
┌─────────────────────────────────────────┐
│            🎯 BULLSEYE                  │
│         ●●●●●●●●●●●●●                  │
│       ●●●●●●●●●●●●●●●●                │
│     ●●●●●●●●●●●●●●●●●●●●              │
│   ●●●●●●●●●YOU●●●●●●●●●●●             │
│     ●●●●●●●●●●●●●●●●●●●●              │
│       ●●●●●●●●●●●●●●●●                │
│         ●●●●●●●●●●●●●                  │
│                                         │
│  You're in the bullseye! This is a      │
│  near-perfect match across all          │
│  dimensions.                            │
│                                         │
│  Chemistry:      █████ 5/5              │
│  Skills:         ████▒ 4/5              │
│  Availability:   █████ 5/5              │
│  Goals:          █████ 5/5              │
│  Communication:  ████▒ 4/5              │
│                                         │
│  Total: 23/25 ⭐⭐⭐⭐⭐                │
│                                         │
└─────────────────────────────────────────┘

Strong Match (18-21): ⭐⭐⭐⭐
┌─────────────────────────────────────────┐
│            🎯 STRONG HIT                │
│         ●●●●●●●●●●●●●                  │
│       ●●●●●●●●●●●●●●●●                │
│     ●●●●●●   YOU  ●●●●●●●              │
│   ●●●●●●           ●●●●●●●             │
│     ●●●●●●        ●●●●●●●              │
│       ●●●●●●●●●●●●●●●●                │
│         ●●●●●●●●●●●●●                  │
│                                         │
│  Strong match! Very compatible across   │
│  most dimensions.                       │
│                                         │
│  Chemistry:      ████▒ 4/5              │
│  Skills:         █████ 5/5              │
│  Availability:   ████▒ 4/5              │
│  Goals:          ████▒ 4/5              │
│  Communication:  ███▒▒ 3/5              │
│                                         │
│  Total: 20/25 ⭐⭐⭐⭐                  │
│                                         │
└─────────────────────────────────────────┘

Good Match (14-17): ⭐⭐⭐
┌─────────────────────────────────────────┐
│            🎯 GOOD HIT                  │
│         ●●●●●●●●●●●●●                  │
│       ●●●●●●●●●●●●●●●●                │
│     ●●●●●●        ●●●●●●●              │
│   ●●●●●●    YOU     ●●●●●●●            │
│     ●●●●●●        ●●●●●●●              │
│       ●●●●●●●●●●●●●●●●                │
│         ●●●●●●●●●●●●●                  │
│                                         │
│  Good match - solid compatibility       │
│  with room for growth.                  │
│                                         │
│  Chemistry:      ████▒ 4/5              │
│  Skills:         ███▒▒ 3/5              │
│  Availability:   ████▒ 4/5              │
│  Goals:          ███▒▒ 3/5              │
│  Communication:  ███▒▒ 3/5              │
│                                         │
│  Total: 17/25 ⭐⭐⭐                    │
│                                         │
└─────────────────────────────────────────┘
```

---

### 2.4 Match Insights Generation

**For each match, generate:**

1. **Match Reasons** - Why this is a good pairing
2. **Potential Concerns** - What to watch out for
3. **Collaboration Tips** - How to work together effectively

```typescript
function generateMatchInsights(
  user1: UserProfile,
  user2: UserProfile,
  score: CompatibilityScore
): MatchInsights {
  
  const reasons: string[] = [];
  const concerns: string[] = [];
  const tips: string[] = [];
  
  // Chemistry insights
  if (score.chemistry >= 4) {
    reasons.push(`Perfect working style fit: ${user1.collaborationMode.primary} + ${user2.collaborationMode.primary} is a proven combination`);
    tips.push(`Play to your strengths: ${user1.collaborationMode.primary} handles ${getModeStrength(user1.collaborationMode.primary)}, ${user2.collaborationMode.primary} handles ${getModeStrength(user2.collaborationMode.primary)}`);
  } else if (score.chemistry <= 2) {
    concerns.push(`Similar working styles may cause friction - consider adding a third person to balance`);
    tips.push(`Define clear roles upfront to avoid stepping on each other's toes`);
  }
  
  // Skills insights
  if (score.skills >= 4) {
    reasons.push(`Complementary skills create a complete skillset`);
  } else if (score.skills <= 2) {
    concerns.push(`Overlapping skills mean you may need additional expertise`);
    tips.push(`Identify skill gaps early and recruit a third team member`);
  }
  
  // Availability insights
  if (score.availability >= 4) {
    reasons.push(`Similar availability - you can work on the same schedule`);
  } else if (score.availability <= 2) {
    concerns.push(`Different time commitments may create imbalance`);
    tips.push(`Set clear expectations about workload distribution`);
  }
  
  // Goals insights
  if (score.goals >= 4) {
    reasons.push(`Aligned goals - you want the same outcomes`);
  } else if (score.goals <= 2) {
    concerns.push(`Different goals may lead to misaligned priorities`);
    tips.push(`Discuss and document what success looks like for each of you`);
  }
  
  // Communication insights
  if (score.communication >= 4) {
    reasons.push(`Compatible communication styles`);
  } else if (score.communication <= 2) {
    concerns.push(`Different communication preferences may cause friction`);
    tips.push(`Establish communication norms in your first meeting`);
  }
  
  return { reasons, concerns, tips };
}
```

**Example Match Insight Card:**

```
┌─────────────────────────────────────────────────────┐
│  Sarah Chen - The Builder 🔨                        │
│  Computer Science • Viterbi                         │
│                                                      │
│  Compatibility: 23/25 ⭐⭐⭐⭐⭐                    │
│                                                      │
│  Why you match:                                     │
│  ✅ Perfect working style fit: Architect +          │
│     Builder is a proven combination                 │
│  ✅ Complementary skills create complete skillset   │
│  ✅ Similar availability - same schedule            │
│  ✅ Aligned goals - both building portfolio         │
│                                                      │
│  Potential concerns:                                │
│  ⚠️  Different communication preferences may        │
│     cause friction (you prefer sync, Sarah          │
│     prefers async)                                  │
│                                                      │
│  Tips for success:                                  │
│  💡 Play to strengths: You design, Sarah builds     │
│  💡 Establish communication norms early             │
│  💡 Sarah needs clear requirements before coding    │
│                                                      │
│  [Message Sarah] [View Full Profile]                │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## 3. MATCHING ENGINE LOGIC

### 3.1 Matching Modes

**Two distinct matching contexts:**

#### Discovery Mode
**Use Case:** "Show me people I'd work well with"  
**User Intent:** Explore potential collaborators, build network  
**Algorithm Focus:** Balanced across all 5 dimensions

```typescript
const DISCOVERY_MODE_WEIGHTS = {
  chemistry: 0.20,      // 20%
  skills: 0.20,         // 20%
  availability: 0.20,   // 20%
  goals: 0.20,          // 20%
  communication: 0.20   // 20%
};
```

#### Project Mode  
**Use Case:** "I need a React developer for my capstone"  
**User Intent:** Find specific skills for defined project  
**Algorithm Focus:** Heavily weight skills and chemistry

```typescript
const PROJECT_MODE_WEIGHTS = {
  chemistry: 0.25,      // 25%
  skills: 0.35,         // 35% (increased from 20%)
  availability: 0.20,   // 20%
  goals: 0.10,          // 10% (decreased from 20%)
  communication: 0.10   // 10% (decreased from 20%)
};
```

---

### 3.2 Candidate Pool Generation

**Step 1: Basic Filters**

```sql
-- Generate candidate pool for User A
SELECT u.*
FROM users u
WHERE 
  -- Verified USC students only
  u.verification.emailVerified = true
  
  -- Exclude self
  AND u.userId != :currentUserId
  
  -- Exclude already connected
  AND u.userId NOT IN (
    SELECT connectedUserId 
    FROM connections 
    WHERE userId = :currentUserId
  )
  
  -- Active users (logged in within 30 days)
  AND u.lastActiveDate >= NOW() - INTERVAL '30 days'
  
  -- Has completed assessment
  AND u.collaborationMode.primary IS NOT NULL
  
  -- Optional: Same university (for MVP launch)
  AND u.school IN ('Viterbi', 'Marshall', 'Annenberg', ...) -- USC schools
  
ORDER BY u.lastActiveDate DESC
LIMIT 1000; -- Initial pool size
```

**Step 2: Apply Context Filters**

For Project Mode, add specific requirements:

```sql
-- Additional filters for project mode
AND (
  -- Must have at least one required skill
  EXISTS (
    SELECT 1 FROM unnest(u.skills.technical) skill
    WHERE skill = ANY(:requiredSkills)
  )
  
  -- Must have minimum availability
  AND u.availability.hoursPerWeek >= :minHoursRequired
  
  -- Must match timeframe
  AND u.availability.timeframe = :projectTimeframe
  
  -- Optional: Specific collaboration mode needed
  AND (:requiredMode IS NULL OR u.collaborationMode.primary = :requiredMode)
)
```

---

### 3.3 Compatibility Calculation

**For each candidate in the pool:**

```typescript
async function scoreAllCandidates(
  currentUser: UserProfile,
  candidates: UserProfile[],
  mode: 'discovery' | 'project',
  projectContext?: ProjectContext
): Promise<ScoredMatch[]> {
  
  const scoredMatches: ScoredMatch[] = [];
  
  for (const candidate of candidates) {
    // Calculate 5-dimension compatibility
    const compatibility = calculateTotalCompatibility(
      currentUser,
      candidate,
      mode
    );
    
    // Apply mode-specific weighting
    const weights = mode === 'discovery' 
      ? DISCOVERY_MODE_WEIGHTS 
      : PROJECT_MODE_WEIGHTS;
    
    const weightedScore = 
      compatibility.chemistry * weights.chemistry +
      compatibility.skills * weights.skills +
      compatibility.availability * weights.availability +
      compatibility.goals * weights.goals +
      compatibility.communication * weights.communication;
    
    // Normalize back to 1-5 scale
    const normalizedScore = weightedScore / 
      (Object.values(weights).reduce((a, b) => a + b, 0) * 5);
    
    scoredMatches.push({
      user: candidate,
      compatibility,
      weightedScore: normalizedScore * 5, // Back to 1-5 scale
      rawScore: compatibility.total
    });
  }
  
  return scoredMatches;
}
```

---

### 3.4 Ranking Algorithm

**Final ranking score combines multiple factors:**

```typescript
interface RankedMatch {
  user: UserProfile;
  compatibility: CompatibilityScore;
  finalScore: number; // 0-100
  rankingFactors: {
    compatibilityScore: number;   // 0-25 points
    recencyBonus: number;         // 0-2 points
    profileCompletenessBonus: number; // 0-2 points
    mutualConnectionBonus: number; // 0-1 point
    diversityBonus: number;       // 0-1 point
    videoPitchBonus: number;      // 0-1 point
  };
}

function rankMatches(
  scoredMatches: ScoredMatch[],
  currentUser: UserProfile
): RankedMatch[] {
  
  return scoredMatches.map(match => {
    let finalScore = match.compatibility.total; // Start with 5-25
    
    // Recency Bonus (0-2 points)
    // Reward users who logged in recently
    const daysSinceActive = getDaysSince(match.user.lastActiveDate);
    if (daysSinceActive <= 1) {
      finalScore += 2; // Logged in today or yesterday
    } else if (daysSinceActive <= 7) {
      finalScore += 1; // Logged in this week
    } else if (daysSinceActive <= 30) {
      finalScore += 0.5; // Logged in this month
    }
    
    // Profile Completeness Bonus (0-2 points)
    const completeness = calculateProfileCompleteness(match.user);
    if (completeness >= 0.9) {
      finalScore += 2; // 90%+ complete profile
    } else if (completeness >= 0.7) {
      finalScore += 1; // 70%+ complete
    }
    
    // Mutual Connection Bonus (0-1 point)
    const mutualConnections = countMutualConnections(
      currentUser,
      match.user
    );
    if (mutualConnections >= 3) {
      finalScore += 1; // Strong social proof
    } else if (mutualConnections >= 1) {
      finalScore += 0.5; // Some social proof
    }
    
    // Diversity Bonus (0-1 point)
    // Reward cross-school collaboration
    if (currentUser.school !== match.user.school) {
      finalScore += 0.5; // Different school
    }
    // Reward different majors
    if (currentUser.major !== match.user.major) {
      finalScore += 0.5; // Different discipline
    }
    
    // Video Pitch Bonus (0-1 point)
    if (match.user.videoPitchUrl) {
      finalScore += 1; // Has video pitch (higher engagement)
    }
    
    // Calculate ranking factors breakdown
    const rankingFactors = {
      compatibilityScore: match.compatibility.total,
      recencyBonus: /* calculated above */,
      profileCompletenessBonus: /* calculated above */,
      mutualConnectionBonus: /* calculated above */,
      diversityBonus: /* calculated above */,
      videoPitchBonus: match.user.videoPitchUrl ? 1 : 0
    };
    
    return {
      user: match.user,
      compatibility: match.compatibility,
      finalScore, // Max ~32 points
      rankingFactors
    };
  }).sort((a, b) => b.finalScore - a.finalScore);
}
```

**Maximum Possible Score: ~32 points**
- Compatibility: 25 points
- Recency: 2 points
- Profile completeness: 2 points
- Mutual connections: 1 point
- Diversity: 1 point
- Video pitch: 1 point

---

### 3.5 Feed Algorithm

**Goal:** Show diverse, high-quality matches over time, not just top 10 repeatedly

**Strategy:**
1. **Tier matches** by quality
2. **Rotate within tiers** to show variety
3. **Refresh daily** with new candidates

```typescript
interface MatchFeed {
  perfectMatches: RankedMatch[];   // 22-25 compatibility
  strongMatches: RankedMatch[];    // 18-21 compatibility
  goodMatches: RankedMatch[];      // 14-17 compatibility
  moderateMatches: RankedMatch[];  // 10-13 compatibility
}

function generateDailyFeed(
  rankedMatches: RankedMatch[],
  previouslyShown: Set<string>,
  feedSize: number = 20
): RankedMatch[] {
  
  // Group by compatibility tier
  const tiers = {
    perfect: rankedMatches.filter(m => m.compatibility.total >= 22),
    strong: rankedMatches.filter(m => m.compatibility.total >= 18 && m.compatibility.total < 22),
    good: rankedMatches.filter(m => m.compatibility.total >= 14 && m.compatibility.total < 18),
    moderate: rankedMatches.filter(m => m.compatibility.total >= 10 && m.compatibility.total < 14)
  };
  
  // Target distribution for 20-item feed
  const distribution = {
    perfect: 5,   // 25% perfect matches
    strong: 7,    // 35% strong matches
    good: 5,      // 25% good matches
    moderate: 3   // 15% moderate matches
  };
  
  const feed: RankedMatch[] = [];
  
  // Select from each tier, prioritizing unseen matches
  for (const [tier, count] of Object.entries(distribution)) {
    const tierMatches = tiers[tier];
    
    // Prioritize unseen
    const unseen = tierMatches.filter(m => !previouslyShown.has(m.user.userId));
    const seen = tierMatches.filter(m => previouslyShown.has(m.user.userId));
    
    // Take unseen first, then seen if needed
    const selected = [
      ...unseen.slice(0, count),
      ...seen.slice(0, Math.max(0, count - unseen.length))
    ];
    
    feed.push(...selected);
  }
  
  // Shuffle within each tier for variety
  return shuffleWithinTiers(feed);
}
```

**Feed Refresh Strategy:**

```typescript
const FEED_REFRESH_LOGIC = {
  // Free tier: 10 matches per week
  free: {
    matchesPerWeek: 10,
    refreshFrequency: '7 days',
    logic: 'Show 10 best matches, refresh weekly'
  },
  
  // Premium tier: Unlimited matches
  premium: {
    matchesPerWeek: Infinity,
    refreshFrequency: '24 hours',
    logic: 'Daily feed with rotating matches from all tiers'
  },
  
  // Real-time updates
  realtime: {
    newUserJoined: 'Add to top of feed if high compatibility',
    userUpdatedProfile: 'Recalculate compatibility, adjust position',
    projectPosted: 'Notify highly compatible matches'
  }
};
```

---

### 3.6 Search & Filters

**Basic Search (Free Tier):**

```typescript
interface BasicFilters {
  school: string[];           // ["Viterbi", "Marshall"]
  skills: string[];           // ["React", "Python"]
  availability: {
    minHours?: number;
    timeframe?: string;
  };
}

async function basicSearch(
  filters: BasicFilters,
  currentUser: UserProfile
): Promise<RankedMatch[]> {
  
  let query = `
    SELECT u.* FROM users u
    WHERE u.verification.emailVerified = true
  `;
  
  if (filters.school?.length > 0) {
    query += ` AND u.school = ANY(:schools)`;
  }
  
  if (filters.skills?.length > 0) {
    query += ` AND EXISTS (
      SELECT 1 FROM unnest(u.skills.technical) skill
      WHERE skill = ANY(:skills)
    )`;
  }
  
  if (filters.availability?.minHours) {
    query += ` AND u.availability.hoursPerWeek >= :minHours`;
  }
  
  const candidates = await executeQuery(query, filters);
  return rankMatches(candidates, currentUser);
}
```

**Advanced Filters (Premium Tier):**

```typescript
interface AdvancedFilters extends BasicFilters {
  collaborationMode?: string[];    // ["architect", "builder"]
  commitmentLevel?: string;        // "high", "medium", "low"
  videoPitchRequired?: boolean;
  profileCompleteness?: number;    // 0-100%
  lastActive?: string;             // "today", "this_week", "this_month"
  mutualConnections?: boolean;
  crossSchool?: boolean;
  goalAlignment?: string;          // "portfolio", "startup", etc.
}

async function advancedSearch(
  filters: AdvancedFilters,
  currentUser: UserProfile
): Promise<RankedMatch[]> {
  
  // Build query with all advanced filters
  let query = buildAdvancedQuery(filters);
  
  const candidates = await executeQuery(query, filters);
  
  // Apply advanced ranking
  return rankMatches(candidates, currentUser);
}
```

**Saved Searches (Premium Feature):**

```typescript
interface SavedSearch {
  name: string;
  filters: AdvancedFilters;
  alertEnabled: boolean;
  lastRun: Date;
}

async function runSavedSearch(
  search: SavedSearch,
  currentUser: UserProfile
): Promise<void> {
  
  const results = await advancedSearch(search.filters, currentUser);
  
  // Check for new matches since last run
  const newMatches = results.filter(m => 
    m.user.createdDate > search.lastRun ||
    m.user.profileUpdatedDate > search.lastRun
  );
  
  if (newMatches.length > 0 && search.alertEnabled) {
    await sendNotification(currentUser, {
      type: 'new_matches',
      count: newMatches.length,
      savedSearchName: search.name
    });
  }
  
  return newMatches;
}
```

---

### 3.7 Real-Time Updates

**When to recalculate matches:**

```typescript
const MATCH_REFRESH_TRIGGERS = {
  // User events
  profileUpdated: async (userId: string) => {
    // Recalculate for users who match with this person
    await recalculateMatchesFor(userId);
  },
  
  assessmentCompleted: async (userId: string) => {
    // Generate initial matches
    await generateMatchesFor(userId);
  },
  
  skillsAdded: async (userId: string, newSkills: string[]) => {
    // Recalculate skill-based matches
    await recalculateSkillMatches(userId);
  },
  
  availabilityChanged: async (userId: string) => {
    // Recalculate availability-based matches
    await recalculateAvailabilityMatches(userId);
  },
  
  // System events
  newUserJoined: async (newUserId: string) => {
    // Calculate matches for new user
    await generateMatchesFor(newUserId);
    
    // Add to feeds of highly compatible users
    await addToCompatibleFeeds(newUserId);
  },
  
  projectPosted: async (projectId: string) => {
    // Notify users with high compatibility
    await notifyCompatibleUsers(projectId);
  },
  
  // Time-based
  dailyRefresh: async () => {
    // Refresh feeds for active users
    await refreshFeedsForActiveUsers();
  },
  
  weeklyRefresh: async () => {
    // Refresh feeds for all users
    await refreshFeedsForAllUsers();
  }
};
```

---

### 3.8 Caching Strategy

**Performance optimization:**

```typescript
// Cache compatibility scores (expensive to calculate)
interface CompatibilityCache {
  user1Id: string;
  user2Id: string;
  compatibility: CompatibilityScore;
  calculatedAt: Date;
  expiresAt: Date;
}

async function getCachedCompatibilityScore(
  user1Id: string,
  user2Id: string
): Promise<CompatibilityScore | null> {
  
  const cacheKey = [user1Id, user2Id].sort().join(':');
  const cached = await redis.get(`compat:${cacheKey}`);
  
  if (cached) {
    const score: CompatibilityCache = JSON.parse(cached);
    
    // Check if still valid
    if (score.expiresAt > new Date()) {
      return score.compatibility;
    }
  }
  
  return null;
}

async function cacheCompatibilityScore(
  user1Id: string,
  user2Id: string,
  compatibility: CompatibilityScore
): Promise<void> {
  
  const cacheKey = [user1Id, user2Id].sort().join(':');
  const ttl = 24 * 60 * 60; // 24 hours
  
  const cached: CompatibilityCache = {
    user1Id,
    user2Id,
    compatibility,
    calculatedAt: new Date(),
    expiresAt: new Date(Date.now() + ttl * 1000)
  };
  
  await redis.setex(
    `compat:${cacheKey}`,
    ttl,
    JSON.stringify(cached)
  );
}

// Invalidate cache when profiles change
async function invalidateCompatibilityCache(userId: string): Promise<void> {
  const keys = await redis.keys(`compat:*${userId}*`);
  if (keys.length > 0) {
    await redis.del(...keys);
  }
}
```

**Feed caching:**

```typescript
// Cache daily feeds (cheaper than recalculating)
async function getCachedFeed(
  userId: string
): Promise<RankedMatch[] | null> {
  
  const cached = await redis.get(`feed:${userId}`);
  
  if (cached) {
    return JSON.parse(cached);
  }
  
  return null;
}

async function cacheFeed(
  userId: string,
  feed: RankedMatch[]
): Promise<void> {
  
  const ttl = 24 * 60 * 60; // 24 hours
  
  await redis.setex(
    `feed:${userId}`,
    ttl,
    JSON.stringify(feed)
  );
}
```

---

## 4. PERSONALIZED EXPERIENCE FLOWS

### 4.1 Mode-Specific Onboarding

**Each collaboration mode sees customized onboarding:**

#### Architect Onboarding

```
Step 1: Welcome
┌─────────────────────────────────────────────────────┐
│  You're an Architect! 🏗️                            │
│                                                      │
│  You excel at:                                      │
│  • Strategic thinking and system design             │
│  • Vision articulation                              │
│  • Big picture perspective                          │
│                                                      │
│  You work best with:                                │
│  • Builders who can execute your vision             │
│  • Coordinators who organize implementation         │
│                                                      │
│  Based on 1,247 USC collaborations:                │
│  Architect + Builder = 94% success rate             │
│                                                      │
│  [Next: Find Your Builders]                         │
│                                                      │
└─────────────────────────────────────────────────────┘

Step 2: Profile Setup - Architect Focus
┌─────────────────────────────────────────────────────┐
│  Tell us about your vision                          │
│                                                      │
│  What are you building this semester?               │
│  [Text/Video/Voice]                                 │
│                                                      │
│  💡 Tip: Be specific about your vision              │
│  Good: "Building a mental health app that uses      │
│         AI to detect emotional patterns"            │
│  Bad: "Working on an app"                           │
│                                                      │
│  What skills do you need on your team?             │
│  ☐ Frontend Development                             │
│  ☐ Backend Development                              │
│  ☐ Mobile Development                               │
│  ☐ UI/UX Design                                     │
│  ☐ Project Management                               │
│                                                      │
│  [Continue]                                         │
│                                                      │
└─────────────────────────────────────────────────────┘

Step 3: First Matches
┌─────────────────────────────────────────────────────┐
│  Perfect Builders for Your Vision                   │
│                                                      │
│  Sarah Chen - Builder 🔨                            │
│  Computer Science • Viterbi                         │
│  "I love turning visions into working products"     │
│                                                      │
│  Compatibility: 24/25 ⭐⭐⭐⭐⭐                    │
│  ✅ Perfect chemistry (Architect + Builder)         │
│  ✅ Has React & Node.js skills you need             │
│  ✅ Available 15 hrs/week                           │
│                                                      │
│  [Message Sarah] [View Profile]                     │
│                                                      │
│  [See 9 More Matches]                               │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

#### Builder Onboarding

```
Step 1: Welcome
┌─────────────────────────────────────────────────────┐
│  You're a Builder! 🔨                               │
│                                                      │
│  You excel at:                                      │
│  • Rapid execution and implementation               │
│  • Getting things done                              │
│  • Practical problem-solving                        │
│                                                      │
│  You work best with:                                │
│  • Architects who provide clear direction           │
│  • Coordinators who prioritize tasks               │
│                                                      │
│  Based on 1,247 USC collaborations:                │
│  Builder + Architect = 94% success rate             │
│                                                      │
│  [Next: Find Projects to Build]                     │
│                                                      │
└─────────────────────────────────────────────────────┘

Step 2: Profile Setup - Builder Focus
┌─────────────────────────────────────────────────────┐
│  Show what you can build                            │
│                                                      │
│  What can you create? (Optional: Upload portfolio)  │
│  [Text/Video/Voice]                                 │
│                                                      │
│  💡 Tip: Show, don't just tell                      │
│  Good: "Built 3 React apps, including USC events    │
│         tracker with 500+ users"                    │
│  Bad: "I know React"                                │
│                                                      │
│  Your technical skills:                             │
│  Selected: React, Node.js, Python                   │
│  Add more: [+ Add Skill]                            │
│                                                      │
│  How many hours can you commit per week?           │
│  ○ 5 hours  ○ 10 hours  ● 15 hours  ○ 20+ hours   │
│                                                      │
│  [Continue]                                         │
│                                                      │
└─────────────────────────────────────────────────────┘

Step 3: First Matches
┌─────────────────────────────────────────────────────┐
│  Projects That Need You                             │
│                                                      │
│  AI Mental Health App - Needs React Dev             │
│  Posted by: Alex Kim - Architect 🏗️                │
│  Annenberg • Capstone Project                       │
│                                                      │
│  "I've designed a mental health app that detects    │
│   emotional patterns. Need a builder to bring       │
│   the vision to life."                              │
│                                                      │
│  Compatibility: 24/25 ⭐⭐⭐⭐⭐                    │
│  ✅ Perfect chemistry (Builder + Architect)         │
│  ✅ Your React skills match project needs           │
│  ✅ Clear requirements & timeline provided          │
│                                                      │
│  [I'm Interested] [Learn More]                      │
│                                                      │
│  [See 9 More Projects]                              │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

#### Coordinator Onboarding

```
Step 1: Welcome
┌─────────────────────────────────────────────────────┐
│  You're a Coordinator! 📋                           │
│                                                      │
│  You excel at:                                      │
│  • Project management and organization              │
│  • Communication facilitation                       │
│  • Keeping teams aligned                            │
│                                                      │
│  You work best with:                                │
│  • Teams of 3+ people who need structure            │
│  • Architects (vision) + Builders (execution)       │
│                                                      │
│  Based on 1,247 USC collaborations:                │
│  Coordinator + Catalyst = 91% success rate          │
│                                                      │
│  [Next: Find Teams to Organize]                     │
│                                                      │
└─────────────────────────────────────────────────────┘

Step 2: Profile Setup - Coordinator Focus
┌─────────────────────────────────────────────────────┐
│  Showcase your organizational skills                │
│                                                      │
│  How do you keep teams on track?                    │
│  [Text/Video/Voice]                                 │
│                                                      │
│  💡 Tip: Share your approach                        │
│  Good: "I use Notion for sprint planning, daily     │
│         standups, and blocker tracking. Led 3       │
│         capstone teams to on-time delivery."        │
│  Bad: "I'm organized"                               │
│                                                      │
│  Your project management tools:                     │
│  ☑ Notion  ☑ Trello  ☑ Asana  ☐ Jira              │
│                                                      │
│  Preferred team size:                               │
│  ○ 2 people  ● 3-4 people  ○ 5+ people             │
│                                                      │
│  [Continue]                                         │
│                                                      │
└─────────────────────────────────────────────────────┘

Step 3: First Matches
┌─────────────────────────────────────────────────────┐
│  Teams That Need Organization                       │
│                                                      │
│  Climate Tech Startup - Needs PM                    │
│  Team: Alex (Architect) + Sarah (Builder) +         │
│         Jamie (Catalyst)                            │
│                                                      │
│  "We have vision and tech skills but need help      │
│   staying organized and hitting deadlines"          │
│                                                      │
│  Compatibility: 23/25 ⭐⭐⭐⭐⭐                    │
│  ✅ Perfect team composition for Coordinator        │
│  ✅ 3-person team (your preferred size)             │
│  ✅ Clear need for structure and organization       │
│                                                      │
│  [Join This Team] [Learn More]                      │
│                                                      │
│  [See 9 More Teams]                                 │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

### 4.2 Mode-Specific Dashboards

**Each mode sees a customized home dashboard:**

#### Architect Dashboard

```
┌─────────────────────────────────────────────────────┐
│  🏗️ Architect Dashboard                             │
├─────────────────────────────────────────────────────┤
│                                                      │
│  📊 Your Vision Status                              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                      │
│  AI Mental Health App                               │
│  Status: Recruiting builders                        │
│  • 12 people viewed your project                    │
│  • 3 builders expressed interest                    │
│  • Action: Review interested builders               │
│                                                      │
│  [Review Candidates]                                │
│                                                      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                      │
│  👥 Find Your Builders                              │
│                                                      │
│  Sarah Chen - Builder 🔨                            │
│  24/25 match • React expert                         │
│  [Message Sarah]                                    │
│                                                      │
│  Marcus Lee - Builder 🔨                            │
│  22/25 match • Full-stack developer                 │
│  [Message Marcus]                                   │
│                                                      │
│  [See All Builders]                                 │
│                                                      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                      │
│  💡 Architect Tips                                  │
│  • Document your vision clearly before recruiting   │
│  • Create wireframes or technical specs             │
│  • Be ready to answer "why?" questions              │
│                                                      │
│  📚 Recommended Reading:                            │
│  "How to Communicate Technical Vision"              │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

#### Builder Dashboard

```
┌─────────────────────────────────────────────────────┐
│  🔨 Builder Dashboard                               │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ⚡ Active Tasks (This Week)                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                      │
│  AI Mental Health App                               │
│  • Build login authentication ⏳ Due Fri            │
│  • Implement dashboard UI ⏳ Due Sun                │
│                                                      │
│  Climate Dashboard                                  │
│  • Fix API integration bug 🔴 Overdue              │
│                                                      │
│  [View All Tasks]                                   │
│                                                      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                      │
│  📋 Clear Projects Looking for Builders             │
│                                                      │
│  USC Course Review Platform                         │
│  Needs: React developer                             │
│  Timeline: This semester (15 hrs/week)              │
│  24/25 match ⭐⭐⭐⭐⭐                            │
│                                                      │
│  Requirements:                                      │
│  ✅ Clear technical specs provided                  │
│  ✅ Wireframes and mockups ready                    │
│  ✅ Architect has strong vision                     │
│                                                      │
│  [Learn More] [Express Interest]                    │
│                                                      │
│  [See More Projects]                                │
│                                                      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                      │
│  💡 Builder Tips                                    │
│  • Clarify requirements before coding               │
│  • Set clear milestones and deadlines               │
│  • Communicate blockers early                       │
│                                                      │
│  🏆 Your Stats This Month                           │
│  • 3 features shipped                               │
│  • 94% on-time delivery rate                        │
│  • 4.8/5 collaborator rating                        │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

#### Coordinator Dashboard

```
┌─────────────────────────────────────────────────────┐
│  📋 Coordinator Dashboard                           │
├─────────────────────────────────────────────────────┤
│                                                      │
│  👥 Teams You're Managing                           │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                      │
│  AI Mental Health App (4 people)                    │
│  Sprint Health: 🟢 On Track                         │
│  • 5 tasks in progress                              │
│  • 2 tasks completed this week                      │
│  • 1 blocker: Backend API delayed                   │
│                                                      │
│  ⚠️  Action Needed: Resolve API blocker             │
│  [View Team Board]                                  │
│                                                      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                      │
│  Climate Dashboard (3 people)                       │
│  Sprint Health: 🟡 At Risk                          │
│  • 3 tasks in progress                              │
│  • 0 tasks completed this week                      │
│  • 2 blockers: Design feedback, Testing delays      │
│                                                      │
│  ⚠️  Action Needed: Call team meeting               │
│  [View Team Board]                                  │
│                                                      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                      │
│  🚀 Teams Needing a Coordinator                     │
│                                                      │
│  USC Events Platform (5 people)                     │
│  "We have engineers but no organization"            │
│  Team: 2 Builders, 1 Architect, 1 Refiner, 1 Cat..  │
│                                                      │
│  23/25 match ⭐⭐⭐⭐                                │
│  ✅ Perfect team size (5 people)                    │
│  ✅ Multiple roles need coordination                │
│                                                      │
│  [Join as Coordinator]                              │
│                                                      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                      │
│  💡 Coordinator Tips                                │
│  • Surface blockers early, don't let them fester    │
│  • Document decisions in shared space               │
│  • Celebrate small wins to keep morale high         │
│                                                      │
│  📅 This Week's Meetings                            │
│  • Mon 7pm: AI Health App standup                   │
│  • Wed 6pm: Climate Dashboard retrospective         │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

### 4.3 Mode-Specific Communication Templates

**Pre-filled message templates optimized for each mode pairing:**

#### Architect → Builder

```
Template 1: Project Pitch
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subject: Need a builder for [project name]

Hi [Builder Name],

I came across your profile and think you'd be perfect 
for my project. I'm building [project vision in 1-2 
sentences].

I've got the architecture and specs ready - I need 
someone who can execute the technical implementation. 
Your experience with [specific skill] is exactly what 
this needs.

Here's what I've prepared:
• Technical specifications
• Wireframes/mockups
• Timeline and milestones
• [Attach spec doc]

Would you be interested in jumping on a quick call to 
discuss? I can share more details about the tech stack 
and answer any questions.

Looking forward to hearing from you!

[Your Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Template 2: Quick Intro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hi [Builder Name],

Saw your profile - love your work on [previous project].

I'm designing [project name] and need a [role] to bring 
it to life. Everything's spec'd out and ready to build.

Interested in chatting? Happy to share all the details.

[Your Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

#### Builder → Architect

```
Template 1: Expressing Interest
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subject: Interested in building [project name]

Hi [Architect Name],

Your [project name] looks awesome! I'd love to help 
bring your vision to life.

A few quick questions before we chat:
• What's the tech stack?
• What's the timeline/deadline?
• How many hours per week are you thinking?
• Do you have specs/requirements ready?

I've built [1-2 relevant projects] and have experience 
with [relevant skills]. Would be great to jump on a 
quick call to discuss!

[Your Name]

[Link to portfolio]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Template 2: Clarifying Requirements
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hi [Architect Name],

This project is interesting! Before I commit, can you 
share:
• Technical requirements/specs
• Mockups or wireframes
• Definition of "done"

Happy to discuss and see if it's a good fit!

[Your Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

#### Coordinator → Catalyst

```
Template 1: Channel Energy into Structure
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subject: Let's organize [project name]

Hi [Catalyst Name],

I saw you're working on [project] - love the energy 
and connections you're bringing! 

I specialize in keeping teams organized and on track. 
I think we could be a great pair - you handle external 
relationships and resources, I'll make sure we deliver 
on commitments.

Want to chat about how we can structure this for 
success?

[Your Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 4.4 Mode-Specific Success Metrics

**Different modes measure success differently:**

#### Architect Success Dashboard

```
┌─────────────────────────────────────────────────────┐
│  🏗️ Your Impact as an Architect                     │
│                                                      │
│  Vision Clarity Score: 4.8/5.0                      │
│  Based on builder feedback:                         │
│  "Requirements were crystal clear"                  │
│  "Best spec doc I've ever worked with"              │
│                                                      │
│  Projects Launched: 3                               │
│  • AI Mental Health App (shipped!)                  │
│  • Climate Dashboard (in progress)                  │
│  • Course Review Platform (planning)                │
│                                                      │
│  Builder Satisfaction: 92%                          │
│  "Would work with again"                            │
│                                                      │
│  Your Strength:                                     │
│  ⭐ "Clear technical vision"                        │
│                                                      │
│  Area to Improve:                                   │
│  ⚠️  "Can over-engineer solutions"                  │
│  Tip: Ship MVPs faster, iterate later              │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

#### Builder Success Dashboard

```
┌─────────────────────────────────────────────────────┐
│  🔨 Your Impact as a Builder                        │
│                                                      │
│  Delivery Rate: 94%                                 │
│  Tasks completed on time                            │
│                                                      │
│  Features Shipped: 47                               │
│  This semester: 47 features across 3 projects       │
│                                                      │
│  Code Quality: 4.6/5.0                              │
│  Based on team feedback:                            │
│  "Clean code, great documentation"                  │
│  "Catches edge cases I miss"                        │
│                                                      │
│  Collaborator Rating: 4.8/5.0                       │
│  "Reliable and fast"                                │
│                                                      │
│  Your Strength:                                     │
│  ⭐ "Rapid execution"                               │
│                                                      │
│  Area to Improve:                                   │
│  ⚠️  "Sometimes builds before requirements clear"   │
│  Tip: Ask clarifying questions before coding        │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

#### Coordinator Success Dashboard

```
┌─────────────────────────────────────────────────────┐
│  📋 Your Impact as a Coordinator                    │
│                                                      │
│  Projects Delivered On Time: 5 of 6 (83%)          │
│                                                      │
│  Team Satisfaction: 4.7/5.0                         │
│  Based on teammate feedback:                        │
│  "Always knew what to do next"                      │
│  "Caught blockers before they became issues"        │
│                                                      │
│  Avg. Team Velocity: +23%                           │
│  Teams you coordinate ship 23% faster than avg      │
│                                                      │
│  Communication Score: 4.9/5.0                       │
│  "Excellent facilitator"                            │
│                                                      │
│  Your Strength:                                     │
│  ⭐ "Proactive blocker resolution"                  │
│                                                      │
│  Area to Improve:                                   │
│  ⚠️  "Can over-structure simple projects"           │
│  Tip: Adjust process to team size                   │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## 5. PREMIUM FEATURES & GATING

### 5.1 Free Tier Features

**Philosophy:** Free tier must be genuinely useful for finding a successful team, but create natural upgrade moments.

```typescript
const FREE_TIER = {
  // Assessment & Matching
  assessmentAccess: true,
  collaborationModeResults: 'basic', // Primary mode only
  matchesPerWeek: 10,
  compatibilityScore: 'total_only', // See 23/25, not breakdown
  
  // Communication
  newConversationsPerWeek: 5,
  responseMessages: 'unlimited',
  messageTemplates: 'basic',
  
  // Projects
  activeProjects: 1,
  joinProjects: 'unlimited',
  
  // Profile
  profileCreation: true,
  videoPitch: '60_seconds',
  videoQuality: '720p',
  basicSearch: true,
  
  // Features NOT included
  bullseyeVisualization: false,
  matchReasons: false,
  advancedFilters: false,
  profileAnalytics: false,
  savedSearches: false,
  priorityRanking: false
};
```

**Free Tier Upgrade Triggers:**

```
Trigger 1: Hit Weekly Match Limit
┌─────────────────────────────────────────────────────┐
│  You've viewed all 10 free matches this week 🎯     │
│                                                      │
│  Upgrade to Premium for:                            │
│  • Unlimited matches                                │
│  • See why each match works (detailed breakdown)    │
│  • Advanced filters to find exactly who you need    │
│                                                      │
│  [Upgrade to Premium - $10/month] [Maybe Later]     │
│                                                      │
└─────────────────────────────────────────────────────┘

Trigger 2: Click on Blurred Bullseye
┌─────────────────────────────────────────────────────┐
│  Sarah Chen - 23/25 Compatibility                   │
│                                                      │
│  [Blurred Bullseye Visualization] 💎                │
│                                                      │
│  Want to see exactly why you match?                 │
│                                                      │
│  Premium shows:                                     │
│  • Full 5-dimension breakdown                       │
│  • Specific match reasons                           │
│  • Potential concerns to watch for                  │
│  • Collaboration tips for your modes                │
│                                                      │
│  [Unlock Full Insights - $10/month] [Not Now]       │
│                                                      │
└─────────────────────────────────────────────────────┘

Trigger 3: Profile Views Spike
┌─────────────────────────────────────────────────────┐
│  📈 Your profile had 15 views today!                │
│                                                      │
│  Premium users can see:                             │
│  • Who viewed your profile                          │
│  • When they viewed it                              │
│  • If they're interested in your projects           │
│                                                      │
│  [See Who's Interested - Upgrade] [Later]           │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

### 5.2 Premium Tier ($10/month)

**Value Proposition:** "Find better matches faster with advanced insights"

```typescript
const PREMIUM_TIER = {
  // Everything in Free +
  
  // Enhanced Matching
  matchesPerWeek: Infinity,
  compatibilityScore: 'full_breakdown',
  bullseyeVisualization: true,
  matchReasons: true,
  potentialConcerns: true,
  collaborationTips: true,
  
  // Advanced Discovery
  advancedFilters: true, // Filter by mode, commitment, etc.
  savedSearches: true,
  customAlerts: true,
  priorityRanking: true, // Appear higher in others' feeds
  
  // Communication
  newConversationsPerWeek: Infinity,
  messageInsights: true, // See who viewed your message
  advancedTemplates: true,
  
  // Projects
  activeProjects: Infinity,
  teamAnalytics: true,
  projectBoards: true,
  
  // Profile
  videoPitch: '2_minutes',
  videoQuality: '1080p',
  profileAnalytics: true, // Who viewed, when, etc.
  videoAnalytics: true,
  
  // Insights
  compatibilityInsights: true,
  successRate: true,
  benchmarkingData: true,
  
  // Support
  prioritySupport: true,
  monthlyCoachingCall: true, // 15 min with success team
  premiumCommunity: true // Discord/Slack access
};
```

**Premium Features in Detail:**

#### Full Bullseye Breakdown

```
FREE VIEW:
┌─────────────────────────────────────────────────────┐
│  Sarah Chen - 23/25 Compatibility ⭐⭐⭐⭐⭐        │
│                                                      │
│  [Blurred Bullseye] 💎 Upgrade to see breakdown     │
│                                                      │
└─────────────────────────────────────────────────────┘

PREMIUM VIEW:
┌─────────────────────────────────────────────────────┐
│  Sarah Chen - 23/25 Compatibility ⭐⭐⭐⭐⭐        │
│                                                      │
│  [Full Bullseye Visualization]                      │
│                                                      │
│  Detailed Breakdown:                                │
│  Chemistry:      █████ 5/5 Perfect!                 │
│  Skills:         ████▒ 4/5 Great fit                │
│  Availability:   █████ 5/5 Perfect!                 │
│  Goals:          █████ 5/5 Aligned                  │
│  Communication:  ████▒ 4/5 Good                     │
│                                                      │
│  Why you match:                                     │
│  ✅ Architect + Builder = proven combination        │
│  ✅ React skills match your needs exactly           │
│  ✅ Both available 15 hrs/week, same schedule       │
│  ✅ Both building portfolio for job search          │
│                                                      │
│  Potential concerns:                                │
│  ⚠️  Different communication preferences            │
│     You prefer sync, Sarah prefers async            │
│                                                      │
│  Tips for success:                                  │
│  💡 Establish communication norms in first meeting  │
│  💡 You design, Sarah builds - play to strengths    │
│  💡 Sarah needs clear requirements before coding    │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

#### Profile Analytics (Premium)

```
┌─────────────────────────────────────────────────────┐
│  Your Profile Performance 💎                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                      │
│  📊 This Week:                                      │
│  • 47 profile views (+35% vs last week)             │
│  • 12 match appearances                             │
│  • 8 messages received                              │
│  • 5 project invitations                            │
│                                                      │
│  Who viewed you:                                    │
│  • Sarah Chen (Builder) - 2 hours ago               │
│  • Marcus Lee (Coordinator) - Yesterday             │
│  • Jamie Park (Catalyst) - 2 days ago               │
│  [See all 47 viewers]                               │
│                                                      │
│  📈 Trends:                                         │
│  • You appear in top 10% of search results          │
│  • Your video pitch has 89% watch rate              │
│  • Builders view your profile 3x more than others   │
│                                                      │
│  💡 Optimization Tips:                              │
│  • Add 3 more skills → +20% visibility              │
│  • Update project status → +15% engagement          │
│  • Respond faster → +10% connection rate            │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

#### Advanced Filters (Premium)

```
FREE FILTERS:
┌─────────────────────────────────────────────────────┐
│  Find Collaborators                                 │
│                                                      │
│  School:                                            │
│  ☑ Viterbi  ☐ Marshall  ☐ Annenberg                │
│                                                      │
│  Skills:                                            │
│  [React] [Python] [+ Add Skill]                     │
│                                                      │
│  Availability:                                      │
│  [10+ hours/week]                                   │
│                                                      │
│  [Search]                                           │
│                                                      │
└─────────────────────────────────────────────────────┘

PREMIUM FILTERS:
┌─────────────────────────────────────────────────────┐
│  Find Collaborators 💎                              │
│                                                      │
│  School:                                            │
│  ☑ Viterbi  ☐ Marshall  ☐ Annenberg                │
│                                                      │
│  Skills:                                            │
│  [React] [Python] [+ Add Skill]                     │
│                                                      │
│  Collaboration Mode: 💎                             │
│  ☑ Builder  ☑ Coordinator  ☐ Refiner               │
│                                                      │
│  Commitment Level: 💎                               │
│  ○ Low (5-10 hrs)  ● High (15+ hrs)                │
│                                                      │
│  Availability: 💎                                   │
│  ☑ This semester  ☐ Summer                         │
│  ☑ Weekdays  ☐ Weekends                            │
│                                                      │
│  Project Stage: 💎                                  │
│  ☑ Idea stage  ☑ Building  ☐ Launched              │
│                                                      │
│  Profile Quality: 💎                                │
│  ☑ Has video pitch                                 │
│  ☑ 90%+ complete profile                           │
│  ☑ Active in last 7 days                           │
│                                                      │
│  [Search] [Save This Search]                        │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

### 5.3 University Tier ($5,000-$25,000/year)

**Target Buyers:** Career services offices, entrepreneurship centers, academic programs

```typescript
const UNIVERSITY_TIER = {
  // White Label
  customDomain: true, // portal.usc.edu/heymaple
  universityBranding: true,
  customColors: true,
  schoolLogo: true,
  
  // All Students Get Premium
  allStudentsPremium: true, // Every verified student has full access
  
  // Admin Tools
  adminDashboard: true,
  studentAnalytics: true,
  collaborationMetrics: true,
  successTracking: true,
  exportData: true,
  
  // Integration
  ssoIntegration: true, // USC NetID, etc.
  lmsIntegration: true, // Canvas, Blackboard
  careerServicesIntegration: true,
  alumniDatabaseIntegration: true,
  
  // Faculty Tools
  facultyAccounts: true,
  projectPosting: true,
  studentRecruitment: true,
  progressTracking: true,
  
  // Support
  dedicatedAccountManager: true,
  customOnboarding: true,
  trainingWorkshops: true,
  prioritySupport: true,
  
  // Analytics
  interdisciplinaryMetrics: true,
  outcomeTracking: true,
  reportGeneration: true
};
```

**University Admin Dashboard:**

```
┌─────────────────────────────────────────────────────┐
│  USC HeyMaple Analytics Dashboard                   │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                      │
│  📊 Collaboration Metrics (This Semester)           │
│                                                      │
│  Active Users:        2,847 students                │
│  Projects Created:    456                           │
│  Teams Formed:        312                           │
│  Completion Rate:     78%                           │
│                                                      │
│  Cross-School Collaborations:                       │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│  Viterbi ↔ Marshall:      89 collaborations        │
│  Viterbi ↔ Annenberg:     67 collaborations        │
│  Marshall ↔ Annenberg:    45 collaborations        │
│  [View All Cross-School Data]                       │
│                                                      │
│  Collaboration Mode Distribution:                   │
│  🏗️ Architects:  18%                                │
│  🔨 Builders:    32%                                │
│  📋 Coordinators: 22%                               │
│  🎨 Refiners:    16%                                │
│  ⚡ Catalysts:   12%                                │
│                                                      │
│  Success Metrics:                                   │
│  • 83% "would work together again"                  │
│  • 4.2/5 average collaboration rating               │
│  • 40% faster team formation vs. pre-HeyMaple       │
│                                                      │
│  [Export Full Report] [Schedule Review Call]        │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

### 5.4 Pricing Strategy

**Student Pricing:**

```
Monthly:  $10/month
Annual:   $96/year (save $24 = 20% off)

Student Discount:
$8/month with verified .edu email

Team Discount:
$7/month per person for 3+ people

Referral Program:
Refer a friend → both get 1 month free
Max 3 free months per year
```

**Upgrade Conversion Funnel:**

```typescript
const CONVERSION_TRIGGERS = [
  {
    trigger: 'hit_weekly_match_limit',
    likelihood: 'high',
    message: 'Unlock unlimited matches - you\'re actively searching!'
  },
  {
    trigger: 'successful_first_connection',
    likelihood: 'medium',
    message: 'Great match! Premium helps you find more perfect collaborators'
  },
  {
    trigger: 'project_deadline_approaching',
    likelihood: 'high',
    message: 'Capstone starting soon? Premium helps you find teammates fast'
  },
  {
    trigger: 'high_profile_views',
    likelihood: 'medium',
    message: 'You\'re popular! See who\'s viewing your profile'
  },
  {
    trigger: 'clicked_advanced_filter',
    likelihood: 'high',
    message: 'Find exactly who you need with advanced filters'
  }
];
```

---

### 5.5 Revenue Projections

**USC Pilot (Year 1-3):**

```typescript
const USC_PROJECTIONS = {
  year1: {
    totalUsers: 1000,
    freeUsers: 850,
    premiumUsers: 150, // 15% conversion
    monthlyRevenue: 150 * 10, // $1,500/month
    annualRevenue: 18000
  },
  
  year2: {
    totalUsers: 3000,
    freeUsers: 2400,
    premiumUsers: 600, // 20% conversion
    monthlyRevenue: 600 * 10, // $6,000/month
    annualRevenue: 72000,
    universityDeal: 15000 // USC Career Services
  },
  
  year3: {
    totalUsers: 5000,
    freeUsers: 3500,
    premiumUsers: 1500, // 30% conversion
    monthlyRevenue: 1500 * 10, // $15,000/month
    annualRevenue: 180000,
    universityDeal: 25000 // Expanded USC partnership
  }
};
```

**Multi-University Expansion (Year 4-5):**

```typescript
const EXPANSION_PROJECTIONS = {
  year5: {
    universities: 5, // USC, UCLA, Stanford, Berkeley, MIT
    avgUsersPerSchool: 2000,
    totalUsers: 10000,
    premiumUsers: 2500, // 25% conversion
    studentRevenue: 2500 * 10 * 12, // $300,000/year
    enterpriseRevenue: 5 * 20000, // $100,000/year from universities
    totalRevenue: 400000
  }
};
```

---

## 6. LEARNING & OPTIMIZATION

### 6.1 Learning Philosophy

**Three Learning Loops:**

1. **Implicit Learning** - Learn from user behavior without asking
2. **Explicit Learning** - Learn from direct feedback (ratings, surveys)
3. **Outcome Learning** - Learn from actual collaboration success

**Goal:** Continuously improve match quality by learning from every interaction

---

### 6.2 Implicit Learning (Behavioral Signals)

**Track user actions to infer preferences:**

```typescript
interface UserBehavior {
  // Match Interactions
  matchViewed: {
    matchId: string;
    viewDuration: number; // seconds
    scrollDepth: number; // 0-100%
    videoPlayed: boolean;
    videoWatchPercentage: number;
  };
  
  // Engagement Signals
  profileClicked: boolean;
  messageSent: boolean;
  connectionMade: boolean;
  
  // Rejection Signals
  matchSkipped: {
    viewDuration: number; // How long before skipping
    reason?: string; // Optional feedback
  };
  
  // Search Behavior
  searchQuery: string;
  filtersUsed: string[];
  resultsClicked: string[];
}
```

**Learning from Positive Signals:**

```typescript
const POSITIVE_SIGNALS = {
  connectionMade: {
    weight: 5,
    learning: 'Boost similar compatibility patterns'
  },
  
  longMessageSent: {
    weight: 4,
    condition: 'message_length > 100 chars',
    learning: 'User is genuinely interested'
  },
  
  videoWatched: {
    weight: 3,
    condition: 'watched > 80%',
    learning: 'Video pitch was compelling'
  },
  
  longViewDuration: {
    weight: 2,
    condition: 'view_duration > 30 seconds',
    learning: 'Match card held attention'
  },
  
  profileViewed: {
    weight: 2,
    learning: 'User wants to learn more'
  }
};

async function learnFromPositiveSignal(
  signal: UserBehavior,
  user: UserProfile,
  match: UserProfile
) {
  // Extract features that led to positive outcome
  const features = {
    collaborationModeMatch: user.collaborationMode.primary === match.collaborationMode.primary,
    skillOverlap: calculateSkillOverlap(user.skills, match.skills),
    availabilityMatch: calculateAvailabilityScore(user, match),
    compatibilityScore: await getCachedCompatibilityScore(user.id, match.id)
  };
  
  // Store successful pattern
  await storeSuccessPattern({
    userId: user.id,
    features,
    signalType: signal.type,
    signalWeight: POSITIVE_SIGNALS[signal.type].weight
  });
  
  // Update user preferences
  await updateUserPreferences(user.id, features);
}
```

**Learning from Negative Signals:**

```typescript
const NEGATIVE_SIGNALS = {
  quickSkip: {
    weight: -4,
    condition: 'view_duration < 3 seconds',
    learning: 'Match was immediately uninteresting'
  },
  
  explicitReject: {
    weight: -5,
    learning: 'User actively rejected this match'
  },
  
  noResponse: {
    weight: -3,
    condition: 'message_sent && no_response_after_7_days',
    learning: 'Match didn\'t find user interesting'
  },
  
  shortViewDuration: {
    weight: -2,
    condition: 'view_duration < 10 seconds',
    learning: 'Something turned them off quickly'
  }
};

async function learnFromNegativeSignal(
  signal: UserBehavior,
  user: UserProfile,
  match: UserProfile
) {
  // Extract features that led to rejection
  const features = extractFeatures(user, match);
  
  // Store failure pattern
  await storeFailurePattern({
    userId: user.id,
    features,
    signalType: signal.type,
    signalWeight: NEGATIVE_SIGNALS[signal.type].weight
  });
  
  // Update avoidance preferences
  await updateAvoidancePreferences(user.id, features);
}
```

---

### 6.3 Explicit Learning (Direct Feedback)

**Post-Connection Match Rating:**

```
┌─────────────────────────────────────────────────────┐
│  How was your experience with Sarah? ⭐             │
│                                                      │
│  ⭐⭐⭐⭐⭐ (5 stars)                                │
│                                                      │
│  What worked well? (optional)                       │
│  ☑ Great communication                              │
│  ☑ Skills matched perfectly                         │
│  ☑ Similar work style                               │
│  ☐ Met deadlines                                    │
│                                                      │
│  Any concerns? (optional)                           │
│  ☐ Communication issues                             │
│  ☐ Skill mismatch                                   │
│  ☐ Availability problems                            │
│  ☐ Different goals                                  │
│                                                      │
│  [Submit Feedback] [Skip]                           │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**Learning from Ratings:**

```typescript
interface MatchRating {
  userId: string;
  matchId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  whatWorked: string[];
  concerns: string[];
}

async function learnFromRating(rating: MatchRating) {
  const user = await getUser(rating.userId);
  const match = await getUser(rating.matchId);
  const compatScore = await getCachedCompatibilityScore(user.id, match.id);
  
  // High rating (4-5 stars)
  if (rating.rating >= 4) {
    // Validate algorithm predictions
    if (compatScore.total >= 20) {
      // Algorithm was correct - reinforce these patterns
      await reinforceCompatibilityPatterns(compatScore);
    } else if (compatScore.total < 15) {
      // Algorithm underestimated - learn why
      await investigatePositiveSurprise(user, match, rating);
    }
  }
  
  // Low rating (1-2 stars)
  if (rating.rating <= 2) {
    // Algorithm failure
    if (compatScore.total >= 20) {
      // Algorithm overestimated - learn why
      await investigateNegativeSurprise(user, match, rating);
    }
    
    // Penalize these patterns in future
    await penalizeMatchPatterns(user, match);
  }
  
  // Update dimension weights based on feedback
  if (rating.concerns.includes('Communication issues')) {
    await increaseWeightFor('communication', user.id);
  }
}
```

---

### 6.4 Outcome Learning (Project Success)

**Post-Project Survey:**

```
┌─────────────────────────────────────────────────────┐
│  Project Completed: AI Study Buddy 🎉               │
│                                                      │
│  Help us improve HeyMaple:                          │
│                                                      │
│  1. Did your team complete the project?             │
│     ● Yes, fully completed                          │
│     ○ Mostly completed                              │
│     ○ Partially completed                           │
│     ○ Did not complete                              │
│                                                      │
│  2. How well did your team work together?           │
│     ⭐⭐⭐⭐⭐ (5 stars)                              │
│                                                      │
│  3. Would you work with these teammates again?      │
│     ● Definitely  ○ Probably  ○ Maybe  ○ No        │
│                                                      │
│  4. What made your collaboration successful?        │
│     ☑ Good skill match                              │
│     ☑ Compatible work styles                        │
│     ☑ Similar goals                                 │
│     ☑ Effective communication                       │
│                                                      │
│  [Submit] [Skip]                                    │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**Learning from Outcomes:**

```typescript
interface ProjectOutcome {
  projectId: string;
  teamMembers: string[];
  completed: 'fully' | 'mostly' | 'partially' | 'not_completed';
  teamRating: 1 | 2 | 3 | 4 | 5;
  wouldWorkAgain: 'definitely' | 'probably' | 'maybe' | 'no';
  successFactors: string[];
}

async function learnFromProjectOutcome(outcome: ProjectOutcome) {
  // Successful project
  if (
    (outcome.completed === 'fully' || outcome.completed === 'mostly') &&
    outcome.teamRating >= 4
  ) {
    // Analyze team composition
    const team = await getTeamMembers(outcome.teamMembers);
    const teamDynamics = analyzeTeamDynamics(team);
    
    // Store successful team pattern
    await storeSuccessfulTeamPattern({
      collaborationModes: team.map(m => m.collaborationMode.primary),
      skillComplementarity: calculateTeamSkillComplementarity(team),
      teamSize: team.length,
      successFactors: outcome.successFactors
    });
    
    // Reinforce these patterns
    await reinforceTeamFormationPatterns(teamDynamics);
  }
  
  // Failed project
  if (outcome.completed === 'not_completed' || outcome.teamRating <= 2) {
    const team = await getTeamMembers(outcome.teamMembers);
    const failureAnalysis = analyzeTeamFailure(team);
    
    // Store failure patterns to avoid
    await storeFailedTeamPattern(failureAnalysis);
    await adjustMatchingToAvoid(failureAnalysis);
  }
}
```

---

### 6.5 Algorithm Weight Adjustments

**Dynamic Dimension Weighting:**

```typescript
async function optimizeDimensionWeights() {
  // Analyze successful collaborations
  const successfulMatches = await getSuccessfulMatches({
    minRating: 4,
    projectCompleted: true,
    last90Days: true
  });
  
  // Calculate correlation between dimensions and success
  const correlations = {
    chemistry: calculateCorrelation(successfulMatches, 'chemistry'), // 0.85
    skills: calculateCorrelation(successfulMatches, 'skills'), // 0.72
    availability: calculateCorrelation(successfulMatches, 'availability'), // 0.68
    goals: calculateCorrelation(successfulMatches, 'goals'), // 0.55
    communication: calculateCorrelation(successfulMatches, 'communication') // 0.45
  };
  
  // Adjust weights proportionally
  const newWeights = {
    chemistry: 0.30, // Increased from 0.20 (strong correlation)
    skills: 0.25, // Increased from 0.20
    availability: 0.20, // Kept same
    goals: 0.15, // Decreased from 0.20
    communication: 0.10 // Decreased from 0.20 (weak correlation)
  };
  
  // A/B test new weights
  await launchWeightExperiment(newWeights);
}
```

**Collaboration Mode Matrix Learning:**

```typescript
const LEARNED_CHEMISTRY_MATRIX = {
  'architect-builder': {
    predicted: 5,
    actualSuccessRate: 0.94,
    sampleSize: 147,
    adjustment: 0 // Prediction was correct
  },
  
  'builder-refiner': {
    predicted: 4,
    actualSuccessRate: 0.89,
    sampleSize: 124,
    adjustment: +0.5 // Better than expected, increase to 4.5
  },
  
  'refiner-refiner': {
    predicted: 2,
    actualSuccessRate: 0.62,
    sampleSize: 34,
    adjustment: +1, // Works better than expected when focused on different aspects
    note: 'Works when both focus on different aspects (UX vs code quality)'
  }
};
```

---

### 6.6 Personalized Algorithm Tuning

**Individual User Learning:**

```typescript
interface UserLearningProfile {
  userId: string;
  
  // Learned preferences
  preferences: {
    favoredCollaborationModes: string[],
    favoredSkillOverlap: 'high' | 'medium' | 'low',
    favoredExperienceLevel: 'similar' | 'mentorship' | 'mixed'
  };
  
  // Behavioral patterns
  patterns: {
    avgTimeToConnect: number,
    messageResponseRate: number,
    connectionSuccessRate: number
  };
  
  // Success history
  successHistory: {
    bestMatchCharacteristics: object,
    worstMatchCharacteristics: object,
    totalSuccessfulCollaborations: number
  };
}

async function personalizeMatchingForUser(user: UserProfile) {
  const learningProfile = await getUserLearningProfile(user.id);
  
  // Boost modes they've succeeded with
  const personalizedBoost = (match: UserProfile) => {
    let boost = 0;
    
    if (learningProfile.preferences.favoredCollaborationModes.includes(
      match.collaborationMode.primary
    )) {
      boost += 2; // Boost matches with modes they like
    }
    
    // Boost based on past success patterns
    const similarity = calculateSimilarity(
      extractCharacteristics(match),
      learningProfile.successHistory.bestMatchCharacteristics
    );
    boost += similarity * 3; // Up to +3 points
    
    return boost;
  };
  
  return personalizedBoost;
}
```

---

### 6.7 Continuous Improvement Pipeline

**Weekly Learning Cycle:**

```typescript
const WEEKLY_LEARNING_PIPELINE = {
  monday: 'Analyze last week\'s matches and success rates',
  tuesday: 'Review user feedback and ratings',
  wednesday: 'Propose algorithm adjustments',
  thursday: 'Implement and deploy A/B tests',
  friday: 'Document learnings and share with team'
};

async function weeklyOptimization() {
  // 1. Analyze match quality
  const metrics = await calculateWeeklyMetrics();
  
  // 2. Identify patterns
  const patterns = await identifySuccessPatterns();
  const failures = await identifyFailurePatterns();
  
  // 3. Propose adjustments
  const adjustments = await proposeAlgorithmAdjustments(patterns, failures);
  
  // 4. Deploy experiments
  await launchABExperiments(adjustments);
  
  // 5. Monitor results
  await monitorExperimentPerformance();
}
```

**Monthly Model Retraining:**

```typescript
async function monthlyModelRetrain() {
  // 1. Gather training data
  const trainingData = await gatherLast30DaysData({
    matches: true,
    ratings: true,
    outcomes: true,
    behavioral: true
  });
  
  // 2. Retrain compatibility model
  const newModel = await trainCompatibilityModel(trainingData);
  
  // 3. Validate against holdout set
  const validation = await validateModel(newModel, holdoutData);
  
  // 4. Deploy if better
  if (validation.accuracy > currentModel.accuracy + 0.02) {
    await deployModelAsExperiment(newModel);
  }
  
  // 5. Generate insights report
  await generateMonthlyInsightsReport(trainingData);
}
```

---

### 6.8 Quality Assurance & Monitoring

**Algorithm Health Metrics:**

```typescript
interface AlgorithmHealth {
  // Match Quality
  avgCompatibilityScore: number, // Target: 18-20
  matchToConnectionRate: number, // Target: >15%
  connectionToProjectRate: number, // Target: >60%
  projectCompletionRate: number, // Target: >75%
  
  // User Satisfaction
  avgMatchRating: number, // Target: >4.0
  premiumConversionRate: number, // Target: >20%
  retentionRate: number, // Target: >60%
  
  // Algorithm Performance
  predictionAccuracy: number, // Target: >80%
  falsePositiveRate: number, // Target: <15%
  falseNegativeRate: number // Target: <10%
}

async function monitorAlgorithmHealth() {
  const health = await calculateHealthMetrics();
  
  // Alert if metrics degrade
  if (health.avgMatchRating < 3.5) {
    await alertTeam({
      severity: 'high',
      message: 'Match quality declining',
      metric: 'avgMatchRating',
      value: health.avgMatchRating
    });
  }
  
  // Generate weekly health report
  await generateHealthReport(health);
}
```

**Bias Detection:**

```typescript
async function auditForBias() {
  // Check for school bias
  const schoolDistribution = await getMatchDistributionBySchool();
  
  // Check for popularity bias
  const networkBias = await getMatchDistributionByConnections();
  
  // Check for experience bias
  const experienceBias = await getMatchDistributionByYear();
  
  // Apply corrections if needed
  if (detectsBias(schoolDistribution)) {
    await applyBiasMitigation('school');
  }
  
  // Generate bias audit report
  await generateBiasReport({
    school: schoolDistribution,
    network: networkBias,
    experience: experienceBias
  });
}
```

---

### 6.9 Success Criteria & Validation

**Year 1 Success Metrics:**

```typescript
const YEAR_1_SUCCESS_CRITERIA = {
  matchQuality: {
    matchToConnectionRate: '>15%',
    projectCompletionRate: '>70%',
    userSatisfaction: '>4.0/5',
    wouldWorkAgain: '>75%'
  },
  
  businessMetrics: {
    totalUsers: 1000,
    premiumConversion: '>15%',
    retention30Day: '>60%',
    weeklyActiveUsers: '>40%'
  },
  
  goal: 'Prove algorithm works at USC'
};

const YEAR_2_SUCCESS_CRITERIA = {
  matchQuality: {
    matchToConnectionRate: '>20%',
    projectCompletionRate: '>80%',
    userSatisfaction: '>4.2/5',
    wouldWorkAgain: '>80%'
  },
  
  businessMetrics: {
    totalUsers: 3000,
    premiumConversion: '>25%',
    retention30Day: '>65%',
    weeklyActiveUsers: '>45%'
  },
  
  goal: 'Achieve best-in-class matching'
};
```

---

### 6.10 Algorithm Evolution Roadmap

**Phase 1: Rule-Based (Months 0-6)**
- Hand-crafted compatibility rules
- 5-dimension scoring system
- Behavioral tracking infrastructure
- Goal: Establish baseline performance

**Phase 2: Data-Driven (Months 6-12)**
- Learn optimal weights from USC data
- Dynamic dimension weighting
- Personalized matching per user
- Goal: Beat baseline by 15%

**Phase 3: ML-Enhanced (Year 2)**
- Machine learning models for prediction
- Collaborative filtering
- Advanced pattern recognition
- Goal: 85% prediction accuracy

**Phase 4: AI-Powered (Year 3+)**
- NLP analysis of bios and chat
- Video analysis of pitches
- Real-time collaboration coaching
- Reinforcement learning
- Goal: AI matching coach

---

## DOCUMENT COMPLETE ✅

**Status:** All 6 sections complete and ready for technical implementation

**Total Pages:** ~95 pages of comprehensive algorithm specification

**Next Steps:**
1. Review with technical team
2. Set up database schema (Section 1)
3. Implement assessment quiz (Section 1.3)
4. Build compatibility scoring engine (Section 2)
5. Deploy matching engine (Section 3)
6. Create mode-specific UX (Section 4)
7. Implement premium gating (Section 5)
8. Set up learning pipeline (Section 6)

---

**Document Version:** 1.0 Final
**Last Updated:** October 25, 2025
**Author:** HeyMaple Team
**Status:** Ready for Development
