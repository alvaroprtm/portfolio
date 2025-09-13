export const experiences = [
  {
    company: "MindReality",
    logo: "mindreality.jpeg",
    period: "Oct 2022 – May 2023",
    title: "Junior Web Developer Intern",
    location: "Amsterdam, Netherlands",
    summary:
      "Developed a full-stack React app with Firebase and improved deployment efficiency through CI/CD pipelines.",
  },
   {
    company: "Vrije Universiteit Amsterdam",
    logo: "vu.png",
    period: "Nov 2023 – Dec 2023",
    title: "Teaching Assistant, Statistical Methods",
    location: "Amsterdam, Netherlands",
    summary:
      "Led practical sessions and managed grading for group assignments, supporting students in statistical methods.",
  },
  {
    company: "TechBros",
    logo: "techbros.jpeg",
    period: "Dec 2024 – Feb 2025",
    title: "Software Engineer (Part-time)",
    location: "Düsseldorf, Germany",
    summary:
      "Developed ETL pipelines, full-stack solutions, interactive dashboards, and HR automation platforms for telecom and business analytics.",
  },
  {
    company: "Workwize",
    logo: "workwize.jpeg",
    period: "Mar 2025 – Sep 2025",
    title: "Data Engineer Intern",
    location: "Amsterdam, Netherlands",
    summary:
      "Automated workflows, built internal tools, developed backend services, and ensured data reliability to optimize 3PL logistics operations.",
  }, 
];

export const techStacks = {
  Frontend: [
    { name: 'JavaScript', svg: 'js.svg', level: 'Advanced' },
    { name: 'React', svg: 'react.svg', level: 'Advanced' },
    { name: 'TailwindCSS', svg: 'tailwind.svg', level: 'Intermediate' },
    { name: 'HTML', svg: 'html.svg', level: 'Advanced' },
    { name: 'CSS', svg: 'css.svg', level: 'Advanced' },
  ],
  Backend: [
    { name: 'Node.js', svg: 'node.svg', level: 'Intermediate' },
    { name: 'Laravel', svg: 'laravel.svg', level: 'Intermediate' },
    { name: 'Java', svg: 'java.svg', level: 'Intermediate' },
    { name: 'Python', svg: 'py.svg', level: 'Advanced' },
    { name: 'SQL', svg: 'sql.svg', level: 'Advanced' },
    { name: 'C++', svg: 'cpp.svg', level: 'Basic' },
  ],
  Tools: [
    { name: 'Firebase', svg: 'firebase.svg', level: 'Intermediate' },
    { name: 'CircleCI', svg: 'circleci.svg', level: 'Basic' },
    { name: 'Git', svg: 'git.svg', level: 'Advanced' },
    { name: 'Docker', svg: 'docker.svg', level: 'Basic' },
    { name: 'AWS', svg: 'aws.svg', level: 'Basic' },
  ],
};

export const icons = {
  github: (
    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  liveDemo: (
    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
    </svg>
  ),
};

export const projects = [
  {
    name: "Portfolio Website",
    image: "/src/assets/projects/portfolio.png",
    github: "https://github.com/alvaroprtm/portfolio",
    liveDemo: "https://your-portfolio-live-demo.com", // Replace with actual URL
    description: "A personal portfolio built with React and Tailwind CSS, showcasing my skills, projects, and experience.",
  },
  {
    name: "Jail Bird",
    image: "/src/assets/projects/jailbird.png",
    github: "https://github.com/evansutanto/software-design-35",
    liveDemo: "https://www.youtube.com/watch?v=KQbXQ8RzRCo", 
    description: "A Java-based prison-themed Tamagotchi game built with JavaFX featuring interactive buttons and tracking systems to monitor and control the character.",
  },
  {
    name: "E-Commerce App",
    image: "/src/assets/cloud_bg.png",
    github: "https://github.com/alvaroprtm/ecommerce-app",
    liveDemo: "https://your-ecommerce-demo.com", // Replace with actual URL
    description: "A full-stack e-commerce application with user authentication and payment integration.",
  },
  // Add more projects as needed
];


