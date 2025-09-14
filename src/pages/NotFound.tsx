import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <AlertTriangle className="h-24 w-24 text-primary mx-auto mb-4 animate-float" />
          <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! This page got lost in the startup universe
          </p>
        </div>
        
        <Button asChild variant="hero" size="lg" className="glow-primary">
          <a href="/">
            <Home className="mr-2 h-5 w-5" />
            Back to Business Ideas
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
