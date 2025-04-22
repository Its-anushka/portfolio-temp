
export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python"]
  },
  {
    category: "Libraries & Tools",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Tableau"]
  },
  {
    category: "Skills",
    skills: ["Data Wrangling", "Data Visualization", "Data Analysis", "Exploratory Data Analysis"]
  }
];
