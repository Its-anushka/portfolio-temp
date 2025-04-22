
export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export const certificates: Certificate[] = [
  {
    name: "Become a Data Scientist",
    issuer: "LinkedIn",
    date: "Feb 2023",
    url: "/c1.jpg"
  },
  {
    name: "Python for Data Science and Machine Learning",
    issuer: "Udemy",
    date: "Dec 2022",
    url: "/c2.jpg"
  }
];
