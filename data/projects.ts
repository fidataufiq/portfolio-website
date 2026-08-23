export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  year: string;
  role: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "defiboard",
    title: "DeFiBoard",
    description:
      "A crypto and DeFi portfolio dashboard designed to help users monitor assets and portfolio performance.",
    longDescription:
      "DeFiBoard is a portfolio dashboard concept designed to help users monitor crypto assets, track portfolio performance, and understand their overall financial position in the DeFi ecosystem.",
    category: "UI/UX · Web Design",
    technologies: ["Figma", "UI/UX", "Dashboard"],
    year: "2025",
    role: "UI/UX Designer",
  },
  {
    slug: "nextlap",
    title: "NextLap",
    description:
      "A sim racing platform concept for discovering, sharing, and managing racing setups.",
    longDescription:
      "NextLap is a concept platform for sim racing enthusiasts. The platform is designed to help users discover, share, and manage racing setups while connecting with the sim racing community.",
    category: "Product Design · Web",
    technologies: ["Figma", "Next.js", "UI/UX"],
    year: "2025",
    role: "Product Designer",
  },
  {
    slug: "trading-journal",
    title: "Trading Journal",
    description:
      "A web application concept for recording trades, analyzing performance, and understanding trading habits.",
    longDescription:
      "Trading Journal is a web application concept focused on helping traders record trades, analyze performance, understand trading psychology, and identify patterns in their decision making.",
    category: "Web Application",
    technologies: ["CodeIgniter", "MySQL", "JavaScript"],
    year: "2025",
    role: "Designer & Developer",
  },
];