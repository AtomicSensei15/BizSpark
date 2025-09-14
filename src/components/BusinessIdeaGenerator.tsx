import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Lightbulb, Rocket, ArrowRight, Zap, Target, DollarSign, Code, TrendingUp, Brain, Star } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import Footer from './Footer';

interface UserInput {
  skills: string[];
  budget: string;
  market: string;
  experience: string;
}

interface BusinessIdea {
  id: string;
  name: string;
  tagline: string;
  description: string;
  marketSize: string;
  difficulty: string;
  timeToMarket: string;
  initialInvestment: string;
}

interface BusinessPlan {
  idea: BusinessIdea;
  mvpSteps: string[];
  techStack: string[];
  monetization: string[];
  competition: string[];
  timeline: string;
}

const BusinessIdeaGenerator = () => {
  const [currentStep, setCurrentStep] = useState<'input' | 'ideas' | 'plan'>('input');
  const [userInput, setUserInput] = useState<UserInput>({
    skills: [],
    budget: '',
    market: '',
    experience: ''
  });
  const [generatedIdeas, setGeneratedIdeas] = useState<BusinessIdea[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<BusinessPlan | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const skillOptions = [
    'Web Development', 'Mobile Apps', 'UI/UX Design', 'Data Science', 
    'AI/ML', 'Marketing', 'Sales', 'Content Creation', 'SEO', 'E-commerce',
    'Photography', 'Video Editing', 'Consulting', 'Teaching', 'Finance'
  ];

  const budgetOptions = [
    '$0 - $1,000', '$1,000 - $5,000', '$5,000 - $10,000', 
    '$10,000 - $25,000', '$25,000+'
  ];

  const marketOptions = [
    'B2B SaaS', 'E-commerce', 'Content/Media', 'Education', 
    'Health & Fitness', 'Finance', 'Real Estate', 'Travel', 'Food & Drink'
  ];

  const experienceOptions = [
    'First-time founder', '1-2 years experience', '3-5 years experience', 
    '5+ years experience', 'Serial entrepreneur'
  ];

  // Mock data for demonstration
  const mockIdeas: BusinessIdea[] = [
    {
      id: '1',
      name: 'AI Content Optimizer',
      tagline: 'Turn mediocre content into viral gold 🔥',
      description: 'AI-powered platform that analyzes and optimizes content for maximum engagement across social platforms.',
      marketSize: '$4.2B',
      difficulty: 'Medium',
      timeToMarket: '3-4 months',
      initialInvestment: '$5K - $15K'
    },
    {
      id: '2',
      name: 'Local Service Marketplace',
      tagline: 'Uber for everything in your neighborhood 🏠',
      description: 'Hyperlocal platform connecting residents with trusted service providers for home repairs, cleaning, and more.',
      marketSize: '$85B',
      difficulty: 'Hard',
      timeToMarket: '6-8 months',
      initialInvestment: '$25K+'
    },
    {
      id: '3',
      name: 'Micro-Learning SaaS',
      tagline: 'TikTok meets LinkedIn Learning 📚',
      description: 'Bite-sized professional skill courses delivered through engaging video content for busy professionals.',
      marketSize: '$12.2B',
      difficulty: 'Easy',
      timeToMarket: '2-3 months',
      initialInvestment: '$2K - $8K'
    }
  ];

  const generateIdeas = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGeneratedIdeas(mockIdeas);
    setCurrentStep('ideas');
    setIsLoading(false);
  };

  const generatePlan = async (idea: BusinessIdea) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockPlan: BusinessPlan = {
      idea,
      mvpSteps: [
        'Market research & user interviews',
        'Design wireframes & user flows',
        'Build core features & basic UI',
        'Beta testing with 50 users',
        'Launch & iterate based on feedback'
      ],
      techStack: ['React/Next.js', 'Node.js/Express', 'PostgreSQL', 'Stripe', 'Vercel'],
      monetization: ['Freemium model', 'Pro subscription ($29/mo)', 'Enterprise plans ($99/mo)', 'API usage fees'],
      competition: ['Competitor A - 40% market share', 'Competitor B - 25% market share', 'Your opportunity - Blue ocean'],
      timeline: '3-6 months to MVP, 12 months to profitability'
    };
    
    setSelectedPlan(mockPlan);
    setCurrentStep('plan');
    setIsLoading(false);
  };

  const ProgressStepper = () => (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-4">
        {['Input', 'Ideas', 'Plan'].map((step, index) => (
          <div key={step} className="flex items-center">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center font-semibold
              ${index === 0 && currentStep === 'input' ? 'bg-primary text-primary-foreground glow-primary' : ''}
              ${index === 1 && currentStep === 'ideas' ? 'bg-primary text-primary-foreground glow-primary' : ''}
              ${index === 2 && currentStep === 'plan' ? 'bg-primary text-primary-foreground glow-primary' : ''}
              ${
                (index === 0 && (currentStep === 'ideas' || currentStep === 'plan')) ||
                (index === 1 && currentStep === 'plan')
                  ? 'bg-secondary text-secondary-foreground'
                  : ''
              }
              ${
                (index === 0 && currentStep === 'input') ||
                (index === 1 && currentStep === 'input') ||
                (index === 2 && (currentStep === 'input' || currentStep === 'ideas'))
                  ? 'bg-muted text-muted-foreground'
                  : ''
              }
            `}>
              {index + 1}
            </div>
            <span className="ml-2 font-medium">{step}</span>
            {index < 2 && <ArrowRight className="ml-4 h-4 w-4 text-muted-foreground" />}
          </div>
        ))}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <LoadingSpinner 
        message={currentStep === 'input' ? 'Mixing brilliance...' : 'Crafting your roadmap...'}
        submessage={currentStep === 'input' ? 'Our AI is cooking up some game-changing ideas 🍳' : 'Building your path to success 🚀'}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <ProgressStepper />
        
        {currentStep === 'input' && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">
                Your Next <span className="gradient-text">Big Idea</span> Awaits
              </h1>
              <p className="text-xl text-muted-foreground">
                Tell us about yourself and we'll generate brilliant business ideas tailored just for you
              </p>
            </div>

            <Card className="glass-card p-8">
              <div className="space-y-6">
                <div>
                  <label className="text-lg font-semibold mb-3 block">What are your skills?</label>
                  <div className="flex flex-wrap gap-2">
                    {skillOptions.map(skill => (
                      <Badge
                        key={skill}
                        variant={userInput.skills.includes(skill) ? "default" : "secondary"}
                        className="cursor-pointer transition-all hover:scale-105"
                        onClick={() => {
                          setUserInput(prev => ({
                            ...prev,
                            skills: prev.skills.includes(skill)
                              ? prev.skills.filter(s => s !== skill)
                              : [...prev.skills, skill]
                          }));
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-lg font-semibold mb-3 block">What's your budget?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetOptions.map(budget => (
                      <Button
                        key={budget}
                        variant={userInput.budget === budget ? "default" : "outline"}
                        className="glass-hover"
                        onClick={() => setUserInput(prev => ({ ...prev, budget }))}
                      >
                        {budget}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-lg font-semibold mb-3 block">Preferred market?</label>
                  <div className="grid grid-cols-3 gap-2">
                    {marketOptions.map(market => (
                      <Button
                        key={market}
                        variant={userInput.market === market ? "default" : "outline"}
                        className="glass-hover"
                        onClick={() => setUserInput(prev => ({ ...prev, market }))}
                      >
                        {market}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-lg font-semibold mb-3 block">Your experience level?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {experienceOptions.map(experience => (
                      <Button
                        key={experience}
                        variant={userInput.experience === experience ? "default" : "outline"}
                        className="glass-hover"
                        onClick={() => setUserInput(prev => ({ ...prev, experience }))}
                      >
                        {experience}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full glow-primary"
                  onClick={generateIdeas}
                  disabled={!userInput.skills.length || !userInput.budget || !userInput.market || !userInput.experience}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate My Ideas
                </Button>
              </div>
            </Card>
          </div>
        )}

        {currentStep === 'ideas' && (
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">🔥 Here are your custom business ideas</h2>
              <p className="text-xl text-muted-foreground">
                Each one is tailored to your skills and budget. Pick your favorite!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedIdeas.map(idea => (
                <Card key={idea.id} className="glass-card glass-hover p-6 cursor-pointer" onClick={() => generatePlan(idea)}>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <Lightbulb className="h-8 w-8 text-primary flex-shrink-0" />
                      <Badge variant="secondary">{idea.difficulty}</Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">{idea.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{idea.tagline}</p>
                      <p className="text-sm leading-relaxed">{idea.description}</p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Market Size:</span>
                        <span className="font-semibold">{idea.marketSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time to Market:</span>
                        <span className="font-semibold">{idea.timeToMarket}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investment:</span>
                        <span className="font-semibold">{idea.initialInvestment}</span>
                      </div>
                    </div>

                    <Button className="w-full" variant="secondary">
                      <Rocket className="mr-2 h-4 w-4" />
                      Get Business Plan
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" onClick={() => setCurrentStep('input')}>
                ← Generate Different Ideas
              </Button>
            </div>
          </div>
        )}

        {currentStep === 'plan' && selectedPlan && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                🚀 Your roadmap to <span className="gradient-text">{selectedPlan.idea.name}</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Here's your game plan – just follow these steps and you're golden
              </p>
            </div>

            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="mr-2 h-5 w-5 text-primary" />
                  MVP Development Steps
                </h3>
                <ol className="space-y-3">
                  {selectedPlan.mvpSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Code className="mr-2 h-5 w-5 text-primary" />
                    Recommended Tech Stack
                  </h3>
                  <div className="space-y-2">
                    {selectedPlan.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>

                <Card className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-primary" />
                    Monetization Strategy
                  </h3>
                  <ul className="space-y-2">
                    {selectedPlan.monetization.map((strategy, index) => (
                      <li key={index} className="flex items-center">
                        <Zap className="mr-2 h-4 w-4 text-secondary" />
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <Card className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                  Competition Analysis
                </h3>
                <div className="space-y-2">
                  {selectedPlan.competition.map((comp, index) => (
                    <p key={index} className="text-sm">{comp}</p>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <p className="text-sm">
                    <strong>Timeline:</strong> {selectedPlan.timeline}
                  </p>
                </div>
              </Card>

              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={() => setCurrentStep('ideas')}>
                  ← Back to Ideas
                </Button>
                <Button size="lg" className="glow-primary">
                  <Rocket className="mr-2 h-5 w-5" />
                  Download Business Plan PDF
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BusinessIdeaGenerator;