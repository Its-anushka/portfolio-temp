import SectionHeading from "@/components/SectionHeading";
import SkillTag from "@/components/SkillTag";
import TimelineItem from "@/components/TimelineItem";
import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { certificates } from "@/data/certificates";

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16">
      {/* About Me Section */}
      <section className="mb-16">
        <SectionHeading 
          title="About Me" 
          subtitle="Data analyst passionate about transforming raw data into actionable insights"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                I'm Anushka Singh, a data analyst with a focus on creating impactful visualizations and extracting meaningful insights from complex datasets. Based in Kanpur, Uttar Pradesh, I'm currently pursuing my degree in Computer Science and Engineering with a specialization in Data Science and Machine Learning.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                My passion lies in working with health and economic datasets, where I leverage analytical tools and programming skills to uncover patterns and trends that drive better decision-making. I thrive on translating complex data stories into clear, visual narratives that stakeholders can easily understand and act upon.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                With experience in Python, data visualization libraries, and tools like Tableau, I aim to continue growing in the field of data science while making meaningful contributions through my analytical work.
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end items-start">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-data-purple/50 rounded-lg blur opacity-25"></div>
              <img 
                src="/profile.jpg" 
                alt="Anushka Singh" 
                className="relative rounded-lg shadow-md w-full max-w-[250px] aspect-square object-cover bg-muted"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="mb-16">
        <SectionHeading 
          title="Skills" 
          subtitle="Technologies and methodologies I work with"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div key={category.category} className="data-card">
              <h3 className="text-xl font-medium mb-4">{category.category}</h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="mb-16">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey"
        />
        
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
      <section className="mb-16">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background"
        />
        
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
      
      {/* Certifications Section */}
      <section>
        <SectionHeading 
          title="Certifications" 
          subtitle="Professional development and learning"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="data-card flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-medium mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
              {cert.url && (
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 mt-4 text-sm inline-flex items-center"
                >
                  View Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
