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
  major: string;
  year: number;
  avatar: string;
  mode: CollaborationMode;
  secondaryMode: CollaborationMode;
  modeConfidence: number;
  skills: string[];
  bio: string;
}

export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    mode: CollaborationMode;
  }[];
}
