
export interface Education {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  percentage?: string;
}

export const education: Education[] = [
  {
    institution: "Lovely Professional University",
    degree: "Computer Science and Engineering (Data Science and ML)",
    location: "Jalandhar, Punjab",
    startDate: "2022",
    endDate: "Present",
    gpa: "8.37"
  },
  {
    institution: "Air Force School Chakeri Kanpur",
    degree: "Intermediate",
    location: "Kanpur, Uttar Pradesh",
    startDate: "2019",
    endDate: "2020",
    percentage: "95.2%"
  },
  {
    institution: "Air Force School Chakeri Kanpur",
    degree: "Matriculation",
    location: "Kanpur, Uttar Pradesh",
    startDate: "2018",
    endDate: "2019",
    percentage: "95.4%"
  }
];
