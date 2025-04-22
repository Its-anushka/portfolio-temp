import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const PROFILE_IMAGE = "/lovable-uploads/e9d306ad-7441-4574-ae27-134e12651cfc.png";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-data-purple animate-data-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-data-blue animate-data-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-4 animate-fade-in" style={{ animationDelay: "50ms" }}>
            <Avatar className="h-28 w-28 mx-auto shadow-xl ring-4 ring-primary/20">
              <AvatarImage src={PROFILE_IMAGE} alt="Anushka Singh" />
              <AvatarFallback className="text-4xl bg-accent text-accent-foreground">A</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Anushka Singh
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
            Data Analyst specializing in visualization and insights
          </p>
          
          <p className="text-base md:text-lg mb-8 text-balance animate-fade-in" style={{ animationDelay: "200ms" }}>
            Transforming complex data into actionable insights through effective visualization and analysis.
            Passionate about extracting meaningful patterns from data to drive informed decision-making.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Button asChild>
              <Link to="/projects">View Projects</Link>
            </Button>
            
            <Button asChild variant="outline">
              <Link to="/resume" className="flex items-center gap-2">
                <FileDown size={16} />
                Resume
              </Link>
            </Button>
          </div>
          
          <div className="flex gap-5 mt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <a 
              href="https://github.com/its-anushka" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/anushka-singh-07s03" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:anushka0703singh@gmail.com" 
              aria-label="Email"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
