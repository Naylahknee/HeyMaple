# Hey Maple - Student Collaboration Platform

## Overview

Hey Maple is a psychology-based student collaboration platform designed for USC and UCLA students. Unlike generic skill-matching platforms, Hey Maple matches students based on **how they work**, not just **what they know**. The platform uses a Five Collaboration Modes framework (Architect, Builder, Coordinator, Refiner, Catalyst) to ensure team compatibility and project success.

**Core Value Proposition:**
- Psychology-based matching using collaboration modes and completion styles
- Cross-school collaboration to break down university silos
- Response guarantee system (24-hour response commitment)
- AI-powered resume parsing for frictionless onboarding
- Project DNA assessment inspired by team compatibility frameworks

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Framework**: Shadcn/ui with Tailwind CSS v4
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter (lightweight routing)
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React

**Design System:**
- **Primary Color**: #4A6CF7 (HSL 228 92% 63%) — used for buttons, links, accents
- **Accent Green (Leaf)**: #22C55E (HSL 142 71% 45%) — used for headline highlights, success states
- **Backgrounds**: White (#FFFFFF) — all pages use white bg, no slate/gray page backgrounds
- **Text Dark**: #111827 (HSL 221 39% 11%) — foreground text
- **Text Gray**: #6B7280 (HSL 220 9% 46%) — muted/secondary text
- **Border**: #E5E7EB (HSL 220 13% 91%) — subtle borders
- **Font**: Inter (weights 400-800) for all text (heading + body)
- **Buttons**: Pill-shaped (rounded-full), font-semibold, primary bg with white text
- **Cards**: `.card-maple` utility — rounded-2xl, bg-secondary, p-7, soft shadow
- **Layout**: `.content-width` = max-w-[880px] mx-auto px-[5%]
- **Section Labels**: `.eyebrow` = 11px uppercase tracking-wide primary color
- **Dividers**: `.divider` = border-t between sections
- **Section Padding**: `.section-padding` = py-24 md:py-[100px]
- **Icons on Cards**: White icons inside solid primary blue squares (w-12 h-12 rounded-xl bg-primary)

**Design Patterns:**
- Component-based architecture with reusable UI components
- Custom hooks for shared logic (`use-auth`, `use-mobile`, `use-toast`)
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- Responsive-first design with mobile breakpoints
- Dark mode support via CSS variables

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **API Style**: RESTful JSON API
- **Session Management**: Express Session with PostgreSQL store (connect-pg-simple)
- **Database ORM**: Drizzle ORM
- **Build Process**: esbuild for server bundling

**Key Decisions:**
- Server-side rendering disabled (SPA architecture)
- Shared schema between client/server via `@shared` directory
- Hot module replacement in development via Vite middleware
- Production builds serve static assets from Express

### Database Architecture
- **Database**: PostgreSQL (via Neon serverless)
- **ORM**: Drizzle ORM with Zod schema validation
- **Migration Strategy**: Drizzle Kit for schema migrations

**Schema Design:**
Core entities include:
- **Profiles**: User accounts with academic info, skills, collaboration modes, and reputation metrics
- **Connections**: Peer-to-peer collaboration requests with message threads
- **Projects**: Student projects with type, requirements, and team member tracking
- **Response Deadlines**: 24-hour response guarantee tracking
- **Notifications**: User activity and engagement alerts
- **User Activity/Milestones**: Gamification and lifecycle stage tracking
- **Match Feedback**: Learning engine for algorithm optimization

**Design Philosophy:**
- UUID primary keys for security and scalability
- JSONB fields for flexible schema evolution (skills arrays, preferences)
- Timestamp tracking for all entities (createdAt, updatedAt)
- Reputation system built into profile schema (ghostCount, responseRate, referralPoints)

### Authentication & Authorization
- **Email Validation**: Restricted to @usc.edu and @ucla.edu domains
- **Account Types**: Student, Faculty, Alumni with role-based features
- **Session Strategy**: Cookie-based sessions stored in PostgreSQL
- **Protected Routes**: Client-side route guards via AuthContext

**Security Considerations:**
- Email domain validation prevents non-university users
- Password verification required for role changes
- Session persistence in database for multi-device support

### Matching Algorithm
- **Compatibility Matrix**: Pre-calculated scores for all mode combinations (1-5 scale)
- **Primary/Secondary Modes**: Dual-mode system with confidence scores
- **Chemistry Calculation**: Uses symmetric mode pairing lookup
- **Skills Matching**: Filters candidates by required technical/soft skills
- **University Theming**: Dynamic color schemes based on user's university

**Algorithm Components:**
1. Assessment flow with 12+ questions mapping to collaboration modes
2. Statistical analysis to determine primary (highest frequency) and secondary modes
3. Confidence scoring based on distribution consistency
4. Compatibility insights generated from mode pairing rules

### Response Guarantee System
**Architecture (from attached docs):**
Seven interconnected automated systems:
1. **Matching Engine**: Pairs users based on modes + skills
2. **Response Guarantee Engine**: 24-hour deadline tracking
3. **Engagement Engine**: Monitors user activity patterns
4. **Retention Engine**: Lifecycle stage transitions
5. **Accountability Engine**: Ghost detection and reputation impact
6. **Health Monitoring**: System-wide success metrics
7. **Learning Engine**: Algorithm optimization from feedback

**Trigger-Logic-Action-Feedback pattern** for each system ensures automated success guarantees without manual intervention.

## External Dependencies

### Third-Party Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Authentication**: Email/password (potential OAuth providers via Passport.js setup)
- **AI Integration**: Prepared for resume parsing (Google Generative AI, OpenAI SDK installed)

### UI Component Libraries
- **Radix UI**: Unstyled accessible components (30+ components installed)
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Shadcn/ui**: Pre-built component patterns using Radix + Tailwind

### Development Tools
- **Drizzle Kit**: Database schema management and migrations
- **ESBuild**: Fast server bundling for production
- **TypeScript**: Type safety across full stack
- **Vite Plugins**: 
  - Replit-specific plugins (cartographer, dev banner, error overlay)
  - Custom meta images plugin for OpenGraph tags

### Asset Management
- **Static Assets**: Served from `client/public` directory
- **Generated Images**: AI-generated avatars and hero images in `attached_assets`
- **Fonts**: Google Fonts (Inter, Outfit) for typography

### Build & Deployment
- **Development**: Concurrent Vite dev server + Express backend
- **Production**: Bundled SPA served via Express static middleware
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection
- **Port Configuration**: Vite on 5000, Express on default (inferred from Replit environment)