import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  current: number;
  total: number;
  currentQuestion?: string;
}

export const ProgressBar = ({ current, total, currentQuestion }: ProgressBarProps) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="bg-assessment-card rounded-xl shadow-card p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">Assessment Progress</h3>
          <p className="text-sm text-muted-foreground">
            Question {current} of {total}
          </p>
        </div>
        <div className="text-2xl font-bold text-primary">
          {Math.round(percentage)}%
        </div>
      </div>
      
      <Progress 
        value={percentage} 
        className="h-3 bg-progress-bg"
      />
      
      {currentQuestion && (
        <p className="text-sm text-muted-foreground mt-3 text-center">
          Current section: <span className="font-medium text-foreground">{currentQuestion}</span>
        </p>
      )}
    </div>
  );
};