// All text on the site lives here, so you can update content without
// touching the components.

export const site = {
  name: "Sofie Olsen",
  title: "Sofie Olsen | Frontend developer",
  description:
    "Sofie Olsen is a frontend developer with full-stack experience who designs and builds meaningful digital products with React, Next.js, Webflow and Umbraco.",
  // Change this to your real address once the site is live.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sofieolsenn.github.io",
  // Fill these in. Empty values are hidden on the site.
  email: "sofievennickolsen@gmail.com",
  // Public Web3Forms key: the contact form sends messages to the email above.
  web3formsKey: "14ad1a38-6e90-427e-bfc6-516d979b4b56",
  linkedin: "https://www.linkedin.com/in/sofie-olsen-14204532a/",
  github: "https://github.com/Sofieolsenn",
  // Put your CV in /public/cv.pdf
  cv: "/cv.pdf",
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  greeting: "Hello, I’m Sofie.",
  text: "I’m a developer with full-stack experience. I develop and design meaningful digital products.",
};

export const projects = [
  {
    kind: "Frontend development",
    title: "Hack your job",
    tags: ["React", "Vite", "Tailwind", "Umbraco"],
    featured: true,
  },
  {
    kind: "Web development",
    title: "Hack your future website",
    tags: ["Webflow", "Custom code integration"],
  },
  {
    kind: "Web development",
    title: "Stuganibacken martemeo",
    tags: ["UX/UI Design", "React", "Vite"],
  },
];

export const about = {
  heading:
    "I’m a full stack developer with a love for frontend development and the creative process that comes with building for the web.",
  paragraphs: [
    "I’ve always been drawn to creating things and exploring different ways to turn ideas into something bigger. Discovering web development gave me a place where creativity could meet problem-solving, technology, and logic.",
    "What keeps me excited about development is that there’s always something new to explore - a new technology, a different approach, or finding a better way to bring an idea to life.",
  ],
};

export const skillsIntro =
  "My diverse skill set allows me to fit into different projects, take on new challenges, and adapt to whatever comes my way.";

export const skills = [
  {
    tab: "Frontend",
    heading: "Frontend development",
    intro:
      "I love bringing ideas and designs to life through websites that are both visually appealing and easy to use.",
    detail:
      "Frontend development is where I have the most experience, with a focus on creating accessible, responsive, and user-friendly experiences.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vite",
      "Responsive Design",
      "Mobile-First Development",
      "Semantic HTML",
      "Accessibility (WCAG)",
      "Separation of Concerns",
      "Sustainable Web Development",
      "Performance Optimization",
      "Component-Based Architecture",
      "API Integration",
    ],
  },
  {
    tab: "Backend",
    heading: "Backend development",
    intro:
      "While frontend is my main focus, I’ve also gained hands-on backend experience through various projects.",
    detail:
      "I’ve worked with APIs, data, and connecting frontend and backend to build functional web applications.",
    tags: ["Python", "Flask", "REST APIs", "Frontend-backend integration"],
  },
  {
    tab: "Database",
    heading: "Databases",
    intro:
      "I have experience with relational, document, and graph databases, giving me a good understanding of how data is structured and connected.",
    detail:
      "Combined with my frontend and backend experience, this helps me understand how all the different layers of a web application work together.",
    tags: ["SQL", "MariaDB", "ArangoDB", "Relational Databases", "Document Databases", "Graph Databases", "Database Design"],
  },
  {
    tab: "Tools & DevOps",
    heading: "Development tools & DevOps",
    intro:
      "I’ve worked with tools that help me organize, test, and manage development projects, from writing code to getting applications ready for deployment.",
    tags: ["Git", "GitHub", "Docker", "CI/CD", "Postman", "Swagger", "Jira"],
  },
  {
    tab: "UX/UI design",
    heading: "UX/UI design",
    intro:
      "With my background in Multimedia Design, I have experience with the entire UX/UI process, from understanding users and exploring ideas to designing and testing interactive prototypes.",
    detail:
      "I enjoy combining creativity with user needs to create experiences that are both intuitive and visually appealing.",
    tags: [
      "Figma",
      "User Research",
      "User Interviews",
      "User Stories",
      "Personas",
      "User Flows",
      "Wireflows",
      "Wireframing",
      "Low & High-Fidelity Prototyping",
      "Interactive Prototypes",
      "Usability Testing",
      "A/B Testing",
      "Guerrilla Testing",
      "Think-Aloud Testing",
      "Information Architecture",
      "Sitemaps",
      "Style Guides",
      "Design Systems",
      "Visual Design",
      "User-Centered Design",
    ],
  },
  {
    tab: "CMS systems",
    heading: "CMS systems",
    intro:
      "I’ve mainly worked with Umbraco and Webflow, creating and maintaining websites that are easy to understand, update, and manage.",
    detail:
      "I focus on building clear, well-organized systems that make everyday content management simple for others.",
    tags: ["Umbraco", "Webflow", "WordPress", "CMS Customization", "Content Structure", "Website Maintenance"],
  },
  {
    tab: "Personal / other skills",
    heading: "Personal skills",
    intro:
      "I bring curiosity, structure, and an open mindset to every team and every new challenge.",
    detail:
      "I value clear communication, honest collaboration, and continuously learning from others.",
    tags: ["Drawing", "Pokémon cards", "Dogs", "Food"],
  },
];

export const otherProjects = {
  heading: "I like to experiment and make tiny projects. Take a look!",
  items: [
    { label: "Full stack - Social media application" },
    { label: "LLM - Customer service chatbot" },
    { label: "AI / CLI - Custom Claude commands" },
    { label: "React - To-do list" },
  ],
};

export const contact = {
  heading: "Dont be shy, say hello. Lets create something together.",
  intro: "Wether its a hello, a project idea or something else I’d love to hear from you.",
};
