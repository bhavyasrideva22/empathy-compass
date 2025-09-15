import { AssessmentResponse, AssessmentResult, TraitScore } from '@/types/assessment';
import { assessmentQuestions } from '@/data/assessmentQuestions';

export const calculateAssessmentResults = (responses: AssessmentResponse[]): AssessmentResult => {
  // Calculate trait scores
  const traitScores: Record<string, number[]> = {};
  const categoryScores: Record<string, number[]> = {};
  const coachScores: Record<string, number[]> = {};

  responses.forEach(response => {
    const question = assessmentQuestions.find(q => q.id === response.questionId);
    if (!question) return;

    // Group by trait
    if (!traitScores[question.trait]) {
      traitScores[question.trait] = [];
    }
    traitScores[question.trait].push(response.value);

    // Group by category
    if (!categoryScores[question.category]) {
      categoryScores[question.category] = [];
    }
    categoryScores[question.category].push(response.value);

    // Group COACH dimensions
    if (question.category === 'coach') {
      if (!coachScores[question.trait]) {
        coachScores[question.trait] = [];
      }
      coachScores[question.trait].push(response.value);
    }
  });

  // Calculate averages
  const getAverage = (scores: number[]) => scores.reduce((sum, score) => sum + score, 0) / scores.length;

  // Communication Intelligence Score
  const communicationScore = categoryScores.communication ? getAverage(categoryScores.communication) : 0;
  
  // Collaboration Intelligence Score
  const collaborationScore = categoryScores.collaboration ? getAverage(categoryScores.collaboration) : 0;
  
  // Contextual Intelligence Score
  const contextualScore = categoryScores.contextual ? getAverage(categoryScores.contextual) : 0;

  // COACH Framework Scores
  const coachFrameworkScores: Record<string, number> = {};
  Object.keys(coachScores).forEach(dimension => {
    coachFrameworkScores[dimension] = getAverage(coachScores[dimension]);
  });

  // Overall Score (weighted average)
  const overallScore = (communicationScore * 0.35 + collaborationScore * 0.35 + contextualScore * 0.15 + 
    Object.values(coachFrameworkScores).reduce((sum, score) => sum + score, 0) / Object.keys(coachFrameworkScores).length * 0.15);

  // Determine communication style
  const communicationStyle = getCommunicationStyle(communicationScore, traitScores);
  
  // Determine collaboration style
  const collaborationStyle = getCollaborationStyle(collaborationScore, traitScores);

  // Get top strengths and growth areas
  const allTraitScores: TraitScore[] = Object.keys(traitScores).map(trait => ({
    name: formatTraitName(trait),
    score: getAverage(traitScores[trait]),
    description: getTraitDescription(trait)
  }));

  const topStrengths = allTraitScores
    .filter(trait => trait.score >= 75)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(trait => trait.name);

  const growthAreas = allTraitScores
    .filter(trait => trait.score < 70)
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map(trait => trait.name);

  return {
    communicationScore,
    collaborationScore,
    contextualScore,
    coachScores: coachFrameworkScores,
    overallScore,
    communicationStyle,
    collaborationStyle,
    topStrengths: topStrengths.length > 0 ? topStrengths : ['Active Listening', 'Clear Expression', 'Empathetic Response'],
    growthAreas: growthAreas.length > 0 ? growthAreas : ['Conflict Resolution', 'Tone Calibration', 'Feedback Integration'],
    traitScores: allTraitScores
  };
};

const getCommunicationStyle = (score: number, traitScores: Record<string, number[]>): string => {
  const listening = traitScores.listening ? traitScores.listening.reduce((sum, s) => sum + s, 0) / traitScores.listening.length : 50;
  const clarity = traitScores.clarity ? traitScores.clarity.reduce((sum, s) => sum + s, 0) / traitScores.clarity.length : 50;
  
  if (listening >= 80 && clarity >= 80) return 'Empathic Clarifier';
  if (clarity >= 80) return 'Direct Communicator';
  if (listening >= 80) return 'Active Listener';
  if (score >= 70) return 'Balanced Communicator';
  return 'Developing Communicator';
};

const getCollaborationStyle = (score: number, traitScores: Record<string, number[]>): string => {
  const conflict = traitScores.conflict_management ? traitScores.conflict_management.reduce((sum, s) => sum + s, 0) / traitScores.conflict_management.length : 50;
  const adaptability = traitScores.team_adaptability ? traitScores.team_adaptability.reduce((sum, s) => sum + s, 0) / traitScores.team_adaptability.length : 50;
  
  if (conflict >= 80 && adaptability >= 80) return 'Adaptive Mediator';
  if (conflict >= 80) return 'Conflict Navigator';
  if (adaptability >= 80) return 'Team Harmonizer';
  if (score >= 70) return 'Supportive Collaborator';
  return 'Emerging Team Player';
};

const formatTraitName = (trait: string): string => {
  return trait.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const getTraitDescription = (trait: string): string => {
  const descriptions: Record<string, string> = {
    clarity: 'Ability to convey ideas clearly and understandably',
    listening: 'Active listening and responsive engagement',
    tone_awareness: 'Sensitivity to emotional context and tone',
    feedback_handling: 'Constructive response to input and critique',
    team_adaptability: 'Flexibility in different team dynamics',
    trust_building: 'Creating reliable, open relationships',
    conflict_management: 'Navigating disagreements effectively',
    shared_ownership: 'Supporting collective success',
    digital_communication: 'Effectiveness in virtual environments',
    group_dynamics: 'Performance in group settings'
  };
  return descriptions[trait] || 'Core collaboration skill';
};