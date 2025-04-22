
interface SkillBarProps {
  skill: string;
  level: number; // 0 to 100
}

const SkillBar = ({ skill, level }: SkillBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
