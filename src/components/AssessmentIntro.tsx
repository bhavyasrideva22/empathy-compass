import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Users, MessageCircle, Target, Clock, Award } from 'lucide-react';

interface AssessmentIntroProps {
  onStart: () => void;
}

export const AssessmentIntro = ({ onStart }: AssessmentIntroProps) => {
  return (
    <div className="min-h-screen bg-gradient-assessment">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-result">
              <Brain className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            🧠 Empathy & Perspective-Taking
          </h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            A Collaboration & Communication Intelligence Assessment
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            In today's increasingly connected world, collaboration and communication aren't just "soft skills" — 
            they are core intelligences that determine whether teams thrive, projects succeed, and relationships grow. 
            This assessment helps you understand your natural communication style, strengths in group settings, 
            and areas for growth through real-world scenarios and personalized feedback.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-card border-0 bg-gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Communication Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Evaluate your clarity, listening style, tone awareness, and feedback handling through real scenarios.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-xl w-fit">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-xl">Collaboration Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Discover your team adaptability, trust-building abilities, conflict management, and shared ownership mindset.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-accent/30 rounded-xl w-fit">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-xl">COACH Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Comprehensive analysis using Clarity, Openness, Alignment, Conflict Navigation, and Harmony dimensions.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Assessment Details */}
        <Card className="shadow-assessment bg-assessment-card border-0 mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">What You'll Discover</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Your Communication Style</h4>
                    <p className="text-muted-foreground text-sm">
                      Personalized label like "Empathic Clarifier" or "Direct Informer" with detailed behavioral insights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Users className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Collaboration Type</h4>
                    <p className="text-muted-foreground text-sm">
                      Your natural team contribution pattern and role preferences in group dynamics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/30 rounded-lg">
                    <Target className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Growth Opportunities</h4>
                    <p className="text-muted-foreground text-sm">
                      Specific areas for development with actionable techniques and practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Contextual Intelligence</h4>
                    <p className="text-muted-foreground text-sm">
                      How you perform across different settings: 1-on-1, groups, conflict zones, and digital environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Award className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Career Alignment</h4>
                    <p className="text-muted-foreground text-sm">
                      Role recommendations and team fit analysis based on your CCI profile.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/30 rounded-lg">
                    <Clock className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">4-Week Growth Plan</h4>
                    <p className="text-muted-foreground text-sm">
                      Personalized development plan with techniques, tools, and reflection practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Stats */}
        <div className="bg-assessment-card rounded-2xl shadow-card p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Questions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">10 min</div>
              <div className="text-muted-foreground">Assessment Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-foreground mb-2">5</div>
              <div className="text-muted-foreground">Core Dimensions</div>
            </div>
          </div>
        </div>

        {/* Start Assessment CTA */}
        <div className="text-center">
          <Button 
            onClick={onStart}
            size="lg"
            className="bg-gradient-primary hover:bg-primary-dark text-xl px-12 py-6 rounded-xl shadow-assessment"
          >
            Begin Your Assessment
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No registration required • Results available immediately
          </p>
        </div>
      </div>
    </div>
  );
};