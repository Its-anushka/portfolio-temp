export interface Project {
  id: number;
  title: string;
  slug: string;
  date: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  image?: string;
  images?: string[]; // Added for gallery
  links?: {
    live?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Global Economic Indicators",
    slug: "global-economic-indicators",
    date: "Aug 2024 - Nov 2024",
    description: "Exploratory data analysis of global economic trends across 220 countries over a 52-year period.",
    detailedDescription: `
      Conducted an extensive analysis of global economic trends using a dataset covering 220 countries over a 52-year period (1970-2021).
      
      Key accomplishments:
      • Analyzed and compared 5 major economies to provide insights into economic growth patterns, trade dynamics, and the impact of population changes on economic productivity
      • Performed time-series analysis on economic indicators from 220 countries over 52 years, identifying key growth patterns and policy impacts
      • Created heatmaps, correlation matrices, and interactive charts using Matplotlib and Seaborn to illustrate economic relationships between different factors
      
      Technologies used include Python, Pandas, NumPy, Matplotlib, and Seaborn for data processing and visualization. The project involved handling large datasets, cleaning inconsistent data, and creating visualizations that effectively communicated complex economic relationships.
    `,
    tags: ["Python", "Data Analysis", "Matplotlib", "Seaborn", "Time-series Analysis"],
    image: "/p1.jpg",
    images: [
      "/p1a.jpg",
      "/p1b.jpg",
      "/p1c.jpg"
    ],
    links: {
      github: "https://github.com/its-anushka/global-economic-indicators"
    }
  },
  {
    id: 2,
    title: "Heart Disease Analysis Dashboard",
    slug: "heart-disease-dashboard",
    date: "Aug 2023",
    description: "Interactive Tableau dashboard for analyzing health and demographic data related to heart disease risk factors.",
    detailedDescription: `
      Designed and implemented an interactive Tableau dashboard to visualize and analyze health and demographic data related to heart disease.
      
      Key features:
      • Implemented dynamic filters and interactive visualizations to identify key patterns and risk factors associated with heart disease
      • Leveraged data visualization and analytics techniques to uncover trends and correlations in cardiovascular health data
      • Translated complex datasets into actionable insights, enabling stakeholders to make informed decisions on cardiovascular health
      
      The dashboard provides a comprehensive view of heart disease risk factors, allowing users to explore correlations between various health metrics and demographic information. The interactive nature of the dashboard enables users to filter and drill down into specific subsets of data for more targeted analysis.
    `,
    tags: ["Tableau", "Data Visualization", "Healthcare Analytics", "Interactive Dashboard"],
    image: "/p2.jpg",
    images: [
      "/p2.jpg",
      "/p2a.jpg",
      "/p2b.jpg"
    ],
    links: {
      github: "https://github.com/its-anushka/heart-disease-dashboard"
    }
  }
];
