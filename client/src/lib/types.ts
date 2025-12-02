export type CollaborationMode = 'Architect' | 'Builder' | 'Coordinator' | 'Refiner' | 'Catalyst';

export interface ModeDefinition {
  id: CollaborationMode;
  tagline: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  bestPairedWith: CollaborationMode[];
  avoidPairingWith: CollaborationMode[];
  color: string;
  icon: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  accountType?: 'Student' | 'Faculty' | 'Alumni';
  university?: string; // "usc" or "ucla"
  school?: string;
  major?: string;
  year?: number;
  avatar?: string;
  mode?: CollaborationMode;
  secondaryMode?: CollaborationMode;
  modeConfidence?: number;
  skills?: string[];
  bio?: string;
  videoPitch?: string;
  portfolioLinks?: string[];
  verification?: {
    emailVerified: boolean;
    studentIdVerified: boolean;
  };
  reviews?: Review[];
}

export interface Review {
  authorName: string;
  authorMode: CollaborationMode;
  rating: number;
  text: string;
  projectName: string;
  date: string;
}

export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    mode: CollaborationMode;
  }[];
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  text: string;
  timestamp: Date;
}

export interface Connection {
  id: string;
  userId: string;
  matchId: string;
  status: 'pending' | 'connected' | 'rejected';
  introMessage: string;
  createdAt: Date;
}

export interface Notification {
  id: string;
  type: 'connection_request' | 'message' | 'profile_viewed';
  title: string;
  description: string;
  relatedUserId?: string;
  read: boolean;
  createdAt: Date;
}
