import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AssessmentResult, COACHDimension } from '@/types/assessment';
import { 
  Brain, 
  Users, 
  Target, 
  TrendingUp, 
  Award, 
  Download,
  RotateCcw
} from 'lucide-react';

interface AssessmentResultsProps {
  results: AssessmentResult;
  onRestart: () => void;
}

export const AssessmentResults = ({ results, onRestart }: AssessmentResultsProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-score-excellent';
    if (score >= 70) return 'text-score-good';
    if (score >= 55) return 'text-score-average';
    return 'text-score-needs_work';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 85) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 55) return 'Average';
    return 'Needs Work';
  };

  const getRecommendation = (score: number) => {
    if (score >= 85) return { label: 'Collaborate Confidently', icon: '✅', color: 'bg-score-excellent/10 text-score-excellent' };
    if (score >= 65) return { label: 'Grow & Calibrate', icon: '🟡', color: 'bg-score-good/10 text-score-good' };
    return { label: 'Reassess & Practice', icon: '🔴', color: 'bg-score-needs_work/10 text-score-needs_work' };
  };

  const coachDimensions: COACHDimension[] = [
    { code: 'C', name: 'Clarity & Comprehension', description: 'How clearly you express and understand ideas', score: results.coachScores.clarity_comprehension || 0 },
    { code: 'O', name: 'Openness & Feedback', description: 'Responsiveness to input and psychological safety', score: results.coachScores.openness_feedback || 0 },
    { code: 'A', name: 'Alignment & Empathy', description: 'Tuning into emotional context and team goals', score: results.coachScores.alignment_empathy || 0 },
    { code: 'C', name: 'Conflict Navigation', description: 'Handling disagreements and emotional control', score: results.coachScores.conflict_navigation || 0 },
    { code: 'H', name: 'Harmony & Follow-Through', description: 'Encouraging cohesion and dependable contribution', score: results.coachScores.harmony_followthrough || 0 }
  ];

  const recommendation = getRecommendation(results.overallScore);

  return (
    <div className="min-h-screen bg-gradient-assessment">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-result">
              <Award className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Your CCI Assessment Results</h1>
          <p className="text-xl text-muted-foreground">
            Your Collaboration & Communication Intelligence Profile
          </p>
        </div>

        {/* Overall Score */}
        <Card className="shadow-result bg-gradient-card border-0 mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">Overall Collaboration Quotient (CQ)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className={`text-6xl font-bold mb-4 ${getScoreColor(results.overallScore)}`}>
                {Math.round(results.overallScore)}
              </div>
              <div className="text-2xl font-semibold mb-2">{getScoreLabel(results.overallScore)}</div>
              <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium ${recommendation.color}`}>
                <span className="text-xl">{recommendation.icon}</span>
                {recommendation.label}
              </div>
            </div>
            <Progress 
              value={results.overallScore} 
              className="h-4 mb-4"
            />
          </CardContent>
        </Card>

        {/* Core Dimensions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Communication Intelligence */}
          <Card className="shadow-assessment bg-gradient-card border-0">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Communication Intelligence</CardTitle>
                  <CardDescription>CI Score: {Math.round(results.communicationScore)}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress 
                value={results.communicationScore} 
                className="mb-4"
              />
              <div className="space-y-3">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="font-semibold text-primary">Style: {results.communicationStyle}</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Your natural communication approach and how you convey ideas, listen, and handle feedback.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Collaboration Intelligence */}
          <Card className="shadow-assessment bg-gradient-card border-0">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Collaboration Intelligence</CardTitle>
                  <CardDescription>CoI Score: {Math.round(results.collaborationScore)}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress 
                value={results.collaborationScore} 
                className="mb-4"
              />
              <div className="space-y-3">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="font-semibold text-secondary">Style: {results.collaborationStyle}</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  How you work with others, build trust, navigate conflict, and contribute to team success.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* COACH Framework */}
        <Card className="shadow-result bg-gradient-card border-0 mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/30 rounded-xl">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl">COACH Framework Analysis</CardTitle>
                <CardDescription>Your behavioral profile across five key dimensions</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {coachDimensions.map((dimension, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {dimension.code}
                      </div>
                      <div>
                        <div className="font-semibold">{dimension.name}</div>
                        <div className="text-sm text-muted-foreground">{dimension.description}</div>
                      </div>
                    </div>
                    <div className={`font-bold text-lg ${getScoreColor(dimension.score)}`}>
                      {Math.round(dimension.score)}
                    </div>
                  </div>
                  <Progress value={dimension.score} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strengths & Growth Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-assessment bg-gradient-card border-0">
            <CardHeader>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-score-excellent" />
                <CardTitle className="text-xl text-score-excellent">Top Strengths</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.topStrengths.map((strength, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-score-excellent/10 rounded-lg">
                    <div className="w-2 h-2 bg-score-excellent rounded-full"></div>
                    <span className="font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-assessment bg-gradient-card border-0">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl text-primary">Growth Opportunities</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.growthAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6">
          <Button
            onClick={onRestart}
            variant="outline"
            size="lg"
            className="px-8"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Take Assessment Again
          </Button>
          <Button
            size="lg"
            className="bg-gradient-primary px-8"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Results
          </Button>
        </div>
      </div>
    </div>
  );
};