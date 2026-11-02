import Image from "next/image";
import Button from "@/components/ui/Button";
import ProjectLink from "@/components/project/ProjectLink";
import { withBasePath } from "@/lib/paths";
import styles from "./ProjectTemplate.module.css";

// Reusable case study layout, inspired by the "Slide 16:9 - 16" frame in Figma
// and the reference case studies: a big cover, the headline with a summary and
// the facts, wide image rows, then Intro, Process, Outcome and Reflections, and
// buttons to go back to the top or to another project.
export default function ProjectTemplate({ project, previousProject, nextProject }) {
  const { headline, title, summary, cover, primaryRole, tags = [], tools, team = [], timeline, client } = project;

  // Facts in a box next to the Intro texts: each label with an icon and its values under it,
  // one per line. Tools are shown as small tags with an icon each.
  const hasValue = (fact) => (Array.isArray(fact.value) ? fact.value.length > 0 : fact.value);
  const facts = [
    { label: "Role", icon: "role", value: primaryRole },
    { label: "Tools", icon: "tools", value: tools || tags, asTags: true },
    { label: "Team", icon: "team", value: team },
    { label: "Timeline", icon: "timeline", value: timeline },
    { label: "Client", icon: "client", value: client },
  ].filter(hasValue);

  // A project that hasn't started yet: only its title and a short message
  if (project.comingSoon) {
    return (
      <article className={`container ${styles.project}`} id="top">
        <BackLink />
        <div className={styles.comingSoon}>
          <p className={styles.comingSoonLabel}>Coming soon</p>
          <h1 className={styles.headline}>{title}</h1>
          <p className={styles.summary}>
            This case study is on its way. The project is just getting started, so check back soon to follow the process.
          </p>
        </div>
        <Pager previousProject={previousProject} nextProject={nextProject} />
      </article>
    );
  }

  return (
    <article className={`container ${styles.project}`} id="top">
      <BackLink />
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

      {/* "View site" button fixed in the corner (or a "not published yet" dialog) */}
      <ProjectLink url={project.link} label={project.linkLabel} />

      <ImageRows rows={project.gallery} />

      {/* The facts box sits on the left, next to the Intro texts */}
      {/* No heading here: the facts box and the texts start right after the line */}
      <Section
        headingAbove
        content={project.introduction}
        aside={
          facts.length > 0 && (
            <dl className={styles.facts}>
              {facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>
                    <LineIcon name={fact.icon} />
                    {fact.label}
                  </dt>
                  {fact.asTags ? (
                    <dd>
                      <ul className={styles.factTags}>
                        {[].concat(fact.value).map((value) => (
                          <li key={value} className={styles.factTag}>
                            <LineIcon name={toolIcon(value)} size={14} />
                            {value}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  ) : (
                    [].concat(fact.value).map((value) => <dd key={value}>{value}</dd>)
                  )}
                </div>
              ))}
            </dl>
          )
        }
      />
      <Section heading="The process" content={project.process} wide />
      <Section heading="The outcome" content={project.outcome} wide />
      {/* Reflections are hidden for now. The texts are still in data/content.js;
          put this line back to show them again:
          <Section heading="Reflections" content={project.reflections} /> */}

      <Pager previousProject={previousProject} nextProject={nextProject} />
    </article>
  );
}

// "Back to projects" link above the cover, to the project list on the front page
function BackLink() {
  return (
    <a href={`${withBasePath("/")}#projects`} className={styles.backLink}>
      <ArrowIcon direction="left" />
      Back to projects
    </a>
  );
}

// Previous project, back to top and next project
function Pager({ previousProject, nextProject }) {
  return (
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
  );
}

// A case study part: heading on the left and text on the right, short blocks
// side by side below, then wide image rows
// `aside` is extra content under the heading, in the left column
// `wide` gives the text a wider column, for sections with long texts
// `headingAbove` puts the heading on its own line above the two columns (leave out `heading` for none)
function Section({ heading, content, aside, wide = false, headingAbove = false }) {
  if (!content) return null;
  if (content.steps) return <StepSection heading={heading} steps={content.steps} wide={wide} />;
  const { blocks = [], paragraphs = [], rows = [], stackBlocks = false } = content;

  const blockList = blocks.map((block) => (
    <div key={block.heading} className={styles.block}>
      <h3>{block.heading}</h3>
      {[].concat(block.text).map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  ));

  return (
    <section className={styles.section}>
      {headingAbove && heading && <h2 className={`${styles.sectionHeading} ${styles.stepsHeading}`}>{heading}</h2>}
      {/* With an aside (the facts box) the two columns are centred vertically against each other */}
      <div
        className={`${styles.sectionText} ${wide ? styles.sectionTextWide : ""} ${aside ? styles.sectionTextCentered : ""}`}
      >
        <div>
          {!headingAbove && <h2 className={styles.sectionHeading}>{heading}</h2>}
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

// A section split into steps, e.g. Process and Outcome. The section heading
// sits on its own line above the steps. Each step has its title on the left, short headed parts on the right, and its
// own image rows under it, so long texts are broken up by images.
function StepSection({ heading, steps, wide }) {
  return (
    <section className={styles.section}>
      <h2 className={`${styles.sectionHeading} ${styles.stepsHeading}`}>{heading}</h2>
      {steps.map((step) => (
        <div key={step.title} className={styles.step}>
          <div className={`${styles.sectionText} ${wide ? styles.sectionTextWide : ""}`}>
            <div>
              <p className={styles.stepLabel}>{step.title}</p>
            </div>
            <div className={styles.sectionBody}>
              {(step.parts || []).map((part) => (
                <div key={part.heading || part.paragraphs[0]} className={styles.stepPart}>
                  {part.heading && <h3>{part.heading}</h3>}
                  {part.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <ImageRows rows={step.rows} />
        </div>
      ))}
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

// Line icons for the facts box and the tool tags (24x24, drawn with the current text colour)
const LINE_ICONS = {
  role: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20.5c.9-4 3.8-6 7.5-6s6.6 2 7.5 6" />,
  tools: <path d="M14.7 6.3a4 4 0 0 0 5 5L21 10a5.5 5.5 0 0 1-7.4 5.2L7 21.8a2.1 2.1 0 0 1-3-3l6.6-6.6A5.5 5.5 0 0 1 14 3z" />,
  team: (
    <path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5M16 4.3a3.5 3.5 0 0 1 0 6.4M18 14.6c1.9.7 3.1 2.4 3.5 5.4" />
  ),
  timeline: <path d="M4 6.5h16v13.5H4zM4 10.5h16M8.5 3.5v5M15.5 3.5v5" />,
  client: <path d="M4 21V5.5L12 3l8 2.5V21M4 21h16M9 9h.01M15 9h.01M9 13h.01M15 13h.01M10 21v-4h4v4" />,
  cms: <path d="M4 4h16v16H4zM4 9h16M9 9v11" />,
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />,
  style: <path d="M3 9h11a3 3 0 1 0-3-3M3 15h15a3 3 0 1 1-3 3M3 12h7" />,
  branch: <path d="M6 3v12M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9" />,
  spark: <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />,
};

// Picks an icon for a tool by its name; unknown tools get a code icon
function toolIcon(name) {
  const tool = name.toLowerCase();
  if (tool.includes("umbraco") || tool.includes("webflow") || tool.includes("cms")) return "cms";
  if (tool.includes("tailwind") || tool.includes("css") || tool.includes("figma")) return "style";
  if (tool.includes("git")) return "branch";
  if (tool.includes("claude") || tool.includes("ai") || tool.includes("mcp")) return "spark";
  return "code";
}

function LineIcon({ name, size = 16 }) {
  if (!LINE_ICONS[name]) return null;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {LINE_ICONS[name]}
    </svg>
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
