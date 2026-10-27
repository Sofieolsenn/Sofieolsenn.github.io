import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import OtherProjects from "@/components/sections/OtherProjects";
import Contact from "@/components/sections/Contact";
import { site, skillGroups } from "@/data/content";

// Structured data helps search engines and AI assistants understand who you are.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Frontend developer",
  description: site.description,
  knowsAbout: skillGroups.flatMap((group) => group.skills.flatMap((skill) => skill.tags || [])),
  sameAs: [site.linkedin, site.github].filter(Boolean),
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
