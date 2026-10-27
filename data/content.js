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
  { label: "Skills", href: "#skills" },
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

// Development and design skills (one tab each)
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
    tags: ["Python", "Flask", "PHP", "REST APIs", "Frontend-backend integration"],
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
      "When I’m not developing or creating, you’ll probably find me drawing, enjoying good food, or adding yet another Pokémon card to my collection.",
    detail:
      "And now that it’s getting colder, I’m back to binge-watching Game of Thrones, Harry Potter, and unfortunately... the Twilight saga too. 🧛‍♂️",
    // Large drawing shown above the photos, with a link to the drawing Instagram.
    // The link is hidden until `instagram` has a URL.
    drawings: {
      src: "",
      alt: "",
      text: [
        "I’ve loved drawing for as long as I can remember, and I find inspiration in everything from Studio Ghibli and Spider-Verse to the Star Wars universe, and pretty much anything in between!",
        "I also share some of my own drawings on Instagram, so feel free to take a look if you’re curious!",
      ],
      instagram: "https://www.instagram.com/sofieevoi/",
    },
    // Photos instead of tags. Put images in /public/images and fill in `src`
    // (e.g. "/images/drawing.jpg"). Empty slots show as grey boxes.
    // `caption` is the text shown under the photo; leave it empty to hide it.
    photos: [
      { src: "/images/personal/japan-goldfish.jpg", alt: "A street in Japan lined with tanks full of goldfish", caption: "Goldfish tanks on a street in Japan" },
      { src: "/images/personal/japan-beach.jpg", alt: "Waves rolling onto a dark sand beach in Japan", caption: "Dark sand beach in Japan" },
      { src: "/images/personal/samos-horses.jpg", alt: "Two saddled horses resting by a brick wall on Samos", caption: "Horses on Samos, Greece" },
      { src: "/images/personal/lemur.jpg", alt: "Sofie smiling next to a lemur", caption: "Making friends with a lemur" },
      { src: "/images/personal/sweden-hike.jpg", alt: "Hiking on mossy rocks in a Swedish forest", caption: "Hiking in Sweden" },
      { src: "", alt: "", caption: "Drawing" },
      { src: "", alt: "", caption: "Good food" },
      { src: "", alt: "", caption: "Pokémon cards" },
      { src: "", alt: "", caption: "Caption" },
    ],
  },
];

// Entrepreneurship and business skills (one tab each)
export const businessSkills = [
  {
    tab: "Project Management",
    heading: "Project management",
    intro:
      "I’ve gained experience planning and managing projects through both my studies and collaborative projects.",
    detail:
      "I’ve worked with agile methods, task prioritization, timelines, and teamwork to keep projects organized and moving forward.",
    tags: ["Agile Development", "Scrum", "Kanban", "Workshop Facilitation", "Project Planning", "Task Prioritization", "Team Collaboration", "Stakeholder Communication", "Jira"],
  },
  {
    tab: "Concept Development",
    heading: "Concept development",
    intro:
      "I enjoy exploring ideas and figuring out how to turn them into something meaningful and useful.",
    detail:
      "Through different projects, I’ve gained experience with brainstorming, workshops, research, and developing concepts from early ideas into prototypes and MVPs.",
    tags: ["Concept Development", "Ideation", "Brainstorming", "Design Thinking", "Workshop Planning", "Problem Identification", "User Needs Analysis", "Value Proposition", "Concept Validation", "MVP Planning"],
  },
  {
    tab: "Entrepreneurship",
    heading: "Entrepreneurship",
    intro:
      "I’ve gained hands-on experience with entrepreneurship through startup projects, where I’ve worked with everything from market research and competitor analysis to branding, pitching, and MVP development.",
    detail:
      "It’s given me a better understanding of what it takes to turn an idea into something real.",
    tags: ["Entrepreneurship", "Startup Development", "Market Research", "Competitor Analysis", "Business Model Canvas", "Business Planning", "Product Strategy", "MVP Development", "Pitching", "Brand Development"],
  },
  // The personal tab is shown in both groups
  skills.find((skill) => skill.tab === "Personal / other skills"),
];

// The switch above the skill tabs
export const skillGroups = [
  { label: "Development and design", skills },
  { label: "Entrepreneurship and business", skills: businessSkills },
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
