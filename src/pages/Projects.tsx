import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16">
      <SectionHeading 
        title="Projects" 
        subtitle="Explore my data analysis and visualization work"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
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
    </div>
  );
};

export default Projects;
