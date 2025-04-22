export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  points: string[];
  certificate?: string;
}

export const experiences: Experience[] = [
  {
    company: "Practo Technologies Pvt. Ltd.",
    position: "Data Analyst Intern",
    location: "in collaboration with Mentormind",
    startDate: "Jun 2024",
    endDate: "Jul 2024",
    points: [
      "Analyzed a 20K+ record health dataset, identifying key patterns influencing heart disease risk.",
      "Applied robust data preprocessing and cleaning techniques using Python libraries like Pandas and NumPy to handle missing values, remove inconsistencies, and enhance data quality.",
      "Developed 15+ interactive visualizations using Matplotlib & Seaborn, aiding stakeholders in identifying crucial health trends.",
      "Translated complex data insights into visually compelling representations, aiding in data-driven decision-making.",
      "Compiled and structured findings into comprehensive reports and engaging presentations, ensuring clear communication of results to stakeholders."
    ],
    certificate: "/c3.jpg"
  }
];
