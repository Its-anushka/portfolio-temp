
import { cn } from "@/lib/utils";

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag = ({ name, className }: SkillTagProps) => {
  return (
    <span 
      className={cn(
        "skill-tag",
        className
      )}
    >
      {name}
    </span>
  );
};

export default SkillTag;
