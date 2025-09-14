import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Sparkles, Lightbulb } from 'lucide-react';

interface EmptyStateProps {
  onGetStarted: () => void;
}

const EmptyState = ({ onGetStarted }: EmptyStateProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative bg-glass/20 backdrop-blur-sm rounded-full p-8 inline-block">
            <Brain className="h-20 w-20 text-primary animate-float" />
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-6">
          Ready to build your <span className="gradient-text">next empire</span>?
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Let's cook up some brilliant business ideas tailored just for you. 
          No fluff, no generic advice – just actionable plans that actually work.
        </p>

        <Card className="glass-card p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">AI-Powered Ideas</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized business concepts based on your unique skills and budget
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Complete Roadmaps</h3>
              <p className="text-sm text-muted-foreground">
                From MVP to profitability – we'll map out every step of your journey
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Smart Tech Stacks</h3>
              <p className="text-sm text-muted-foreground">
                Get recommendations for the perfect tools and technologies for your idea
              </p>
            </div>
          </div>
        </Card>

        <Button 
          size="lg" 
          variant="hero" 
          className="glow-primary text-lg px-8 py-6 h-auto"
          onClick={onGetStarted}
        >
          <Sparkles className="mr-2 h-6 w-6" />
          Let's Cook Up Some Ideas 🍳
        </Button>

        <p className="text-xs text-muted-foreground mt-6">
          Ready in 3 steps • Takes less than 2 minutes • 100% personalized
        </p>
      </div>
    </div>
  );
};

export default EmptyState;