import { Question } from '@/types/assessment';

export const assessmentQuestions: Question[] = [
  // Communication Intelligence Questions
  {
    id: 'comm_clarity_1',
    type: 'scenario',
    category: 'communication',
    trait: 'clarity',
    title: 'Team Email Misunderstanding',
    scenario: 'A teammate misunderstood your project summary email and made a mistake.',
    question: 'What do you do next?',
    options: [
      { id: 'a', text: 'Resend the same email and ask them to read more carefully', score: 25 },
      { id: 'b', text: 'Call them to clarify verbally and ensure shared understanding', score: 100 },
      { id: 'c', text: 'Ask your manager to clarify it to them', score: 40 },
      { id: 'd', text: 'Avoid confrontation and fix the mistake yourself', score: 10 }
    ]
  },
  {
    id: 'comm_listening_1',
    type: 'likert',
    category: 'communication',
    trait: 'listening',
    title: 'Active Listening Self-Assessment',
    question: 'I listen without planning my reply while someone else is speaking.',
    scale: 5
  },
  {
    id: 'comm_tone_1',
    type: 'likert',
    category: 'communication',
    trait: 'tone_awareness',
    title: 'Tone Awareness',
    question: 'I reflect on how my tone might be received by others.',
    scale: 5
  },
  {
    id: 'comm_feedback_1',
    type: 'likert',
    category: 'communication',
    trait: 'feedback_handling',
    title: 'Feedback Reception',
    question: 'I often check to see if others have truly understood what I\'ve communicated.',
    scale: 5
  },

  // Collaboration Intelligence Questions
  {
    id: 'collab_conflict_1',
    type: 'scenario',
    category: 'collaboration',
    trait: 'conflict_management',
    title: 'Meeting Conflict',
    scenario: 'In a group meeting, two members argue heatedly. The meeting is derailed.',
    question: 'What do you do?',
    options: [
      { id: 'a', text: 'Step in, name the tension, and facilitate a compromise', score: 100 },
      { id: 'b', text: 'Wait for someone senior to handle it', score: 30 },
      { id: 'c', text: 'Send a private message to the louder teammate to calm down', score: 60 },
      { id: 'd', text: 'Avoid involvement and continue with your task', score: 10 }
    ]
  },
  {
    id: 'collab_adaptability_1',
    type: 'slider',
    category: 'collaboration',
    trait: 'team_adaptability',
    title: 'Team Adaptability',
    question: 'I adjust my approach based on who I\'m working with.',
    minLabel: 'Never',
    maxLabel: 'Always',
    scale: 100
  },
  {
    id: 'collab_trust_1',
    type: 'slider',
    category: 'collaboration',
    trait: 'trust_building',
    title: 'Trust Building',
    question: 'I believe compromise is a sign of strength, not weakness.',
    minLabel: 'Strongly Disagree',
    maxLabel: 'Strongly Agree',
    scale: 100
  },
  {
    id: 'collab_ownership_1',
    type: 'slider',
    category: 'collaboration',
    trait: 'shared_ownership',
    title: 'Shared Ownership',
    question: 'I support teammates even if it doesn\'t benefit me directly.',
    minLabel: 'Never',
    maxLabel: 'Always',
    scale: 100
  },

  // Contextual Intelligence Questions
  {
    id: 'context_tone_1',
    type: 'scenario',
    category: 'contextual',
    trait: 'digital_communication',
    title: 'Digital Tone Interpretation',
    scenario: 'You receive this Slack message: "Why didn\'t you flag that earlier? It\'s kind of late now."',
    question: 'What\'s the likely tone?',
    options: [
      { id: 'a', text: 'Aggressive', score: 40 },
      { id: 'b', text: 'Neutral', score: 20 },
      { id: 'c', text: 'Frustrated', score: 100 },
      { id: 'd', text: 'Encouraging', score: 10 }
    ]
  },
  {
    id: 'context_group_1',
    type: 'likert',
    category: 'contextual',
    trait: 'group_dynamics',
    title: 'Group Meeting Dynamics',
    question: 'In group meetings, I actively synthesize different viewpoints to find common ground.',
    scale: 5
  },

  // COACH Framework Questions
  {
    id: 'coach_clarity_1',
    type: 'likert',
    category: 'coach',
    trait: 'clarity_comprehension',
    title: 'Clarity & Comprehension',
    question: 'When someone misunderstands me, I take full ownership and reframe the message.',
    scale: 5
  },
  {
    id: 'coach_openness_1',
    type: 'likert',
    category: 'coach',
    trait: 'openness_feedback',
    title: 'Openness & Feedback',
    question: 'I actively seek feedback and create psychological safety for others to share honest input.',
    scale: 5
  },
  {
    id: 'coach_alignment_1',
    type: 'scenario',
    category: 'coach',
    trait: 'alignment_empathy',
    title: 'Alignment & Empathy',
    scenario: 'A teammate withdraws after receiving critical feedback.',
    question: 'How do you approach them?',
    options: [
      { id: 'a', text: 'Give them space and wait for them to come around', score: 40 },
      { id: 'b', text: 'Check in privately, acknowledge their feelings, and offer support', score: 100 },
      { id: 'c', text: 'Address it in the next team meeting publicly', score: 20 },
      { id: 'd', text: 'Focus on the work and let HR handle personal issues', score: 10 }
    ]
  },
  {
    id: 'coach_conflict_1',
    type: 'likert',
    category: 'coach',
    trait: 'conflict_navigation',
    title: 'Conflict Navigation',
    question: 'I can remain emotionally regulated and fair during heated disagreements.',
    scale: 5
  },
  {
    id: 'coach_harmony_1',
    type: 'likert',
    category: 'coach',
    trait: 'harmony_followthrough',
    title: 'Harmony & Follow-Through',
    question: 'I consistently follow through on commitments and encourage team cohesion.',
    scale: 5
  }
];