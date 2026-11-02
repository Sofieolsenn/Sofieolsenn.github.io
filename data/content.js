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
  team: ["Placeholder", "Placeholder", "Placeholder"],
  timeline: "2025",
  client: "Placeholder",
  // Optional image rows under the facts, e.g. gallery: [{ height: 44, images: [imageSlot(), imageSlot()] }]
  introduction: {
    // Short headed blocks under each other, next to the "Intro" heading
    stackBlocks: true,
    blocks: [
      { heading: "Client introduction", text: "Placeholder: a short description of the client and why they reached out." },
      { heading: "The problem", text: "Placeholder: a short description of the problem they needed to have solved." },
      { heading: "The purpose", text: "Placeholder: a short description of the purpose of the project and what it should achieve." },
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
    // Short headed blocks under each other, next to the "Reflections" heading
    stackBlocks: true,
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
// - badge: a small label on the card, e.g. "In progress"
// - comingSoon: true shows a "Coming soon" badge on the card and a short message
//   on the page instead of the case study (for projects that haven't started yet)
// - headline, summary: the big sentence and short intro under the cover
// - link: the live site, opened by the "View site" button in the corner. Leave it out and the button
//   shows a "not published yet" message instead. linkLabel changes the button text.
// - primaryRole, tools (falls back to the card tags), team, timeline, client: the facts
//   primaryRole and team can be a list; each item gets its own line
// - gallery: image rows under the facts
// - introduction, process, outcome, reflections: { blocks, paragraphs, rows }, where blocks
//   are short { heading, text } parts (text can be a list of paragraphs) and rows are image rows (see above).
//   `stackBlocks: true` shows the blocks under each other next to the heading.
// - process and outcome can instead have `steps`: [{ title, parts: [{ heading, paragraphs }], rows }],
//   steps with their own image rows, so long texts are broken up by images.
export const projects = [
  {
    slug: "hack-your-job",
    kind: "Frontend development",
    title: "Hack your job",
    tags: ["React", "Vite", "Tailwind", "Umbraco"],
    featured: true,
    ...caseStudyPlaceholder,
    link: "https://hack-your-future.euwest01.umbraco.io/",
    headline: "A centralized platform connecting HackYourFuture trainees with relevant job opportunities.",
    summary:
      "Developed for HackYourFuture Denmark during my internship at Knowit. The platform helps staff manage trainees, companies, and job opportunities while making it easier to match trainees with potential employers.",
    primaryRole: "Frontend Developer & Concept Developer",
    tools: ["Umbraco", "React + Vite & Razor", "Tailwind", "Git", "Claude Code & MCP"],
    team: ["2 × Designers", "2 × Backend Developers", "1 × Frontend Developer (me)", "Technical guidance from Knowit"],
    client: "HackYourFuture Denmark",
    timeline: "August – October 2026",
    introduction: {
      ...caseStudyPlaceholder.introduction,
      blocks: [
        {
          heading: "Client introduction",
          text: "HackYourFuture Denmark is a non-profit organization helping people with international backgrounds develop technical skills and enter the Danish tech industry. During my internship at Knowit, our team worked with HYF to build a platform that could help them manage trainees and connect them with employers.",
        },
        {
          heading: "The problem",
          text: "Information about trainees, their skills, CVs, and job opportunities was stored in different places. This made it harder for HYF staff to keep track of everything and find suitable trainees for available jobs.",
        },
        {
          heading: "The purpose",
          text: "To build one platform where HYF staff could manage trainees, companies, and job opportunities, while trainees could update their own profiles.",
        },
        {
          heading: "The outcome",
          text: "We delivered a fully working platform that HYF is now starting to use. As the only frontend developer, I built the entire frontend and set up Umbraco, making sure the platform was easy for HYF staff to manage and for future developers to take over.",
        },
      ],
    },
    process: {
      steps: [
      {
        title: "Understanding the problem",
        parts: [
          {
            heading: "Workshop & concept development",
            paragraphs: [
              "I helped plan and run a workshop with HYF staff to understand their daily work and the challenges they faced. We used brainstorming exercises, dot voting, and group discussions to identify key problems and values we wanted to focus on.",
              "Based on the workshop, we explored different ideas and worked with the client to decide which features were most important and realistic to build during our ten-week internship.",
            ],
          },
        ],
        rows: [{ height: 64, images: [imageSlot()] }],
      },
      {
        title: "Building the platform",
        parts: [
          {
            heading: "Frontend development",
            paragraphs: [
              "As the team's only frontend developer, I was responsible for developing the entire frontend of the platform. I turned the Figma designs into a working website, built reusable React components, set up design tokens, and developed all frontend interfaces for staff, trainees, and visitors.",
            ],
          },
          {
            heading: "Learning Umbraco",
            paragraphs: [
              "I had never used Umbraco before, so I learned how to set it up while thinking about what HYF should be able to edit themselves and how to make it easy for them to navigate.",
              "Having previously taken over projects and designs from others, I know how frustrating unclear setups can be. I wanted to leave behind something that others, or even myself months later, could easily understand and work with.",
            ],
          },
          {
            heading: "AI-assisted development",
            paragraphs: [
              "Since Knowit works extensively with AI, I was encouraged to experiment with it as much as possible during my internship.",
              "I connected Claude Code to Figma and Umbraco through MCP, allowing it to help set up content instead of doing everything manually. I created custom commands and guardrails that checked Figma design tokens and generated reports about changes. I also used AI for debugging, code reviews, and understanding how unfamiliar frontend and backend technologies worked together.",
            ],
          },
        ],
        rows: [{ height: 44, images: [imageSlot(), imageSlot()] }, { height: 64, images: [imageSlot()] }],
      },
      {
        title: "Challenges & collaboration",
        parts: [
          {
            heading: "Working with changing designs",
            paragraphs: [
              "I was used to developing from finished designs, but in this project, design and development happened at the same time. I had to get comfortable building things that might change later.",
              "This made reusable components and shared design variables especially important. Instead of updating the same style in many different places, I could make changes in just a few places.",
            ],
          },
          {
            heading: "Working across disciplines",
            paragraphs: [
              "As the only frontend developer, I often worked between our two designers and two backend developers, helping both sides understand what was needed and what was technically possible.",
              "This helped me become more confident explaining technical decisions, understanding different perspectives, and finding solutions together.",
            ],
          },
          {
            heading: "Client communication",
            paragraphs: [
              "During catch-up meetings with HYF, I learned how important it was to clearly explain the purpose of each meeting, what feedback we needed, and what everyone should prepare or complete before the next meeting.",
              "Being specific helped avoid misunderstandings and keep the project moving.",
            ],
          },
        ],
        rows: [{ height: 44, images: [imageSlot(), imageSlot()] }],
      },
    ],
    },
    outcome: {
      steps: [
      {
        title: "The final result",
        parts: [
          {
            paragraphs: [
              "We delivered a working platform with staff and trainee dashboards, profile management, company and job listings, and job matching.",
              "I developed the entire frontend and set up the content management experience in Umbraco. I also created an easy-to-follow guide showing HYF staff how to add, edit, and manage content on different pages without needing help from me.",
            ],
          },
        ],
        rows: [{ height: 64, images: [imageSlot()] }, { height: 44, images: [imageSlot(), imageSlot()] }],
      },
      {
        title: "The impact",
        parts: [
          {
            paragraphs: [
              "HYF is now starting to use the platform, with plans to evaluate it over approximately one year.",
              "An important part of my work was making sure HYF could manage their content independently and that the project could be handed over to other developers after my internship.",
            ],
          },
        ],
        rows: [{ height: 64, images: [imageSlot()] }],
      },
      {
        title: "The details I'm most proud of",
        parts: [
          {
            paragraphs: [
              "I'm proud of how my different skills allowed me to contribute to several parts of the project, from early concept development and client workshops to frontend development, CMS setup, and handover.",
              "I'm also proud of how our team improved at working across different disciplines. We became better at understanding each other's work, communicating our needs, and solving problems together.",
              "Finally, I'm proud of how much I managed to build and learn in just ten weeks. Experimenting with AI helped me work faster and take on unfamiliar technologies, and I often surprised myself with how much I could accomplish.",
            ],
          },
        ],
        rows: [{ height: 44, images: [imageSlot(), imageSlot()] }],
      },
    ],
    },
    reflections: {
      ...caseStudyPlaceholder.reflections,
      blocks: [
        { heading: "What I learned", text: [
          "I started the project without any experience in Umbraco and finished feeling confident working with it. I discovered how flexible it is and how much you can build with it. I also learned to think about the people editing the content, not just the developers building the platform.",
          "Experimenting with AI changed how I work. I became faster at learning new technologies, understanding unfamiliar code, finding bugs, and seeing how frontend and backend systems connect. It also taught me to review AI-generated code carefully and make sure I understood what I was implementing.",
          "Working with designers, backend developers, and the client taught me how important clear communication is. I became better at explaining technical decisions, asking specific questions, and understanding how other people's work affects my own.",
          "I also learned that finishing a project is not just about making it work. It is about leaving something behind that other people can understand, use, and continue developing.",
        ] },
        { heading: "What I would do differently", text: [
          "I would spend more time on project planning and time management from the beginning. We were all responsible for keeping the project on track, but with only ten weeks, it was difficult to balance planning, communication, and development.",
          "Looking back, clearer priorities, more realistic deadlines, and regular check-ins on our progress could have helped us work more efficiently and avoid some last-minute pressure.",
        ] },
        { heading: "Next steps", text: "Collect feedback from HYF staff and trainees as they start using the platform, improve the experience based on their feedback, and continue developing the job-matching features." },
      ],
    },
  },
  {
    slug: "hack-your-future-website",
    kind: "Web development",
    title: "Hack your future website",
    tags: ["Webflow", "Custom code integration"],
    ...caseStudyPlaceholder,
    headline: "Developing a new website for HackYourFuture Denmark in Webflow.",
    summary:
      "I developed HackYourFuture's new website during my internship at Knowit, focusing on performance, easy content management, and a flexible setup that can grow with the organization.",
    cover: { src: "", alt: "", caption: "Finished HackYourFuture website" },
    primaryRole: "Web Developer",
    tools: ["Webflow", "CMS system", "Custom code integration", "Figma"],
    team: ["Independent project — sole developer"],
    client: "HackYourFuture Denmark",
    timeline: "August – October 2026",
    introduction: {
      ...caseStudyPlaceholder.introduction,
      blocks: [
        {
          heading: "Client introduction",
          text: "HackYourFuture Denmark is a non-profit organization helping people with international backgrounds learn programming and enter the Danish tech industry. They needed a new website that better represented their organization and supported their content.",
        },
        {
          heading: "The problem",
          text: "HYF was not satisfied with their existing website and needed a new one that was easier to maintain, update, and develop further.",
        },
        {
          heading: "The purpose",
          text: "To develop a responsive, high-performing website that HYF could easily maintain and expand, while making sure the structure was clear and easy for future developers to understand and build upon.",
        },
        {
          heading: "The outcome",
          text: "I developed and delivered a new Webflow website with a flexible design system, reusable components, and easy content management. The website also achieved a performance score of 100 in Webflow's site health check. The website is ready and will go live as soon as possible.",
        },
      ],
    },
    process: {
      steps: [
      {
        title: "Understanding the project",
        parts: [
          {
            heading: "Getting familiar with the project",
            paragraphs: [
              "I started by reviewing HYF's existing website, their needs, and the Figma designs for the new one.",
              "I worked directly with HYF to clarify requirements and discuss details that needed further decisions before or during development.",
            ],
          },
          {
            heading: "Planning the Webflow setup",
            paragraphs: [
              "I reviewed their existing Webflow plan and compared it with the features and functionality needed for the new website.",
              "This helped us understand the available options and plan a setup that could support the website in the future, while keeping the editing experience familiar and easy for HYF to work with.",
            ],
          },
        ],
        rows: [{ height: 64, images: [imageSlot(1, "Figma designs and initial planning")] }],
      },
      {
        title: "Building the website",
        parts: [
          {
            heading: "Development in webflow",
            paragraphs: [
              "I was responsible for developing the website in Webflow, including page layouts, responsive design, interactions, and custom code integrations.",
              "I made sure the website worked across different screen sizes and added details such as hover effects, button interactions, and different message styles.",
            ],
          },
          {
            heading: "Building a flexible design system",
            paragraphs: [
              "I created a reusable component library with different layouts and content blocks, including heroes, headers, CTA buttons, and breadcrumbs with different navigation levels.",
              "Together with shared variables and global classes, this made it easy to build new pages, add content, and keep the design consistent across the website.",
              "I also structured the content blocks and CMS to make it easier for HYF to add and update content themselves.",
              "I wanted HYF to be able to grow their website without having to build everything from scratch, while keeping the editing experience simple and familiar.",
            ],
          },
        ],
        rows: [{ height: 44, images: [imageSlot(1, "Webflow variables and global classes"), imageSlot(1, "Reusable components")] }, { height: 64, images: [imageSlot(1, "Responsive layouts")] }],
      },
      {
        title: "Content management & performance",
        parts: [
          {
            heading: "Forms & content management",
            paragraphs: [
              "I set up different forms in Webflow based on their purpose, making sure submissions were handled correctly and HYF could easily access the responses.",
              "I also created a guide explaining how to find form submissions, manage the forms, and update their settings, so HYF could handle these tasks without needing a developer.",
            ],
          },
          {
            heading: "Performance & site health",
            paragraphs: [
              "I focused on keeping the website lightweight and fast by minifying HTML, CSS, and JavaScript, using Google Fonts efficiently, and avoiding unnecessary resources.",
              "I also implemented SEO settings, including page titles, meta descriptions, and relevant metadata, while checking accessibility and performance through Webflow's site health tools.",
              "The website achieved a performance score of 100.",
            ],
          },
        ],
        rows: [{ height: 44, images: [imageSlot(1, "Forms and the content guide"), imageSlot(1, "Webflow performance score")] }],
      },
      {
        title: "Challenges & collaboration",
        parts: [
          {
            heading: "Making independent decisions",
            paragraphs: [
              "As the only developer, I was responsible for solving technical challenges and making decisions throughout development.",
              "Some parts of the Figma designs needed further clarification, so I worked with HYF to find solutions that matched their needs.",
            ],
          },
          {
            heading: "Client communication & project scope",
            paragraphs: [
              "I managed communication with HYF, including catch-ups, feedback, and testing.",
              "During one catch-up, I presented the website, explained how the design system worked, and walked through what had been developed.",
              "I also explained which features were outside the current scope, including the unfinished mentor and trainee forms and the site search functionality, which needed further research and planning.",
              "This taught me how important it is to clearly communicate progress, limitations, and next steps so everyone has the same expectations.",
            ],
          },
        ],
        rows: [{ height: 64, images: [imageSlot(1, "From the client presentation")] }],
      },
    ],
    },
    outcome: {
      steps: [
      {
        title: "The final result",
        parts: [
          {
            paragraphs: [
              "I delivered a responsive Webflow website with reusable components, shared design variables, CMS functionality, and a performance score of 100.",
              "The website is ready and will go live as soon as possible.",
            ],
          },
        ],
        rows: [{ height: 64, images: [imageSlot(1, "Front page")] }, { height: 64, images: [imageSlot(1, "Subpage")] }, { height: 64, images: [imageSlot(1, "Mobile views")] }],
      },
      {
        title: "The impact",
        parts: [
          {
            paragraphs: [
              "HYF received a website designed to be easy to maintain and expand. The shared design system and structured content make it easier to update pages and add new content without rebuilding existing elements.",
            ],
          },
        ],
        rows: [{ height: 64, images: [imageSlot(1, "Content blocks in the Webflow editor")] }, { height: 64, images: [imageSlot(1, "CMS collections")] }],
      },
      {
        title: "The details I'm most proud of",
        parts: [
          {
            paragraphs: [
              "I'm proud of taking responsibility for the website from development to handover, including the technical setup, design decisions, and client communication.",
              "I'm especially proud of the performance result and how I structured the website to make future changes easier for HYF.",
            ],
          },
        ],
        rows: [{ height: 64, images: [imageSlot(1, "Site health check: performance score of 100")] }, { height: 64, images: [imageSlot(1, "Design system: variables, classes and components")] }],
      },
    ],
    },
    reflections: {
      ...caseStudyPlaceholder.reflections,
      blocks: [
        {
          heading: "What I learned",
          text: [
            "I became more confident working independently, making technical decisions, and communicating directly with a client.",
            "I also learned how much planning goes into building a website that is not only responsive and visually consistent, but also easy to maintain and expand.",
          ],
        },
        {
          heading: "What I would do differently",
          text: "I would clarify the project scope and feedback process earlier, especially for features that need additional research or design work.",
        },
        {
          heading: "Next steps",
          text: "Complete the handover, collect feedback from HYF, and evaluate the remaining features, including the mentor and trainee forms and site search.",
        },
      ],
    },
  },
  {
    slug: "stuganibacken-martemeo",
    kind: "Web development",
    title: "Stuganibacken martemeo",
    tags: ["UX/UI Design", "React", "Vite"],
    // Shown on the card until the project is done
    badge: "In progress",
    ...caseStudyPlaceholder,
    headline: "Creating a digital presence for a new independent professional.",
    summary:
      "A website project focused on presenting Stuganibacken Martemeo's expertise, services, and educational materials in a clear and approachable way.",
    primaryRole: "Web Developer & UX/UI Designer",
    tools: ["To be decided"],
    team: ["Independent project"],
    client: "Stuganibacken Martemeo",
    timeline: "In progress",
    introduction: {
      ...caseStudyPlaceholder.introduction,
      blocks: [
        {
          heading: "Client introduction",
          text: "Stuganibacken Martemeo is a newly established independent business looking to build its online presence. The website will help introduce the person behind the business, communicate her expertise, and make her services and educational materials accessible to potential clients.",
        },
        {
          heading: "The problem",
          text: [
            "As a new business, Stuganibacken Martemeo does not yet have a website that brings together information about her work, qualifications, services, and educational resources.",
            "She needs a place where potential clients can understand what she offers, learn about her professional background, and find the information they need.",
          ],
        },
        {
          heading: "The purpose",
          text: [
            "To create a professional and welcoming website that clearly communicates her expertise and services while making it easy for visitors to navigate educational materials, explore paid services, and find answers to frequently asked questions.",
            "The website should also help establish her identity as an independent professional and build trust with potential clients.",
          ],
        },
        {
          heading: "The outcome",
          text: [
            "The goal is to deliver a website that presents her professional identity, showcases her expertise, and brings her services and educational resources together in one place.",
            "The website will be designed to make information easy to find and support the business as it grows.",
          ],
        },
      ],
    },
    process: {
      steps: [
      {
        title: "Understanding the business",
        parts: [
          {
            heading: "Defining her professional identity",
            paragraphs: [
              "The first step is understanding how she wants to present herself, her expertise, and her work as an independent professional.",
              "This includes identifying her target audience, what visitors need to know, and how the website should communicate her skills and experience.",
            ],
          },
        ],
        rows: [{ height: 64, images: [imageSlot(1, "Image description")] }],
      },
      {
        title: "Planning the website",
        parts: [
          {
            heading: "Content structure & navigation",
            paragraphs: [
              "An important part of the project will be organizing different types of content, including educational materials, paid services, professional information, and frequently asked questions.",
              "The goal is to create a structure that feels natural to navigate and makes it easy for visitors to find what they are looking for.",
            ],
          },
        ],
        rows: [{ height: 64, images: [imageSlot(1, "Image description")] }],
      },
      {
        title: "Designing & developing the website",
        parts: [
          {
            heading: "Creating the digital experience",
            paragraphs: [
              "The website will be designed and developed around her professional identity and the needs of her visitors.",
              "The focus will be on clear communication, accessible content, responsive layouts, and a structure that can grow alongside the business.",
            ],
          },
        ],
        rows: [{ height: 64, images: [imageSlot(1, "Image description")] }],
      },
    ],
    },
    outcome: {
      steps: [
      {
        title: "The final result",
        parts: [
          {
            paragraphs: [
              "In progress — the website has not yet been developed.",
            ],
          },
        ],
        rows: [],
      },
      {
        title: "The impact",
        parts: [
          {
            paragraphs: [
              "The intended impact is to give Stuganibacken Martemeo a professional online presence where potential clients can explore her expertise, services, and educational resources.",
            ],
          },
        ],
        rows: [],
      },
      {
        title: "The details I'm most proud of",
        parts: [
          {
            paragraphs: [
              "To be added as the project develops.",
            ],
          },
        ],
        rows: [],
      },
    ],
    },
    reflections: {
      ...caseStudyPlaceholder.reflections,
      blocks: [
        { heading: "What I learned", text: "To be added." },
        { heading: "What I would do differently", text: "To be added." },
        {
          heading: "Next steps",
          text: "Define the website's content, structure, and visual direction before moving into design and development.",
        },
      ],
    },
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
// `wideTags: true` gives many tags more room; `wideText: true` gives a long text more room.
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
    tab: "AI",
    featured: true,
    wideText: true,
    heading: "AI-assisted\ndevelopment",
    intro:
      "I use AI in my everyday development work to solve problems, learn new technologies, and work more efficiently.",
    detail: [
      "I have experience with Claude Code, LLMs, MCP integrations, and creating custom commands and guardrails to improve my workflows.",
      "I have also experimented with different AI models, learning about their strengths and which tasks they are best suited for. Using Ollama, I have run AI models locally on my computer and built small projects to explore how they work in practice.",
      "I also have an understanding of prompt engineering, including the three T's: Task, Tone, and Target Audience. I use these principles to write clearer prompts and guide AI towards more relevant results.",
      "I use AI for debugging, code reviews, and exploring solutions, while always reviewing and understanding the output.",
    ],
    tags: [
      "Claude Code",
      "LLMs & AI Models",
      "Ollama (Local AI)",
      "MCP Integrations",
      "Custom Commands & Guardrails",
      "Prompt Engineering (Task, Tone & Target Audience)",
      "AI-Assisted Debugging",
      "AI Code Reviews",
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
    // Drawing comes first, as it's my biggest interest
    intro:
      "Drawing has always been one of my biggest interests. I work with both traditional and digital art, and I enjoy exploring different styles, techniques, and ways of creating. I find inspiration in everything from animation and illustration to the small details of everyday life.",
    // Several paragraphs, shown one after the other
    detail: [
      "I also collect art books and Pokémon cards, partly because I enjoy the artwork and the different styles behind them. I share some of my own drawings on Instagram, where I occasionally post sketches and personal projects.",
      "Outside of art, I enjoy cooking, trying new restaurants, and discovering new places. I also appreciate a good film or series, especially when the weather calls for staying indoors.",
    ],
    slideshow: [
      { src: "/images/drawings/drawing-cat.jpg", alt: "Pencil drawing of a sitting cat" },
      { src: "/images/drawings/drawing-house.jpg", alt: "Detailed pencil drawing of a timber-framed house" },
      { src: "/images/drawings/drawing-portrait.jpg", alt: "Digital sketch portrait of a woman with her hair blowing" },
    ],
    link: { href: "https://www.instagram.com/sofieevoi/", label: "See my drawings on Instagram ↗" },
    // Title above the tags (the skill tabs use "Specific skills")
    tagsHeading: "Personality & interests",
    tags: [
      "Traditional & digital art",
      "Drawing & illustration",
      "Design & creative projects",
      "Art books & collecting",
      "Food & cooking",
      "Travel & exploring",
    ],
    // More tag groups below the first, each with its own title
    moreTags: [
      {
        heading: "Current favorite movies & series",
        tags: [
          "Harry Potter",
          "Game of Thrones (seasons 1–6)",
          "Star Wars (especially the prequels)",
          "Spider-Verse (still waiting for the third movie)",
          "Marvel (especially Spider-Man & Iron Man)",
          "Arcane",
          "Blue Eye Samurai",
          "Puss in Boots: The Last Wish (love the animation style)",
          "Rick and Morty",
          "The Dark Knight Trilogy",
          "Crime documentaries",
          // A faded tag: a guilty pleasure, shown at half opacity
          { label: "Twilight (a rainy-day guilty pleasure)", faded: true },
        ],
      },
    ],
    galleries: [
      {
        heading: "Photo library",
        text: "When I’m not drawing or developing, I enjoy spending time outdoors, whether it’s going for long walks, exploring somewhere new, or spending time with family and friends. I like collecting little things from nature, taking photos when I travel, and finding inspiration in the places I visit.",
        photos: [
          { src: "/images/hobbies/skiing.jpg", alt: "Sofie lying in deep snow in her ski gear", caption: "Going off-piste (not always intentionally)", focus: "center 15%" },
          { src: "/images/personal/sweden-hike.jpg", alt: "Hiking on mossy rocks in a Swedish forest", caption: "Hiking through the Swedish forests" },
          { src: "/images/hobbies/dog-walk.jpg", alt: "A small white terrier running along a mossy forest path", caption: "Long walks are better with four-legged company", focus: "center 100%" },
          { src: "/images/hobbies/cafe-beer.jpg", alt: "Sofie and a friend sitting outside at a café with a beer", caption: "Love sitting outside, enjoying a drink and good company" },
          { src: "/images/hobbies/flowers-field.jpg", alt: "A small bouquet of wildflowers held over the grass", caption: "Wildflowers collected along the way", focus: "center 66%" },
          { src: "/images/hobbies/mushrooms.jpg", alt: "Freshly picked chanterelles laid out to dry on paper towels", caption: "Finding chanterelles in the forest" },
          { src: "/images/personal/japan-goldfish.jpg", alt: "A street in Japan lined with tanks full of goldfish", caption: "Goldfish tanks in Japan" },
          { src: "/images/personal/japan-beach.jpg", alt: "Waves rolling onto a dark sand beach in Japan", caption: "A black sand beach in Japan" },
          { src: "/images/personal/samos-horses.jpg", alt: "Two saddled horses resting by a brick wall on Samos", caption: "Horses on Samos, Greece" },
          { src: "/images/personal/lemur.jpg", alt: "Sofie smiling next to a lemur", caption: "A new friend" },
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
