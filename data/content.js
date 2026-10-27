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

export const skills = [
  {
    tab: "Frontend",
    heading: "Frontend development",
    intro:
      "I enjoy bringing designs to life through clean, responsive, and interactive web experiences. With my background in UX/UI design, I care just as much about how a website feels to use as how it looks.",
    detail:
      "Frontend development is where I have the most experience. I focus on accessibility, semantic HTML, performance, and creating maintainable solutions that work across different devices.",
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
      "I build dependable foundations that make digital products useful, maintainable, and easy to extend.",
    detail:
      "My backend experience lets me understand and contribute to the complete product.",
    tags: ["Node.js", "REST APIs", "Authentication", "Express", "Server actions", "Validation", "Testing", "API design"],
  },
  {
    tab: "Database",
    heading: "Databases",
    intro:
      "I work with structured data and relationships to create products that stay clear as they grow.",
    detail:
      "I focus on practical data models, reliable queries, and thoughtful integration.",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Data modeling", "Queries", "Migrations", "Relationships", "Supabase"],
  },
  {
    tab: "UX/UI design",
    heading: "UX/UI design",
    intro:
      "I care about how a product feels as much as how it works, from early flows to the final interface.",
    detail:
      "Design helps me connect user needs with clear, accessible frontend solutions.",
    tags: ["Figma", "Wireframes", "Prototyping", "User flows", "Design systems", "Accessibility", "Responsive UI", "Interaction design"],
  },
  {
    tab: "CMS systems",
    heading: "CMS systems",
    intro:
      "I create flexible content setups that are straightforward for editors and reliable for developers.",
    detail:
      "A good CMS should make everyday publishing feel simple without limiting the product.",
    tags: ["Umbraco", "Webflow", "Payload", "Content modeling", "Components", "Editor experience", "Integrations", "SEO"],
  },
  {
    tab: "Concept development",
    heading: "Concept development",
    intro:
      "I enjoy shaping early ideas into focused concepts that can be tested, discussed, and built.",
    detail:
      "I use research, sketches, and prototypes to make abstract ideas concrete.",
    tags: ["Research", "Ideation", "Workshops", "Prototyping", "User journeys", "MVP planning", "Testing", "Iteration"],
  },
  {
    tab: "Personal / other skills",
    heading: "Personal skills",
    intro:
      "I bring curiosity, structure, and an open mindset to every team and every new challenge.",
    detail:
      "I value clear communication, honest collaboration, and continuously learning from others.",
    tags: ["Communication", "Collaboration", "Curiosity", "Problem-solving", "Adaptability", "Ownership", "Structure", "Learning"],
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
