import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Question } from '@/types/assessment';

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: string, value: number) => void;
  currentAnswer?: number;
}

export const QuestionCard = ({ question, onAnswer, currentAnswer }: QuestionCardProps) => {
  const [selectedValue, setSelectedValue] = useState<number>(currentAnswer || 0);

  const handleOptionSelect = (optionId: string) => {
    const option = question.options?.find(opt => opt.id === optionId);
    if (option) {
      setSelectedValue(option.score);
      onAnswer(question.id, option.score);
    }
  };

  const handleSliderChange = (value: number[]) => {
    const newValue = value[0];
    setSelectedValue(newValue);
    onAnswer(question.id, newValue);
  };

  const handleLikertSelect = (value: string) => {
    const numValue = parseInt(value);
    const scaledValue = (numValue / (question.scale || 5)) * 100;
    setSelectedValue(scaledValue);
    onAnswer(question.id, scaledValue);
  };

  return (
    <Card className="shadow-assessment bg-gradient-card border-0 max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className={`px-4 py-2 rounded-full text-sm font-medium ${
            question.category === 'communication' ? 'bg-primary/10 text-primary' :
            question.category === 'collaboration' ? 'bg-secondary/10 text-secondary' :
            question.category === 'contextual' ? 'bg-accent/30 text-accent-foreground' :
            'bg-muted text-muted-foreground'
          }`}>
            {question.category.charAt(0).toUpperCase() + question.category.slice(1)}
          </div>
        </div>
        <CardTitle className="text-2xl mb-2">{question.title}</CardTitle>
        {question.scenario && (
          <CardDescription className="text-base bg-muted/50 p-4 rounded-lg mb-4">
            <strong>Scenario:</strong> {question.scenario}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-6">{question.question}</h3>
        </div>

        {question.type === 'scenario' && question.options && (
          <RadioGroup 
            value={question.options.find(opt => opt.score === selectedValue)?.id || ''}
            onValueChange={handleOptionSelect}
            className="space-y-4"
          >
            {question.options.map((option) => (
              <div key={option.id} className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-accent/20 transition-colors">
                <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                <Label htmlFor={option.id} className="flex-1 text-base leading-relaxed cursor-pointer">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}

        {question.type === 'likert' && (
          <div className="space-y-6">
            <RadioGroup
              value={selectedValue > 0 ? Math.ceil((selectedValue / 100) * (question.scale || 5)).toString() : ''}
              onValueChange={handleLikertSelect}
              className="flex justify-between items-center space-x-4"
            >
              {Array.from({ length: question.scale || 5 }, (_, i) => i + 1).map((value) => (
                <div key={value} className="flex flex-col items-center space-y-3">
                  <RadioGroupItem 
                    value={value.toString()} 
                    id={`likert-${value}`}
                    className="w-6 h-6"
                  />
                  <Label 
                    htmlFor={`likert-${value}`} 
                    className="text-sm font-medium cursor-pointer"
                  >
                    {value}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Strongly Disagree</span>
              <span>Strongly Agree</span>
            </div>
          </div>
        )}

        {(question.type === 'slider' || question.type === 'agreement') && (
          <div className="space-y-6">
            <Slider
              value={[selectedValue]}
              onValueChange={handleSliderChange}
              max={question.scale || 100}
              min={0}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{question.minLabel || 'Strongly Disagree'}</span>
              <span className="font-medium text-foreground">{selectedValue}%</span>
              <span>{question.maxLabel || 'Strongly Agree'}</span>
            </div>
          </div>
        )}

        {selectedValue > 0 && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              ✓ Answer recorded
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};