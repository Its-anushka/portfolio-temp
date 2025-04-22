import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillTag from "@/components/SkillTag";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const featuredProjects = projects.slice(0, 2);
  const featuredSkills = skills.flatMap(category => category.skills).slice(0, 8);

  return (
    <div>
      <HeroSection />
      
      {/* Featured Projects Section */}
      <section className="py-16 container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center mb-8">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Explore some of my recent work"
            className="mb-0" 
          />
          <Link to="/projects">
            <Button variant="ghost" className="flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              date={project.date}
              tags={project.tags}
              slug={project.slug}
              image={project.image}
            />
          ))}
        </div>
      </section>
      
      {/* Skills Overview Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading 
            title="Skills Overview" 
            subtitle="Technologies and methodologies I work with"
          />
          
          <div className="flex flex-wrap justify-center gap-2">
            {featuredSkills.map((skill) => (
              <SkillTag key={skill} name={skill} />
            ))}
            <Link to="/about">
              <Button variant="link" className="flex items-center gap-1 h-auto py-1">
                See more <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Interested in collaborating or learning more about my work? I'm always open to new opportunities and challenges.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild>
            <Link to="/about">Learn More About Me</Link>
          </Button>
          <Button asChild variant="outline">
            <a href="mailto:anushka0703singh@gmail.com">Get In Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
