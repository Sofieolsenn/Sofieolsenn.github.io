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

// An empty image slot: a grey box until `src` is filled in. `size` sets how
// wide it is compared to the other images in the same row.
const imageSlot = (size = 1, caption = "Image description") => ({ src: "", alt: "", size, caption });

// Case study content shared by all projects until each gets its own texts.
// The texts are the questions to answer, so it's clear what goes where.
// Replace them per project (copy this block into the project and edit it).
//
// Images are placed in rows: { height, images }. `height` is the row height as
// a percentage of the row width (e.g. 64 = a bit taller than 16:9), and each image
// is { src, alt, size, caption }. Use at most two images per row so they stay
// big. On phones the images stack.
const caseStudyPlaceholder = {
  headline: "Placeholder: one sentence that sums up what the project is.",
  summary: "Placeholder: who it was for and what it does, in one or two lines.",
  // The large image at the top. Fill in `src` (e.g. "/images/projects/…")
  cover: { src: "", alt: "" },
  primaryRole: "Placeholder",
  secondaryRole: "Placeholder",
  team: ["Placeholder", "Placeholder", "Placeholder"],
  timeline: "2025",
  client: "Placeholder",
  // Two large images under the facts
  gallery: [{ height: 44, images: [imageSlot(), imageSlot()] }],
  introduction: {
    // Short headed blocks before the main text
    blocks: [
      { heading: "Client introduction", text: "Placeholder: a short description of the client and why they reached out." },
      { heading: "The problem", text: "Placeholder: a short description of the problem they needed solved." },
    ],
    paragraphs: [
      "Placeholder: Set the scene. Who was the work for? What was the project? What was the problem? What was your involvement?",
    ],
    rows: [{ height: 64, images: [imageSlot()] }],
  },
  process: {
    paragraphs: [
      "Placeholder: How did you approach the problem? Describe where you started, for example with research, user interviews, workshops or by looking at what already existed, and what you learned from it.",
      "Placeholder: How did you work, and who did you work with? Explain the stages of your process, such as sketching, wireframes, prototypes, design in Figma and building it, and which tools and methods you used along the way.",
      "Placeholder: Did anything not go as planned? Mention a challenge or a decision that changed the direction of the project, and how you and the team handled it.",
    ],
    rows: [
      { height: 64, images: [imageSlot()] },
      { height: 44, images: [imageSlot(), imageSlot()] },
      { height: 64, images: [imageSlot()] },
      { height: 44, images: [imageSlot(), imageSlot()] },
    ],
  },
  outcome: {
    paragraphs: [
      "Placeholder: What was the final result? Describe what was delivered and how it solves the problem from the introduction.",
      "Placeholder: What was the impact of your work? Share feedback from the client or users, numbers if you have them, or what changed for the people using it.",
      "Placeholder: Show the final result in more detail. Which screens, features or details are you most proud of, and why do they matter?",
    ],
    rows: [
      { height: 64, images: [imageSlot()] },
      { height: 44, images: [imageSlot(), imageSlot()] },
      { height: 64, images: [imageSlot()] },
      { height: 44, images: [imageSlot(), imageSlot()] },
      { height: 64, images: [imageSlot()] },
    ],
  },
  // Looking back at the project, without images
  reflections: {
    paragraphs: [
      "Placeholder: Look back on the project as a whole. How did it go, and how do you feel about the result now that it's done?",
    ],
    blocks: [
      { heading: "What I learned", text: "Placeholder: new skills, tools or ways of working you picked up during the project." },
      { heading: "What I would do differently", text: "Placeholder: decisions you would change, or things you would start earlier next time." },
      { heading: "Next steps", text: "Placeholder: what could be improved or added if the project continued." },
    ],
  },
};

// Each project gets its own case study page at /projects/<slug>/, built from
// the ProjectTemplate component. Fields:
// - cover: { src, alt } the large image at the top (grey box until added)
// - headline, summary: the big sentence and short intro under the cover
// - primaryRole, secondaryRole, tags (Tools), team, timeline, client: the facts
// - gallery: image rows under the facts
// - introduction, process, outcome, reflections: { blocks, paragraphs, rows }, where blocks
//   are short { heading, text } parts and rows are image rows (see above)
export const projects = [
  {
    slug: "hack-your-job",
    kind: "Frontend development",
    title: "Hack your job",
    tags: ["React", "Vite", "Tailwind", "Umbraco"],
    featured: true,
    ...caseStudyPlaceholder,
  },
  {
    slug: "hack-your-future-website",
    kind: "Web development",
    title: "Hack your future website",
    tags: ["Webflow", "Custom code integration"],
    ...caseStudyPlaceholder,
  },
  {
    slug: "stuganibacken-martemeo",
    kind: "Web development",
    title: "Stuganibacken martemeo",
    tags: ["UX/UI Design", "React", "Vite"],
    ...caseStudyPlaceholder,
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
  "Frontend development is where I have the most experience, followed by UX/UI design. Along the way, I’ve gained experience in other areas of digital product development, giving me a broader understanding of how everything comes together.";

export const skillsText =
  "Although I’ve worked on fewer projects in these other areas, I’ve gained hands-on experience with them and feel comfortable putting those skills to use when needed.";

// Development and design skills (one tab each).
// `featured: true` puts a badge with a tick next to the tab name (my main areas).
// `picture: true` gives the tab a picture box, with the tags below a line;
// other tabs show their tags next to the text. `wideTags: true` gives the tags
// more room (for tabs with many tags).
// Each tab has room for a picture next to the text: add
// `image: { src: "/images/your-file.jpg", alt: "…" }` to show one.
export const skills = [
  {
    tab: "Frontend",
    featured: true,
    wideTags: true,
    // "\n" starts a new line in the heading
    heading: "Frontend\ndevelopment",
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
      "Accessibility (WCAG)",
      "Sustainable Web Development",
      "Performance Optimization",
      "API Integration",
    ],
  },
  {
    tab: "UX/UI design",
    featured: true,
    wideTags: true,
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
      "Low & High-Fidelity Sketching",
      "Interactive Prototypes",
      "A/B Testing",
      "Guerrilla Testing",
      "Think-Aloud Testing",
      "Information Architecture",
      "Sitemaps",
      "Style Guides",
      "Design Systems",
    ],
  },
  {
    tab: "CMS systems",
    featured: true,
    heading: "CMS systems",
    intro:
      "I’ve mainly worked with Umbraco and Webflow, creating and maintaining websites that are easy to understand, update, and manage.",
    detail:
      "I focus on building clear, well-organized systems that make everyday content management simple for others.",
    tags: ["Umbraco", "Webflow", "WordPress", "CMS Customization", "Content Structure", "Website Maintenance"],
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
];

// Hobbies: one long entry (a category with one entry shows no tabs).
// - `slideshow` shows a set of pictures in the picture slot instead of a single `image`
// - `link` adds a button under the text
// - `galleries` are picture sections under the text, each with an optional
//   `heading`. Each photo has `src`, `alt` (a short description) and `caption`
//   (text under the picture, can be empty). Add `focus` (e.g. "center 70%") to
//   move the crop when the subject sits off-centre: the second number goes
//   from 0% (top) to 100% (bottom). Only add photos that are ready.
export const hobbies = [
  {
    tab: "Hobbies",
    heading: "A bit about me",
    // Drawing comes first, as it's my biggest passion
    intro:
      "My biggest passion is drawing. I’ve loved it for as long as I can remember, and I find inspiration in everything from Studio Ghibli and Spider-Verse to the Star Wars universe, and pretty much anything in between!",
    // Several paragraphs, shown one after the other
    detail: [
      "I also collect art books and Pokémon cards, which inspire me to try out different kinds of art. I share some of my drawings on Instagram, so feel free to take a look if you’re curious!",
      "I’m also a big foodie, so you’ll often find me in the kitchen or exploring new restaurants whenever the monthly budget allows it.",
      "And now that it’s getting colder, I’m back to binge-watching Game of Thrones, Harry Potter, and unfortunately... the Twilight saga too. 🧛‍♂️",
    ],
    slideshow: [
      { src: "/images/drawings/drawing-cat.jpg", alt: "Pencil drawing of a sitting cat" },
      { src: "/images/drawings/drawing-house.jpg", alt: "Detailed pencil drawing of a timber-framed house" },
      { src: "/images/drawings/drawing-portrait.jpg", alt: "Digital sketch portrait of a woman with her hair blowing" },
    ],
    link: { href: "https://www.instagram.com/sofieevoi/", label: "See my drawings on Instagram ↗" },
    // Title above the tags (the skill tabs use "Specific skills")
    tagsHeading: "Personality & fun facts",
    tags: [
      "Drawing skills",
      "Creative",
      "Loves dogs",
      "Does not like coffee",
      "Popcorn eater",
      "Pokémon card collector",
      "Foodie",
      "Studio Ghibli fan",
      "Star Wars nerd",
      "Harry Potter rewatcher",
      "Secret Twilight fan",
      "Loves to travel",
    ],
    galleries: [
      {
        heading: "Photo library",
        text: "When I’m not drawing or developing, I love being outside. I spend a lot of time with my family, go on long walks, and usually bring home little things I collect along the way, like wildflowers or mushrooms. In winter we go skiing, and when I travel I take pictures of the pretty things I come across.",
        photos: [
          { src: "/images/hobbies/skiing.jpg", alt: "Sofie lying in deep snow in her ski gear", caption: "Going off-piste (sometimes unintentionally…)", focus: "center 15%" },
          { src: "/images/personal/sweden-hike.jpg", alt: "Hiking on mossy rocks in a Swedish forest", caption: "Getting lost in Swedish forests (on purpose, mostly)" },
          { src: "/images/hobbies/dog-walk.jpg", alt: "A small white terrier running along a mossy forest path", caption: "Long walks are better with four-legged company", focus: "center 100%" },
          { src: "/images/hobbies/cafe-beer.jpg", alt: "Sofie and a friend sitting outside at a café with a beer", caption: "Love sitting outside, enjoying a drink and good company" },
          { src: "/images/hobbies/flowers-field.jpg", alt: "A small bouquet of wildflowers held over the grass", caption: "Collecting little things from nature to bring home", focus: "center 66%" },
          { src: "/images/hobbies/mushrooms.jpg", alt: "Freshly picked chanterelles laid out to dry on paper towels", caption: "Basically a treasure hunt, but with mushrooms" },
          { src: "/images/personal/japan-goldfish.jpg", alt: "A street in Japan lined with tanks full of goldfish", caption: "Goldfish tanks on a street in Japan" },
          { src: "/images/personal/japan-beach.jpg", alt: "Waves rolling onto a dark sand beach in Japan", caption: "Dark sand beach in Japan" },
          { src: "/images/personal/samos-horses.jpg", alt: "Two saddled horses resting by a brick wall on Samos", caption: "Horses on Samos, Greece" },
          { src: "/images/personal/lemur.jpg", alt: "Sofie smiling next to a lemur", caption: "Making friends with a lemur" },
        ],
      },
    ],
  },
];

// The switch above the skill tabs
export const skillGroups = [
  { label: "Development and design", icon: "code", skills },
  { label: "Entrepreneurship and business", icon: "rocket", skills: businessSkills },
  // `link` lets other parts of the page open a category, e.g. href="#hobbies"
  { label: "Hobbies", icon: "heart", link: "hobbies", skills: hobbies },
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
  heading: "Don’t be shy, say hello. Let’s create something together.",
  intro: "Whether it’s a hello, a project idea or something else, I’d love to hear from you.",
};
