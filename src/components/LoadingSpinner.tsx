import { Sparkles } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
  submessage?: string;
}

const LoadingSpinner = ({ message = "Generating ideas...", submessage = "This might take a moment" }: LoadingSpinnerProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="relative mb-8">
          <div className="animate-glow-pulse">
            <Sparkles className="h-16 w-16 text-primary mx-auto animate-float" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2 gradient-text">{message}</h2>
        <p className="text-muted-foreground animate-pulse">{submessage}</p>
        
        <div className="flex justify-center mt-6">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;