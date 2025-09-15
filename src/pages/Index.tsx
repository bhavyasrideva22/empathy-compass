import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AssessmentIntro } from '@/components/AssessmentIntro';
import { QuestionCard } from '@/components/QuestionCard';
import { ProgressBar } from '@/components/ProgressBar';
import { AssessmentResults } from '@/components/AssessmentResults';
import { assessmentQuestions } from '@/data/assessmentQuestions';
import { calculateAssessmentResults } from '@/utils/assessmentLogic';
import { AssessmentResponse, AssessmentResult } from '@/types/assessment';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type AssessmentState = 'intro' | 'questions' | 'results';

const Index = () => {
  const [currentState, setCurrentState] = useState<AssessmentState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse[]>([]);
  const [results, setResults] = useState<AssessmentResult | null>(null);

  const handleStart = () => {
    setCurrentState('questions');
    setCurrentQuestionIndex(0);
    setResponses([]);
  };

  const handleAnswer = (questionId: string, value: number) => {
    const newResponses = responses.filter(r => r.questionId !== questionId);
    newResponses.push({ questionId, value });
    setResponses(newResponses);
  };

  const handleNext = () => {
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate results and show results page
      const calculatedResults = calculateAssessmentResults(responses);
      setResults(calculatedResults);
      setCurrentState('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentState('intro');
    setCurrentQuestionIndex(0);
    setResponses([]);
    setResults(null);
  };

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const currentResponse = responses.find(r => r.questionId === currentQuestion?.id);
  const canProceed = currentResponse !== undefined;

  if (currentState === 'intro') {
    return <AssessmentIntro onStart={handleStart} />;
  }

  if (currentState === 'results' && results) {
    return <AssessmentResults results={results} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-assessment">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">CCI Assessment</h1>
          <p className="text-muted-foreground">
            Collaboration & Communication Intelligence Evaluation
          </p>
        </div>

        {/* Progress */}
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={assessmentQuestions.length}
          currentQuestion={currentQuestion?.category}
        />

        {/* Question */}
        {currentQuestion && (
          <div className="mb-8">
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              currentAnswer={currentResponse?.value}
            />
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <Button
            onClick={handlePrevious}
            variant="outline"
            disabled={currentQuestionIndex === 0}
            className="px-6"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            {currentQuestionIndex + 1} of {assessmentQuestions.length}
          </div>

          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="bg-gradient-primary px-6"
          >
            {currentQuestionIndex === assessmentQuestions.length - 1 ? 'View Results' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Completion Status */}
        {!canProceed && (
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Please answer the current question to continue
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
