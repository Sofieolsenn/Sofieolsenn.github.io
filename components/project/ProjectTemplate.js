import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import { withBasePath } from "@/lib/paths";
import styles from "./ProjectTemplate.module.css";

// Reusable case study layout, inspired by classic portfolio case studies:
// a big headline and cover image, an overview of facts, then Introduction,
// Process and Outcome, and a link to the next project.
export default function ProjectTemplate({ project, nextProject }) {
  const { title, kind, headline, summary, cover, client, role, timeline, team = [], tags = [] } = project;

  const facts = [
    { label: "Client", value: client },
    { label: "My role", value: role },
    { label: "Timeline", value: timeline },
    { label: "Team", value: team.length > 0 && team.join("\n") },
  ].filter((fact) => fact.value);

  return (
    <article className={`container ${styles.project}`}>
      <Link className={styles.back} href="/#projects">
        ← All projects
      </Link>

      <header className={styles.hero}>
        <p className={styles.eyebrow}>
          {title}
          {kind && <span> · {kind}</span>}
        </p>
        <h1 className={styles.headline}>{headline || title}</h1>
        {summary && <p className={styles.summary}>{summary}</p>}
      </header>

      <div className={styles.cover}>
        {cover && <Image src={withBasePath(cover.src)} alt={cover.alt} fill sizes="(max-width: 900px) 100vw, 950px" priority />}
      </div>

      <dl className={styles.facts}>
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
        {tags.length > 0 && (
          <div className={styles.tools}>
            <dt>Tools</dt>
            <dd>
              <ul className={styles.tags}>
                {tags.map((tag) => (
                  <li key={tag}>
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>

      <Section heading="Introduction" content={project.introduction} />
      <Section heading="Process" content={project.process} />
      <Section heading="Outcome" content={project.outcome} />

      {nextProject && (
        <Link className={styles.next} href={`/projects/${nextProject.slug}/`}>
          <span className={styles.nextLabel}>Next project</span>
          <span className={styles.nextTitle}>{nextProject.title} →</span>
        </Link>
      )}
    </article>
  );
}

// One case study section: heading on the left, text, steps and images on the right
function Section({ heading, content }) {
  if (!content) return null;
  const { paragraphs = [], steps = [], images = [], imageColumns = 1 } = content;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionHeading}>{heading}</h2>
      <div className={styles.sectionBody}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {steps.length > 0 && (
          <ol className={styles.steps}>
            {steps.map((step, index) => (
              <li key={index}>
                <h3>{step.heading}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        )}
      </div>

      {/* Images without a `src` show as grey placeholder boxes */}
      {images.length > 0 && (
        <div className={`${styles.images} ${imageColumns === 2 ? styles.twoColumns : ""}`}>
          {images.map((image, index) => (
            <figure key={index}>
              <div className={styles.image}>
                {image.src && (
                  <Image
                    src={withBasePath(image.src)}
                    alt={image.alt}
                    fill
                    sizes={imageColumns === 2 ? "(max-width: 900px) 100vw, 475px" : "(max-width: 900px) 100vw, 950px"}
                  />
                )}
              </div>
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
