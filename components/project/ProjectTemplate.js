import Image from "next/image";
import Button from "@/components/ui/Button";
import { withBasePath } from "@/lib/paths";
import styles from "./ProjectTemplate.module.css";

// Reusable case study layout, inspired by the "Slide 16:9 - 16" frame in Figma
// and the reference case studies: a big cover, the headline with a summary and
// the facts, wide image rows, then Intro, Process, Outcome and Reflections, and
// buttons to go back to the top or to another project.
export default function ProjectTemplate({ project, previousProject, nextProject }) {
  const { headline, title, summary, cover, primaryRole, tags = [], team = [], timeline, client } = project;

  // Facts in columns; facts in the same column are stacked
  const hasValue = (fact) => (Array.isArray(fact.value) ? fact.value.length > 0 : fact.value);
  const factColumns = [
    [
      { label: "Role", value: primaryRole },
    ],
    [{ label: "Tools", value: tags }],
    [{ label: "Team", value: team }],
    [
      { label: "Client", value: client },
      { label: "Timeline", value: timeline },
    ],
  ]
    .map((column) => column.filter(hasValue))
    .filter((column) => column.length > 0);

  return (
    <article className={`container ${styles.project}`} id="top">
      <figure className={styles.coverFigure}>
        <div className={styles.cover}>
          {cover?.src && (
            <Image src={withBasePath(cover.src)} alt={cover.alt} fill sizes="(max-width: 900px) 100vw, 1200px" priority />
          )}
        </div>
        {cover?.caption && <figcaption className={styles.caption}>{cover.caption}</figcaption>}
      </figure>

      <h1 className={styles.headline}>{headline || title}</h1>

      <div className={styles.overview}>{summary && <p className={styles.summary}>{summary}</p>}</div>

      <ImageRows rows={project.gallery} />

      {/* The project facts sit under the Intro heading */}
      <Section
        heading="Intro"
        content={project.introduction}
        aside={
          <dl className={styles.facts}>
            {factColumns.map((column) => (
              <div key={column[0].label} className={styles.factColumn}>
                {column.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    {[].concat(fact.value).map((value, index) => (
                      <dd key={index}>{value}</dd>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </dl>
        }
      />
      <Section heading="Process" content={project.process} />
      <Section heading="Outcome" content={project.outcome} />
      <Section heading="Reflections" content={project.reflections} />

      <nav className={styles.pager} aria-label="Projects">
        {previousProject && (
          <Button href={withBasePath(`/projects/${previousProject.slug}/`)} variant="outline" className={styles.previous}>
            <ArrowIcon direction="left" />
            <span>
              Previous<span className={styles.longLabel}> project</span>
            </span>
          </Button>
        )}
        <Button href="#top" variant="outline" className={styles.toTop}>
          <ArrowIcon direction="up" />
          Back to top
        </Button>
        {nextProject && (
          <Button href={withBasePath(`/projects/${nextProject.slug}/`)} className={styles.next}>
            <span>
              Next<span className={styles.longLabel}> project</span>
            </span>
            <ArrowIcon direction="right" />
          </Button>
        )}
      </nav>
    </article>
  );
}

// A case study part: heading on the left and text on the right, short blocks
// side by side below, then wide image rows
// `aside` is extra content under the heading, in the left column
function Section({ heading, content, aside }) {
  if (!content) return null;
  const { blocks = [], paragraphs = [], rows = [], stackBlocks = false } = content;

  const blockList = blocks.map((block) => (
    <div key={block.heading} className={styles.block}>
      <h3>{block.heading}</h3>
      <p>{block.text}</p>
    </div>
  ));

  return (
    <section className={styles.section}>
      <div className={styles.sectionText}>
        <div>
          <h2 className={styles.sectionHeading}>{heading}</h2>
          {aside}
        </div>
        <div className={styles.sectionBody}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {/* `stackBlocks` puts the blocks under each other next to the heading */}
          {stackBlocks && <div className={styles.stackedBlocks}>{blockList}</div>}
        </div>
      </div>

      {!stackBlocks && blocks.length > 0 && <div className={styles.blocks}>{blockList}</div>}

      <ImageRows rows={rows} />
    </section>
  );
}

// Rows of images. Each image's `size` sets its share of the row width, and the
// row `height` is a percentage of the width. Empty `src` shows a grey box.
function ImageRows({ rows = [] }) {
  if (rows.length === 0) return null;

  return (
    <div className={styles.rows}>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={styles.row}
          style={{
            gridTemplateColumns: row.images.map((image) => `${image.size || 1}fr`).join(" "),
            "--row-height": row.height || 32,
          }}
        >
          {row.images.map((image, index) => (
            <figure key={index}>
              <div className={styles.image}>
                {image.src && (
                  <Image src={withBasePath(image.src)} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 1200px" />
                )}
              </div>
              {image.caption && <figcaption className={styles.caption}>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}

// Arrow icons for the buttons, drawn with the current text colour
const ARROWS = {
  up: "M12 19V5M5 12l7-7 7 7",
  left: "M19 12H5M12 19l-7-7 7-7",
  right: "M5 12h14M12 5l7 7-7 7",
};

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ARROWS[direction]} />
    </svg>
  );
}
