export interface QuestionOption {
  id: string;
  text: string;
  score: number;
}

export interface Question {
  id: string;
  type: 'scenario' | 'likert' | 'slider' | 'agreement';
  category: 'communication' | 'collaboration' | 'contextual' | 'coach';
  trait: string;
  title: string;
  scenario?: string;
  question: string;
  options?: QuestionOption[];
  minLabel?: string;
  maxLabel?: string;
  scale?: number;
}

export interface AssessmentResponse {
  questionId: string;
  value: number;
}

export interface TraitScore {
  name: string;
  score: number;
  description: string;
}

export interface AssessmentResult {
  communicationScore: number;
  collaborationScore: number;
  contextualScore: number;
  coachScores: Record<string, number>;
  overallScore: number;
  communicationStyle: string;
  collaborationStyle: string;
  topStrengths: string[];
  growthAreas: string[];
  traitScores: TraitScore[];
}

export interface COACHDimension {
  code: string;
  name: string;
  description: string;
  score: number;
}