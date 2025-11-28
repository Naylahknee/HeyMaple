import { CollaborationMode, User } from './types';
import { MODES } from './mockData';

// Compatibility Matrix from Spec
const COMPATIBILITY_MATRIX: Record<string, number> = {
  'Architect-Builder': 5,
  'Architect-Architect': 2,
  'Architect-Coordinator': 4,
  'Architect-Refiner': 3,
  'Architect-Catalyst': 3,
  
  'Builder-Builder': 2,
  'Builder-Coordinator': 4,
  'Builder-Refiner': 4,
  'Builder-Catalyst': 4,
  
  'Coordinator-Coordinator': 3,
  'Coordinator-Refiner': 4,
  'Coordinator-Catalyst': 5,
  
  'Refiner-Refiner': 2,
  'Refiner-Catalyst': 3,
  
  'Catalyst-Catalyst': 1
};

export function calculateChemistryScore(mode1: CollaborationMode, mode2: CollaborationMode): number {
  const key = [mode1, mode2].sort().join('-');
  return COMPATIBILITY_MATRIX[key] || 3;
}

export function calculateAssessmentResult(responses: CollaborationMode[]): { primary: CollaborationMode; secondary: CollaborationMode; confidence: number } {
  const scores: Record<string, number> = {
    Architect: 0,
    Builder: 0,
    Coordinator: 0,
    Refiner: 0,
    Catalyst: 0
  };

  responses.forEach(r => scores[r]++);

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primary = sorted[0][0] as CollaborationMode;
  const secondary = sorted[1][0] as CollaborationMode;

  const total = responses.length;
  const primaryScore = sorted[0][1];
  const secondaryScore = sorted[1][1];

  // Formula from spec
  const confidence = Math.min(100, (primaryScore / total) * 100 + (primaryScore - secondaryScore) * 10);

  return { primary, secondary, confidence };
}

export function getCompatibilityInsight(mode1: CollaborationMode, mode2: CollaborationMode): string {
  const score = calculateChemistryScore(mode1, mode2);
  
  if (score === 5) return "Perfect Match! Your working styles are naturally complementary.";
  if (score === 4) return "Strong Match. You will work very well together.";
  if (score === 3) return "Good Match. You can work together with clear roles.";
  if (score === 2) return "Challenging Match. You may have friction without a third perspective.";
  return "Potential Clash. Proceed with caution and clear boundaries.";
}
