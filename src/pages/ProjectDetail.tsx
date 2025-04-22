import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github, Images as ImagesIcon } from "lucide-react";
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16">
      <div className="mb-6">
        <Link to="/projects" className="flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Projects
        </Link>

        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            <span className="text-muted-foreground">({project.date})</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          {project.images && project.images.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <ImagesIcon size={20} className="text-primary" />
                <span className="font-semibold text-lg">Project Gallery</span>
              </div>
              <Carousel className="w-full max-w-2xl mx-auto">
                <CarouselContent>
                  {project.images.map((imgUrl, idx) => (
                    <CarouselItem key={idx} className="basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                      <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg bg-muted">
                        <img
                          src={imgUrl}
                          alt={`Project screenshot ${idx + 1}`}
                          className="object-cover w-full h-full"
                          loading="lazy"
                        />
                      </AspectRatio>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}

          {project.links && (
            <div className="flex flex-wrap gap-3 mb-8">
              {project.links.github && (
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </Button>
              )}

              {project.links.live && (
                <Button asChild size="sm">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="mb-6">{project.description}</p>

          {project.detailedDescription.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4 whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

