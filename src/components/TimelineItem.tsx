import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  children: ReactNode;
  certificate?: string;
}

const TimelineItem = ({ title, subtitle, date, children, certificate }: TimelineItemProps) => {
  return (
    <div className="timeline-item">
      <div className="mb-1 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h4 className="text-lg font-medium">{title}</h4>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>
      <div>{children}</div>
      {certificate && (
        <div className="mt-4">
          <Button asChild variant="outline" size="sm">
            <a href={certificate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FileDown size={16} />
              View Certificate
            </a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
