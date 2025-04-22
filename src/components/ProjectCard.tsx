
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  image?: string;
}

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"; // Tech themed placeholder

const ProjectCard = ({ title, description, date, tags, slug, image }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col animate-fade-in">
      {/* Project Image */}
      <div className="w-full relative">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img
            src={image || PLACEHOLDER_IMAGE}
            alt={title}
            className="object-cover w-full h-full rounded-t-md"
            loading="lazy"
          />
        </AspectRatio>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="text-sm text-muted-foreground">{date}</div>
        </div>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/projects/${slug}`} className="w-full">
          <Button variant="outline" className="w-full flex items-center gap-2">
            View Details
            <ExternalLink size={16} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

