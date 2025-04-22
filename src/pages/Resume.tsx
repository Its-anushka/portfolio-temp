import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import { FileDown } from "lucide-react";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { skills } from "@/data/skills";
import SkillTag from "@/components/SkillTag";

const Resume = () => {
  const handleDownload = () => {
    // Create a link element to download the resume PDF
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Anushka_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16">
      <div className="mb-8 flex justify-between items-center">
        <SectionHeading 
          title="Resume" 
          subtitle="My professional experience and qualifications"
          className="mb-0"
        />
        
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <FileDown size={16} />
          Download PDF
        </Button>
      </div>
      
      {/* Resume Header */}
      <div className="mb-12 border-b pb-8">
        <h1 className="text-3xl font-bold mb-2">Anushka Singh</h1>
        <p className="text-lg text-muted-foreground mb-4">Data Analyst</p>
        
        <div className="flex flex-wrap gap-4 text-sm">
          <span>Kanpur, Uttar Pradesh 208010</span>
          <span>•</span>
          <a href="tel:8090841614" className="text-primary hover:text-primary/80">8090841614</a>
          <span>•</span>
          <a href="mailto:anushka0703singh@gmail.com" className="text-primary hover:text-primary/80">anushka0703singh@gmail.com</a>
          <span>•</span>
          <a href="https://linkedin.com/in/anushka-singh-07s03" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">LinkedIn</a>
          <span>•</span>
          <a href="https://github.com/its-anushka" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">GitHub</a>
        </div>
      </div>
      
      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Experience</h2>
        
        <div className="ml-4">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              title={exp.position}
              subtitle={`${exp.company} | ${exp.location}`}
              date={`${exp.startDate} - ${exp.endDate}`}
              certificate={exp.certificate}
            >
              <ul className="list-disc ml-4 mt-2 space-y-1 text-sm md:text-base">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </div>
      </section>
      
      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Education</h2>
        
        <div className="ml-4">
          {education.map((edu, index) => (
            <TimelineItem 
              key={index}
              title={edu.degree}
              subtitle={`${edu.institution} | ${edu.location}`}
              date={`${edu.startDate} - ${edu.endDate}`}
            >
              <p className="mt-1 text-sm">
                {edu.gpa && `CGPA: ${edu.gpa}`}
                {edu.percentage && `Percentage: ${edu.percentage}`}
              </p>
            </TimelineItem>
          ))}
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Skills</h2>
        
        <div className="space-y-6">
          {skills.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-medium mb-2">{category.category}</h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="text-center mt-16">
        <p className="text-muted-foreground">
          This resume is also available for download as a PDF. Click the button above to download.
        </p>
      </section>
    </div>
  );
};

export default Resume;
