export type Project = {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "DeFiBoard",
    description: "A crypto and DeFi portfolio dashboard designed to help users monitor assets and portfolio performance.",
    category: "UI/UX · Web Design",
    technologies: ["Figma", "UI/UX", "Dashboard"],
  },
  {
    title: "NextLap",
    description: "A sim racing platform concept for discovering, sharing, and managing racing setups.",
    category: "Product Design · Web",
    technologies: ["Figma", "Next.js", "UI/UX"],
  },
  {
    title: "Trading Journal",
    description: "A web application concept for recording trades, analyzing performance, and understanding trading habits.",
    category: "Web Application",
    technologies: ["CodeIgniter", "MySQL", "JavaScript"],
  },
];
