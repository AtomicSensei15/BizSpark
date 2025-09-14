import { Heart, Github, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-20 py-8 bg-glass/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-sm text-muted-foreground">
              Made with <Heart className="h-4 w-4 text-red-400 inline mx-1" /> for entrepreneurs
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Business Idea Generator. Turning skills into success stories.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;