import ProjectCard from "@/components/cards/ProjectCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data/content";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={`container section ${styles.projects}`} id="projects" aria-labelledby="projects-label">
      <SectionLabel id="projects-label">Latest projects</SectionLabel>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
